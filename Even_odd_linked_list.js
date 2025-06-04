class ListNode{
    constructor(data){
            this.data = data;
            this.next = null; 
    }
}

const head = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);

head.next = node2;
node2.next = node3;
node3.next = null;
function EvenOdd(head){
    if(head == null || head.next == null){
        return null;
    }
   
    let odd = head;
    let even = head.next;
    let evenhead = head.next;
    while(odd.next !== null && even.next !== null){
        odd.next = even.next;
        odd = odd.next;
        even.next = odd.next;
        even = even.next;
    }
    odd.next = evenhead;
    return head;

}
console.log(EvenOdd(head));