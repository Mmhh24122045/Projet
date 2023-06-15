const express = require("express");

const { add_contact, get_contact } = require("../controlles/contactNous.controller");
const router = express.Router();




router.post("/addcontact", add_contact);
router.get("/getcontact",  get_contact);


module.exports = router; 