module.exports = {
    // Success
    SUCCESS : { "isSuccess": true, "code": 1000, "message":"성공" },
 
    // Common
    TOKEN_EMPTY : { "isSuccess": false, "code": 2000, "message":"JWT 토큰이 입력되지 않았습니다." },
    TOKEN_VERIFICATION_FAILURE : { "isSuccess": false, "code": 3000, "message":"JWT 토큰 검증 실패" },
    TOKEN_VERIFICATION_SUCCESS : { "isSuccess": true, "code": 1001, "message":"JWT 토큰 검증 성공" },

    //Request error
    MYPAGE_NICKNAME_LENGTH : { "isSuccess": false,"code": 2055,"message":"닉네임은 최대 20자리를 입력해주세요." },

    // Response error
    SIGNUP_REDUNDANT_EMAIL : { "isSuccess": false, "code": 3001, "message":"중복된 이메일입니다." },
    SIGNUP_REDUNDANT_NICKNAME : { "isSuccess": false, "code": 3002, "message":"중복된 닉네임입니다." },
    SIGNUP_REDUNDANT_PHONENUMBER : { "isSuccess": false, "code": 3011, "message":"중복된 휴대폰번호입니다." },

    //Connection, Transaction 등의 서버 오류
    DB_ERROR : { "isSuccess": false, "code": 4000, "message": "데이터 베이스 에러"},
    SERVER_ERROR : { "isSuccess": false, "code": 4001, "message": "서버 에러"},
 
}
