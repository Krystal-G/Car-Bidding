const express = require("express");
const router = express.Router();
const {driverSignup,passengerSignup,login} = require("../controller/user");

const {joinDriverToOrganization, getRides, joinUserToOrganization,getOrganizations} = require("../controller/organizations");
router.post("/api/auth/signup/driver", driverSignup);
router.post("/api/auth/signup/user",  passengerSignup);
router.post("/api/auth/login", login);

router.post("/api/organizations/join/driver",joinDriverToOrganization);
router.post("/api/organizations/join/user",joinUserToOrganization);
router.get("/api/organizations/:id",getOrganizations);


router.post("/api/organizations/:id/assignRides", assignRides);
router.get("/api/organizations/:id/getRides",getRides);

router.get("/api/organizations/",getOrganizations);

router.get("/api/organizations/", getOrganizations);
