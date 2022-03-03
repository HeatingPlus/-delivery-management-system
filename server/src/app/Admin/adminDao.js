const {pool} = require("../../../config/database");

// 주문정보 리스트 조회
async function selectOrderList(connection) {
    const selectOrderListQuery = `
        SELECT *
        FROM Orders;
    `;
    const [orderRows] = await connection.query(selectOrderListQuery);
    return orderRows;
}

module.exports = {
    selectOrderList
};
