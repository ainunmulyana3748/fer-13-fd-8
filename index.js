var arrayOfNames = ["Bryan", "Axel", "Daniel", "Chelsea", "Ethan"];

function ascending() {
  let sort = arrayOfNames.sort();
  console.log(sort);
}

function descending() {
  let reverse = arrayOfNames.reverse();
  console.log(reverse);
}

function searchArray() {
  let search = document.getElementById("inputName"); //pengambilan nama yg kita input

  let hurufKecil = arrayOfNames.map((data) => {
    //mengecilkan semua huruf pada array, buat dimasukkan ke fungsi if else, agar pengguna bisa search nama menggunakan huruf kecil atau besar
    return data.toLowerCase();
  });

  if (arrayOfNames.includes(search.value) || hurufKecil.includes(search.value)) {
    //disini saya menggunakan logika operator atau, agar pengguna bisa input menggunakan huruf besar/kecil
    console.log(`iya ada murid yang bernama ${search.value} disini`);
  } else {
    console.log(`tidak ada murid yang bernama ${search.value} disini`);
  }
}
