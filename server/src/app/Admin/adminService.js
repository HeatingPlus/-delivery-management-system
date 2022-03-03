const {pool} = require("../../../config/database");
const adminProvider = require("./adminProvider");
const adminDao = require("./adminDao");
const baseResponse = require("../../../config/baseResponseStatus");
const {response} = require("../../../config/response");
const {errResponse} = require("../../../config/response");
const {connect} = require("http2");

// Service Create, Update, Delete 의 로직 처리

exports.editUser = async function (userIdx, nickname) {
    try {
        console.log(userIdx)
        const connection = await pool.getConnection(async (conn) => conn);
        const editUserResult = await userDao.updateUserInfo(connection, userIdx, nickname)
        connection.release();

        return response(baseResponse.SUCCESS);

    } catch (err) {
        logger.error(`App - editUser Service error\n: ${err.message}`);
        return errResponse(baseResponse.DB_ERROR);
    }
}

exports.updateOrderService = async function (orderInfo) {
    try {
        console.log(orderInfo)
        const connection = await pool.getConnection(async (conn) => conn);
        const updateOrderDaoResult = await adminDao.updateOrderDao(connection, orderInfo);
        connection.release();

        return response(baseResponse.SUCCESS);
    } catch (err) {
        console.log(err)
        return errResponse(baseResponse.DB_ERROR);
    }
}
