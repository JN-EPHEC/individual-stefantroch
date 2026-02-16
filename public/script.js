

//console.log(fetch('http://localhost:3000/api/users'))

const liste = document.getElementById('listUsers');
const form = document.getElementById('formUsers');
console.log(liste)

document.addEventListener('DOMContentLoaded', async function(){
     await init()
});




function init(){
    //méthode GET
    fetch('http://localhost:3000/api/users')

        .then (function(response){
            return response.json()
        })
        .then(function(utilisateur){
             let html='';

             for (let i=0;i<utilisateur.length;i++){

                const user = utilisateur[i];

                html += '<li>' + user.nom + ' ' + user.prenom +' '+ '<button class="supprimer" data-id ="user.id"> X </button>' +'</li>';
            }
            liste.innerHTML = html


        })
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

