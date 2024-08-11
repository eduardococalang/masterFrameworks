
var nombre = "eduardo";
var altura = 180;

var concat = nombre + " " + altura;

/*
var datos = document.getElementById("datos");
datos.innerHTML = `
    <h1>hola soy una caja de datos</h1>
    <h2>Mi nombre es: ${nombre}</h2>
    <h3>Mi altura es : ${altura} cm </h3>
`;
*/

/*
if (altura >= 190){
    datos.innerHTML += `<h3>las personas con altura de ${altura} cm son personas altas`;
} else {
    datos.innerHTML += `<h3>las personas con altura de ${altura} cm no son las personas más altas `;
}

for(i = 0; i <= 200; i++){
    //datos de las intrucciones
    datos.innerHTML += `se ha intentado ${i} veces </br>`;
}
*/
function MuestraMiNombre(){
    var MisDatos =    
    `<h1>hola soy una caja de datos</h1>
    <h2>Mi nombre es: ${nombre}</h2>
    <h3>Mi altura es : ${altura} cm </h3>
`;
if(altura >= 190){
    datos.innerHTML += `<div class="eje1"> tu estatura de ${altura} cm es de persona alta</div>`;
}else{
    datos.innerHTML += `<div class="eje2"> tu estatura de ${altura} cm no es de persona muy alta`;
}

return MisDatos;
}

function Imprimir(){
    var datos = document.getElementById("datos");
    datos.innerHTML += MuestraMiNombre();
}

Imprimir();

var nombres = ['mama', 'papa', 'Alba'];

document.write('<h1> listado de nombres</h1>');

for(i = 0 ; i < nombres.length ; i++){
    document.write(nombres[i] + '<br/>');
}


nombres.forEach((nombre) => {
    document.write(nombre + '<br/>');
});

var coche = {
    modelo: 'seat',
    maxima: 500,
    antiguedad: 2020,
    mostrarDatos(){
        document.write(this.modelo, this.maxima, this.antiguedad)
    }
};

document.write('<h1>'+coche.modelo+' '+coche.antiguedad+'</h1>')

coche.mostrarDatos();

//promises 

var saludar = new Promise((resolve, reject) => {
     
    setTimeout(() => {
        let saludo = "hola muy buenas tardes";
       

        if(saludo){
            resolve(saludo);
        }else{
            reject('No hay saludo disponible');
        }

    }, 2000)
});

saludar.then(resultado => {
    alert(resultado);

})

.catch(err => {
    alert(err);
});







