import { v4 as uuidv4 } from 'uuid';

let users = []

export const getAllUsers = (req, res) => {
    console.log("every things looks ok!")
      res.send(users)
}


export const createUser = (req, res) => {
    const newUser = req.body;
    console.log(newUser)
    const userId = uuidv4();
    const userWithId = {...newUser, id: userId}
    console.log(userWithId)

    users.push(userWithId)
    console.log(users)
    res.send(`User with name ${userWithId.firstName} is added to the database`)
}


export const getUser = (req, res) => {
    const { id } = req.params;
    const foundUser = users.find((user) => user.id === id);
    console.log(foundUser)
    res.send(foundUser)
}


export const deleteUser = (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id !== id)
    res.send(users)
}


export const updateUser = (req, res) => {
    const { id } = req.params;    
    const { firstName, lastName, age } = req.body;


    const updatedUser = users.find((user) => user.id === id)
     
    if(firstName) updatedUser.firstName = firstName;
    if(lastName) updatedUser.lastName = lastName;
    if(age) updatedUser.age = age;


    res.send(`User with the id: ${id} is updated`)
}