class ListNode{
    constructor(val){
        this.val = val;
        this.next = null;

    }
}

// function buildList(array){
// let dummyLinkedList = new ListNode(0);
// let current = dummyLinkedList;

// for(let val of array){
//     current.next = new ListNode(val);
//     current = current.next;
// }
// return dummyLinkedList.next;
// }
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

// function printList (head){
//     let result = [];
//     while(head !== null){
//             result.push(head.val);
//             head = head.next;
//     }
//     console.log(result.join('->'))
// }

// let head = buildList([1,2,3,4]);
// let answer = linkedlistcycle(head);
// printList(answer) ;