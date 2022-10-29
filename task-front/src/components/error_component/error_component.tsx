import React from "react";
import errImg from '../../assets/images/404_error.png'
// component to hold the 404 not found error messege 
const ErrorComponent:React.FC = ()=>{
    return(
        <figure>
            <img src={errImg} className={'w-100'} alt="error-pic"/>
        </figure>
    )
}
export default ErrorComponent;