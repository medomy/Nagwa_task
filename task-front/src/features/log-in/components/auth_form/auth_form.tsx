import React, { FormEvent, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAppDispatch from "../../../../hooks/useAppDispatch";
import { setUserName } from "../../../../store/reducers/user/user_reducer";
import styles from './auth_form.module.css'
// get user name form component
const AuthForm: React.FC = () => {
    // in case there is an error like not entering a user name and submitting
    const [errMsg , setErrMsg] = useState<string | null>(null);
    // reference for the input
    const userNameField = useRef<HTMLInputElement | null>(null);
    // dispatch the actions
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    // submit as user when you enter the username
    const signInAsUser = (e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        // in case it's fine
        if(userNameField.current?.value.length !== 0){
            dispatch(setUserName(userNameField.current?.value ?? ''));
            navigate('/test');
        }
        // in case not entering the user name
        else {
            setErrMsg('can not continue without name , you can continue as a visitor')
        }
    }
    // sign in as a visitor function
    const signInAsVisitor =()=>{
        navigate('/test');
    }
    return (
        <>
            <div className={styles.form_wrap}>
                <form onSubmit={(e)=>signInAsUser(e)}>
                    <div className='mb-2 text-center'>
                        <h2>continue with your desired user name</h2>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="user_name" className="form-label">desired name</label>
                        <input type="text" className={`form-control`} ref={userNameField} id="user_name" name='user_name' placeholder="user name.." />
                        {errMsg ? <p className="text-danger">{errMsg}</p> : ''}
                    </div>
                    <button type="submit" className="btn btn-success my-3 w-100">sign in</button>
                    <div className={styles.or_sec}>
                        <span className={styles.or_div}></span>
                        <span>OR</span>
                        <span className={styles.or_div}></span>
                    </div>
                    <button className="btn btn-danger my-3 w-100" onClick={signInAsVisitor}>continue as visitor</button>
                </form>
            </div>
        </>
    )
}
export default AuthForm;