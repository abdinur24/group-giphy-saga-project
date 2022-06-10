import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {logger} from 'redux-logger'
import {Provider} from 'react-redux'
import createSagaMiddleware from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


// Saga Generator
const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
    // SEARCH Saga
    yield takeEvery('SET_GIF', searchGif);
    //FAV Saga
    yield takeEvery('SET_FAV', getFav);
    yield takeEvery('ADD_FAV', addFav);
    yield takeEvery('DELETE_FAV', deleteFav);

}


function* searchGif(action){
    try{
    const response = yield axios.post(`/api/gif`, action.payload);
    yield put({type: 'SEARCH', payload: response.data.data});
    console.log('In saga get GIF', response.data.data);
    } catch(error){
        console.log('ERROR in GET search', error);
    }

}

function* getFav(){
   
    try{
        const response = yield axios.get('/api/favorite');
        yield put({type: 'FAV', payload: response.data});
        console.log('In saga GET FAV', response.data);
    } catch(error){
        console.log('ERROR in GET favs', error);
    }

}

function* addFav(action){
    try{
        yield axios.post('/api/favorite', {url: action.payload});
        yield put({type:'SET_FAV'});
    } catch(error){
        console.log('ERROR in ADD fav', error);
    }

}

function* deleteFav(action){
    try{
        yield axios.delete(`/api/favorite/${action.payload}`);
        yield put({type:'SET_FAV'});
    } catch(error){
        console.log('Error in DELETE fav', error);
    }

}


const search = (state = [], action)=>{
    if(action.type === 'SEARCH') {
        return action.payload;
    }
    return state; 
}

const favorite = (state = [], action)=>{
    if(action.type === 'FAV') {
        return action.payload;
    }
    return state; 
}

const storeInstance = createStore(
    combineReducers({
        search,
        favorite
    }),
     applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}>
    <App />
    </Provider>,
document.getElementById('root'));
