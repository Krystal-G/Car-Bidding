const express = require("express");
const router = express.Router();
const {driverSignup,passengerSignup,login} = require("../controller/user");
const {joinDriverToOrganization, getRides,getOrganizationById ,joinUserToOrganization,getOrganizations, createOrganization} = require("../controller/organizations");

router.route("/api/auth/signup/driver").post(driverSignup);
router.route("/api/auth/signup/user").post(passengerSignup);
router.post("/api/auth/login", login);

router.post("/api/organizations/join/driver",joinDriverToOrganization);
router.post("/api/organizations/join/user",joinUserToOrganization);
router.post("/api/organizations/create", createOrganization);
router.get("/api/organizations/:id",getOrganizationById);



// router.post("/api/organizations/:id/assignRides",assignRides);
router.get("/api/organizations/:id/getRides",getRides);

router.get("/api/organizations/", getOrganizations);
module.exports = router;