type UsersType={
    [key:string]:{id:number,name:string}
}
export let users :UsersType= {
    "101": {id: 101, name: "Yulia"},
    "1011": {id: 1011, name: 'Karina'},
    "1012": {id: 1012, name: 'Kolya'},
    "1013": {id: 1013, name: 'Vova'}
};
// users[1013]

let user ={id:100500, name: "user"};
users[user.id]=user
delete users[user.id]

export const usersObj = {
    "0": 'Yulia',
    "1": 'Karina',
    "2": 'Kolya',
    "3": 'Vova'
};

export const usersArray = [
    {id: 101, name: "Yulia"},
    {id: 1011, name: 'Karina'},
    {id: 1012, name: 'Kolya'},
    {id: 1013, name: 'Vova'}
];
// usersArray.find(u=> u.id===1012)
let usersCopy = [...usersArray,user]
// let usersArray = usersArray.filter(u=>u.id!==user.id)
