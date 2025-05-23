// Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. Disini kamu diminta untuk membuat format tanggal. Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.

// Gunakan switch case untuk kasus ini!

// Contoh:

// let hari = 21; let bulan = 1; let tahun = 1945;

// Maka hasil yang akan tampil di console adalah: '21 Januari 1945';

//tips gunakan keyword ini di google "conditional switch case javascript"
//dan mulailah membaca dan mencontek di stackoverflow xixixi

let tanggal = 12; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
let bulan = "02"; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
let tahun = 2001; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)
let nameMonth = ''

//code switch case kamu disini
switch (bulan) {
    case '01': nameMonth = 'Januari'; break;
    case '02': nameMonth = 'Februari'; break;
    case '03': nameMonth = 'Maret'; break;
    case '04': nameMonth = 'April'; break;
    case '05': nameMonth = 'Mei'; break;
    case '06': nameMonth = 'Juni'; break;
    case '07': nameMonth = 'Juli'; break;
    case '08': nameMonth = 'Agustus'; break;
    case '09': nameMonth = 'September'; break;
    case '10': nameMonth = 'Oktober'; break;
    case '11': nameMonth = 'November'; break;
    case '12': nameMonth = 'Desember'; break;
    default: console.log('Invalid bulan');
}

if (tanggal < 1 || tanggal > 31) {
    console.log('Invalid tanggal');
} else if (tahun < 1900 || tahun > 2200) {
    console.log('Invalid tahun');
} else {
    console.log(`${tanggal} ${nameMonth} ${tahun}`);
}