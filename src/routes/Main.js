import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { datas } from 'datas';

function Main() {
    const navigate = useNavigate();
    const [data, setData] = useState(0);
    const [minutes, setMinutes] = useState(10);
    const [seconds, setSeconds] = useState(0);
    useEffect(() => {
        const countdown = setInterval(() => {
            if (parseInt(seconds) > 0) {
                setSeconds(parseInt(seconds) - 1);
            }
            if (parseInt(seconds) === 0) {
                if (parseInt(minutes) === 0) {
                    clearInterval(countdown);
                    navigate("/fail");
                } else {
                    setMinutes(parseInt(minutes) - 1);
                    setSeconds(59);
                }
            }
        }, 1000);
        return () => clearInterval(countdown);
    }, [minutes, seconds]);
    const onClick = () => {
        let inputAnswer = document.querySelector(".inputAnswer");
        if (inputAnswer.value === datas[data].a) {
            if (data + 1 < datas.length) {
                setData(data + 1);
                inputAnswer.value = "";
            }
            else {
                navigate("/end");
            }
        }
        else {
            alert("오답입니다.");
            inputAnswer.value = "";
        }
    }
    return (
        <div className="container">
            <div className="box">
                <div className="countdown">{minutes}:{seconds < 10 ? `0${seconds}` : seconds}</div>
                <div className="question">{ datas[data].q }</div>
                <div className="answer">
                    <input
                        className="inputAnswer"
                        type="text"
                        autoFocus={true}
                        onKeyPress={(event) => {
                            if (event.key === "Enter") {
                                onClick();
                            }
                        }}
                    />
                    <button className="isCorrectBtn" type="button" onClick={onClick}>확인</button>
                </div>
            </div>
        </div>
    );
}

export default Main;