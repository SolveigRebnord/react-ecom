
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { productsBySearch } from '../store/modules/ProductsSlice';
import List from './SearchList';


const Search = () => {

   

const [inputText, setInputText] = useState("");
let searching = (e) => {
  let lowerCase = e.target.value.toLowerCase();
  setInputText(lowerCase);
};
  
    return ( <>
   <label className='relative md:w-1/2 mx-auto block'><span className='absolute right-6 top-5 '> 
    <img src='/search.svg' className='w-6 '/>
   </span>
   <input onKeyUp={(event) => searching(event)} type={'text'} id={'search'} className="h-12 border-b-2 border-mainOffBlack w-full rounded-sm my-4 mb-14 mx-auto inline-block focus:outline-none px-4" ></input>

   </label>{inputText && <List input={inputText} />}

        </> )
}
 
export default Search;
