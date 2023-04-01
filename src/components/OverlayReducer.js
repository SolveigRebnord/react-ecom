import { useEffect, useReducer} from "react"
import { QuickBtn } from "../styles/Buttons"

const reducer = (state, action) => {
    switch (action.type) {
        case 'SHOW_OVERLAY':
            return {showOverlay: true, productOverlay: action.payload}
        case 'CLOSE_OVERLAY': 
   
        default:
            return state
    }
}


const OverlayReducer = (props) => {

    const [ state, dispatch ] = useReducer(reducer, { showOverlay: false, productOverlay: '' })

    let productInfo = props;



    function handleOverlay(e) {
        e.preventDefault();
        dispatch({ type: 'SHOW_OVERLAY', productInfo });
        console.log(state)
    }
   
    //return <QuickBtn onClick={(e) => handleOverlay(e)} className='absolute bottom-6 left-1/2 -translate-x-1/2 z-40'>Quick View</QuickBtn>
    
}

 
export default OverlayReducer;



