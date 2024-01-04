//Fungsi rumus keliling
function hitungKeliling() {
    var sisiA = document.getElementById('sisiA').value;
    var sisiB = document.getElementById('sisiB').value;
    var sisiC = document.getElementById('sisiC').value;

    var hasil = parseFloat(sisiA) + parseFloat(sisiB) + parseFloat(sisiC);
    document.getElementById('hasilKeliling').innerText = "Keliling Segitiga: " + hasil;
}
//fungsi untuk reset form pada halaman keliling
function resetForm() {
    document.getElementById('sisiA').value = '';
    document.getElementById('sisiB').value = '';
    document.getElementById('sisiC').value = '';
    document.getElementById('hasilKeliling').innerText = '';
}
//Fungsi rumus luas
function hitungLuas() {
    var alas = document.getElementById('alas').value;
    var tinggi = document.getElementById('tinggi').value;

    var luas = 0.5 * parseFloat(alas) * parseFloat(tinggi);

    document.getElementById('hasilLuas').innerText = "Luas Segitiga: " + luas;
}
//Fungsi untuk reset form pada halaman luas
function resetForm() {
    document.getElementById('alas').value = '';
    document.getElementById('tinggi').value = '';
    document.getElementById('hasilLuas').innerText = '';
}

