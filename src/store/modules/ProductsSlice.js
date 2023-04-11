import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';



const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        singleProduct: null,
        searchedProducts: [],
    },
    reducers: { 
        SET_PRODUCTS: (state, action) => {
            state.products = action.payload; 

        },
        SET_SINGLE_PRODUCT: (state, action) => {
            state.singleProduct = action.payload;
        },
        SET_SEARCHED_PRODUCTS: (state, action) => {
            state.searchedProducts = action.payload;
        },
    },
});

export default productsSlice.reducer


const {SET_PRODUCTS, SET_SINGLE_PRODUCT, SET_SEARCHED_PRODUCTS} = productsSlice.actions




export const getProducts = () => async dispatch => {

    axios({
        method: 'get',
        url: 'https://api.noroff.dev/api/v1/online-shop?limit=100',
      })
        .then(function (response) {
            let data = response.data
         
            dispatch(SET_PRODUCTS(data));
        })
        .catch(function (error) {
            console.log(error);
          });;

}


export const fetchProductById = (id) => async dispatch => {

    axios({
        method: 'get',
        url: `https://api.noroff.dev/api/v1/online-shop/${id}`,
      })
        .then(function (response) {
            let data = response.data
      
            dispatch(SET_SINGLE_PRODUCT(data));
        })
        .catch(function (error) {
            console.log(error);
          });

}

export const productsBySearch = () => dispatch => {

    axios({
        method: 'get',
        url: 'https://api.noroff.dev/api/v1/online-shop?limit=100',
      })
        .then(function (response) {
            let data = response.data
         
            dispatch(SET_SEARCHED_PRODUCTS(data));
          })
        .catch(function (error) {
            console.log(error);
          });

}


  




/*
function searching() {
  let input, filter, ul, title, txtValue, id, img;
  input = searchInput;
  filter = input.value.toUpperCase();
  ul = theArr;
  let showList = [];

  for (let item of ul) {
    title = item.title;
    id = item.id;
    if (item.media.length == 0) {
      img = "/no_img.svg";
    } else {
      img = item.media[0];
    }

    txtValue = title;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      let element = `<a href="post.html?id=${id}">
          <li class="list-none bg-white p-2 w-full flex flex-row gap-6 justify-between items-center text-light font-quickS text-sm border border-gray-300 rounded-md hover:shadow-lg">
            <p class="">${title}</p>
            <img class="w-24 h-24 rounded-md object-cover" src="${img}">
          </li>
        </a>`;

      showList.push(element);
      showSearch.classList.replace("hidden", "flex");
      let newarr = showList.join(" ");
      showSearch.innerHTML = newarr;
    } else {
      console.log("fail");
    }
  }

  if (input.value == "") {
    showSearch.innerHTML = "";
    showSearch.classList.replace("flex", "hidden");
  }
}
*/