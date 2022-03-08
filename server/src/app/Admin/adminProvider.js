const {pool} = require("../../../config/database");

const adminDao = require("./adminDao");

//Provider : Read의 비즈니스 로직 처리

exports.retrieveOrderList = async function (category) {
    const connection = await pool.getConnection(async (conn) => conn);
    const orderListResult = await adminDao.selectOrderList(connection, category);
    connection.release();

    return orderListResult;
};
