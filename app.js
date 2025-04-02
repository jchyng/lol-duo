const express = require('express');
const app = express();
const path = require('path');

// 정적 파일 제공
app.use(express.static('public'));

// EJS 설정
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// 라우트 설정
app.get('/', (req, res) => {
    res.render('index');
});

// 서버 시작
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`서버가 포트 ${PORT}에서 실행 중입니다.`);
}); 