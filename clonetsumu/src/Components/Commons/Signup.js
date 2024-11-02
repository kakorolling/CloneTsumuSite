import React, { useState } from "react"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { auth } from "../../firebase";
import './Page.css';
import googleLogo from "../imgs/googleLogo.png"
import xLogo from "../imgs/xLogo.png"
import openEye from "../imgs/openEye.svg";
import closeEye from  "../imgs/closeEye.svg";
import RequriedModal from "./Modal/RequiredCheck";
import MarketingModal from "./Modal/MarketingCheck";


const Signup = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [phoneNumber, setphoneNumber] = useState("");
    const [requriedCheck, setRequriedCheck] = useState(false);
    const [marketingCheck, setMarketingCheck] = useState(false);

    const [passwordType, setPasswordType] = useState({
        type: 'password',
        visible: false
    });

    const handlePasswordType = () => {
        setPasswordType(() => {
            if (!passwordType.visible) {
                return { type: 'text', visible: true };
            }
            return { type: 'password', visible: false };
        })
    }

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
                    <div className="passwordFrame">
                        <input type={passwordType.type} placeholder="영문 소/대문자, 숫자 8자리 이상" 
                        onChange={(e) => { setPassword(e.target.value);}} />
                        <span className="passwordImg" onClick={handlePasswordType}>
                            {  passwordType.visible ? <img src={openEye} /> : <img src={closeEye} /> }
                        </span>
                    </div>
                    <div className="inputboxTxt">비밀번호 확인*</div>
                    <div className="passwordFrame">
                        <input type={passwordType.type} placeholder="같은 비밀번호를 입력해주세요"
                        onChange={(e) => { setPasswordConfirm(e.target.value);}} />
                        <span className="passwordImg" onClick={handlePasswordType}>
                            { passwordType.visible ? <img src={openEye} /> : <img src={closeEye} /> }  
                        </span>
                    </div>
                    <div className="inputboxTxt">전화번호*</div>
                    <input type="text" className="inputbox" placeholder="(-)제외" 
                    onChange={(e) => { setphoneNumber(e.target.value);}}/>
                    <div className="inputboxTxt">체크박스</div>
                    <div className="checkboxFrame">
                        <input type="checkbox" onChange={(e) => { setRequriedCheck(e.target.value);}}/>
                        <div className="checkboxTxt">이용 규약 동의*</div>
                        <div className="checkboxBtnFrame">
                            <RequriedModal/>
                        </div>
                    </div>
                    <div className="checkboxFrame">
                        <input type="checkbox" onChange={(e) => { setRequriedCheck(e.target.value);}}/>
                        <div className="checkboxTxt">광고 수신 동의</div>
                        <div className="checkboxBtnFrame">
                            <MarketingModal />
                        </div>
                    </div>
                    <button className="submitBtn" onClick={onSubmit}>회원가입</button>
                </div>
            </div>
        </div>
    );
};

export default Signup;
