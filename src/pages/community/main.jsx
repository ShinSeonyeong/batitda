import React from 'react';
import style from '/src/css/community/main.module.css'

function Main(props) {
    return (
        <>
            <div className={style.container}>
                <div className={style.intro}>
                    <div className={style.intro_content}>
                        <img src="" alt="이미지1"/>
                        <div className={style.intro_content_body}>
                            <p>
                                농촌 알바 어땠냐고?
                            </p>
                            <p>
                                여기 다 있어요
                            </p>
                        </div>
                    </div>
                    <div className={style.intro_content}>
                        <img src="" alt="이미지2"/>
                        <div className={style.intro_content_body}>
                            <p>
                                혼자는 아쉬운 촌캉스,
                            </p>
                            <p>
                                함께해요!
                            </p>
                        </div>
                    </div>
                    <div className={style.intro_content}>
                        <img src="" alt="이미지3"/>
                        <div className={style.intro_content_body}>
                            <p>
                                귀농 선배들의
                            </p>
                            <p>
                                현실 조언 모음!
                            </p>
                        </div>
                    </div>
                </div>
                <div className={style.body}>

                </div>
            </div>
        </>
    );
}

export default Main;