function tester(){
    let ch1=document.getElementById("ch");
    if(ch1.value.toLowerCase()=='javascript'){
        alert('bravo')
    }else{
        alert('attention! ecrit "javascript"');
        ch.value="";
        ch.focus();
    }
}