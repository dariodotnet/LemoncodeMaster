const maria = {name: "Maria", surname: "Perez", country: "SPA"};
const luisa = {name: "Luisa", age: 31, married: true};

const books = [
    {title: "Harry Potter y la piedra filosofal", isRead: true},
    {title: "Canción de hielo y fuego", isRead: false},
    {title: "Devastación", isRead: true},
]

//CLONE
function clone(source) {
    return Object.assign({}, source)
};

//MERGE
function merge(source, target){
    return Object.assign({}, source, target);
}

//READ BOOKS
function isBookRead(books, titleToSearch) {
    let result = false;
    if(books.find(v => v.title === titleToSearch)){
        return books.find(v => v.title === titleToSearch).isRead;
    }    
    return result;
}