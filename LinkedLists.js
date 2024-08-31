//https://www.youtube.com/watch?v=ChWWEncl76Y
//A sequential collection of elements, each element is called a node and each node has two pieces of info,
// the data value itself and a pointer that references the next node in the list
//A linked list has a head and a tail,
//Unlike arrays, elements are the nodes and they are not stored in a sequential memory locations, instead elements are linked together using a pointer
//Three types of linked lists, singly, doubly and circular linked lists 
//In a singly linked list, each node has one pointer to the next node. Head node points to the next node, tail node points to null
//In a doubly linked list, each node has a pointer to the next node and a second pointer to the previous node(allows us to traverse both forward and backward), the head node has a pointer to null
//An example of real world of application of linked list is the music player, each song is a node which has a reference to the next and previous song
//In a circular linked list head and tail nodes point to each other
//The difference between a linked list and an array is how they are stored in memory, arrays support direct access while linked lists support sequential access
//A true array is allocted a contiguous block of memory i.e each element in the array is located next to each other
//Linked lists have a sequential access not direct access i.e each element in the list remembers it's part of a specific order
//but unlike an array, the elements can be stored anywhere in memory not necessaryly next to each other.
//Disadvantages of linked lists - 
//Adding and removing elements is much faster than with an array because its elements can be stored anywhere in memory.
//To add an element make

//IMPLEMENTATION

class LinkedList {
    constructor() {
        this.head = this.tail = null
    }
    //add to the end of list / tail
    append(value){
        // if list is empty
        if(!this.tail) {
            this.head = this.tail = new Node(value)
        } else {
            let oldTail = this.tail
            this.tail = new Node(value)
            oldTail.next = this.tail
            this.tail.previous = oldTail
        }

    }
    //add to the beginning of the list
    prepend(value){
        //if list is empty
        if(!this.head){
            this.head = this.tail = new Node(value)
        } else {
            let oldHead = this.head
            this.head = new Node(value)
            oldHead.prev = this,head
            this.head.next = oldHead
        }

    }


    deleteHead() {
        //if list is empty

        if (!this.head){
            return null
        } else {
            let head = this.head
            this.head = head.next
            console.log(head.next)
            
        }

    }

    deleteTail(){

    }

    search() {

    }
}

class Node {
    constructor(value, prev, next) {
        this.value = value
        this.prev = prev || null
        this.next = next || null
    }
}


//Second method

//represent each node
class NodeEl {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}


class LinkdList {
    constructor() {
        this.head = null
        this.size = 0
    }

    //Insert first node
    insertFirst(data) {
        this.head = new NodeEl(data, this.head)
        this.size++
    }

    //Insert last node
    insertLast(data) {
        let node = new NodeEl(data)
        let current

        //if NodeList is empty
        if(!this.head) {
            this.head = node
        } else {
            current = this.head

            while(current.next){
                current = current.next
            }

            current.next = node
        }

        this.size++
    }

    //Insert at index
        //if index is out of range
    insertAt(data, index) {
        if(index < 0 || index > this.size) {
            return
        }

        //If first index
        if(index === 0){
            //this.head = new NodeEl(data, this.head)
            this.insertFirst(data)
            return
        }

        const node = new NodeEl(data)
        let current, previous

        //set current to first
        current = this.head
        let count = 0

        while(count < index) {
            previous = current //Node before index
            count += 1
            current = current.next //Node after index
        }

        node.next = current
        previous.next = node

        this.size++
    }

    //Get at index
    getAt(index){
        if(index > this.size) return
        
        let current = this.head
        let count = 0

        while(current){
            if(count === index){
                console.log(current.data)
                return
            }
            console.log(count)
            count += 1
            current = current.next
        }
        return null
    }

    //Remove at index
    removeAt(index) {
        if(index < 0 || index > this.size) return

        let current = this.head
        let previous
        let count = 0

        //remove first
        if(index === 0) {
            this.head = current.next
        } else {
            while( count < index){
                count++
                previous = current
                current = current.next
            }

            previous.next = current.next
        }

        this.size--
    }

    //Clear list

    clearList() {
        this.head = null
        this.size = 0
    }

    //Print list data

    printListData(){
       let current = this.head;

        while(current){
            console.log(current.data)
            current = current.next;
        }

    }
}

const linkedList = new LinkedList();
linkedList.append(10)
linkedList.append(20)
linkedList.append(30)
linkedList.append(40)
console.log(linkedList);
// linkedList.insertFirst(100)
// linkedList.insertFirst(300)
// linkedList.insertFirst(400)
// linkedList.insertLast(600)
// linkedList.insertAt(1000,0)
// linkedList.removeAt(2)
// console.log(linkedList.printListData())
// linkedList.getAt(20)

