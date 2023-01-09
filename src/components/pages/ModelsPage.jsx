import { Box, Grid } from "@mui/material";
import React from "react";
import ModelList from "../Models/ModelList";

const ModelsPage = () => {
  return (
    <Box>
      <h2 style={{color: "#fff", textAlign: "center", marginTop: "2%"}}>MODELS</h2>
      <Grid>
        <ModelList />
      </Grid>
    </Box>
  );
};

export default ModelsPage;
