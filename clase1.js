//ESTA ES LA FORMA DE JS DE IMPRIMIR POR CONSOLA:
//console.log("Hola mundo");

//------------ VARIABLES ---------------
//FORMA VIEJA
var miVariableAntigua = "Hola mundo var";

//FORMA NUEVA
const NUMERO_PI = 3.14;

//FORMA NUEVA ALTERNATIVA
let miVariableLet = "Hola mundo let";

//INICIALIZO/DELCARO
let nombreDeUsuario;
//ASIGNO VALOR
nombreDeUsuario = "pepe";


//REASIGNACION DE VARIABLES:
miVariableAntigua = "CHAO MUNDO VAR";

//console.log(miVariableAntigua);
//console.log(NUMERO_PI);
//console.log(miVariableLet);
//console.log(nombreDeUsuario);


//------------ TIPOS DE DATOS -------------
// string | texto
let nombre = "Miguel";
let apellido = 'Perez';
const nombreCompleto = `${nombre} ${apellido}`;
//console.log(typeof nombreCompleto);
//console.log(nombreCompleto);

// number | numero
let precioXPeso = 2500;
let peso = 30;
const precioTotal = precioXPeso * peso;
//console.log(precioTotal);
//console.log("Mi nombre es: " + nombre + " y peso " + peso + " kilogramos");

// boolean | booleano o true/false o verdadero/falso
// true == 1
// false == 0
let esAdministrador = true;
let estaEncendido = false;

// undefined | indefinido o sin asignar
let direccion;

// null | nulo
let provincia = null;

// object | objeto
let persona = {
    nombre: nombre,
    apellido: apellido,
    peso: peso,
    esAdministrador: esAdministrador,
    direcciones: {
        calle: "Principal",
        calle2: "Secondaria",
        provincia: "Cordoba",
    },
    listaDeFavoritos: [10, 5, 3]
};

let tarjeta = {
    id: 20,
    titulo: "Zapatillas Adidas",
    descripcion: "Las mejores zapatillas del mercado",
    precio: 20000,
    esFavorito: true,
}

persona.direcciones.provincia = "Chaco";

//console.log(persona);
//console.log(persona.direcciones.calle);

// array | lista o arreglo
let idsFavoritosDelUsuario = [tarjeta.id,  nombreCompleto , 40 , persona];

console.log(typeof idsFavoritosDelUsuario);
console.log(idsFavoritosDelUsuario);


//TIPOS DE DATOS RESUMEN:
// string
let miString = "Valos del String";

// number
let miNumber = 1.5;

// boolean
let miBoolean = true;

// undefined | indefinido o sin asignar
let miUndefined;

// null | nulo
let miNulo = null;

// object
let miObjeto = {
    clave: "valor",
    clave2: 10
};

// array
let miArray = [10, "Tambien acepta String", miObjeto];