const adminProvider = require("./adminProvider");
const adminService = require("./adminService");
const baseResponse = require("../../../config/baseResponseStatus");
const {response} = require("../../../config/response");
const {errResponse} = require("../../../config/response");
const {emit} = require("nodemon");

/** 주문정보 조회 API
 * [GET] /app/order/list
 * Path Variable: category
 */
 exports.getOrderList = async function (req, res) {

    const category = req.params.category;

    if (!category) return res.send(errResponse(baseResponse.CATEGORY_EMPTY));

    const orderListResult = await adminProvider.retrieveOrderList(category);
    return res.send(response(baseResponse.SUCCESS, orderListResult));
};

/*
주문정보 수정 API
[PATCH] /app/order/:orderIdx
*/
exports.updateOrderList = async function (req, res) {
    const {size, phone, cost, site, status, address} = req.body;
    const orderIdx = req.params.orderIdx;

    const orderInfo = [size, phone, cost, site, status, address, orderIdx];

    const updateOrderServiceResult = await adminService.updateOrderService(orderInfo);
    return res.send(updateOrderServiceResult);
}

