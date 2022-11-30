const { mdLinks } = require('./index.js')
const {tLink}= require('./funciones.js')
const { eLink}= require('./funciones.js')

const ruta = process.argv[2];
const arg= process.argv

const cli = (ruta,arg) =>{
    if(ruta===undefined){       
    } else if (arg.includes('--stats') && arg.includes('--validate')){
       (mdLinks(ruta, (options = { validate: true })).then((res) =>{console.table(eLink(res))}))
   }else if(arg.includes('--stats')){
       (mdLinks(ruta, (options = { validate: true })).then((res) =>{console.table(tLink(res))}))
   } else if(arg.includes('--validate')){
    (mdLinks(ruta,options ={ validate: true }).then((res) => {console.log((res))}))
   }else if ( arg!='--stats' && arg !='--validate' && arg!=undefined ){
      mdLinks(ruta, (options = { validate: false })).then((res) => {
        console.log(res);
      });
       // console.log('la opcion no es valida ,intenta con : --stats ,--validate o --stats --validate ')
       }
   
}


cli(ruta,arg)

