//shallow copy
let user={
    name:"rajshree",
    age:21,
    address:{
        city:"delhi",
        pincode:110001
    }
};

// let copyuser={...user};

// copyuser.name="nidhi";

// console.log(user);
// console.log(copyuser);/

let copyuser=Object.assign({},user);
copyuser.address.pincode=800026;

console.log(user);
console.log(copyuser);