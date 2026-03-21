import { useEffect, useState } from "react";

type User = {
  id: number;
  nom: string;
  prenom: string;
};

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");

  // 🔄 CHARGER USERS AU DÉMARRAGE
  useEffect(() => {
    fetch("http://localhost:3000/api/users")
      .then((res) => res.json())
      .then((data: User[]) => setUsers(data))
      .catch((err) => console.error("Erreur GET :", err));
  }, []);

  // ➕ AJOUT USER (POST API)
  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newUser = {
      nom,
      prenom,
    };

    try {
      const response = await fetch("http://localhost:3000/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      const data: User = await response.json();

      // 🔥 l'ID vient de la DB
      setUsers([...users, data]);

      setNom("");
      setPrenom("");
    } catch (error) {
      console.error("Erreur POST :", error);
    }
  };

  // ❌ DELETE USER (API + FRONT)
  const deleteUser = async (id: number) => {
    try {
      await fetch(`http://localhost:3000/api/users/${id}`, {
        method: "DELETE",
      });

      setUsers(users.filter((u) => u.id !== id));
    } catch (error) {
      console.error("Erreur DELETE :", error);
    }
  };

  return (
    <div className="container mt-4">

      {/* TITRE */}
      <div className="text-center mb-4">
        <h1>Base de données Users</h1>
        <p className="text-muted">
          Ajout + suppression d’utilisateurs (React + API)
        </p>
      </div>

      {/* FORMULAIRE */}
      <div className="card shadow-sm mb-4">
        <div className="card-header bg-primary text-white">
          Ajouter un utilisateur
        </div>

        <div className="card-body">
          <form onSubmit={handleSubmit} className="row g-3">

            <div className="col-md-6">
              <label className="form-label">Nom</label>
              <input
                className="form-control"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                required
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Prénom</label>
              <input
                className="form-control"
                value={prenom}
                onChange={(e) => setPrenom(e.target.value)}
                required
              />
            </div>

            <div className="col-12 text-end">
              <button className="btn btn-primary">
                Ajouter
              </button>
            </div>

          </form>
        </div>
      </div>

      {/* TABLE */}
      <table className="table table-striped table-hover">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.nom}</td>
              <td>{u.prenom}</td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteUser(u.id)}
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default App;