const {pool} = require("../../../config/database");

// 주문정보 리스트 조회
async function selectOrderList(connection, category) {
    const selectOrderListQuery = `
        SELECT *
        FROM Orders
        WHERE status = ?;
    `;
    const [orderRows] = await connection.query(selectOrderListQuery, category);
    return orderRows;
}

async function updateOrderDao(connection, orderInfo) {
    const updateOrderQuery = `
    UPDATE Orders
    SET size = ?, phoneNumber = ?, cost = ?, site = ?, status = ?, address = ?
    WHERE orderIdx = ?
    `;
    const [orderRows] = await connection.query(updateOrderQuery, orderInfo);
    return orderRows;
}

module.exports = {
    selectOrderList,
    updateOrderDao
};
