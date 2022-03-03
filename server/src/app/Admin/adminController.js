const adminProvider = require("./adminProvider");
const adminService = require("./adminService");
const baseResponse = require("../../../config/baseResponseStatus");
const {response} = require("../../../config/response");
const {errResponse} = require("../../../config/response");
const {emit} = require("nodemon");

/** 주문정보 조회 API
 * [GET] /app/order/list
 */
 exports.getOrderList = async function (req, res) {
     const orderListResult = await adminProvider.retrieveOrderList();
     return res.send(response(baseResponse.SUCCESS, orderListResult));
};
