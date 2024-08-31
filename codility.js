let arr = [3, 4, 4, 6, 1, 4, 4]
const N = 5
// function solutions(N, A) {
//     let counters = new Array(N).fill(0)
//     let max = 0;
    
//     for (let i= 0; i < A.length; i++) {
//         if(A[i]  >= 1 && A[i] <= N) {
//             counters[A[i] - 1] += 1
//             if(counters[A[i] - 1] > max) max = counters[A[i] - 1]
//            // max = counters[i]
//         } else {
//             for(let j= 0; j < N; j++) {
//                 counters[j] = max
//             }
//             continue;
//         }
     
//     }
//     return counters
// }

const S = "CAGCCTA"
const P =[2, 5, 0]
const Q = [4, 5, 6]

function solutions (S, P, Q) {
 let mins = []
   let hash = {
       A: 1,
       C: 2,
       G: 3,
       T: 4,
   };


   for (let i = 0; i < P.length; i++) {
       let startIndex = P[i]
       let endIndex = Q[i]
       

       let subArr = S.slice(startIndex, endIndex + 1).split('').sort()

       mins.push(hash[subArr[0]])
       
   }
   return mins
}

// function solution(S, P, Q) {
//     // Implement your solution here
//     let mins = []
//    let hash = {
//        A: 1,
//        C: 2,
//        G: 3,
//        T: 4,
//    };


//    for (let i = 0; i < P.length; i++) {
//        let startIndex = P[i]
//        let endIndex = Q[i]

//        let leastImpactFactor = 4;

//        let subStr = S.slice(startIndex, endIndex + 1)
//        for (let j = 0; j < subStr.length; j++) {
//            if (hash[subStr[j]] < leastImpactFactor) {
//                 leastImpactFactor = hash[subStr[j]]
//            }
//        }

//        mins.push(leastImpactFactor)

//        }

//        return mins


// }


   



console.log(solutions(S, P, Q))


