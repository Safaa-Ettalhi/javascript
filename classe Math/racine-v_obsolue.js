function afficher(){
    let nbr=document.getElementById("nbr").value;
    
    let affich=document.getElementById("resultat");
    let res=Math.sqrt(nbr);
    affich.innerHTML="le resultat est "+ res;
    
}
function afficherv(){
    let nbr=document.getElementById("nbr").value;
    
    let affich=document.getElementById("resultat");
    let res=Math.abs(nbr);
    affich.innerHTML="le resultat est "+ res;
    
}