class Usuario{
    constructor(nombre, apellido){
        this.name = nombre.toString();
        this.lastname = apellido.toString();
        this.books= [];
        this.pets= [];
    }
    getFullName=()=>`Nombre completo ${this.name} ${this.lastname}`
    addMascota=(mascota)=>this.pets.push(mascota)
    countMascotas=()=>this.pets.length
    addBook=(nombre, autor)=>this.books.push({titulo: nombre, escritor: autor})
    getBookNames=()=>this.books.map(book=>book.titulo)
}

// Cargamos un usuario
let alumno = new Usuario('Gustavo', 'Ferreri')

// Devolvemos por consola
console.log(alumno.getFullName())

// Agregamos un par de mascotas
alumno.addMascota('Perro')
alumno.addMascota('Gato')

// Mostramos por consola las mascotas
console.log(`Cantidad de mascotas ${alumno.countMascotas()}`)

// Cargamos libros
alumno.addBook('Padre pobre Padre rico', 'Robert Kiyosaki')
alumno.addBook('Vaca purpura', 'Juan Diego Gomez')
alumno.addBook('Habitos de rico', 'Juan Diego Gomez')

// Devolvemos Los titulos de los libros
console.log(alumno.getBookNames())

