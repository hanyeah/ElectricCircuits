/**
 * Created by hanyeah on 2019/8/30.
 */
namespace hanyeah.dataStruct{
  export class ListNode{
    public next: ListNode;
    public prev: ListNode;
    public userData: object;
    constructor(userData) {
      this.next = this;
      this.prev = this;
      this.userData = userData;
    }

    public destroy() {
      this.next = null;
      this.prev = null;
      this.userData = null;
    }

    connect(node: ListNode): void{
      const next1: ListNode = this.next;
      const next2: ListNode = node.next;
      this.next = next2;
      next2.prev = this;
      node.next = next1;
      next1.prev = node;
    }

    disConnect(): void {
      this.prev.next = this.next;
      this.next.prev = this.prev;
      this.next = this;
      this.prev = this;
    }

  }
}
