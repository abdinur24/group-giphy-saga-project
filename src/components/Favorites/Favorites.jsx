import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


function Favorites() {
    let favorite = useSelector(store => store.favorite);
    let [favoriteList, setFavoriteList] = useState([]);
    let dispatch = useDispatch();
    const getFavorites = () => {
        axios.get('/api/gif')
            .then((response) => {
                dispatch({
                    type: 'SET_FAV',
                    payload: response.data
                })
            })
    }

    return (
        <div>
            <h2>Favorites</h2>
            <li key={favorite.id}>{favorite.id} 
            <p><img>{favorite.id}</img></p>
            </li>
        </div>
    )
}


export default Favorites;
