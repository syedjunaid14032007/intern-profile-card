
const user = {name: "junaid", track: "Mobile Apps"};

const jsonText = JSON.stringify(user);//object -> JSON string 
// '{"name": "junaid", "track": "Mobile Apps"}'

const backToObject = JSON.parse(jsonText) // JSON string -> object

console.log(jsonText);
console.log(backToObject);


localStorage.setItem("user",JSON.stringify(user));

const saved = localStorage.getItem("user");
const parsedUser = JSON.parse("saved");
console.log(parsedUser.name);

localStorage.removeItem("user");
