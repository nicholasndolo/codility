// This references the object that ie executing the current function
// If the function is part of an object(i.e it is a method) then this references that object itself
const video = {
  title: 'a',
  play(){
    console.log(this)
  }
}
video.play()
// If the function is a regular function (i.e it is not a method) then this references the global object (window in browser or global in node)
function playVideo(){
  console.log(this)
}
playVideo()

const band = {
  title: "The Beatles",
  members: ["John", "Paul", "George"],
  showMembers(){
    this.members.forEach(function(member){
      // this inside the callback function is referencing the global object (window in browser or global in node). The callback function is not a method inside the band object
      console.log(this)
      // As a work around in this particular case forEach method has two parameters, the callback function and the object to be referenced by this. Here we pass this as the second parameter and will reference the band object
      console.log(this.title, member)
    }, this)
  }
}
band.showMembers()