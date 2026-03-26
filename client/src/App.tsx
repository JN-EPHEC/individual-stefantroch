
// Imports useState(stockage) useEffect(execution), Header,UserForm,UserList (component)
import { useEffect, useState } from "react";
import Header from "./components/Header";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
//GET + POST + DELETE
import { getUsers, addUser, deleteUser } from "./utils/api";
//definition du type User
type User = {
  id: number;
  nom: string;
  prenom: string;
};

function App() {
  const [users, setUsers] = useState<User[]>([]);

  // GET
  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  // ADD
  function handleAddUser(user: { nom: string; prenom: string }) {
    addUser(user).then((newUser) => {
      setUsers((prev) => [...prev, newUser]);
    });
  }

  // DELETE
  function handleDelete(id: number) {
    deleteUser(id).then(() => {
      setUsers((prev) => prev.filter((u) => u.id !== id));
    });
  }

  return (
    <div className="container mt-4">
      <Header />
      <UserForm onAddUser={handleAddUser} />
      <UserList users={users} onDelete={handleDelete} />
    </div>
  );
}

export default App;