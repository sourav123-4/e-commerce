import { takeLatest, put, call } from "redux-saga/effects";
import { GET_ALL_PRODUCTS, GET_LIMIT_DATA, GET_PRODUCT_DETAILS } from "../Reducer/Action-type";
import { receiveProducts, getProductDetails, getLimitProducts } from "../Reducer/Actions";
import { fetchData, fetchLimitData, fetchOneData } from "../Reducer/api";

function* getApiData(){
    try{
        const data= yield call(fetchData);
        yield put(receiveProducts(data));
    }catch(err){
        console.log(err);
    }
}

function* ongetProductDetails(action){
    try{
        const data= yield call(fetchOneData,action.id);
        yield put(getProductDetails(data));
    }catch(err){
        console.log(err);
    }
}

function* ongetLimitProducts(action){
    try{
        const data= yield call(fetchLimitData,action.number);
        yield put(getLimitProducts(data));
    }catch(err){
        console.log(err);
    }
}

export default function* mySaga(){
    yield takeLatest(GET_ALL_PRODUCTS,getApiData);
    yield takeLatest(GET_PRODUCT_DETAILS,ongetProductDetails);
    yield takeLatest(GET_LIMIT_DATA,ongetLimitProducts);
}
