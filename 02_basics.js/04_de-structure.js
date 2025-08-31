const course ={
  couseName: "js learning",
  price: 999,
  courseInstructor: "Devansh"
}

const {courseInstructor: cI}  = course //  {} this curly bracket is used to destructure the object
console.log(cI)
console.log(course.price)