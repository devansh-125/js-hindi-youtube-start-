// when we form object by constructer then it is singleton but when it is formed by literals it have mahy instance 

//obejct literals 
const tender = {} // this is not singleton

const tenderuser  =new Object() // this is singleton object is only differnce 
 tender.id = "123abs0"
 tender.name="Devansh"
 tender.LoggedIn = false
//  console.log(tender)


 const regularUser = {
  email: "cdevanshc@125.gmail.com",
  fullname: {
    userfullname:{
      firstname: "Devansh",
      lastname:"Chaudhary"
    }
  }

 }
 console.log(regularUser.fullname)

 const obj1 = {1: "a", 2:"b"}
 const obj2 = {3:"A",4:"B"}
 const obj =  {3:"a",4:"b"}

 const obj3 = Object.assign(obj1,obj2) 
 // this is the static method that copies the enumerable
 const obj4 = Object.assign({},obj1,obj2,obj) 
 // here we see {} so when evr we merge the object we use this as in above case we do not use it that why it change the obj1 all the merge value comes in obj1 
 console.log(obj3)
 console.log(obj1)
 console.log(obj4)


 const obj5 = {...obj1,...obj,...obj2}
 console.log(obj5)

 console.log(Object.keys(tender)) // this return an array that is the main point we used this thing in multiple project
 console.log(Object.entries(tender)) // every key mad pair with there value 