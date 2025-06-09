/**
 * @param {ListNode} head
 * @return {ListNode}
 */
class ListNode{
constructor(val){
    this.val = val;
    this.next = null;
}
}


const head = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);

head.next = node2;
node2.next = node3;
node3.next = node4; 
var deleteMiddle = function(head) {
    if(head == null || head.next == null){
        return head;
    }
    let slow = head;
    let fast = head;
    let prev = null;
    while(fast !==null && fast.next !== null ){
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    prev.next = slow.next;
console.log(slow.next.val)
    return head;
};

console.log(deleteMiddle(head))