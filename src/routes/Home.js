import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="container">
            <div className="box">
                <div className="title">迷宮 脫出</div>
                <div className="info">
                    <p>본 미궁은 아동용 한자 학습만화 <b>마법천자문</b>의 1권~51권의 내용을 기반으로 만들어졌습니다.</p>
                    <p>문제는 총 12문항으로 이루어져 있으며, 스포일러가 될 수 있으니 이 점 유의해주세요.</p>
                    <p>만약 문제의 직접적인 답 공유가 적발되는 경우 홈페이지는 예고 없이 폐쇄됩니다.</p>
                    <p>그럼 모두 미궁을 즐겨주시길 바랍니다.</p>
                    <p>입장하시겠습니까?</p>
                </div>
                <Link to="/main">
                    <button className="startBtn" type="button">시작</button>
                </Link>
            </div>
        </div>
    );
}

export default Home;