import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useModels } from "../contexts/modelsContext";

const AddModels = () => {
  const navigate = useNavigate();

  const { addModel } = useModels();

  const [model, setModel] = useState({
    image: "",
    name: "",
    price: "",
    info: "",
    type: "",
  });

  return (
    <Box className="boxTextFieldCreate">
      <TextField className="TextFieldChangeCreate"
        value={model.image}
        onChange={(event) =>
          setModel((prev) => ({ ...prev, image: event.target.value }))
        }
        id="filled-basic"
        label="image"
        variant="filled"
        name="image"
      />
      <TextField className="TextFieldChangeCreate"
        value={model.name}
        onChange={(event) =>
          setModel((prev) => ({ ...prev, name: event.target.value }))
        }
        id="filled-basic"
        label="name"
        variant="filled"
        name="name"
      />
      <TextField className="TextFieldChangeCreate"
        value={model.price}
        onChange={(event) =>
          setModel((prev) => ({ ...prev, price: event.target.value }))
        }
        id="filled-basic"
        label="price"
        variant="filled"
        name="price"
      />
      <TextField className="TextFieldChangeCreate"
        value={model.info}
        onChange={(event) =>
          setModel((prev) => ({ ...prev, info: event.target.value }))
        }
        id="filled-basic"
        label="information"
        variant="filled"
        name="info"
      />
      <TextField className="TextFieldChangeCreate"
        value={model.type}
        onChange={(event) =>
          setModel((prev) => ({ ...prev, type: event.target.value }))
        }
        id="filled-basic"
        label="type"
        variant="filled"
        name="type"
      />
      <Button
        onClick={() => {
          addModel(model);
          navigate(-1);
        }}
        variant="contained"
      >
        CREATE
      </Button>
    </Box>
  );
};

export default AddModels;
