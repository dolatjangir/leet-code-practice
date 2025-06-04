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
node3.next = node2;

function linkedlistcycle(head){
    let slow = head;
    let fast = head;
  let  found =  false;
    if(head === null){
        return null;
    }
    while(fast !== null && fast.next !== null){
            slow = slow.next;
            fast = fast.next.next;
            if(slow === fast){
                found = true;
                break;
            }
    }

    if(!found){return null;}
//if i found cycle in linked list then take slow on head node
slow = head;
while(slow !== fast){
slow = slow.next;
fast = fast.next;
}

return slow;

}

console.log(linkedlistcycle(head))

