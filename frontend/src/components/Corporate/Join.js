import React, { useState, useCallback } from "react";
import {
  Box,
  Button,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
const Join = () => {
  const handleSubmit = () => {};
  const [method, setMethod] = useState("admin");
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
              <Tab label="admin" value="admin" />
              <Tab label="employee" value="employee" />
            </Tabs>
            {method === "admin" && (
              <form noValidate onSubmit={handleSubmit}>
                <Stack spacing={3}>
                  <TextField
                    fullWidth
                    variant="filled"
                    label="Organization Name"
                    name="orgName"
                    type="string"
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    label="Organization Address"
                    name="orgAddress"
                    type="string"
                  />

                </Stack>

                <Button
                  fullWidth
                  size="large"
                  sx={{ mt: 3, backgroundColor:'#8330c2'}}
                  type="submit"
                  variant="contained"
                >
                  Continue
                </Button>
              </form>
            )}
            {method === "employee" && (
              <form noValidate onSubmit={handleSubmit}>
                <Stack spacing={3}>
                  <TextField
                    fullWidth
                    variant="filled"
                    label="organization ID"
                    name="orgID"
                    type="string"
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
