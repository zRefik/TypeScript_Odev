// (Soru 5'teki User tipini ve users dizisini kullanın)
type User = { id: number; name: string; email: string };
const users: User[] = [
  { id: 1, name: "Ali", email: "ali@mail.com" },
  { id: 2, name: "Ayşe", email: "ayse@mail.com" },
];

function updateUser(
  id: number,
  updates: Partial<User>
): Readonly<User> | undefined {
  const user = users.find((u) => u.id === id);
  if (!user) {
    return undefined;
  }
  
  const guncel ={...user,...updates}
  return guncel
  // 'user' nesnesini 'updates' ile birleştirin (Object.assign veya ...)
  // ve güncellenmiş kullanıcıyı döndürün
}

console.log("Eski: ", users[0]);
const updatedUser = updateUser(1, { email: "ali.yeni@mail.com" });
console.log("Yeni: ", updatedUser);

// BEKLENEN EKRAN ÇIKTISI:
// Eski:  { id: 1, name: 'Ali', email: 'ali@mail.com' }
// Yeni:  { id: 1, name: 'Ali', email: 'ali.yeni@mail.com' }
