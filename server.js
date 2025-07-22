const express = require('express');
const session = require('express-session');
const cors = require('cors');
require('dotenv').config();

const authRouter = require('./routes/auth');
const app = express();

// 🔥 CORS 설정 (Vite는 5173포트)
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

// 🔒 세션 설정
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: false, 
  cookie: {
    httpOnly: true,
    secure: false, 
  }
}));

// 🔗 라우터 연결
app.use('/auth', authRouter);

// 🚀 서버 시작
app.listen(4000, () => console.log('Server running on http://localhost:4000'));
