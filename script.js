window.onload = iniciar;
function iniciar(){
    let boton = document.getElementById('btnMostrar');
    boton.addEventListener('click', clickBoton)
}

//Cargar Url
async function cargarUrl(url){
    let response = await fetch(url);
    return response.json();
}

async function clickBoton(){   
    let json = await cargarUrl('https://api.covid19tracking.narrativa.com/api/2020-05-05/country/spain');
    //console.log(json);

    let estadisticas = json.dates['2020-05-05'].countries.Spain;
    console.log(estadisticas);
}