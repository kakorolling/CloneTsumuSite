import React, { useState } from "react"
import Modal from 'react-modal'
import "./modal.css"

const Advertisement = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return(
        <div>
            <button className="checkboxBtn" onClick={openModal}>전문보기</button>
            <Modal isOpen = {modalIsOpen} onRequestClose={closeModal}>
                <div className="shadow" />
                <div className="modalbox">
                    <div className="textarea">
                        <p style={{fontWeight: "bold"}}>제1조（서비스 이용 및 제한）</p>
                        <br />
                        <p>1. 회원은 사이트를 회사의 업무상 또는 기술상 특별한 지장이 없는 한 연중무휴, 1일 24시간 이용할 수 있습니다.<br />
                        2. 사이트에서 제공하는 서비스 중 일부는 회원에 가입하여 회사에서 인정한 ID와 비밀번호를 통해서만 서비스를 받을 수 있습니다.<br />
                        3. 전항의 이용시간은 시스템 등 정기점검/교체 등 회사가 필요한 경우, 회원에게 사전 통지한 후, 제한할 수 있습니다. 4. 제3항에 의한 서비스 중단의 경우에는 회사는 회원이 회사의 홈페이지에 제출한 전자우편 주소로 개별 통지하거나, 불특정다수 회원에 대하여는
홈페이지 초기화면에 서비스 중단 3일전 게시함으로써 개별 통지에 갈음할 수 있습니다.</p>
                        <br />
                        <p style={{fontWeight: "bold"}}>제2조（회원 가입）</p>
                        <br />
                        <p>
                        1. 이용자는 회사가 정한 가입 양식에 따라 회원정보를 기입한 후 이 약관에 동의한다는 의사표시를 함으로서 회원 가입을 신청합니다. <br />
                        2. 회사는 제 1항과 같이 회원으로 가입할 것을 신청한 이용자 중 다음 각 호에 해당하지 않는 한 회원으로 등록합니다. ① 가입 신청자가 이 약관 제 7조 제 3항에 의하여 이전에 회원자격을 상실한 적이 있는 경우. 다만 제 7조 제 3항에 의한 회원자격 상실 후 3년이
경과한 자로서 회사의 회원 재가입 승낙을 얻은 경우에는 예외로 한다. ② 모든 가입신청자는 반드시 실명으로 본인의 이름과 전화번호, 이메일을 기입하며, 그러하지 아니한 경우. ③ 등록 내용에 허위, 기재누락, 오기가 있는 경우. ④ 기타 회원으로 등록하는 것이 회사의 기술상 현저히 지장이 있다고 판단되는 경우. <br/ >
3. 회원가입 계약의 성립 시기는 회사의 승낙이 회원에게 도달한 시점으로 합니다.<br />
4. 만 14세 미만 아동의 회원 가입의 경우
① 법정대리인의 성명, 이메일주소, 연락처, 가입신청자와의 관계를 입력해야 하고, 법정대리인의 약관 동의 의사가 있어야 회원으로 등록됩니다. ② 법정대리인이 제공한 이메일 주소로 제공된 회원가입동의서에 법정대리인이 직접 서명을 하여야 하며, 이 회원가입동의서가 신성엔지니어링에
도달된 시점에 약관동의의사가 있는 것으로 간주합니다.
③ 법정대리인이 이메일 주소가 없는 경우 신성엔지니어링에서는 적절한 조치를 통해서 법정대리인이 회원 가입에 동의하도록 합니다.
④ 법정대리인은 상기 회원가입동의서를 우편으로 다음의 주소로 송부하여야 합니다.
주소 : 경상북도 청도군 청도읍 월곡2길 34<br />
                        </p>
                    </div>
                    <button className="modalExitBtn" onClick={closeModal}>닫기</button>
                </div>
            </Modal>
        </div>
    );
};

export default Advertisement;