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

rl.on('line', (line) => {
    if(line === '.exit') {
        const message = `Thank you for using File Manager, ${parsedArgsCli.username}, goodbye!`
        console.log(message)
    }

    rl.close()
})

rl.on('SIGINT', () => {
    const message = `Thank you for using File Manager, ${parsedArgsCli.username}, goodbye!`
    console.log(message)
    rl.close()
})

rl.on('close', () => {
    exit(0)
})

// async function main(line) {
//     console.log('main', line)
// }
