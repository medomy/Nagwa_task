import React from "react";
import AuthForm from "../../components/auth_form/auth_form";
// root page 
const AuthPage: React.FC = () => {
    return (
        <>
            <div className="container-fluid normal_page">
                <div className={`row justify-content-center align-items-center rest_page`}>
                    <div className="col-md-6 col-10">
                        <AuthForm />
                    </div>
                </div>
            </div>
        </>
    )
}
export default AuthPage;