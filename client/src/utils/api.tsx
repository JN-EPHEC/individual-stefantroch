const API_URL = import.meta.env.VITE_API_URL;

// GET
export function getUsers() {
  return fetch(`${API_URL}/users`)
    .then(res => res.json());
}

// POST
export function addUser(user: { nom: string; prenom: string }) {
  return fetch(`${API_URL}/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  }).then(res => res.json());
}

// DELETE
export function deleteUser(id: number) {
  return fetch(`${API_URL}/users/${id}`, {
    method: "DELETE",
  });
}