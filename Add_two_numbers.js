class ListNode{
    constructor(data){
        this.val = data;
        this.next = null;
    }
}

function buildList (arr){
let dummy = new ListNode(0);
let current = dummy;


for (let val of arr){
    current.next = new ListNode(val);
    current = current.next;
}
return dummy.next
}

function addTwoNumbers(li1,li2){
let dummy = new ListNode(0);
let current = dummy;
let carry = 0;
while(li1 !== null || li2 !== null || carry !== 0){
    let sum = carry;
    if(li1 !== null){
        sum += li1.val;
        li1 = li1.next;
    }

  if(li2 !== null){
        sum += li2.val;
        li2 = li2.next;
    }

    carry = Math.floor(sum/10);
    current.next = new ListNode(sum % 10);
    current = current.next
}
return dummy.next
}
function printList (head){
let result = [];
while(head !== null){
    result.push(head.val);
    head = head.next
}
console.log(result.join("->"));

}

let arr1 = [2,4,3];
let arr2 = [5,6,7];

let li1 = buildList(arr1);
let li2 = buildList(arr2);

let result = addTwoNumbers(li1,li2);
printList(result);