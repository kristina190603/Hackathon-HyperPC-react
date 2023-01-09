import { Box, Button, CardMedia, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useModels } from "../contexts/modelsContext";

const EditModel = () => {
  const navigate = useNavigate();
  const { getOneModel, oneModel, saveEditedModel } = useModels();

  const [model, setModel] = useState(oneModel);

  useEffect(() => {
    setModel(oneModel);
  }, [oneModel]);

  const { id } = useParams();
  useEffect(() => {
    getOneModel(id);
  }, []);

  const handleInput = (e) => {
    let obj = {
      ...model,
      [e.target.name]: e.target.value,
    };
    setModel(obj);
  };
  
  return (
      <Box className="boxTextFieldCreate">
        <TextField className="TextFieldChangeCreate"
          value={model.image || ""}
          onChange={handleInput}
          id="filled-basic"
          label="image"
          variant="filled"
          name="image"
          />
      <TextField className="TextFieldChangeCreate"
        value={model.name || ""}
        onChange={handleInput}
        id="filled-basic"
        label="name"
        variant="filled"
        name="name"
      />
      <TextField className="TextFieldChangeCreate"
        value={model.price || ""}
        onChange={handleInput}
        id="filled-basic"
        label="price"
        variant="filled"
        name="price"
      />
      <TextField className="TextFieldChangeCreate"
        value={model.info || ""}
        onChange={handleInput}
        id="filled-basic"
        label="information"
        variant="filled"
        name="info"
      />
      <TextField className="TextFieldChangeCreate"
        value={model.type || ""}
        onChange={handleInput}
        id="filled-basic"
        label="type"
        variant="filled"
        name="type"
      />
      <Button
        onClick={() => {
          saveEditedModel(id, model);
          navigate(-1);
        }}
        variant="contained"
      >
        SAVE
      </Button>
    </Box>
  );
};

export default EditModel;
