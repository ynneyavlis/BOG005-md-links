const path = require("path");
const fs = require("fs");
const ruta = process.argv[2];

//Comprobar sincrónicamente si existe un archivo
function existePath(path){
  const pathExiste = fs.existsSync(path);
   if (!pathExiste) {
    console.error("la ruta no existe")
    return
   } 
   console.log(existePath)
}

existePath(ruta)

//evRuta= evaluando la ruta
const rutAbsolut =(mypath)=>{
 const evRuta = path.isAbsolute(mypath); 
 if (!evRuta){
  const cvRut = path.resolve(mypath);
  console.log(cvRut)
  return cvRut;
 } 
 const cvRut= mypath
 
 return cvRut
}


const buscarRutasMds = (ruta) => {
    let arrayMds = []
    if(fs.statSync(ruta).isFile() && path.extname(ruta) === '.md') {
      	arrayMds.push(ruta)
    }else if(fs.statSync(ruta).isFile() && path.extname(ruta) !== '.md'){
      console.log('este no es un archivo md');
    }else {
      const elementos = fs.readdirSync(ruta)
      let subelemtos = [] 
      elementos.forEach ((elemento)=>{
        const filtradoArchivo = path.join(ruta, elemento)
        console.log(filtradoArchivo)
        if (fs.statSync(filtradoArchivo).isDirectory()){
          subelemtos = subelemtos.concat(buscarRutasMds(filtradoArchivo))

        }
      })
      const archivoRuta = elementos.filter((elemento)=>{
        const filtradoArchivo = path.join(ruta, elemento)  
        const Archivomd = fs.statSync(filtradoArchivo).isFile() && path.extname(filtradoArchivo) === '.md'  
        console.log("filtrado",filtradoArchivo,Archivomd )   
        return Archivomd
      })
      .map((elemento)=>{
        return path.join(ruta, elemento)
      })

      //console.log('ver los elementos del directorio: ', archivoRuta);
      return archivoRuta.concat(subelemtos)
    }
    console.log(arrayMds)
    return arrayMds
  }
  console.log('ver los elementos del directorio: ', buscarRutasMds(rutAbsolut(ruta)));
  









// function mdLinks(path, options) {
//   const archivo = fs.open(path)
//   const promesa = new Promise((resolve, reject) => {
//     const resultados = []
//     // TODO: buscar como leer archivos en Javascript
//     for(let linea of archivo) {
//       // TODO: hacer un función que busque si hay enlaces en el la linea actual
//       const link = buscarLinks(links)
//       if (options.validate) {
//         // TODO: hacer una función que valide si el link funciona
//         const esValido = validarLink(enlace)
//         if (esValido) {
//           resultados.push({
//             href: '',
//             texto: '',
//             file: '',
//             statusCode: 200
//           })
//         } 
//       } else {
//         resultados.push({
//           href: '',
//           texto: '',
//           file: '',
//         })
//       }
//     }
//     resolve(resultados)
//   })
  

//   return promesa
// }

// mdLinks('ruta/al/archivo', { validate: true })
//   .then((resultado) => {
//     console.log('todo bien')
//   })
//   .catch((error) => {
//     console.error(error)
//   })