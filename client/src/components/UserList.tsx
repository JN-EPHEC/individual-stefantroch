type User = {
  id: number;
  nom: string;
  prenom: string;
};

function UserList({ users, onDelete }: { users: User[], onDelete: (id: number) => void }) {

  return (
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
                onClick={() => onDelete(u.id)}
              >
                Supprimer
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UserList;