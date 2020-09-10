import React from "react";
import { connect } from "react-redux";

function DetailProduk({ product }) {
  if (!product) {
    return (
      <div>
        <h3>PilihProduct...</h3>
      </div>
    );
  }

  const { id, namaproduk, harga, stok } = product;

  return (
    <div>
      <h4>Nama Produk : {namaproduk}</h4>
      <p>ID: {id}</p>
      <p>Harga : Rp.{harga}</p>
      <p>Stok : {stok}</p>
    </div>
  );
}

const stateToProps = (state) => {
  return { product: state.pilihan };
};

export default connect(stateToProps)(DetailProduk);
