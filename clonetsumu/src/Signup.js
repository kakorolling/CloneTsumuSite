import React from "react";
import "./Page.css"
import googleLogo from "./img/googleLogo.png";
import xLogo from "./img/xLogo.png";
import Required from "./agreement/Required";
import Advertisement from "./agreement/Advertisement";

export default function Signup() {

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
                <input type="email" placeholder="이메일"/>
                <input type="text" placeholder="닉네임"/>
                <input type="password" placeholder="비밀번호(영문 대소문자, 숫자 8자리 이상)"/>
                <input type="password" placeholder="비밀번호 확인"/>
                <input type="text" placeholder="휴대폰 번호" />
                <div class="registerTxt">
                    <div className="normalTxt">계정 분실용 질문</div>
                    <div className="registerSmallGrayTxt">선택 사항</div>
                </div>
                <select>
                    <option disabled hidden selected>질문을 선택해주세요</option>
                    <option>좋아하는 색깔은?</option>
                    <option>좋아하는 숫자는?</option>
                </select>
                
                <input type="text" placeholder="답변"/ >
                <div class="registerTxt">
                    <div className="normalTxt">이용 규약</div>
                </div>
                <div class="checkboxFrame">
                    <div className="checkbox"><input type="checkbox" / ></div>
                    <div className="checkboxTxt">이용규약의 동의(필수)</div>
                    <Required />
                </div>
                <div class="checkboxFrame">
                    <div className="checkbox"><input type="checkbox" / ></div>
                    <div className="checkboxTxt">광고 수신성 동의(선택)</div>
                    <Advertisement />
                </div>
                <div className="submitBtn">
                    <input type="button" value="회원가입"/>
                </div>
            </div>    
        </div>
      </div>   
  );
}
