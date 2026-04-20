const longestPrefix = (str) => {
if(!str.length)
    return " ";
let prefix=str[0];
for(let i=0;i<str.length;i++){
    while(!str[i].startsWith(prefix))
        prefix=prefix.slice(0,-1);
}
return prefix;
};
const a =["flower","flow","flight"];
console.log(longestPrefix(a));