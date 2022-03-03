const whiteList = ["http://localhost:8080",
    "http://localhost:3000",
    "http://localhost:3001",
    "http://localhost:5555",
    // URL을 넣어준다
];
const corsOptions = {
    origin: function (origin, callback) {
        if (!origin || whiteList.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
};

module.exports = function (app) {
    const admin = require('./adminController');

    // 회원 조회 API
    app.get('/app/order/list', admin.getOrderList);

};