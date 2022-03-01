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
