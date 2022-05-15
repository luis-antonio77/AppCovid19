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


    today_confirmed: 221458
    today_deaths: 25854
    today_hospitalised_patients_with_symptoms: 0
    today_intensive_care: 11059
    today_new_confirmed: 873
    today_new_deaths: 244
    today_new_hospitalised_patients_with_symptoms: 0
    today_new_intensive_care: 51
    today_new_open_cases: -1887
    today_new_recovered: 2516
    today_new_total_hospitalised_patients: 829
}