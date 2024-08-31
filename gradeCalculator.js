function calculateGrade(marks){
  let grade
   let averageGrade = (marks.reduce((acc, curr) => acc + curr)) / marks.length

   if(averageGrade < 0 || averageGrade > 100) return "Enter valid marks"

   if(averageGrade < 60) return "F"
   if(averageGrade < 70) return "D"
   if(averageGrade < 80) return "C"
   if(averageGrade < 90) return "B"
    return "A"
}


console.log(calculateGrade([100, 200, 34]))