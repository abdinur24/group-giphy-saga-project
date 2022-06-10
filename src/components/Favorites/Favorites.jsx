import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import FavoriteItem from './FavoriteItem';

function Favorites() {
    let favorite = useSelector(store => store.favorite);
    console.log('IN fav', favorite)
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: 'SET_FAV', })
    }, [])


    return (
        <div>
            <h2>Favorites</h2>
            <div className="gif-container">
                {favorite.map((fav) => <FavoriteItem favorite={fav} />)}
            </div>
        </div>
    )
}


export default Favorites;
