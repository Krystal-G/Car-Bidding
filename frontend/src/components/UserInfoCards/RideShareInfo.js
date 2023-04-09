import React from "react";
import {CardHeader, CardContent, Divider} from "@mui/material";
import Text from "./Text";
import ReCard from "./ReCard";
const rideObj = {
  DriverName: "Rahul",
  DriverContact: "1234567890",
  CarNo: "UP 12 AB 1234",
  CarModel: "Maruti Suzuki",
  PickupLocation: "Gomti Nagar",
  DropLocation: "IIIT Lucknow",
  PickupTime: "10:00 AM",
  DropTime: "11:00 AM",
};
const RideShareInfo = () => {
  return (
    <ReCard>
      <CardHeader sx={{ textAlign: "left" }} title="Ride Info" />
      <Divider variant="middle" />
      <CardContent>
        <Text first="Driver Name" second={rideObj.DriverName} />
        <Text first="Driver Contact" second={rideObj.DriverContact} />
        <Text first="Car No" second={rideObj.CarNo} />
        <Text first="Car Model" second={rideObj.CarModel} />
        <Text first="Pickup Location" second={rideObj.PickupLocation} />
        <Text first="Drop Location" second={rideObj.DropLocation} />
        <Text first="Pickup Time" second={rideObj.PickupTime} />
        <Text first="Drop Time" second={rideObj.DropTime} />
      </CardContent>
    </ReCard>
  );
};

export default RideShareInfo;
