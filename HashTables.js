//A hash table is a data structure that uses hashing to implement associative arrays or mapping
//of key value pairs
//Hashing is used not only in data structures but also as applications in security, cryptography and even graphics
//Hash functions are typically irreversible, deterministic. It is possible for two different inputs to return the same 
//hash result, this is called collision. One way to handle collisions is just to store both key value pairs at the same index using
//some other collections like an array or linked list. This technique to manage collisions is  called separate chaining.
//A hash table begins with multiple placeholders called buckets that will hold content and they are ofen set with an initial max capacity.
//To add any key value pair to the hash table, we take the key and pass it through the hash function that outputs a number that corresponds 
//to an index in an array
//To retrieve an item from the hash table, we take a key run it through that same exact hash function and then directly access that bucket in the array
//where the value is stored
//The huge advantage of hash tables is that there is to treversing list, it's direct access no matter how large the hash table gets. It's a very efficient way 
//to look up entries
//At its core a hash table is array based data structure but with some added functionality.

//Hash table implementation

const hash = (key, size) => {
    hashedKey = 0;

    for(let i = 0; i < key.length; i++) {
        hashedKey += key.charCodeAt(i)
    }

    return hashedKey % size;
}


class HashTable {
    constructor() {
        this.size = 20;
        this.buckets = Array(this.size);

        for(let i = 0; i < this.buckets.length; i++) {
            this.buckets[i] = new Map();
        }
    }

    insert(key, value) {
        let idx = hash(key, this.size);
        this.buckets[idx].set(key, value)
    }

    remove(key) {
        let idx= hash(key, this.size);
        let deleted = this.buckets[idx].get(key);
        //if(!deleted) throw new Error("Idiot Key does not exist")
        this.buckets[idx].delete(key);

        return deleted
    }

    search(key) {
        let idx = hash(key, this.size);
        let item = this.buckets[idx].get(key);

        // if(!item) throw new Error("Key does not exist");
        return item;
    }
}

const hashTable = new HashTable();
const hashTable2 = new HashTable();
console.log("hashTable2", hashTable2.buckets)

hashTable.insert('serena', 'moon');
hashTable.insert('amy', 'mercury');
hashTable.insert('rei', 'mars');
hashTable.insert('lita', 'jupiter');
hashTable.insert('mina', 'venus');
hashTable.insert('darien', 'tuxido mask');

hashTable.search('rei')

