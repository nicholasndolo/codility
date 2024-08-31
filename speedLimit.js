
// Speed Limit => 70, if speed <= 70, log ok
// For every 5km above the speed limit(70) => 1 point
// More than 12 points => license is suspended
function checkSpeed(speed){
  const speedLimit = 70
  const kmPerPoint = 5

 if( speed < speedLimit + kmPerPoint){
  console.log("Ok")
  return
 } 

const points =Math.floor((speed - speedLimit) / kmPerPoint)
  if( points >= 12)
    console.log("License is suspended")
  else
    console.log("Point:",points)
}
