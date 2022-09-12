function palabra_entrada(){
    var texto= document.querySelector('#input').value;
    if(texto.includes('á')||texto.includes('é')||texto.includes('í')||texto.includes('ó')||texto.includes('ú')){
        alert('Por favor, no use letras con acentos');
        return 1;

    }
    if(texto != texto.toLowerCase()){
        alert('Por favor, no use letras en mayúsculas');
        return 2;
    }
    especiales=['°','|','#','$','%','&','/','(',')','=','?','¡','¿',',','.','-','{','}','[',']','+','!','*','/','+','-','_',':',';','¨','*','"',"'"];
    hayEspecial=false;
    for(let caracter of especiales){
        if(texto.includes(caracter)){
            alert('No ingresar caracteres especiales');
            hayEspecial=true;
            break;
        }
    }
    if(hayEspecial){
        return 3;
    }
    return 0;
}

function encriptarTexto(){
    numero= palabra_entrada();
    if(numero!=0){
        console.log(numero)
        return
    }
    var texto= document.querySelector('#input').value;
    var textoEncriptado;
    var textoEncriptado= texto.replaceAll("e","enter")
                        .replaceAll('i','imes')
                        .replaceAll('a','ai')
                        .replaceAll('o','ober')
                        .replaceAll('u','ufat');
    document.querySelector("#output").value = textoEncriptado;
    document.getElementById("sin_contenido").style.display = "none";
    document.getElementById("container-output-respuesta").style.display = "inline";

}

function desencriptarTexto(){
    numero= palabra_entrada();
    if(numero!=0){
        console.log(numero)
        return
    }
    var texto= document.querySelector('#input').value;
    var textoEncriptado;
    var textoEncriptado= texto.replaceAll("enter","e")
                        .replaceAll('imes','i')
                        .replaceAll('ai','a')
                        .replaceAll('ober','o')
                        .replaceAll('ufat','u');
    document.querySelector("#output").value = textoEncriptado;
    document.getElementById("sin_contenido").style.display = "none";
    document.getElementById("container-output-respuesta").style.display = "inline";

}
function copiar() {
    var result = document.getElementById('output');
    result.select();
    document.execCommand('copy');
    alert("Successfully copied text!");    
}

function reinicio(){
input.select(); 
output.select(); 
document.getElementById("input").value = " ";
document.getElementById("output").value = " ";
}