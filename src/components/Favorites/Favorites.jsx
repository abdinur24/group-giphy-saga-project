import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


function Favorites() {
    let favorite = useSelector(store => store.favorite);
    console.log('IN fav', favorite)
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch({type:'SET_FAV',})
    },[])
    

    return (
        <div>
            <h2>Favorites</h2>
            {favorite.map((fav) =>
                <div>
                    <img src={fav.images}/>
                    <select name='category'></select>
                </div>
            )}
        </div>
    )
}


export default Favorites;
