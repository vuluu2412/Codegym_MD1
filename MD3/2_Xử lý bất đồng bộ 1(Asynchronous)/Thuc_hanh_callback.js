function download(url,callback){
setTimeout(()=>{
    console.log(`Downloading ${url}...`)
    callback(url)
},1000)
}
function process(picture){
    console.log(`Processing ${picture}`)
}
let url = 'https://www.javascripttutorial.net/pic.jpg';
download(url,process);



function greet(name, callback) {
    console.log('Hi' + ' ' + name);
    callback();
}

function callMe() {
    console.log('I am callback function');
}

greet('Peter', callMe);