import { useState } from "react";

type props = {
  onAddUser :(user:{nom:string;prenom:string}) => void

}


function UserForm({ onAddUser }:props) {

  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    onAddUser({ nom, prenom });

    setNom("");
    setPrenom("");
  }

  return (
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
  );
}

export default UserForm;