import { Box, Grid } from "@mui/material";
import React from "react";
import ModelList from "../Models/ModelList";

const ModelsPage = () => {
  return (
    <Box>
      Models Page
      <Grid>
        <ModelList />
      </Grid>
    </Box>
  );
};

export default ModelsPage;
