import React, { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import "./Page.css"
import googleLogo from "./img/googleLogo.png";
import xLogo from "./img/xLogo.png";
import Required from "./agreement/Required";
import Advertisement from "./agreement/Advertisement";

export default function Signup() {

    //초기값 세팅
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [phonenumber, setPhonenumber] = useState("");
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [requiredCheck, setRequiredCheck] = useState("");
    const [marketingCheck, setMarketingCheck] = useState("");
   
    //오류메세지 상태 저장
    const [emailMessage, setEmailMessage] = useState("");
    const [nameMessage, setNameMessage] = useState("");
    const [passwordMessage, setPasswordMessage] = useState("");
    const [passwordConfirmMessage, setPasswordConfirmMessage] = useState("");
    const [phonenumberMessage, setPhonenumberMessage] = useState("");
    const [requiredCheckMessage, setRequiredCheckMessage] = useState("");

   //유효성검사
   const setIsEmail = useState(false);
   const setIsName =useState(false);
   const setIsPassword = useState(false);
   const setIsPasswordConfirm = useState(false);
   const setIsPhonenumber = useState(false);
   const setIsRequiredCheck = useState(false);

    const onChangeEmail = (e) => {
        const currentEmail = e.target.value;
        setEmail(currentEmail);
        const emailRegExp = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;

        if(!emailRegExp.test(currentEmail)){
            setEmailMessage("이메일 양식을 지켜주세요");
            setIsEmail(false);
        } else{
            setIsEmail(true);
        }
    };

    const onChangeName = (e) => { 
        const currentName = e.target.value;
        setName(currentName);
        const nameRegExp = /^[a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ가-힣]{1,10}$/;
        if(currentName.length < 1 || currentName.length > 10){
            setNameMessage("닉네임은 10글자 이하로 입력해주세요")
            setIsName(false);
        } else if(!nameRegExp.test(currentName)){
            setNameMessage("닉네임은 한글, 영문 소/대문자, 숫자만 가능합니다");    
            setIsName(false);
        } 
        else{
            setIsName(true);
        }
    };

    const onChangePassword = (e) => {
        const currentPassword = e.target.value;
        setPassword(currentPassword);
        const passwordRegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!])(?!.*\s).{8,}$/;
        
        if(!passwordRegExp.test(currentPassword)){
            setPasswordMessage("비밀번호를 확인해주세요");
            setIsPassword(false);
        } else {
            setIsPassword(true);
        }
    };

    const onChangePasswordConfirm = (e) => {
        const currentPasswordConfirm = e.target.value;
        setPasswordConfirm(currentPasswordConfirm);
        
        if(password !== currentPasswordConfirm){
            setPasswordConfirmMessage("비밀번호가 일치하지 않습니다");
            setIsPasswordConfirm(false);
        } else {
            setIsPasswordConfirm(true);
        }
    };

    const onChangePhonenumber = (e) => {
        const currentPhonenumber = e.target.value;
        setPhonenumber(currentPhonenumber);
        const phonenumberExpReg = /^[0-9]$/;

        if(!phonenumberExpReg.test(currentPhonenumber)){
            setPhonenumberMessage("숫자만 입력해주세요");
            setIsPhonenumber(false);
        } else{
            setIsPhonenumber(true);
        }
    };

    const onChangeQuestion = (e) => {
        const currentQuestion = e.target.value;
        setQuestion(currentQuestion);
    };

    const onChangeAnswer = (e) => {
        const currentAnswer = e.target.value;
        setAnswer(currentAnswer);
    };


    const onChangeRequiredCheck = () => {
        setRequiredCheck(!setRequiredCheck);
    };

    const onChangeMarketingCheck = (e) => {
        const currentMarketingCheck = e.target.value;
        setMarketingCheck(currentMarketingCheck);
    };
    

    return (
      <div className="pageFrame">
        
        <div className="pageTitle">회원가입</div>
        <div className="apiRegister">
            <div className="googleApi">
                <div className="apiImg">
                    <img src={googleLogo} alt=""/>
                </div>
                <div className="apiTxt">google로 회원가입</div>
            </div>
            <div className="xApi">
                <div className="apiImg">
                    <img src={xLogo} alt=""/>
                </div>
                <div className="apiTxt">X로 회원가입</div>
            </div>
        </div>
        <div className="emailRegister">
            <div className="inputField">
                <div class="registerTxt">
                    <div className="normalTxt">기본정보</div>
                    <div className="registerSmallRedTxt">필수 사항</div>
                </div>
                <input type="email" name="email" value={email} onChange={onChangeEmail} placeholder="이메일"/>
                <p className="message">{emailMessage}</p>
                <input type="text" name="name" value={name} onChange={onChangeName} placeholder="닉네임(10자 이내)"/>
                <p className="message">{nameMessage}</p>
                <input type="password" name="password" value={password} onChange={onChangePassword} placeholder="비밀번호(영문 대소문자, 숫자 8자리 이상)"/>
                <p className="message">{passwordMessage}</p>
                <input type="password" name="passwordConfirm" value={passwordConfirm} onChange={onChangePasswordConfirm} placeholder="비밀번호 확인"/>
                <p className="message">{passwordConfirmMessage}</p>
                <input type="text" name="phonenumber" value={phonenumber} onChange={onChangePhonenumber} placeholder="휴대폰 번호(-없이 숫자만)" />
                <p className="message">{phonenumberMessage}</p>
                <div class="registerTxt">
                    <div className="normalTxt">계정 분실용 질문</div>
                    <div className="registerSmallGrayTxt">선택 사항</div>
                </div>
                <select name="question" value={question} onChange={onChangeQuestion}> 
                    <option disabled hidden selected>질문을 선택해주세요</option>
                    <option>좋아하는 색깔은?</option>
                    <option>좋아하는 숫자는?</option>
                </select>
                <input type="text" name="answer" value={answer} onChange={onChangeAnswer} placeholder="답변"/ >
                <div class="registerTxt">
                    <div className="normalTxt">이용 규약</div>
                </div>
                <div class="checkboxFrame">
                    <div className="checkbox"><input type="checkbox" name="requiredCheck" value={requiredCheck} onChange={onChangeRequiredCheck}/ ></div>
                    <div className="checkboxTxt">이용규약의 동의(필수)</div>
                    <Required />
                </div>
                <p className="message">{requiredCheckMessage}</p>
                <div class="checkboxFrame">
                    <div className="checkbox"><input type="checkbox" name="marketingCheck" value={marketingCheck} onChange={onChangeMarketingCheck}/ ></div>
                    <div className="checkboxTxt">광고 수신성 동의(선택)</div>
                    <Advertisement />
                </div>
                <div className="submitBtn">
                    <input type="submit" value="회원가입"/>
                </div>
            </div>    
        </div>
      </div>   
  );
}
