import React from "react";
import errImg from '../../assets/images/404_error.png'
const ErrorComponent:React.FC = ()=>{
    return(
        <figure>
            <img src={errImg} alt="error-pic"/>
        </figure>
    )
}
export default ErrorComponent;