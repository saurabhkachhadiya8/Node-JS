// variable,array,object,function,etc all can export by module
const array = [
  { id: 1, name: "saurabh" },
  { id: 2, name: "urmit" },
  { id: 3, name: "umesh" },
  { id: 4, name: "rohit" },
  { id: 5, name: "shravan" },
  { id: 6, name: "pratham" },
  { id: 7, name: "sagar" },
  { id: 8, name: "keyur" },
];
const object = {
    sum : (a,b) => {
        return a+b;
    }
}
const fun = () => {
    let a = 'hello',b = 'world';
    return `${a} ${b}\n`
}

module.exports = {
    array,object,fun
};
