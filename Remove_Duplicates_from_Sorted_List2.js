function deleteAllDuplicate(head){
let dummy = new ListNode(0);
dummy.next = head;
let prev = dummy;
let current = head;

while(current !== null){
 let isDuplicate = false 
 while(current.next !== null && current.val === current.next.val){
    isDuplicate = true;
    current = current.next 
 }
 if(isDuplicate){
    prev.next =  current.next
 }else{
    prev = prev.next;
 }
 current = current.next;
}
return dummy.next;  
}

console.log(deleteAllDuplicate([2,3,4]))