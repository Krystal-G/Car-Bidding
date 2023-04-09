const express = require("express");
const router = express.Router();
const {joinDriverToOrganization,joinUserToOrganization,getOrganizationById,createOrganization,getUser,getOrganizations,getRides} = require("../controller/organizations");
// const auth = require("../middleware/auth");

router.post("/api/auth/signup/driver");
router.post("/api/auth/signup/user");
router.post("/api/auth/login");

router.post("/api/organizations/join/driver",joinDriverToOrganization);
router.post("/api/organizations/join/user",joinUserToOrganization);

router.get("/api/organizations/:id",getOrganizationById);

router.post("/api/organizations/create",createOrganization);
router.get("/api/users/:id",getUser); // user Info


router.post("/api/organizations/:id/assignRides");
router.get("/api/organizations/:id/getRides",getRides);

router.get("/api/organizations/",getOrganizations);

module.exports = router;
