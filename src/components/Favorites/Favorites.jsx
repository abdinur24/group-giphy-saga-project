import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Favorite (){
    let favorite = useSelector(store => store.favorite)
}