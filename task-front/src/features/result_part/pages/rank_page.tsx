import React from "react";
import RankSec from "../components/rank_sec/rank_sec";
import styles from './rank_page.module.css'
const RankPage: React.FC = () => {
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