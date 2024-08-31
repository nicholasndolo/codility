function StopWatch(){
  let start; 
  let stop; 
  let duration = 0

  this.start(){
    if(start) throw new Error("stopwatch already started")
    start = true
  }

}

StopWatch()
//duration
// start 
// stop