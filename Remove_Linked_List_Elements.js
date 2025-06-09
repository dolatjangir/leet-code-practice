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
const node5 = new ListNode(3);

head.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

function removellElements(head,val){
    if(head == null || head.next == null){
        return head;
    }
    let prev = null;
    while(head !== null && head.next !== null){
       
        if(head.val === val){
            prev.next = head.next;
        }else{
            head = head.next;
        }
        prev = head;

    }
    return head;

}
console.log(removellElements(head,3))