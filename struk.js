// Ambil data dari URL
const urlParams = new URLSearchParams(window.location.search);

const nama = urlParams.get("nama") || "-";
const alamat = urlParams.get("alamat") || "-";
const warna = urlParams.get("warna") || "-";
const jumlah = urlParams.get("jumlah") || "-";
const barang = urlParams.get("barang") || "-";
const total = urlParams.get("total") || "-";

// Masukkan ke dalam elemen HTML
document.getElementById("nama").textContent = nama;
document.getElementById("alamat").textContent = alamat;
document.getElementById("warna").textContent = warna;
document.getElementById("jumlah").textContent = jumlah;
document.getElementById("barang").textContent = barang;
document.getElementById("total").textContent = total;

// Ketika tombol selesai diklik
document.getElementById("selesaiBtn").addEventListener("click", function () {
  alert("Terima Kasih Sudah Berbelanja");
  window.location.href = "index.html";
});
