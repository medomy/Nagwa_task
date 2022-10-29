import React from "react";
import QuestionsSec from "../../components/questions_sec/question_sec";
import styles from './question_page.module.css';
// questions page component
const QuestionsPage:React.FC =()=>{
    return(
        <div className="container-fluid normal_page">
            <div className={`row justify-content-center align-items-center ${styles.rest_page}`}>
                <div className="col-md-8 col-10">
                    <QuestionsSec />
                </div>
            </div>
        </div>
    )
}
export default QuestionsPage; 