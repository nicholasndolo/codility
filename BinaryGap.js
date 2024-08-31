// A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.

// For example, number 9 has binary representation 1001 and contains a binary gap of length 2. The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3. The number 20 has binary representation 10100 and contains one binary gap of length 1. The number 15 has binary representation 1111 and has no binary gaps. The number 32 has binary representation 100000 and has no binary gaps.

// Write a function:

// class Solution { public int solution(int N); }

// that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.

// For example, given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5. Given N = 32 the function should return 0, because N has binary representation '100000' and thus no binary gaps.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..2,147,483,647].

function solution (N) {
    // 9 => 1001, 2
    // 1041 => 10000010001, 5 $ 3, max binary gap 5
    // edge 1111, 0000 => 0

    //Diagram

    //10000010001
    //i
    //j

    //10000010001
    //i
    //      j
    //store gap = 5
    //set i = j

    //10000010001
          //i
          //j

     //10000010001
           //i
           //    j   
           
    //store gap = 3
    //set i = j

    //steps:
    //1.have pointers i and j set to position 0 of binary number
    //2.increament j pointer until it hits a one in the binary sequence
    //3. store j - i - 1 to get the binary gap
    //set i = j
    //Repat until we get through the entire array


    let binaryN = (N >>> 0).toString(2);
    let maxGap = 0;
    for (let i = 0; i < binaryN.length; i++) {
        for (let j = i + 1; j < binaryN.length; j++){
            if(binaryN[i] == 1 && binaryN[j] == 1) {
                if (maxGap < j - i -1) {
                    maxGap = j - i - 1;
                }
                i = j;
            }
        }
    }
    return maxGap

}