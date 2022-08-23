let score = 50
console.log("Hasil variable score = " + score)

let playerName = "Budi"
console.log("Hasil variabel playerName = "+playerName)
// alert(playerName)
console.log("halo "+play)

const pi = 3.14
console.log(pi);

// const yang bukan array atau object tidak bisa diganti
const angkaKeberuntungan = 10

// sample
const angkaKeb = {id:2, name:"arif", jenkel:"Lampung"}
angkaKeb.id = 2 
angkaKeb.name = Maysa
angkaKeb.jenkel = Denpasar
console.log(angkaKeb);

const arrayNumb = [1,2,3,4]
arrayNumb.push(5)
console.log(arrayNumb)

let weight = 75
alert(weight + 15)

let originalNum = 23
let numberToBeAdded = 7
let newNum = originalNum + numberToBeAdded
alert(newNum)

alert("Hello class Modern Javascript!")

let message = 'Welcome'
alert(message)
message = 'Bye, bye'
alert(message)

message = "She's a great person"
message = 'She\'s a great person'

let htmlSnippet = '<h1 class="header">This is a header</h1>'
htmlSnippet = "<h class=\"header\">This is a header</h>"

let visitor = prompt('Siapakah namamu?')
message = 'Halo' + visitor + '. Selamat datang di kelas Modern Javascript!'
message += 'Kita senang sekali kamu mau datang berkunjung, '
message += visitor + '. Semoga kamu berkenan datang kembali untuk belajar bersama.'
alert(message)

let isRaining = true
let menuOpen = "true"
let isFinished = true

// merge arr
var fruits = ['anggur', 'melati', 'jeruk']
var buah_buahan = ['strawberry', 'pir', 'durian']
fruits.push.apply(fruits, buah_buahan)

// hapus arr
fruits.splice(0, 1)

console.log(fruits)

//mengosongkan arr
fruits = []