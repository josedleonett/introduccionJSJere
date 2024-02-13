// let animal = {
//     tipo: "Perro",
//     sonido: "Guau",
//     ladrar: function(){
//         for(let contador = 0; contador < 3; contador++){
//             console.log(this.sonido);
//         }
//     }
// }

// animal.ladrar();

// console.log(console.time());

let servicio = {
    nombre: "Netflix",
    moneda: "ARS",
    precio: 5,
    calcularPrecioTotalConRecargo: function(recargo){
        let resultado = this.precio + recargo;
        return resultado;
    },
    img: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://netflix.com&size=16"
}

let precioConRecargoNetflix = servicio.calcularPrecioTotalConRecargo(10);

document.getElementById("titulo").innerText = servicio.nombre;
document.getElementById("precio").innerText = `Precio: ${servicio.precio} ${servicio.moneda}`;