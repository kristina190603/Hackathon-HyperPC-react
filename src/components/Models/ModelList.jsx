import { Box, CircularProgress, Grid, Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useModels } from "../contexts/modelsContext";
import ModelCard from "./ModelCard";

const ModelList = () => {
  const { getModels, models, fetchByParams } = useModels();
  const [searchParams, setSearchParams] = useSearchParams();

  const [page, setPage] = useState(1);

  const itemsPerPage = 12;
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
    <>
      <select
        name="filter"
        id="filter"
        style={{ margin: "20px" }}
        onChange={(e) => fetchByParams("type", e.target.value)}
      >
        <option value="GAMING PC">GAMING PC</option>
        <option value="CONCEPT PC">CONCEPT PC</option>
        <option value="WORK STATION">WORK STATION</option>
      </select>
      <Grid
        item
        md={9}
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "80%",
            margin: "0 auto",
            justifyContent: "center",
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
          sx={{ width: "30%", margin: "20px auto" }}
          count={count}
          page={page}
          onChange={handleChange}
          shape="rounded"
        />
      </Grid>
    </>
  );
};

export default ModelList;
