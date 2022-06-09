import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

function Home() {
    const dispatch = useDispatch();
    const [item, setitem] = useState('')
    const showgif = (event) =>{
        event.preventDefault();
    dispatch({ type: 'SET_GIF', payload: item})
}
return (
    <div>
        <h1>asda </h1>
        <form onSubmit={showgif}>
            <input value={item} onChange={() => setitem(event.target.value)} placeholder='search' />
            <input type='submit' value='show gif' />
        </form >
    </div >
    )
}

export default Home;
