// action creator

export const ambilData = () => {
  const data = [
    { id: 1, namaproduk: "Kipas Angin", harga: "200000", stok: 40 },
    { id: 2, namaproduk: "Televisi", harga: "500000", stok: 20 },
    { id: 3, namaproduk: "Remote", harga: "900000", stok: 10 },
    { id: 4, namaproduk: "Computer", harga: "700000", stok: 11 },
    { id: 5, namaproduk: "Handphone", harga: "300000", stok: 22 },
    { id: 6, namaproduk: "Playstation", harga: "400000", stok: 5 },
  ];

  //action
  return {
    type: "AMBIL_DATA",
    data: data
  };
};

export const pilihProduk=(produk)=> {
  return {
    type:"PILIH_PRODUK",
    data: produk
  }
}
 