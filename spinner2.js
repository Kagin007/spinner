let timer = 500;

const spinner = ['\r|   ', '\r/   ', '\r-   ', '\r\\    ']

spinner.forEach(element => { setInterval(() => {process.stdout.write(element)}, timer+=50)
}); 
