import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAppSelector from "../../../hooks/useAppSelector";
import RankSec from "../components/rank_sec/rank_sec";
import styles from './rank_page.module.css'
const RankPage: React.FC = () => {
    const answers = useAppSelector((state)=> state.answers.answers);
    const navigate = useNavigate();
    const checkAnswers = ()=>{
        if(answers.length < 10){
            alert('answers are not complete');
            navigate('/test');
        }
    }
    useEffect(()=>{
        checkAnswers();
    },[])
    return (
        <div className="container-fluid normal_page">
            <div className={`row justify-content-center align-items-center ${styles.rest_page}`}>
                <div className="col-md-8 col-10">
                    <RankSec />
                </div>
            </div>
        </div>
    )
}
export default RankPage;