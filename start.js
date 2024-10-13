import { argv, stdin, stdout, exit } from 'process'
import { createInterface } from 'readline/promises'

const argsCli = argv.slice(2)

const parsedArgsCli = {};

argsCli.forEach((arg) => {
    if (arg.startsWith('--')) {
        const [key, value] = arg.split('=')
        const name = key.replace(/^--/, '') 
        parsedArgsCli[name] = value || true
    }
})

if(parsedArgsCli.username) {
    console.log(`Welcome to the File Manager, ${parsedArgsCli.username}!`)
}


const rl = createInterface({
    input: stdin,
    output: stdout,
    // completer: main
});

// rl.on('line', (line) => {
//     console.log('mainOn', line)
// })

// async function main(line) {
//     console.log('main', line)
// }

// const argsCli = argv.slice(2)

// const parsedArgsCli = {};

// argsCli.forEach((arg) => {
//     if (arg.startsWith('--')) {
//         const [key, value] = arg.split('=')
//         const name = key.replace(/^--/, '') 
//         parsedArgsCli[name] = value || true
//     }
// })

// if(parsedArgsCli.username) {
//     console.log(`Welcome to the File Manager, ${parsedArgsCli.username}!`)
// }
