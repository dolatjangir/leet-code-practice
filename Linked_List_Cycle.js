class ListNode{
    constructor(val){
        this.val = val;
        this.next = null;

    }
}


let head = new ListNode(1);
let node2 = new ListNode(2);
head.next = node2;
node2.next = head;

const linkedlistcycle = function(head){
    if (head === null){
        return false;
    }
    let slow = head;
    let fast = head;
    while(fast !== null && fast.next !== null){
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast){
            return true
        }
    }
    return false;
}

console.log(linkedlistcycle(head))
