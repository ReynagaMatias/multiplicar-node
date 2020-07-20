const argv = require('./config/yargs').argv;
const colors = require('colors');


const { crearArchivo } = require('./multiplicar/multiplicar');
const { listar } = require('./multiplicar/multiplicar')

let comando = argv._[0];
switch (comando) {
    case 'listar':
        listar(argv.base, argv.limite)
            .then(listar => listar)
            .catch(err => console(err));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:`, `${archivo}`.green))
            .catch(err => console.log(err));
        break;
    default:
        console.log('comando no reconocido');
}
//console.log(process.argv);
//let argv2 = process.argv;

//console.log('limite', argv.limite);
/* let parametro = argv[2];
let base = parametro.split('=')[1]; */