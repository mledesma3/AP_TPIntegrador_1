//Menu lateral
var menu_visible=false;
let menu= document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){
        menu.style.display="block";
        menu_visible=true;
    }
    else{
        menu.style.display ="none";
        menu_visible=false;
    }
}
//ocultar menu
let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
    menu.style.display="none";
    menu_visible=false;
    }
}
//barras
function crearBarra(id_barra){
    for(i=0;i<=16;i++){
        let div =document.createElement("div");
        div.className="e";
        id_barra.appendChild(div);
    }
}
//Seleccionamos barras generales para manipularlas
let html =document.getElementById("html");
crearBarra(html);
let javascript =document.getElementById("javascript");
crearBarra(javascript);
let wordpress =document.getElementById("wordpress");
crearBarra(wordpress);
let photoshop =document.getElementById("photoshop");
crearBarra(photoshop);
let php =document.getElementById("php");
crearBarra(php);
let java =document.getElementById("java");
crearBarra(java);

//Pintar barras

let contadores = [-1,-1,-1,-1,-1,-1];
let entro = false;

//funcion que aplica las animaciones de barra habilidad
function efectoHabilidades(){
    var habilidades=document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro == false){
        entro=true;
        const intervalHtml =setInterval(function(){
            pintarBarra(html,16,0,intervalHtml);
        },100);
        const intervalJS =setInterval(function(){
            pintarBarra(javascript,11,1,intervalJS);
        },100);
        const intervalWordpress =setInterval(function(){
            pintarBarra(wordpress,11,2,intervalWordpress);
        },100);        
        const intervalPhotoshop =setInterval(function(){
            pintarBarra(photoshop,11,3,intervalPhotoshop);
        },100);     
        const intervalPhp =setInterval(function(){
            pintarBarra(php,11,4,intervalPhp);
        },100);  
        const intervalJava =setInterval(function(){
            pintarBarra(java,11,5,intervalJava);
        },100);  
    }
}
function pintarBarra(id_barra,cantidad,indice,interval){
    contadores[indice]++;
    x=contadores[indice];
    if(x<cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#940253";
    }
    else{
        clearInterval(interval)
    }
}

window.onscroll = function(){
    efectoHabilidades();
}