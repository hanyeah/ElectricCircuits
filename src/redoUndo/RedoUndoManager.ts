/**
 * Created by hanyeah on 2019/9/19.
 */
namespace hanyeah.elec{
  export class RedoUndoManager{
    private undoStack: RedoUndo[] = [];
    private redoStack: RedoUndo[] = [];
    private maxStep: number = 20;
    constructor(maxStep: number){
      this.maxStep = maxStep;
    }

    public addUndo(command: RedoUndo) {
      this.undoStack.push(command);
      if(this.undoStack.length > this.maxStep) {
        this.undoStack.shift();
      }
    }

    public undo() {
      if(this.undoStack.length) {
        const command: RedoUndo = this.undoStack.pop();
        command.undo();
        this.redoStack.push(command);
      }
    }

    public redo() {
      if(this.redoStack.length) {
        const command: RedoUndo = this.redoStack.pop();
        command.redo();
        this.undoStack.push(command);
      }
    }

    public canUndo(): boolean {
      return this.undoStack.length > 0;
    }

    public canRedo(): boolean {
      return this.redoStack.length > 0;
    }

    public get currentUndoStep(): number{
      return this.undoStack.length;
    }

    public get currentRedoStep(): number {
      return this.redoStack.length;
    }

  }

}