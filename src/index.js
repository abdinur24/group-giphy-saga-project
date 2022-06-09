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
    yield takeEvery('SET_GIF', searchGif)
    yield takeEvery
    yield takeEvery
    yield takeEvery

}


function* searchGif(action){
    try{
    const response = yield axios.post(`/api/gif`, action.payload);
    yield put({type: 'SEARCH', payload: response.data.data});
    console.log('In saga get', response.data.data);
    } catch(error){
        console.log('ERROR in GET search', error);
    }

}

function* getFav(){

}

function* addFav(){

}

function* deleteFav(){

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
