//This is a promise that will validate if a string has been entered otherwise it will throw an error:

function comprobarString(cadenaTexto){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(typeof cadenaTexto === "string") {
        resolve(cadenaTexto);
      }else{
        reject("No es dato tipo string");
      }
    }, 500)
  })
}

// comprobarString(523).then( cadena => console.log(cadena)).catch(error => console.log(error))


//Same as above, but with async/await:

(async function(cadena){
  try{
    let resultado = await comprobarString(cadena);
    console.log(resultado);
  }catch(error){
    console.log(error);
  }
})("fuck you")
