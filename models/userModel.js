const users = [
    {id: '1', name: 'Alice', age: 30, email: 'i@a.com' },
    { id: '2', name: 'Bob', age: 20, email: 'i@b.com' }
];

function getAllUsers(){
    return users;
}

function getUserById(id){
    return users.find(user => user.id === id) || null;
}

function create(name, email, age) {
    const newUser = {
        id: (users.length + 1).toString(),
        name,
        email,
        age
    }
    users.push(newUser);
    return newUser;
}

module.exports = {getAllUsers, getUserById, create};