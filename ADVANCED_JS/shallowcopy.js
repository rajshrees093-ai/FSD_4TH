//shallow copy
let user={
    name:"rajshree",
    age:21,
    address:{
        city:"delhi",
        pincode:110001
    }
};

let copyuser={...user};

copyuser.address.city="patna";

console.log(user);
console.log(copyuser);