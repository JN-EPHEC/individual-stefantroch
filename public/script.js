

//console.log(fetch('http://localhost:3000/api/users'))

const liste = document.getElementById('listUsers');
const form = document.getElementById('formUsers');
console.log(liste)

document.addEventListener('DOMContentLoaded', async function(){
     await init()
});




function init() {

    fetch('http://localhost:3000/api/users')
        .then(function(response) {
            return response.json();
        })
        .then(function(utilisateur) {

            let html = '';

            for (let i = 0; i < utilisateur.length; i++) {

                const user = utilisateur[i];

                html +=
                    '<tr>' +
                        '<td>' + user.id + '</td>' +
                        '<td>' + user.nom + '</td>' +
                        '<td>' + user.prenom + '</td>' +
                        '<td>' +
                            '<button class="btn btn-danger supprimer" data-id="' + user.id + '">X</button>' +
                        '</td>' +
                    '</tr>';
            }

            liste.innerHTML = html;

            // bouton supprimer
            const buttons = document.getElementsByClassName('supprimer');

            for (let i = 0; i < buttons.length; i++) {

                buttons[i].addEventListener('click', function() {

                    const id = this.getAttribute('data-id');

                    fetch('http://localhost:3000/api/users/' + id, {
                        method: 'DELETE'
                    })
                    .then(function() {
                        init();
                    });

                });
            }

        });
}


form.addEventListener('submit', function(event){

    event.preventDefault();

    const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;

    //POST
    fetch('http://localhost:3000/api/users',{
    method: "POST",
    headers: {
        "Content-Type" : "application/json"
    },
    body: JSON.stringify({
        nom: nom,
        prenom: prenom,
    })
});

form.reset();
init()




})


