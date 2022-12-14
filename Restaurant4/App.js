



function valide(){
    let msg = '';
    var nom = document.getElementById('nom').value;
    var prenom = document.getElementById('prenom').value;
    var nomClient = document.getElementById('client');
    
    
    if(nom == ''){
       msg += alert('Veuillez a remplir les champs')
       
    }else{
        msg += `Bienvenue sur notre site ${prenom} ${nom}`;
        document.location.href="../index.html"; 
        
    }
    
    nomClient.innerHTML = msg;
    console.log(msg)
    
}


function clear(){
 nomClient.innerHTML = "";
}

