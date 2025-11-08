type User = { id: number; name: string; email: string };
const users: User[] = [
  { id: 1, name: "Ali", email: "ali@mail.com" },
  { id: 2, name: "Ayşe", email: "ayse@mail.com" },
];

// 1. Overload imzalarını buraya ekleyin (ID ve name için)
function search(id:number):User;
function search(name:string):User[];

// 2. Implementasyon
function search(param: number | string): User | User[] | undefined {
  if(typeof param === "number"){
    return users.find(user => user.id === param)
}
else{
    return users.filter(user => user.name === param)
}
  // 'param' number ise ID ile arayın (find)
  // 'param' string ise name ile arayın (filter)
}

console.log(search(1));
console.log(search("Ayşe"));

// BEKLENEN EKRAN ÇIKTISI:
// { id: 1, name: 'Ali', email: 'ali@mail.com' }
// [ { id: 2, name: 'Ayşe', email: 'ayse@mail.com' } ]
