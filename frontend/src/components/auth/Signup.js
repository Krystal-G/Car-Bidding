import React, { useState, useCallback } from "react";
import {
  Box,
  Button,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography,
  Link,
} from "@mui/material";
const Signup = ({setIsLogin}) => {
  const handleSubmit = () => {};
  const [method, setMethod] = useState("passenger");
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
              <Typography variant="h4">Signup</Typography>
              <Typography color="text.secondary" variant="body2">
                Alredy have an account? &nbsp;
                <Link
                  underline="hover"
                  variant="subtitle2"
                  onClick={() => setIsLogin(true)}
                >
                  Login
                </Link>
              </Typography>
            </Stack>
            <Tabs onChange={handleMethodChange} sx={{ mb: 3 }} value={method}>
              <Tab label="passenger" value="passenger" />
              <Tab label="driver" value="driver" />
            </Tabs>
            {method === "passenger" && (
              <form noValidate onSubmit={handleSubmit}>
                <Stack spacing={3}>
                  <TextField
                    fullWidth
                    variant="filled"
                    label="Email Address"
                    name="email"
                    type="email"
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    label="Password"
                    name="password"
                    type="password"
                  />

                  <TextField
                    variant="filled"
                    label="Aadhar number"
                    name="aadhar"
                    type="string"
                  />

                  <TextField
                    variant="filled"
                    label="phone number"
                    name="phone"
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
            {method === "driver" && (
              <form noValidate onSubmit={handleSubmit}>
                <Stack spacing={3}>
                  <TextField
                    fullWidth
                    variant="filled"
                    label="Email Address"
                    name="email"
                    type="email"
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    label="Password"
                    name="password"
                    type="password"
                  />
                  <Box
                    display={"flex"}
                    flexDirection={"row"}
                    justifyContent={"space-between"}
                  >
                    <TextField
                      variant="filled"
                      label="Aadhar number"
                      name="aadhar"
                      type="string"
                      sx={{ width: "48%" }}
                    />

                    <TextField
                      variant="filled"
                      label="phone number"
                      name="phone"
                      type="string"
                      sx={{ width: "48%" }}
                    />
                  </Box>
                  <TextField
                    fullWidth
                    variant="filled"
                    label="Rc number"
                    name="rc"
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

export default Signup;
