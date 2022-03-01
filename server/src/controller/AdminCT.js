const router = require("express").Router();
const service = require("../service/AdminSV");

router.get("/", async (req, res) => {
  const infos = await service.findAllInfo();
  return res.send(infos);
});

router.post("/", async (req, res) => {
  const temp = await service.saveInfo(req.body);
  console.log(temp);
  return res.status(201).json({ message: "success" });
});

module.exports = router;
