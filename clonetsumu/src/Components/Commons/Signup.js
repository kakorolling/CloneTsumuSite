import React, { useState } from "react"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { auth } from "../../firebase";
import './Page.css';
import googleLogo from "../imgs/googleLogo.png"
import xLogo from "../imgs/xLogo.png"

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const onSubmit = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, email, password);
            const db = getDatabase();
            const uid = auth.currentUser.uid;
            set(ref(db, 'users/' + uid), {
                username: name,
                email: email
              });
            console.log(user);
        } catch (error) {
            alert(error.message);
        }
    };

    return(
        <div className="commonsFrame">
            <div className="pageFrame">
                <div className="title">회원가입</div>
                <div id="api">
                    <div className="apiBox" id="google">
                        <img src={googleLogo} className="apiImg" alt=""/>
                        <div className="apiTxt">google로 회원가입</div>
                    </div>
                    <div className="apiBox" id="x">
                        <img src={xLogo} className="apiImg" alt=""/>
                        <div className="apiTxt">x(구 twitter)로 회원가입</div>
                    </div>
                </div>
                <div className="registerFrame">
                    <div className="inputboxTxt">이메일*</div>
                    <input type="email" className="inputbox" placeholder="sample@sample.com"
                    onChange={(e) => { setEmail(e.target.value);}}/>
                    <div className="inputboxTxt">이름*</div>
                    <input type="text" className="inputbox" placeholder="한글/영어/숫자만 가능"
                    onChange={(e) => { setName(e.target.value);}}/>
                    <div className="inputboxTxt">비밀번호*</div>
                    <input type="password" className="inputbox" placeholder="영문 소/대문자, 숫자 8자리 이상" 
                    onChange={(e) => { setPassword(e.target.value);}}/>
                    <button className="submitBtn" onClick={onSubmit}>회원가입</button>
                </div>
            </div>
        </div>
    );
};

export default Signup;
