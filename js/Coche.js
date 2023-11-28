class Coche{

    constructor(marca, modelo, kilometros, anyo, precio, motor, imagen, disponible){
        this.marca = marca;
        this.modelo = modelo;
        this.kilometros = kilometros;
        this.anyo = anyo;
        this.precio = precio;
        this.motor = motor;
        this.imagen = imagen;
        this.disponible = disponible;
    }

    verCoches = function(){
        let div = document.createElement("div");
        let imagen = document.createElement("img");
        imagen.src = "./img/" + this.imagen;
        let marca = document.createElement("p");
        marca.innerText = "Marca: " + this.marca;
        let modelo = document.createElement("p");
        modelo.innerText = "modelo: " + this.modelo;
        let kilometros = document.createElement("p");
        kilometros.innerText = "kilometros: " + this.kilometros;
        let anyo = document.createElement("p");
        anyo.innerText = "Año: " + this.anyo;
        let precio = document.createElement("p");
        precio.innerText = "precio: " + this.precio;
        let motor = document.createElement("p");
        motor.innerText = "motor: " + this.motor;
        div.append(imagen, marca, modelo, kilometros, anyo, precio, motor);
        return div;
    }
}