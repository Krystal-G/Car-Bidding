import React, { useState, useCallback } from "react";
import ListOfOrgs from "./ListOfOrgs";
import {
  Box,
  Button,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import { MainState } from "../../context/MainContext";
const Join = () => {
  const [userId,setuserId] = useState("");
  const [orgId,setOrgId] = useState("");
  const {joinUserToOrg,joinDriverToOrg} = MainState();
  const handleSubmitOfDriver = () => {};
  const handleSubmitOfEmployee = (e) => {
    e.preventDefault();
    joinUserToOrg({
      userId:userId,
      orgId:orgId
    })
    setuserId("");
    setOrgId("");
  };
  const [method, setMethod] = useState("driver");
  const handleMethodChange = useCallback((event, value) => {
    setMethod(value);
  }, []);
  return (
    <>
      <Box
        sx={{
          backgroundColor: "background.paper",
          flex: "1 1 auto",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: 550,
            px: 3,
            py: "100px",
            width: "100%",
          }}
        >
          <div>
            <Stack spacing={1} sx={{ mb: 3 }}>
              <Typography variant="h4">Corporate Accounts</Typography>
            </Stack>
            <Tabs onChange={handleMethodChange} sx={{ mb: 3 }} value={method}>
              <Tab label="driver" value="driver" />
              <Tab label="employee" value="employee" />
            </Tabs>
            {method === "driver" && (
              <ListOfOrgs/>
            )}
            {method === "employee" && (
              <form noValidate onSubmit={handleSubmitOfEmployee}>
                <Stack spacing={3}>
                  <TextField
                    fullWidth
                    variant="filled"
                    label="organization ID"
                    name="orgID"
                    type="string"
                    value={orgId}
                    onChange={(e) => setOrgId(e.target.value)}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    label="Employee ID"
                    name="userId"
                    type="string"
                    value={userId}
                    onChange={(e) =>setuserId(e.target.value)}
                  />
                </Stack>
                <Button
                  fullWidth
                  size="large"
                  sx={{ mt: 3 }}
                  type="submit"
                  variant="contained"
                >
                  Continue
                </Button>
              </form>
            )}
          </div>
        </Box>
      </Box>
    </>
  );
};

export default Join;
