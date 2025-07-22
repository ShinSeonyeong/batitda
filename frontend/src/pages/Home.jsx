import React from 'react';

function Home() {
  const loginWithKakao = () => {
    window.location.href = 'http://localhost:4000/auth/kakaologin';
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1 style={{ color: '#666', fontSize: '24px' }}>로그인</h1>
      <p style={{ color: '#999', marginBottom: '20px' }}>Hi! Welcome</p>
      <input
        type="text"
        placeholder="이메일 주소를 입력하세요"
        style={{ width: '100%', maxWidth: '300px', padding: '10px', marginBottom: '10px' }}
      />
      <input
        type="password"
        placeholder="비밀번호를 입력하세요"
        style={{ width: '100%', maxWidth: '300px', padding: '10px', marginBottom: '20px' }}
      />
      <button
        onClick={loginWithKakao}
        style={{
          border: 'none',
          backgroundColor: '#A9BA9D',
          color: '#fff',
          padding: '10px 20px',
          borderRadius: '5px',
          cursor: 'pointer',
          width: '100%',
          maxWidth: '300px',
          marginBottom: '10px'
        }}
      >
        로그인 하기
      </button>
      <p style={{ color: '#666', fontSize: '12px' }}>회원 가입 | 비밀번호 찾기</p>
      <button
        style={{
          border: 'none',
          backgroundColor: '#FFC107',
          color: '#000',
          padding: '10px 20px',
          borderRadius: '5px',
          cursor: 'pointer',
          width: '100%',
          maxWidth: '300px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
<img src='/kakaologo.png'></img>
      </button>
    </div>
  );
}

export default Home;