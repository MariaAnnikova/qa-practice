const users = [
    {name: "Rachel", email: "rachel@email.com", age: 26}, 
    {name: "Ross", email: "ross@email.com", age: 29},
    {name: "Chandler", email: "chandler@email.com", age: 30}
]

for (const {name, email, age} of users) {
    console.log (`Name:${name}, Email:${email}, Age:${age}`); 
}