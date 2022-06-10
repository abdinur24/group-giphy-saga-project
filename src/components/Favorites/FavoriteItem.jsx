import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function FavoriteItem({ favorite }) {
   const [category, setCategory] = useState(favorite.category_id);
   const categories = useSelector(store => store.categories);
   const dispatch = useDispatch();

   function setFav() {
      dispatch({
         type: 'SET_CATEGORY',
         payload: {
            favId: favorite.id, // from props
            catId: category, // from local state
         }
      })
   }
   return (
      <div className='gifs'>
         <img src={favorite.images} />
         <h3>Category: {favorite.category_name ? favorite.category_name : 'n/a'}</h3>
         <select 
            value={category} 
            onChange={e => setCategory(e.target.value)} 
         >
            {categories.map(category => (
               <option value={category.id}>{category.name}</option>
            ))}
         </select>
         <button onClick={setFav}>Save</button>
      </div>
   )
}

export default FavoriteItem;