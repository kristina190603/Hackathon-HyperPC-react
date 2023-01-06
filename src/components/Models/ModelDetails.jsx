import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useModels } from "../contexts/modelsContext";

const ModelDetails = () => {
  const { id } = useParams();
  const { getOneModel, oneModel } = useModels();

  useEffect(() => {
    getOneModel(id);
  });

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={oneModel.image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {oneModel.name}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {oneModel.price}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {oneModel.info}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {oneModel.type}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add to Cart</Button>
      </CardActions>
    </Card>
  );
};

export default ModelDetails;
