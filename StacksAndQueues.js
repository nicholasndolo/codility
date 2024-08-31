//both stacks and queues are linear data structures
//stack is a container of objects that are inserted and removed according to LIFO principle
//Queue is a container of objects(linear collections) that are inserted and removed according to FIFO principle
//In the pushdown stacks only two operations are allowed, push the item into the stack and pop the item from the stack
//A stack is a limited access data stucture- elements can be added and removed from the stack only at the top.
//Push adds an element to the top of the stack, pop removes the the from the top
//In queque only two operatons are allowed enqueue(insert an item at the back of the queue)and deqeue(remove
//the front item)
//Basic operations that allow us to perform different actions on a stack
//push => Add an element to the top of a stack
//pop() => Remove an element from the top of a stack
//peek => check the last top item of the stack without removing it.
//isEmpty => check if the stack is empty

//Implementing stacks and queues using inbuit array methods

const stack = [];
//push
stack.push("Jenny")
stack.push("Cecy")
stack.push("Viola")
stack.push("Kate")

//pop
stack.pop()
//peek
stack[stack.length - 1]

//Implement stack using javascript classes

class Stack {
    constructor() {
        this.storage = {}
        this.size = 0

    }

    push (element){
        this.size++;
        this.storage[this.size] = element
    }

    pop (){
        let removed = this.storage[this.size]
        delete this.storage[this.size]
        this.size --
        return removed

    }

    peek (){
        return this.storage[this.size]

    }
}

//emplementing queues in JavaScript array methods

const arr = []
    //enqueue
    queue.push("Bio")
    queue.push("Chem")
    queue.push("Math")

    //dequeue

    arr.shift()

    class Queue {
        constructor() {
            this.storage = {}
            this.head = 0
            this.tail = 0
        }

        enqueue() {
            this.storage[this.tail] =element
            this.tail++
        }

        dequeue() {
            let removed  =  this.storage[this.head]
            delete this.storage[this.head]
            this.head++
            return removed

        }

    }

    const queue = new Queue()



