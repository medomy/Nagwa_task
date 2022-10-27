import React from 'react';
import styles from './types_buttons.module.css';
interface Props {
    type: string,
    handleClick : (type : string) => void
}

const TypeButton: React.FC<Props> = ({type , handleClick})=>{
    return(
        <button className={`${styles.types_btn} ${type == 'noun' ? styles.noun_btn : type == 'verb' ? styles.verb_btn : type == 'adverb' ? styles.adverb_btn : styles.adj_btn}`} onClick={()=> handleClick(type)}>{type}</button>
    )
}
export default TypeButton;