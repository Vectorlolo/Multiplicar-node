const argv = require('./config/yargs').argv;
var colors = require('colors');


const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')



let commando = argv._[0]

switch (commando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: `.magenta + `${ archivo }`))
            .catch((e) => console.log(e));
        break;
    default:
        console.log('Comando no reconocido')

}




/* console.log(argv) */
/* let parametro = argv[2]
let base = parametro.split('=')[1]
 */