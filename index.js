const {rutAbsolut,buscarRutasMds,leerTodosArchivos,validarLink,} = require("./funciones.js");

const ruta = process.argv[2]; //módulo que permite capturar argumentos a través de la línea de comandos y se guarda como un array.


function mdLinks(pathUser, options = { validate: false }) {
    return new Promise((resolve, reject) => {
        const pathAbsolute = rutAbsolut(pathUser)
        const arrayMds = buscarRutasMds(pathAbsolute)
        if ( options.validate===true){
            leerTodosArchivos(arrayMds)
              .then((res) => validarLink(res))
              .then((res) => resolve(res));
        }else{
          
          leerTodosArchivos(buscarRutasMds(rutAbsolut(ruta)))
          .then((res) => resolve(res));
        }
       
    })
}

   mdLinks(ruta)
   .then((res) => res)
   .catch((err) => err);

  
  
  module.exports = { mdLinks}



