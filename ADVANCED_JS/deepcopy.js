let user={
    name:"rajshree",
    age:21,
    address:{
        city:"patna"
    }
};

 let deepcopy=JSON.parse(JSON.stringify(user));

 deepcopy.address.city="delhi";
 console.log(user);
 console.log(deepcopy);/

