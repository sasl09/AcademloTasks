// Ejercicio Clases y Objetos

// 1. Construye la clase computadora que tenga al menos 3 propiedades por ejemplo (ram, hdd, cpu) y 3 métodos.


class Computadora{
    //Propiedad (caracteristicas del objeto)
    constructor(ram = "8 ghz", marca = "hp", resolucion = "full hd"){
        //El valor de this hace referencia al objeto que se está creando y por lo tanto
        //es una instancia de la clase. Cualquier cambio que hagamos sobre el objeto this
        this.ram = ram;
        this.marca = marca;
        this.resolucion = resolucion;
    }


    //Métodos (funciones o acciones del objeto )
    brandName(marca){
        this.marca = marca;
    }

    encender(estado){
        if(estado){
            console.log("Has encendido la Computadora");
        }else{
            console.log("Has apagado la Computadora");
        }
    }

    getResolution(resolucion){
        return this.resolucion;
    }
}

let dell = new Computadora("6 ghz", "Dell", "HD");
  dell.encender(false);
  dell.brandName("RCA");
  console.log(dell);

//
// 2. Crea la clase que tú quieras por ejemplo la clase auto y agrega 3 propiedades y 3 métodos.
//
//
class Series{
    //Propiedad (caracteristicas del objeto)
    constructor(personaje = "Tyrion Lannister", calificacion = "10/10", cadena = "HBO", genero = "sitcom"){
        //El valor de this hace referencia al objeto que se está creando y por lo tanto
        //es una instancia de la clase. Cualquier cambio que hagamos sobre el objeto this
        this.personaje = personaje;
        this.calificacion = calificacion;
        this.cadena = cadena;
        this.genero = genero;
    }


    //Métodos (funciones o acciones del objeto )
    mejorPersonaje(personaje){
        this.marca = marca;
    }

    generoEspecifico(genero){
        this.genero = genero;
    }

    recomendable(estado){
        if(estado){
            console.log("This is a good series");
        }else{
            console.log("This series sucks");
        }
    }

    whereToWatchIt(cadena){
        return this.cadena;
    }

    temporadas(numero) {
        return "Esta serie tiene "+numero+" temporadas";
    }
}

let gameOfThrones = new Series();
  gameOfThrones.recomendable(true);
  gameOfThrones.generoEspecifico("Drama");
  console.log(gameOfThrones.temporadas(8));
  console.log(gameOfThrones);

//
//
// 3. Construye la clase hija laptop que herede de la clase computadora y agrega 2 propiedades y 2 métodos más.
//


class Laptop extends Computadora{
    constructor(discosDuros = 1, puertosUsb = 2){
        super();
        this.discosDuros = discosDuros;
        this.puertosUsb = puertosUsb;
    }

    lapColor(color){
      console.log("The laptop is "+ color);

    }

    lapWarranty(warranty){
      if(warranty){
        console.log("It includes a warranty");
      }else {
        console.log("It doesn't include a warranty");
      }
    }

    microsoftOffice(estado){
        if(estado){
            console.log("Your office package is included");
        }else{
            console.log("Your office package is a 30-day trial");
        }
    }
}

let lapNueva = new Laptop(3);
lapNueva.name = "prototype";
lapNueva.puertosUsb = 4;
lapNueva.funcionamiento = {
  procesador: "i7",
  almacenamiento: "1 terabyte"
}

lapNueva.microsoftOffice(false);
lapNueva.lapWarranty(true);
console.log(lapNueva.funcionamiento.almacenamiento);
console.log(lapNueva);


// 4. Construye 3 objetos (instanciando la clase) por ejemplo para los casos de arriba podrías construir estos 3 objetos computadoraDell, autoNissan, laptopLenovo y envia los parámetros al constructor de la clase.
//

let vaio = new Laptop(6);
vaio.name = "vaio";
vaio.design= "slim";
vaio.funcionamiento = {
  procesador: "i7",
  almacenamiento: "1 terabyte"
}

console.log(vaio);



let lenovo = new Laptop(3);
lenovo.name = "lenovo";
lenovo.design= "tablet-laptop";
lenovo.funcionamiento = {
  procesador: "i5",
  almacenamiento: "500 gb"
}

console.log(lenovo);



let msi = new Laptop(4);
msi.name = "msi";
msi.design= "robust";
msi.funcionamiento = {
  procesador: "i3",
  almacenamiento: "2 terabytes"
}

console.log(msi);
// 5. Llama al menos dos métodos de cada objeto creado y cambia dos propiedades de cada objeto creado.


console.log(msi.design);
console.log(lenovo.design);
console.log(vaio.design);
console.log(msi.funcionamiento);
console.log(lenovo.funcionamiento);
console.log(vaio.funcionamiento);
msi.design = "Regular";
lenovo.design = "Regular";
vaio.design = "Regular";
msi.funcionamiento.procesador = "Unknown";
lenovo.funcionamiento.procesador = "Unknown";
vaio.funcionamiento.procesador = "Unknown";
console.log(vaio);
console.log(lenovo);
console.log(msi);
