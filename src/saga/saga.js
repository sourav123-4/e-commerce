import { takeLatest, put, call } from "redux-saga/effects";
import { GET_ALL_PRODUCTS  } from "../Reducer/Action-type";
import { receiveProducts } from "../Reducer/Actions";
import { fetchData } from "../Reducer/api";

function* getApiData({payload:value}){
    try{
        const data= yield call(fetchData,value);
        console.log(data);
        yield put(receiveProducts(data));
    }catch(err){
        console.log(err);
    }
}

export default function* mySaga(){
    yield takeLatest(GET_ALL_PRODUCTS,getApiData);
}
