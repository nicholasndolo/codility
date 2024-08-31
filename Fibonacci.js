//1, 1, 2, 3, 5, 8, 13...

//determine the nth element of the sequence

//non-recursive version



function fib(n){
    if (n < 3) return 1;

    let prev = 1;
    let curr = 1;

    for (i = 2; i < n; i++) {
        const next = prev + curr;
        prev= curr;
        curr = next;
    }

    return curr;
}


//Recussive function

function fib(n){
    if (n < 3) return 1;

    return fib(n-1) + fib(n-2);
}

console.log(fib(5)) //=>5


let yourself = {
    // fibonacci: function(n) {
    //     if (n <= 1) return n;
        
    //     return this.fibonacci(n - 1) + this.fibonacci(n - 2);
    // }

        memo: {},
        fibonacci: function(n) {
            if (n === 0) {
                return 0;
            } else if (n === 1) {
                return 1;
            } else if (this.memo[n]) {
                return this.memo[n];
            } else {
                var result = this.fibonacci(n - 1) + this.fibonacci(n - 2);
                this.memo[n] = result;
                return result;
            }
        }

};





function multiply(num) { //29
    
}

