import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

function Home() {
    const dispatch = useDispatch();
    const [item, setitem] = useState('')
    const [favorite, setfavorite]= useState(false)
    const showgif = (event) => {
        event.preventDefault();
        dispatch({ type: 'SET_GIF', payload: {search: item}})
    }
    const gif = useSelector(store => store.search);

    const marked = (event)=>{
  

    }
    return (
        <div>
            <h1>asda </h1>
            <form onSubmit={showgif}>
                <input value={item} onChange={() => setitem(event.target.value)} placeholder='search' />
                <input type='submit' value='show gif' />
            </form >
            <ul>
                {gif.map((images) =>(
                    <div>
                    <li><img src={images.images.original.url}/></li>
                    <button onClick={marked(event)}>Favorite✨</button>
                    </div>
                ))}
            </ul>
        </div >
    )
}

export default Home;
