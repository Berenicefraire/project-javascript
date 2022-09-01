function myFunction(){
    let nombreElement = document.getElementById("name");
    let nombreValue = nombreElement.value;
    if(nombreValue.length !== 0 && nombreValue !== " ") {
        console.log("cargando...");
        fetchData(nombreValue)
        .then(response => response.json())
        .then(data => {
            makeTable(data);
            console.log("termine...");
        });
    } else {
        alert("Debes llenar el formulario");
    }
    return false;
}
//fetchData ahora puede tomar propiedades de una promesa
function fetchData(url){
    //fetchData regresa una promesa
    return fetch(url);
} 

function makeTable(objData){
    let tableRef = document.getElementsByTagName("tbody")[0];

    for(obj of objData) {
        
        //para crear el cuerpo de la tabla
        let fila = document.createElement("tr");
        
        //crea nodos te texto con el contenido de cada celda de la tabla
        let td = document.createElement('td');

        td.innerText = obj.id;
        fila.appendChild(td);

        td = document.createElement("td");
        td.innerText = obj.name;
        fila.appendChild(td);

        td = document.createElement("td");
        td.innerText = obj.username;
        fila.appendChild(td);

        tableRef.appendChild(fila);
    }
}
