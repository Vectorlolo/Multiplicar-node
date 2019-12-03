const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime por consola la tabla de multiplicar', opts)
    .command('crear', 'Genera por consola la tabla de multiplicar con limite', opts)
    .help()
    .argv;



module.exports = {
    argv
}