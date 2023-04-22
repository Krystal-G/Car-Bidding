import { Box, Button, Link, Stack, TextField, Typography } from "@mui/material";
import React from "react";

const Login = ({ setIsLogin }) => {
  const handleSubmit = () => {};
  return (
    <>
      <Box
        sx={{
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
              <Typography variant="h4">Login</Typography>
              <Typography color="text.secondary" variant="body2">
                Don't have an account? &nbsp;
                <Link
                  onClick={() => setIsLogin(false)}
                  underline="hover"
                  variant="subtitle2"
                >
                  Register
                </Link>
              </Typography>
            </Stack>
            <form noValidate onSubmit={handleSubmit}>
              <Stack spacing={3}>
                <TextField
                  fullWidth
                  label="Email Address"
                  name="email"
                  type="email"
                  variant="filled"
                />
                <TextField
                  fullWidth
                  label="Password"
                  name="password"
                  type="password"
                  variant="filled"
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
          </div>
        </Box>
      </Box>
    </>
  );
};

export default Login;
