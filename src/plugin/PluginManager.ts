/**
 * Created by hanyeah on 2019/9/20.
 */
namespace hanyeah.elec{
  import Point = PIXI.Point;
  import InteractionEvent = PIXI.interaction.InteractionEvent;
  export class PluginManager{
    private main: ElecMain;
    private plugins: PluginBase[] = [];
    private keyMap: any = {};
    constructor(main: ElecMain) {
      this.main = main;
      this.main.stage.addListener("pointerdown", this.mouseDownHandler, this);
      this.main.stage.addListener("pointermove", this.mouseMoveHandler, this);
      this.main.stage.addListener("pointerup", this.mouseUpHandler, this);
      this.main.stage.addListener("pointerupoutside", this.mouseUpHandler, this);
      this.main.stage.addListener("pointertap", this.clickHandler, this);
      this.main.canvas.addEventListener("mousewheel", this.mouseWheelHandler);
      this.main.canvas.addEventListener("keydown", this.keyDownHandler);
      this.main.canvas.addEventListener("keyup", this.keyUpHandler);
    }

    public destroy() {
      this.main.stage.removeListener("pointerdown", this.mouseDownHandler, this);
      this.main.stage.removeListener("pointermove", this.mouseMoveHandler, this);
      this.main.stage.removeListener("pointerup", this.mouseUpHandler, this);
      this.main.stage.removeListener("pointerupoutside", this.mouseUpHandler, this);
      this.main.stage.removeListener("pointertap", this.clickHandler, this);
      this.main.canvas.removeEventListener("mousewheel", this.mouseWheelHandler);
      this.main.canvas.removeEventListener("keydown", this.keyDownHandler);
      this.main.canvas.removeEventListener("keyup", this.keyUpHandler);
      for (let i: number = 0; i < this.plugins.length; i++) {
        this.plugins[i].destroy();
      }
      this.plugins = null;
      this.main = null;
    }

    public registerPlugin(plugin: PluginBase){
      this.plugins.push(plugin);
    }

    public unRegisterPlugin(plugin: PluginBase, destroy: boolean = true) {
      const ind: number = this.plugins.indexOf(plugin);
      if (ind) {
        if (destroy) {
          this.plugins[ind].destroy();
        }
        this.plugins.splice(ind, 1);
      }
    }

    private mouseDownHandler(e: InteractionEvent) {
      this.plugins.forEach((plugin: PluginBase) => {
        plugin.mouseP = e.data.global.clone();
        if (e.data.button === 0) {
          plugin.onMouseDown(e);
        } else if (e.data.button === 2) {
          plugin.onRightDown(e);
        }
      });
    }

    private mouseMoveHandler(e: InteractionEvent) {
      this.plugins.forEach((plugin: PluginBase) => {
        plugin.mouseP = e.data.global.clone();
        plugin.onMouseMove(e);
      });
    }

    private mouseUpHandler(e: InteractionEvent) {
      this.plugins.forEach((plugin: PluginBase) => {
        if (e.data.button === 0) {
          plugin.onMouseUp(e);
        } else if (e.data.button === 2) {
          plugin.onRightUp(e);
        }
      });
    }

    private clickHandler(e: InteractionEvent) {
      this.plugins.forEach((plugin: PluginBase) => {
        if (e.data.button === 0) {
          plugin.onClick(e);
        } else if (e.data.button === 2) {
          plugin.onRightClick(e);
        }
      });
    }

    private mouseWheelHandler = (e: MouseWheelEvent) => {
      this.plugins.forEach((plugin: PluginBase) => {
        plugin.onMouseWheel(e);
      });
    };

    private keyDownHandler = (e: KeyboardEvent) => {
      this.keyMap[e.keyCode] = true;
      this.plugins.forEach((plugin: PluginBase) => {
        plugin.onKeyDown(e, this.keyMap);
      });
    };

    private keyUpHandler = (e: KeyboardEvent) => {
      this.keyMap[e.keyCode] = false;
      this.plugins.forEach((plugin: PluginBase) => {
        plugin.onKeyUp(e, this.keyMap);
      });
    };

  }
}
