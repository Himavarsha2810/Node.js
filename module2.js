console.log("i am module2");


function calculation(x,y,z){
    let sum = x + y + z
    return sum
}


module.exports={cal : calculation}