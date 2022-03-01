exports.getAllInfo = async (con) => {
  const rows = con.query(getAllInfoQuery);
  return rows;
};

const getAllInfoQuery = `
SELECT *
FROM Orders

`;
