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
import { useCart } from "../contexts/cartContext";
import { useModels } from "../contexts/modelsContext";

const ModelDetails = () => {
  const { id } = useParams();
  const { getOneModel, oneModel } = useModels();
  const { addModelToCart } = useCart();
  useEffect(() => {
    getOneModel(id);
  },[]);

  return (
    <Card className="transform" sx={{ maxWidth: 345 }}>
      <CardMedia  className="heightIMG"
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
        <Button size="small" onClick={() => addModelToCart(oneModel)}>
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ModelDetails;
