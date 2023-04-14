import React from "react";
import { Box } from "@mui/system";
import { Button, Typography, Link } from "@mui/material";
import Navbar from "../../components/Navbar/Navbar";

const CorporateAccountsLandingPage = () => {
  return (
    <Box>
      <Navbar />
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            pt: { xs: "30px", md: "initial" },
            display: "flex",
            flexDirection: "column",
            ml: { xs: 0, md: "50px" },
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              fontFamily: "inherit",
              fontWeight: "500",
              fontSize: { xs: "25px", sm: "30px", md: "50px" },
              mb: "30px",
            }}
          >
            Corporate Accounts
          </Typography>
          <Box sx={{ display: "flex", mb: "30px" }}>
            <Link href="/corpacauth" sx={{textDecoration:'none'}}>
              <Button
                sx={{
                  mr: "20px",
                  fontFamily: "inherit",
                  fontWeight: "600",
                  backgroundColor: "#8330C2",
                  color: "white",
                  borderRadius: "10px",
                  width: "fit-content",
                  fontSize: { xs: "12px", sm: "15px", md: "15px" },
                  p: "20px",
                  ":hover": {
                    backgroundColor: "#A86ED4",
                    color: "white",
                  },
                }}
              >
                Join Organization
              </Button>
            </Link>
            <Link href="/corpacauth" sx={{textDecoration:'none'}}>
              <Button
                sx={{
                  fontFamily: "inherit",
                  border: 1,
                  fontWeight: "600",
                  borderColor: "#8330C2",
                  color: "#8330C2",
                  borderRadius: "10px",
                  width: "fit-content",
                  fontSize: { xs: "12px", sm: "15px", md: "15px" },
                  p: "20px",
                  ":hover": {},
                }}
              >
                Create Organization
              </Button>
            </Link>
          </Box>
        </Box>
        <Box
          sx={{
            width: { xs: "0", md: "50%" },
            backgroundImage: {
              xs: "none",
              md: 'url("https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80")',
            },
            opacity: "1",
            backgroundSize: "cover",
            transform: {
              xs: "none",
              md: "rotate(-5deg)",
            },
            transformOrigin: {
              xs: "initial",
              md: "top left",
            },
            height: { xs: "0", md: "100vh" },
          }}
        ></Box>
      </Box>
    </Box>
  );
};

export default CorporateAccountsLandingPage;
