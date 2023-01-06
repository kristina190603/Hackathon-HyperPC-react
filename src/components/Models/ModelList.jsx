import { Box, CircularProgress, Grid, Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useModels } from "../contexts/modelsContext";
import ModelCard from "./ModelCard";

const ModelList = () => {
  const { getModels, models } = useModels();
  const [searchParams, setSearchParams] = useSearchParams();

  const [page, setPage] = useState(1);

  const itemsPerPage = 6;
  const count = Math.ceil(models.length / itemsPerPage);

  const handleChange = (e, p) => {
    setPage(p);
  };

  function currentData() {
    const begin = (page - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return models.slice(begin, end);
  }

  useEffect(() => {
    getModels();
  }, []);

  return (
    <Grid
      item
      md={9}
      sx={{ justifyContent: "center", display: "flex", flexWrap: "wrap" }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          minHeight: "40vh",
          gap: "10px",
        }}
      >
        {models.length > 0 ? (
          currentData().map((item) => <ModelCard item={item} key={item.id} />)
        ) : (
          <>
            <CircularProgress color="inherit" />
          </>
        )}
      </Box>
      <Pagination
        sx={{ m: 2 }}
        count={count}
        page={page}
        onChange={handleChange}
        shape="rounded"
      />
    </Grid>
  );
};

export default ModelList;
