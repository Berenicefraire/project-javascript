function myFunction(){
    let nombreElement = document.getElementById("name");
    let nombreValue = nombreElement.value;
    let res = '';
    if(nombreValue.length !== 0 && nombreValue !== " ") {
        console.log("cargando...");
        fetchData(nombreValue)
        .then(response => response.json())
        .then(data => {
            res = data;
            console.log(res);
            console.log("termine...");
        });
    } else {
        alert("Debes llenar el formulario");
    }
    return false;
}

function fetchData(url){
    //fetchData regresa una promesa
    return fetch(url);
} 
