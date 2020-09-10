import { combineReducers } from "redux";

const listProductReducer = (state = [], action) => {
  if (action.type === "AMBIL_DATA") {
    return action.data;
  }

  return state;
};

const produkTerpilihReducer=(pilihan=null, action)=>{
  if(action.type==="PILIH_PRODUK"){
    return action.data
  }

  return pilihan
}

export default combineReducers({
  listProduct: listProductReducer,
  pilihan: produkTerpilihReducer
});
