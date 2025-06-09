 
 //firstly i made a class ->this class works like a blueprint for each item in our linked list
 class Node {
    //the constructor(data) is special function that runs when we create a new node
    constructor(data){
        //store data
        this.data = data;
             //store pointer
        this.next = null;

    }
  }

  let head = new Node(7);
  let second = new Node(11);
  let third = new Node(66);
  let forth = new Node(6);

  head.next = second;
  second.next = third;
  third.next = forth;
  forth.next = null;

  let current = head;
  while(current) {
    console.log(current.data);
    current = current.next
  }