import React from "react";
import ErrorComponent from "../../components/error_component/error_component";
import styles from './error_page.module.css'
const ErrorPage: React.FC = () => {
    return (
        <div className="container-fluid normal_page">
            <div className={`row justify-content-center align-items-center rest_page`}>
                <div className="col-md-8 col-10">
                    <ErrorComponent />
                </div>
            </div>
        </div>
    )
}
export default ErrorPage;