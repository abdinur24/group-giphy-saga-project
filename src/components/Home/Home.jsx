import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

function Home() {
    const dispatch = useDispatch();
    const [item, setitem] = useState('')
    const showgif = (event) => {
        event.preventDefault();
        dispatch({ type: 'SET_GIF', payload: {search: item}})
    }
    const gif = useSelector(store => store.search);
    console.log ('this is item in home',item)
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
                    <li>hi</li>
                    <li><img src={images.images.original.url}/></li>
                    </div>
                ))}
            </ul>
        </div >
    )
}

export default Home;
