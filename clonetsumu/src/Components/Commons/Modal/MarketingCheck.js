import React, { useState }from "react";
import Modal from 'react-modal';
import '../Page.css';

const MarketingModal = () => {

    const [marketingModalIsOpen, setRMarketingModalIsOpen] = useState(false);

    return(
        <div>
        <button className="checkboxBtn" onClick={() => setRMarketingModalIsOpen(true)}>전문보기</button>
        <Modal isOpen={marketingModalIsOpen}>
            <div className="shadow" />
            <div className="modalPage">
                <div className="modalTxtBox">
                    <h1>필수사항</h1>
                    <br />
                    <p>남산위에 저 소나무 철갑을 두른듯 바람서리 불변함은 우리기상 일세. 무궁화 삼천리 화려강산 대한 사람 대한으로 길이 보전하세</p>
                    <p>남산위에 저 소나무 철갑을 두른듯 바람서리 불변함은 우리기상 일세. 무궁화 삼천리 화려강산 대한 사람 대한으로 길이 보전하세</p>
                    <p>남산위에 저 소나무 철갑을 두른듯 바람서리 불변함은 우리기상 일세. 무궁화 삼천리 화려강산 대한 사람 대한으로 길이 보전하세</p>
                    <p>남산위에 저 소나무 철갑을 두른듯 바람서리 불변함은 우리기상 일세. 무궁화 삼천리 화려강산 대한 사람 대한으로 길이 보전하세</p>
                    <p>남산위에 저 소나무 철갑을 두른듯 바람서리 불변함은 우리기상 일세. 무궁화 삼천리 화려강산 대한 사람 대한으로 길이 보전하세</p>
                    <p>남산위에 저 소나무 철갑을 두른듯 바람서리 불변함은 우리기상 일세. 무궁화 삼천리 화려강산 대한 사람 대한으로 길이 보전하세</p>
                    <p>남산위에 저 소나무 철갑을 두른듯 바람서리 불변함은 우리기상 일세. 무궁화 삼천리 화려강산 대한 사람 대한으로 길이 보전하세</p>
                    <p>남산위에 저 소나무 철갑을 두른듯 바람서리 불변함은 우리기상 일세. 무궁화 삼천리 화려강산 대한 사람 대한으로 길이 보전하세</p>
                    <p>남산위에 저 소나무 철갑을 두른듯 바람서리 불변함은 우리기상 일세. 무궁화 삼천리 화려강산 대한 사람 대한으로 길이 보전하세</p>
                    <p>남산위에 저 소나무 철갑을 두른듯 바람서리 불변함은 우리기상 일세. 무궁화 삼천리 화려강산 대한 사람 대한으로 길이 보전하세</p>
                    <p>남산위에 저 소나무 철갑을 두른듯 바람서리 불변함은 우리기상 일세. 무궁화 삼천리 화려강산 대한 사람 대한으로 길이 보전하세</p>
                    <p>남산위에 저 소나무 철갑을 두른듯 바람서리 불변함은 우리기상 일세. 무궁화 삼천리 화려강산 대한 사람 대한으로 길이 보전하세</p>
                    <p>남산위에 저 소나무 철갑을 두른듯 바람서리 불변함은 우리기상 일세. 무궁화 삼천리 화려강산 대한 사람 대한으로 길이 보전하세</p>
                    <p>남산위에 저 소나무 철갑을 두른듯 바람서리 불변함은 우리기상 일세. 무궁화 삼천리 화려강산 대한 사람 대한으로 길이 보전하세</p>
                    <p>남산위에 저 소나무 철갑을 두른듯 바람서리 불변함은 우리기상 일세. 무궁화 삼천리 화려강산 대한 사람 대한으로 길이 보전하세</p>
                    <p>남산위에 저 소나무 철갑을 두른듯 바람서리 불변함은 우리기상 일세. 무궁화 삼천리 화려강산 대한 사람 대한으로 길이 보전하세</p>
                </div>
                <button className="modalCloseBtn" onClick={() => setRMarketingModalIsOpen(false)}>닫기</button>
            </div>
        </Modal>
        </div>
    );
}

export default MarketingModal;