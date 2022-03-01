const router = require("express").Router();
const service = require("../service/AdminSV");

router.get("/", async (req, res) => {
  const infos = await service.findAllInfo();
  return res.send(infos);
});

module.exports = router;
