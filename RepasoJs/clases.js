
class Coche {
    constructor(modelo, velocidad, antiguedad){
        this.modelo = modelo;
        this.velocidad = velocidad;
        this.año = antiguedad;
    }
aumentarVelocidad(){
    this.velocidad += 1;
}

reducirVelocidad(){
    this.velocidad -= 1;
}

}

var coche1 = new Coche('bwm', 200, 2017);
var coche2 = new Coche('audi', 200, 2017);
var coche3 = new Coche('ford', 200, 2017);
var coche4 = new Coche('seat', 200, 2017);

console.log(coche1);
console.log(coche2);

document.write('<h3> el coche con modelo ' + coche1.modelo + '<h3> tiene una velocidad de ' + coche1.velocidad);
coche1.aumentarVelocidad();
coche1.aumentarVelocidad();
coche1.aumentarVelocidad();
coche1.aumentarVelocidad();
document.write('<h3> el coche con modelo ' + coche1.modelo + '<h3> tiene una velocidad de ' + coche1.velocidad);

//herencias

class Autobus extends Coche{
    constructor(modelo, velocidad, año){
        super(modelo, velocidad, año);
        this.altura = 5;

    }
    mostrarAltura(){
        return 'la altura del bus es de ' + this.altura;
    }
}

var autobus1 = new Autobus ('IVECO', 120, 2020);

console.log(autobus1);

autobus1.aumentarVelocidad();
autobus1.aumentarVelocidad();
autobus1.aumentarVelocidad();
autobus1.aumentarVelocidad();

document.write('<h3> el bus con modelo ' + autobus1.modelo + '<h3> tiene una velocidad de ' + autobus1.velocidad);
document.write('<h4> la altura de este bus es de ' + autobus1.mostrarAltura() + ' metros');