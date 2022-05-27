import { takeLatest, put, call } from "redux-saga/effects";
import { ADD_NEW_PRODUCT, GET_ALL_PRODUCTS, GET_CATEGORY_DATA, GET_LIMIT_DATA, GET_PRODUCT_DETAILS } from "../Redux/Action-types/productActionType";
import { receiveProducts, getProductDetails, getLimitProducts, getCategoryProducts, addNewProduct } from "../Redux/Actions/productActions";
import { fetchData, fetchLimitData, fetchOneData, fetchCategoryData, addNewData } from "../Redux/Api/productApi";

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

function* ongetCategoryProducts(action){
    try{
        const data= yield call(fetchCategoryData,action.category);
        yield put(getCategoryProducts(data));
    }catch(err){
        console.log(err);
    }
}

function* onaddNewProducts(action){
    try{
        const data= yield call(addNewData);
        yield put(addNewProduct(data));
    }catch(err){
        console.log(err);
    }
}

export default function* mySaga(){
    yield takeLatest(GET_ALL_PRODUCTS,getApiData);
    yield takeLatest(GET_PRODUCT_DETAILS,ongetProductDetails);
    yield takeLatest(GET_LIMIT_DATA,ongetLimitProducts);
    yield takeLatest(GET_CATEGORY_DATA,ongetCategoryProducts);
    yield takeLatest(ADD_NEW_PRODUCT,onaddNewProducts);
}
