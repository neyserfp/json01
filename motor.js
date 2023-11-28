window.addEventListener("load", function(){

    var conexion =new XMLHttpRequest();

    conexion.open("GET","./coches.json");
    

    conexion.send();

    conexion.onreadystatechange = function(){
        if(conexion.readyState==4 && conexion.status==200)
        {
            let coches=JSON.parse(conexion.responseText);

            coches.forEach(function(coche){
                console.log(coche);

                let d3 = document.createElement("div");
                d3.className = "col-6 fondo";
        
                let img1 = document.createElement("img");
                img1.src = "./img/"+coche.imagen;
                img1.className = "col-10 wd-100 m-2 img01";
        
                let h1 = document.createElement("h4"); 
                h1.className = "px-2";
                h1.textContent = coche.marca;

                let p1 = document.createElement("p"); 
                p1.className = "px-2";
                p1.textContent = coche.modelo;

                let p2 = document.createElement("p"); 
                p2.className = "px-2";
                p2.textContent = coche.kilometros+" Km";

                let p3 = document.createElement("p"); 
                p3.className = "px-2";
                p3.textContent = coche.anio;

                let p4 = document.createElement("p"); 
                p4.className = "px-2";
                p4.textContent = coche.precio+" €";

                let p5 = document.createElement("p"); 
                p5.className = "px-2";
                p5.textContent = coche.caracteristicas.motor;

                d1.appendChild(d3);
                d3.append(img1, h1, p1,p2,p3,p4);

            });
            
        }
    }

 


        



    

    
});


/*
var puerta = {
    "id": 1,
    "nombre": "puerta de roble",
    "precio": 250.5,
    "etiquetas": ["puerta", "madera", "roble"]
}

console.log(puerta.etiquetas);
console.log(puerta.etiquetas[2]);

*/

