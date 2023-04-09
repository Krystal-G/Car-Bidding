const express = require("express");
const router = express.Router();
const { driverSignup, passengerSignup, login } = require("../controller/user");
router.post("/api/auth/signup/driver", driverSignup);
router.post("/api/auth/signup/user", passengerSignup);
router.post("/api/auth/login", login);

router.post("/api/organizations/join"); // for employees
router.get("/api/organizations/:id");

router.post("/api/organizations/create");
router.get("/api/users/:id"); // user Info

router.post("/api/organizations/:id/assignRides");
router.get("/api/organizations/:id/getRides");

router.get("/api/organizations/");

module.exports = router;
