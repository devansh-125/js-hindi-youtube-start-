let myarr = [1,2,5,3,8]
console.log(myarr)
myarr.pop()
console.log(myarr)
myarr.unshift(8)
myarr.shift()
console.log(myarr.includes(3)) // boolean datatype comes here 

const myn1 = myarr.slice(1,3) //  give the no from 1 to 3-1
console.log(myn1) 
console.log(myarr)

const myn2  = myarr.splice(1,3) // so here in splice it give no from 1 to 3 and the main  difference is that it alos change the myarr array 
console.log(myarr) 
console.log(myn2)