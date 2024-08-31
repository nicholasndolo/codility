class Node{
    constructor(value) {
        this.data = value;
        this.prev = null;
        this.next = null;
    }
}

let head = new Node(10)
let middle = new Node(20)
let last = new Node(30)

head.next = middle
middle.prev= head
middle.next = last
last.prev = middle

let temp = last

while(temp != null){
    console.log(temp.data)
    temp = temp.prev
}