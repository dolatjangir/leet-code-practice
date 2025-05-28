class ListNode{
    constructor(data){
this.val = data;
this.next = null;
    }
};

//function to build a linked list from an array
function buildList(arr){
    let dummy = new ListNode(0);
    let current = dummy;

    for(let val of arr){
         current.next = new ListNode(val);
         current = current.next;
    }
    return dummy.next;
}

function deleteduplicate(head){
  let current = head;
  
  while(current !== null && current.next !== null){
    if(current.val === current.next.val){
        current.next = current.next.next;
    }else{
        current = current.next;
    }
  }
  return head;
}
function printList (head){
    let result = [];
    while(head!==null){
        result.push(head.val);
        head = head.next
    }
    console.log(result.join('->'))
}

let head = buildList([1,1,3]);
let answer = deleteduplicate(head);
printList(answer)

