window.addEventListener("load", function(){

    let peticion = new XMLHttpRequest();
    peticion.onreadystatechange = continuar;
    peticion.open("GET", "coches.json");
    peticion.send();

    function continuar() {
        if (peticion.readyState == 4) {
            if (peticion.status == 200) {

                let coches = JSON.parse(peticion.responseText);
                console.log(coches);
                coches.forEach(coche => {
                    let cadacoche = new Coche(coche.marca, coche.modelo, coche.kilometros, coche.anyo, coche.precio, coche.motor, coche.imagen, coche.disponible);
                    document.querySelector("#d1").appendChild(cadacoche.verCoches());
                    //document.querySelector("#d2").appendChild(cadacoche.verCoches());
                    //cadacoche.verCoches();
                });

            }
        }
    }
    
});



