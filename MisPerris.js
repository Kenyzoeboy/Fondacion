function validateForm(){
    let x = document.forms["fomulario_adop"]["nombre"].value;
    if(x == ""){
        alert("El nombre esta vacio");
    }
}