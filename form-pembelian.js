// AMBIL DATA NAMA BARANG DAN HARGA DARI URL
const urlParams = new URLSearchParams(window.location.search);
const productName = urlParams.get("name");
const productPrice = urlParams.get("price");
const namaBarangInput = document.getElementById("namaBarang");
const jumlahInput = document.getElementById("jumlah");
const totalHargaDisplay = document.getElementById("totalHarga");

// MASUKKAN NAMA BARANG KE INPUT
if (productName) {
  namaBarangInput.value = productName;
}

// HITUNG TOTAL HARGA
function updateTotal() {
  const jumlah = parseInt(jumlahInput.value);
  const price = parseInt(productPrice?.replace(/[^\d]/g, "")) || 0;
  const total = jumlah * price;
  totalHargaDisplay.textContent = `Rp ${total.toLocaleString("id-ID")}`;
  return total;
}

// UPDATE TOTAL SAAT JUMLAH BERUBAH
jumlahInput.addEventListener("input", updateTotal);
updateTotal(); // inisialisasi awal

// RESET FORM
function resetForm() {
  document.getElementById("purchaseForm").reset();
  namaBarangInput.value = productName || "";
  updateTotal();
}

// HANDLE SUBMIT FORM
document
  .getElementById("purchaseForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Panggil fungsi validasi
    if (!isFormValid()) {
      return; // Stop kalau validasi gagal
    }

    // Ambil data form
    const nama = document.getElementById("nama").value;
    const alamat = document.getElementById("alamat").value;
    const warna = document.getElementById("warna").value;
    const jumlah = document.getElementById("jumlah").value;
    const barang = namaBarangInput.value;
    const total = totalHargaDisplay.textContent;

    // Buat URL untuk struk
    const strukURL = `struk.html?nama=${encodeURIComponent(
      nama
    )}&alamat=${encodeURIComponent(alamat)}&warna=${encodeURIComponent(
      warna
    )}&jumlah=${encodeURIComponent(jumlah)}&barang=${encodeURIComponent(
      barang
    )}&total=${encodeURIComponent(total)}`;

    // Pindah ke halaman struk
    window.location.href = strukURL;
  });
