import React from 'react';

function Home() {
  const loginWithKakao = () => {
    window.location.href = 'http://localhost:4000/auth/kakaologin';
  };

  return (
    <div>
      <h1>소셜 로그인</h1>
      <button onClick={loginWithKakao}
        style={{
          border: 'none',
          outline: 'none',
          backgroundColor: '#FEE500',
          color: '#3c1e1e',
          borderRadius: '4px',
          cursor: 'pointer'
        }}>
        <img src='/kakaologo.png' alt='카카오 로고'></img>
      </button>
    </div>
  );
}

export default Home;
