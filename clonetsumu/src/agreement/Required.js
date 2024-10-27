import React, { useState } from "react"
import Modal from 'react-modal'
import "./modal.css"

const Required = () => {
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
                        <p style={{fontWeight: "bold"}}>제1조（적용）</p>
                        <br />
                        <p>1.본 규약은, 본 서비스의 제공 조건 및 본 서비스 이용에 관한 당사와 등록유저분들과의 권리의무 관계를 정의하는 것을 목적으로 하고, 등록 유저와 당사간의 본 서비스 이용에관한 모든 관계에 적용됩니다.<br />
                        2.당사가 당사 웹사이트상에 개재하는 본 서비스 이용에 관한 룰은, 본 규약 일부를 구성하는 것으로 합니다.<br />
                        3.본 규약 내용과 전항의 룰, 그 외의 본 규약 외에 있어서의 본 서비스 설명 등이 다른 경우에는, 본 규약의 규정이 우선하여 적용되는 것으로 합니다.</p>
                        <br />
                        <p style={{fontWeight: "bold"}}>제2조（정의）</p>
                        <br />
                        <p>
                        ⑴「서비스 이용규약」이란, 본 규약 및 등록 유저간에 체결하는 , 본 서비스 이용규약을 의미합니다.<br />
                        ⑵「지적재산권」이란, 저작권, 특허권, 실용신안권, 의장권, 상표권, 그 외 지적재산권（이러한 권리를 취득하거나 혹은 이러한 권리에 대해 등록 등을 출원하는 권리를 포함합니다）를 의미합니다.<br/ >
                        ⑶「투고 데이터」란, 등록 유저가 본 서비스를 이용하여 투고, 그 외 송신하는 컨텐츠（문장, 이미지, 동영상, 그 외 데이터를 포함하지만 이것에 한정되지 않습니다.）를 의미합니다.<br />
                        ⑷「당사」란, 【주식회사 글래드큐브】를 의미합니다.<br />
                        ⑸「당사 웹사이트」란, 그 도메인이「【sitest.jp】」인, 당사가 운영하는 웹사이트（어떠한 이유라도 당사 웹사이트의 도메인 또는 내용이 변경되는 경우에는, 해당 변경 후의 웹사이트를 포함합니다）를 의미합니다.<br />
                        ⑹「등록 유저」란, 제3조（등록）에 의하여 본 서비스 이용자로서 등록되신 개인 또는 법인을 의미합니다.<br />
                        ⑺「본 서비스」란, 당사가 제공하는【SiTest (사이테스트) 】라는 명칭의 서비스（어떠한 이유라도 서비스 명칭 또는 내용이 변경되는 경우는, 해당 변경 후의 서비스를 포함합니다）를 의미합니다. <br />
                        </p>
                        <br />
                        <p style={{fontWeight: "bold"}}>제3조（등록)</p>
                        <br />
                        <p>
                        1. 본 서비스 이용을 희망하는 자（이하 「등록 희망자」라고 함）는 본 규약을 준수하는 것에 동의하고 당사에서 정하는 일정의 정보（이하 「등록사항」이라고 함）을 당사가 정하는 방법으로 당사에 제출하는 것으로, 당사에 대하여 본 서비스 이용 등록을 신청할 수 있습니다.<br />
                        2. 당사는, 당사 기준에 따라, 제1항에 의하여 등록신청을 한 등록 희망자（이하「등록 신청자」라고 함）의 등록 가부를 판단하여 당사가 등록을 인정하는 경우에는 그 뜻을 등록신청자에게 통지합니다. 등록 신청자의 등록 유저로서의 등록은, 당사가 본 항의 통지를 한 것으로 완료된 것으로 봅니다. <br />
                        3. 전 항에 정한 등록 완료시에 서비스 이용계약이 등록 유저로 당사간에 성립하여, 등록 유저는 본 서비스를 본 규약에 따라 이용할 수 있게 됩니다.<br />
                        </p>
                    </div>
                    <button className="modalExitBtn" onClick={closeModal}>닫기</button>
                </div>
            </Modal>
        </div>
    );
};

export default Required;