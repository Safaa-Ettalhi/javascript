function somme(){
    let n1=document.getElementById("N1").value;
    let n2=document.getElementById("N2").value;
    let res=document.getElementById("resultat");
    res.innerHTML=parseFloat(n1)+parseFloat(n2);
    //parsefloat kat7awal lina l float ila madarnahach katw9a3 la concatenation
}
function soustraction(){
    let n1=document.getElementById("N1").value;
    let n2=document.getElementById("N2").value;
    let res=document.getElementById("resultat");
    res.innerHTML=parseFloat(n1)-parseFloat(n2);
    //parsefloat kat7awal lina l float ila madarnahach katw9a3 la concatenation
}
function division(){
    let n1=document.getElementById("N1").value;
    let n2=document.getElementById("N2").value;
    let res=document.getElementById("resultat");
    if(n2!=0){
        res.innerHTML=parseFloat(n1)/parseFloat(n2);
        
    }else{

        alert("impossible le n2 doit etre superieur de 0")
    }
    //parsefloat kat7awal lina l float ila madarnahach katw9a3 la concatenation
}
