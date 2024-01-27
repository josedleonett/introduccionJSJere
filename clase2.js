//-----------------------//
//OPERADORES MATEMATICOS:
//-----------------------//
let suma = 15 + 20;
let otroNumero = 10.5;
//console.log(`el resultado de mi suma es: ${suma + otroNumero}`);

let multiplicacion = 2 * 5;
//console.log(`el resultado de mi multiplicacion es: ${multiplicacion}`);

let resta = 10 - 5;
//console.log(`el resultado de mi resta es: ${resta}`);

let division = 10 / 5;
//console.log(`el resultado de mi division es: ${division}`);

let resto = 10 % 5;
//console.log(`el resultado de mi resto es: ${resto}`);

//-----------------------//
//OPERADORES LOGICOS:
//-----------------------//
// Igualdad: == o con === para igualdad exacta
//console.log(2 == 2);
//console.log(2 == "2");
//console.log(2 === "2");
const miNumeroA = 2;
const miNumeroB = "2";
//console.log(miNumeroA === miNumeroB);

// desigualdad/diferencia: != o !==
//console.log(10 != 5);
// console.log(10 != 10);
// console.log(10 != "10");
// console.log(10 !== "10");

// Y o AND &&
const estaRegistrado = false;
const esAdministrador = true;
const noEstaBloqueado = false;
//console.log(`¿El usuario puede ver la pagina?: ${estaRegistrado && esAdministrador && noEstaBloqueado}`);

// O o OR ||
let correo = "pepito@correo.com";
const telefono = "+5415555555";
const perfilLinkedin = "https://linkedin.com/in/juan";
//console.log(`Muestrame dato de contacto: ${correo || telefono || perfilLinkedin}`);

//-----------------------//
//ESTRUCTURAS DE CONTROL:
//-----------------------//
//if-else | Si
if(estaRegistrado && noEstaBloqueado && !esAdministrador) {
    //console.log("Bienvienido usuario comun, puedes ingresar");
} else if (estaRegistrado && noEstaBloqueado && esAdministrador) {
    //console.log("Bienvienido administrador, puedes ingresar")
} else {
    //console.log("Por favor registrese para poder ingresar a la pagina");
};

if (estaRegistrado) {
    if (noEstaBloqueado) {
        if (esAdministrador) {
            //return console.log("Bienvienido administrador, puedes ingresar")
        }
        //return console.log("Bienvienido usuario comun, puedes ingresar")
    }
    //return console.log("No puedes ingresar porque estas bloqueado")
} else {
    //return console.log("debe registrarse primero para poder ingresar");
}

//ESTRUCTURAS DE REPETICION/ITERACION:
//FOR | Por
for(let i = 0; i <= 10 ; i++){
    //console.log("Hola este es mi mensaje numero: " + i);
};

//WHILE | Mientras:
let i = 0;
while(i < 10){
    //console.log("Hola este es mi mensaje numero: " + i);
    i++
};

//DO WHILE | Haz mientras
let j = 0;
 do {
    //console.log("Hola este es mi mensaje numero: " + j);
    j++
 } while (j < 10);

 // FOR-EACH | por cada elemento de una lista repite codigo
let listasDeZapatillas = ["adidas", "puma", "gucci", "topper"];
//console.log(listasDeZapatillas.length);
listasDeZapatillas.forEach((zapatilla)=>{
    //console.log("marca: " + zapatilla);
});

//FUNCIONES:
function deciMiNombreCompleto(nombre, apellido, edad) {
    //codigo a ejecutar cuando invoque a la funcion
    if(edad > 100){
        console.log(`Disculpe, ${nombre} ${apellido}, pero seguramente no estes viva.`);
    } else if (edad <=0) {
        console.log(`Disculpe, ${nombre} ${apellido}, pero todavia no haz nacido.`);
    } else if (edad >= 18){
        console.log(`Hola, me llamo: ${nombre} ${apellido}. Y tengo ${edad} años`);
    } else {
        console.log(`Hola, ${nombre} ${apellido}. Tenes ${edad} años, y como eres menor de edad, no puedo imprimir tu nombre`);
    }
};

// deciMiNombreCompleto("Pedro", "Martinez", 25);
// deciMiNombreCompleto("Juan", "Gonzalez", 16);
// deciMiNombreCompleto("Miguel", "Servetto", 75);
// deciMiNombreCompleto("Carlos", "Messi", -20);
// deciMiNombreCompleto("Mirta", "Legrand", 120);

let listaDeZapatillaParaTarjetas = [
    {
        titulo: "Zapatilla Nike Air",
        descripcion: "Esta es la zapatilla más cómoda de Nike",
        precio: 30000.00,
        esFavorito: false,
        cantidadDeCuotasQueSePuedenPagar: [3, 6, 12]
    },
    {
        titulo: "Zapatilla Puma Speed",
        descripcion: "Esta es la zapatilla más rápida de Puma",
        precio: 20000.00,
        esFavorito: true,
        cantidadDeCuotasQueSePuedenPagar: [3, 6, 9]
    },
    {
        titulo: "Zapatilla Reebok Classic",
        descripcion: "Esta es la zapatilla más clásica de Reebok",
        precio: 15000.00,
        esFavorito: false,
        cantidadDeCuotasQueSePuedenPagar: [3, 6]
    },
    {
        titulo: "Zapatilla Under Armour Flow",
        descripcion: "Esta es la zapatilla más ligera de Under Armour",
        precio: 35000.00,
        esFavorito: true,
        cantidadDeCuotasQueSePuedenPagar: [3, 6, 9, 12]
    },
];

function calculadoraDeCuotas(precioTotal, numeroCuotas) {
    // let precioXCuota = precioTotal / numeroCuotas;
    // return precioXCuota;
    return precioTotal / numeroCuotas;
}

// let miPrecioPorCuota = calculadoraDeCuotas(
//     listaDeZapatillaParaTarjetas[1].precio,
//     listaDeZapatillaParaTarjetas[1].cantidadDeCuotasQueSePuedenPagar[0]
//     );

// console.log(miPrecioPorCuota);

function impresorDeCuotasPosZapatillas(listaDeZapatillas){
    listaDeZapatillas.forEach((zapatilla)=>{
        let precioTotalDeLaZapatilla = zapatilla.precio;
        let listaDeCuotas = zapatilla.cantidadDeCuotasQueSePuedenPagar;
        console.log(`Nombre de la zapatilla: ${zapatilla.titulo}`);
        console.log(`La cantidad de cuotas que podes pagar:`);

        listaDeCuotas.forEach((cuota) => {
            console.log(`${cuota} cuotas de $ ${calculadoraDeCuotas(precioTotalDeLaZapatilla, cuota)}`);
        })

    })
};

impresorDeCuotasPosZapatillas(listaDeZapatillaParaTarjetas);