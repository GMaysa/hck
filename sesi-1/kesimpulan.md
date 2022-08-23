## **SESI I**
<br>

    I PUTU GEDE MAYSA PUTRA || RCTN-KS05-022

<br>


**Variable**

Merupakan suatu tempat yang digunakan untuk menampung data di memori yang mempunyai nilai yang dapat berubah–ubah selama proses program. Sesuai dengan namanya, isi dari variabel bisa berubah dari waktu ke waktu tergantung kebutuhan.

<br>

**Mengapa variable sangat penting dalam bahasa pemrograman?**

Dalam sebuah bahasa pemrograman, tentunya kita banyak sekali melihat data individual seperti nama pengguna, nilai ujian, alamat email yang terdaftar, tanggal sebuah acara, kondisi pengguna sudah login atau belum, dan lain sebagainya; kebanyakan data ini dapat kita golongkan kedalam variabel agar lebih mudah dalam membuat program.

<br>

**Mendeklarasikan variable**
    
    var namaVariable;
    let namaVariable;
    const namaVariable;

 Dalam setiap bahasa pemrograman tentu terddapat sintaks yang berbeda ketika kita akan mendeklarasikan sebuah variable. Di dalam bahasa javascript kita dapat menggunakan ***var namaVariable*** untuk mendklarasikan sebuah variable. Selain menggunakan ***var*** kita juga dapat menggunakan ***let dan const*** untuk mendeklarasikan variable. 

<br>

**Mengisi variable dengan nilai atau value**

    var namaVariable = value;

Pada suatu variable tentunya kita dapat memberi data, nilai atau value ke dalamnya. Dalam bahasa pemrograman javascript kita dapat menggunakan sintaks diatas untuk memberi value.


<br>

**Memberi nama variable dengan nilai atau value**

Dalam membuat nama variable kita tidak boleh menggunakan kata yang umum digunakan di dalam bahasa pemrograman seperti for, if, else dan juga kita tidak boleh memberi simbol atau angka didepan nama variable seperti 1food, 2food dan semacamnya.

<br>

**Tipe data**

Tipe data ialah klasifikasi data yang mengenalkan kompilator atau penerjemah bagaimana programmer bermaksud untuk menggunakan data. Sebagian besar bahasa pemrograman mendukung tipe data dasar akan bilangan integer, bilangan titik mengambang, karakter dan boolean.

_**Catatan:** Di dalam bahasa javascript tipe data akan otomatis di deteksi oleh kompiler._

<br>

**Berbagai jenis tipe data**

Di dalam bahasa pemrograman javascript terdapat beberapa tipe data seperti:

- Boolean (true, false)
- String (teks)
- Float (Bilangan pecahan)
- Integer (Bilangan bulat)
- Object

<br>

**Tipe data string dan cara memanipulasi**

Tipe data yang berisi teks disebut string JavaScript. String dapat membantu kita dalam memanipulasi dan menampilkan teks pada program JavaScript. Kita dapat memanipulasi string seperti cara dibawah:

    let nama = "Maysa";
    let message = "Apakah itu yang bernama " + nama + "?";

Output:

"Apakah itu yang bernama Maysa?"

<br>

**Tipe data boolean**

Adalah tipe data yang hanya mempunyai dua nilai, yakni benar (True) atau salah (False). Tipe data boolean sering digunakan untuk membuat alur logika program. Struktur logika seperti if, else, while, dan do while, membutuhkan nilai boolean sebagai ‘pengontrol’ alur program.

<br>

**Bagaimana mengetahui tipe data dari sebuah variable**

Dalam mencari tau tentang tipe data dalam sebuah variable kita dapat menggunakan typeof sebelum memanggil variable. Contoh:

    let tanggal = 20

    //cara pertama
    console.log(typeof tanggal)

    //cara kedua
    console.log(typeof(tanggal))

<br>

**Array**

Array adalah variabel yang mempunyai indeks sehingga dapat menyimpan sejumlah data yang bertipe sama. Dimensi array adalah jumlah indeks pada variabel array. Dalam perhitungan, array sering digunakan untuk operasi matriks.

<br>

**Jenis Array**

Selain array yang ada diatas kita juga dapat melihat bentuk array lainnya seperti array multidimensi, yakni array yang berada di dalam array. Multidimensional array digunakan untuk menyimpan nilai yang memiliki lebih dari satu kunci. Hal ini memungkinkan pengembang untuk menyimpan nilai dengan banyak kunci

**Mengisi Array**

Kita dapat memberi data ke dalam array seperti berikut

    let kode = ["React", "PHP", "Ruby"]