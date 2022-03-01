exports.getAllInfo = async (con) => {
  const rows = con.query(getAllInfoQuery);
  return rows;
};

exports.saveInfo = async (con, info) => {
  const result = con.query(InsertIntoOrders, info);
  return result;
};

const getAllInfoQuery = `
SELECT *
FROM Orders

`;

const InsertIntoOrders = `
INSERT INTO Orders
(size, phoneNumber, cost, site, status, address)
VALUES(?,?,?,?,?,?);
`;
