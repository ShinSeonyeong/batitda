const express = require('express');
const axios = require('axios');
const router = express.Router();

const CLIENT_ID = process.env.KAKAO_CLIENT_ID;
const REDIRECT_URI = process.env.KAKAO_REDIRECT_URI;
const CLIENT_SECRET = process.env.KAKAO_CLIENT_SECRET;

// 🔗 카카오 로그인 URL로 리다이렉트
router.get('/kakaologin', (req, res) => {
  const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  res.redirect(kakaoAuthUrl);
});

// ✅ 인가코드로 토큰 받고 유저 정보 세션 저장 → 프론트로 리다이렉트
router.get('/kakao/callback', async (req, res) => {
  const { code } = req.query;

  try {
    // 🔐 access token 발급
    const tokenRes = await axios.post('https://kauth.kakao.com/oauth/token', null, {
      params: {
        grant_type: 'authorization_code',
        client_id: CLIENT_ID,
        redirect_uri: REDIRECT_URI,
        code,
        client_secret: CLIENT_SECRET,
      },
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });

    const accessToken = tokenRes.data.access_token;

    // 👤 유저 정보 가져오기
    const userRes = await axios.get('https://kapi.kakao.com/v2/user/me', {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    const { id, properties, kakao_account } = userRes.data;

    // 💾 세션에 저장
    req.session.user = {
      id,
      nickname: properties?.nickname,
      email: kakao_account?.email,
    };

    // ✅ 프론트로 리다이렉트
    res.redirect('http://localhost:5173/login/success');
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).send('로그인 실패');
  }
});

// ✅ 로그인한 유저 정보 확인
router.get('/user', (req, res) => {
  if (req.session.user) {
    res.json(req.session.user);
  } else {
    res.status(401).json({ error: '로그인 필요' });
  }
});

// ✅ 로그아웃
router.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('세션 삭제 오류:', err);
      return res.status(500).json({ message: '로그아웃 실패' });
    }
    res.clearCookie('connect.sid'); // 세션 쿠키 삭제
    res.json({ message: '로그아웃 완료' });
  });
});

module.exports = router;
