function egale(){
    let n1=document.getElementById("N1").value;
    let n2=document.getElementById("N2").value;
    let res=document.getElementById("resultat");
    // cherchyer l'operation a effectuer
    let somme=document.getElementById("som");
    let soustraction=document.getElementById("sous");
    let division=document.getElementById("div");
    if(somme.checked){
        res.innerHTML=parseFloat(n1)+parseFloat(n2);
        }
    else if(soustraction.checked){
            res.innerHTML=parseFloat(n1)-parseFloat(n2);
        }else if(division.checked){
            if(n2!=0){
                res.innerHTML=parseFloat(n1)/parseFloat(n2);
                
            }else{
        
                alert("impossible le n2 doit etre superieur de 0");
            }
        }else{
            alert("choisissez l'operation que vous voulez effectuer");
        }
}