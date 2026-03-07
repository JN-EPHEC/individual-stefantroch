
//fetch et ses méthodes

//GET

async function init(){
    try {
        fetch('http://localhost:3000/api/users')
        .then(res => res.json())
    }
    catch(error){
        console.log('Erreur lors du chargmeent depuis la DB', error )
    }
}