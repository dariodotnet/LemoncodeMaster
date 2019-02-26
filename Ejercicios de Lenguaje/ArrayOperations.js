
const names = ['Dario', 'Gema', 'Marta', 'Pedro', 'Pablo'];
const cities = ['Malaga', 'Sevilla', 'Cadiz', 'Jaen', 'Almeria', 'Granada', 'Cordoba'];

//HEAD

const head = (arg) => arg[0];

//TAIL

const tail = (arg) => {
    let result = [...arg];
    result.shift();
    return [...result];
}

//INIT

const init = (arg) => {    
    let result = [...arg];
    result.pop();
    return [...result];
}

//LAST
const last = (arg) => arg[arg.length - 1];

console.log(`HEAD result : ${head(names)}\nTAIL result : ${tail(names)}\nINIT result : ${init(names)}\nLAST result : ${last(names)}`);

//CONCAT

const concat = (array, secondArray) => [...array.concat(secondArray)];

const concatMultiple = (...args) => args.reduce((acc, val) => [...acc, ...val]);

console.log(concat(names, cities));
console.log(concatMultiple(names, cities, names, cities));