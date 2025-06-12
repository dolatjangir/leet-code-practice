class ListNode{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

head = new ListNode(1);
node2 = new ListNode(2);
node3 = new ListNode(3);
node4 = new ListNode(4);
node5 = new ListNode(5);

head.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

function deleteNode(node){
    node.val = node.next.val;
    node.next = node.next.next;
}
function printList  (head) {
    let current = head;
    while(current !== null){
        console.log(current.val);
        current = current.next;
    }
}

deleteNode(node3);
printList(head); // Output: 1 -> 2 -> 4 -> 5
// The node with value 3 is deleted, and the list is now 1 -> 2 -> 4 -> 5