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

function middleofll(head){
    if(head == null && head.next == null){
        return head;
    }
  let  slow = head;
    let fast = head;
    while(fast !== null && fast.next !== null){
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}
const middle = middleofll(head)
console.log(middle.val)