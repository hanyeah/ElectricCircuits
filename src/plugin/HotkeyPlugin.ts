/**
 * Created by hanyeah on 2019/9/20.
 */
namespace hanyeah.elec {
  import KeyCode = hanyeah.elec.KeyCode;
  export class HotkeyPlugin extends PluginBase {
    private hotkeys: object = {};

    constructor(main: ElecMain) {
      super(main);
    }

    public destroy() {
      for (let hotkey in this.hotkeys) {
        if (this.hotkeys.hasOwnProperty(hotkey)) {
          (this.hotkeys[hotkey] as HotKeyItem).destroy();
        }
      }
      this.hotkeys = null;
      super.destroy();
    }

    public registerHotKey(hotkey: string, command: Function, context?: any) {
      if (!this.hotkeys[hotkey]) {
        this.hotkeys[hotkey] = new HotKeyItem(hotkey, command, context);
      }
    }

    public unRegisterHotKey(hotkey: string) {
      const item: HotKeyItem = this.hotkeys[hotkey] as HotKeyItem;
      if (item) {
        item.destroy();
        delete this.hotkeys[hotkey];
      }
    }

    /**
     * 键盘按下事件
     * @param e
     */
    public onKeyDown(e: KeyboardEvent, keyMap: any) {
      this.calculate(e.keyCode, keyMap);
    }

    /**
     * 键盘弹起事件
     * @param e
     */
    public onKeyUp(e: KeyboardEvent, keyMap: any) {

    }

    private calculate(keyCode: number, keyMap: any) {
      for (let hotkey in this.hotkeys) {
        if (this.hotkeys.hasOwnProperty(hotkey)) {
          const item: HotKeyItem = this.hotkeys[hotkey] as HotKeyItem;
          if (item.match(keyCode, keyMap)) {
            item.execute();
            break;
          }
        }
      }
    }

  }

  class HotKeyItem {
    public hotkey: string;
    public command: Function;
    public context: any;
    public keyArr: string[];

    constructor(hotkey: string, command: Function, context?: any) {
      this.hotkey = hotkey;
      this.command = command;
      this.context = context;
      this.keyArr = [];
      const a: string[] = hotkey.split("+");
      a.forEach((s: string) => {
        if (s && s !== "") {
          this.keyArr.push(s.toLowerCase());
        }
      });
    }

    public destroy() {
      this.hotkey = null;
      this.command = null;
      this.context = null;
      this.keyArr = null;
    }

    public match(keyCode: number, keyMap: any): boolean {
      let hasKeyCode: boolean = false;
      let hasHotKey: boolean = true;
      for (let i: number = 0; i < this.keyArr.length; i++) {
        const s: string = this.keyArr[i];
        const code: number = KeyCode[s];
        if (!keyMap[code]) {
          hasHotKey = false;
          break;
        }
        if (keyCode === code) {
          hasKeyCode = true;
        }
      }
      return hasKeyCode && hasHotKey;
    }

    public execute() {
      this.command.call(this.context);
    }

  }
}
