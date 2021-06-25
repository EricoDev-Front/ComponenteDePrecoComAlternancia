let toggle = document.getElementById("toggle");
let precoBasic = document.getElementById("precoBasic");
let precoProfessional = document.getElementById("precoProfessional");
let precoMaster = document.getElementById("precoMaster");

function mudarValores(){
    if(toggle.checked){
        precoBasic.innerHTML = "199,99"
        precoProfessional.innerHTML = "249,99"
        precoMaster.innerHTML = "399,99"
    } else{
        precoBasic.innerHTML = "19,99"
        precoProfessional.innerHTML = "24,99"
        precoMaster.innerHTML = "39,99"
    }

}

