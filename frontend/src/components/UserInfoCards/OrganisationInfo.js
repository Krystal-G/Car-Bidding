import React from "react";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Text from "./Text";
import Divider from "@mui/material/Divider";

import ReCard from './ReCard';
const orgInfo = {
  Name: "Indian Institute of Information Techonolgy Lucknow",
  Address: "IIITL",
  organizationId:"1234567890"
}
const OrganisationInfo = () => {
  return (
    <ReCard>
      <CardHeader sx={{textAlign:'left'}} title="Organisation Info" />
      <Divider variant="middle" />
      <CardContent>
        <Text first="Name" second={orgInfo.Name} />
        <Text first="Address" second={orgInfo.Address} />
        <Text first="Organization Id" second={orgInfo.organizationId} />
      </CardContent>
    </ReCard>
  );
};

export default OrganisationInfo;
