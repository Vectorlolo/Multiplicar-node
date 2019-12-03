const fs = require('fs');
var colors = require('colors');

let listarTabla = (base, limite) => {

    console.log('==================================='.magenta)
    console.log(`========tabla del ${ base }========`.magenta)
    console.log('==================================='.magenta)

    for (i = 0; i <= limite; i++) {
        console.log(`${ base } * ${ i } = ${ base * i }\n`)
    }

}


let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`${base} no es un número`);
            return;
        }
        if (!Number(limite)) {
            reject(`${limite} no es un número`)
        }

        let data = ''

        for (i = 0; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`
        }


        fs.writeFile(`tabla/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla ${ base }.txt`)
        });
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}