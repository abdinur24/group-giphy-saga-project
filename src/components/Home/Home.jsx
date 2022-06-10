import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

function Home() {
    const dispatch = useDispatch();
    const [item, setitem] = useState('')
    const [favorite, setfavorite] = useState(false)
    const showgif = (event) => {
        event.preventDefault();
        dispatch({ type: 'SET_GIF', payload: { search: item } })
    }
    const gif = useSelector(store => store.search);

    const addHandler = (event) => {
        dispatch({ type: 'ADD_FAV', payload: images.images.original.url })

    }
    return (
        <div>
            <h2>Search</h2>
            <form onSubmit={showgif}>
                <input value={item} onChange={() => setitem(event.target.value)} placeholder='search' />
                <input type='submit' value='show gif' />
            </form >
            <div className="gif-container">
            {gif.map(images => (
                <div className='gifs'>
                    <img src={images.images.original.url} />
                    <p>{images.title}</p>
                    <button onClick={() => dispatch({ type: 'ADD_FAV', payload: images.images.original.url })}>Favorite✨</button>
                </div>
            ))}
            </div>
        </div >
    )
}

export default Home;
