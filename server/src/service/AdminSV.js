const { pool } = require("../../config/db");
const dao = require("../dao/AdminDao");

exports.findAllInfo = async () => {
  const con = await pool.getConnection(async (conn) => conn);

  try {
    await con.beginTransaction();
    const result = await dao.getAllInfo(con);
    return result[0];
  } catch (e) {
    console.log(e);
  } finally {
    con.release();
  }
};

exports.saveInfo = async (req_body) => {
  const con = await pool.getConnection(async (conn) => conn);
  const info = [
    req_body.size,
    req_body.phone,
    req_body.cost,
    req_body.site,
    req_body.status,
    req_body.address,
  ];

  try {
    await con.beginTransaction();
    const result = await dao.saveInfo(con, info);
    return result;
  } catch (e) {
    con.rollback();
    console.log(e);
  } finally {
    con.release();
  }
};
