const express = require("express");
const router = express.Router();

router.post("/api/auth/signup/driver");
router.post("/api/auth/signup/user");
router.post("/api/auth/login");

router.post("/api/organizations/join");
router.get("/api/organizations/:id");


router.post("/api/organizations/:id/assignRides");
router.get("/api/organizations/:id/getRides",getRides);

router.get("/api/organizations/",getOrganizations);

router.get("/api/organizations/");
