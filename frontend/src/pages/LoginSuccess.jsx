import React, { useEffect, useState } from 'react';
import axios from 'axios';

function LoginSuccess() {
  const [user, setUser] = useState(null);

  const logout = async () => {
    try {
      await axios.get('http://localhost:4000/auth/logout', { withCredentials: true });
      setUser(null);
      window.location.href = '/';
    } catch (error) {
      console.error('로그아웃 실패:', error);
    }
  };

  useEffect(() => {
    axios.get('http://localhost:4000/auth/user', { withCredentials: true })
      .then(res => setUser(res.data))
      .catch(() => setUser(null));
  }, []);

  if (!user) return <p>유저 정보를 불러오는 중...</p>;

  return (
    <div>
      <h1>로그인 성공!</h1>
      <p>{user.nickname}님 환영합니다!</p>
      <p>이메일: {user.email}</p>
      <button onClick={logout}>로그아웃</button>
    </div>
  );
}

export default LoginSuccess;
