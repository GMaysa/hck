// penulisan object 1
// const user = {}
// user.name = 'Adi Nugroho'
// user.handle = '@adinugroho'
// user.location = 'Jakarta, Indonesia'

// penulisan object 2
const user = {
    name: 'Adi Nugroho',
    handle: '@adinugroho',
    location: 'Jakarta, Indonesia'
}

// extract
// const {name, handle, location} = user
// console.log(name, handle, location)

// Destructuring Function
const getUser = () =>{
    return {
        name: 'Adi Nugroho',
        handle: '@adinugroho',
        location: 'Jakarta, Indonesia'
    }
}

// const { name, handle, location } = getUser()
// console.log(name, handle, location)

const csv = "1997,Ford,F350,Must Sell!"
const [year, make, model, description] = csv.split(',')

const user_ = {
    n: 'Adi Nugroho',
    h: '@adinugroho',
    l: 'Jakarta, Indonesia'
}

const { n:name, h:handle, l:location } = getUser()
console.log(name, handle, location)

// Function
function add (a,b){
    return a+b
}

const add_ = function (a, b){
    return a+b
}

const add__ = (a,b) => {
    return a+b
}


function Person() {
    this.age = 0
    setInterval(function(){
        console.log(this.age)
        this.age++
    }, 1000)
}

function Person() {
    this.age = 0
    setInterval(() =>{
        console.log(this.age)
        this.age++
    }, 1000)
}

const p = new Person()

// HighOrder Funct
setInterval(() =>{
    console.log("TICK")
}, 1000)

const printTick = () => {
    console.log("TICK");
}
setInterval(printTick, 1000)

// Filter
const animals = [
    {name: "Fluffy", species:"cat"},
    {name: "Bob", species:"dog"},
    {name: "Marcell", species:"bunglon"}
]

// cara assign FILTER ribet
let dog = []
for(let i=0; i<animals.length; i++){
    if (animals[i].species === 'dog'){
        dog.push(animals[i])
    }
}

// cara assign FILTER cepet
let cat =  animals.filter((bob) => bob.species === 'cat')
console.log(cat)

// Map
let animalsName = animals.map((name) => name.name)
console.log(animalsName)

// Reduce
let orders = [
    { total : 325},
    { total : 512},
    { total : 128},
    { total : 32}
]

let total = orders.reduce((total, order) => total + order.total, 0)

console.log(total)