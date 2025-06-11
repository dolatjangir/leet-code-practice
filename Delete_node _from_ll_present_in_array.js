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

function deleteNode (nums,head){
const set = new Array(1e5 + 1).fill(false);
for (const num of nums){
    set[num] = true;
};
let prev = null;
let temp = head;
while(temp !== null){
    if(set[temp.val] === true){
        if(prev === null){
        head = temp.next
        temp.next = null;
        temp = head;}
   else{
        prev.next = temp.next;
        temp.next = null;
        temp = prev.next;
    } }else{
        prev = temp;
        temp = temp.next;
    }
}
return head; 
}

console.log(deleteNode([1,2,4],head))