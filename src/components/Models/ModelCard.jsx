import React from "react";
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { useNavigate } from "react-router-dom";
import { useCart } from "../contexts/cartContext";
import { useModels } from "../contexts/modelsContext";
import { useAuth } from "../contexts/authContext";
import { Button, Card, CardActions, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import { ADMIN } from "../helpers/consts";


function ModelCard ({item}) {
  console.log(item);
    const navigate = useNavigate()

    const { addModelToCart, checkModelInCart} = useCart()
    const {deleteModel} = useModels()

    const {
        user: {email},
    } = useAuth()

    return (
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
        image={item.image}
        onClick={()=> navigate(`/models/${item.id}`)}
        />

        <CardContent>
          <img src={item.image} alt="image" />
          <Typography gutterBottom variant="h5" component="div">{item.name}</Typography>
          <Typography gutterBottom variant="h5" component="div">{item.price}</Typography>
          <Typography gutterBottom variant="h5" component="div">{item.info}</Typography>
          <Typography variant="body2" color="text.secondary">{item.type}</Typography>
        </CardContent>

        <CardActions>
        {email == ADMIN ? (
          <>
            <Button onClick={() => deleteModel(item.id)}>Delete</Button>
            <Button onClick={() => navigate(`/edit/${item.id}`)}>Edit</Button>
          </>
        ) : (
          <IconButton onClick={() => addModelToCart(item)}>
            {checkModelInCart(item.id) ? (
              <>
                <ShoppingCartCheckoutIcon 
                  sx={{
                    color: "brown",
                  }}
                />
              </>
            ) : (
              <>
                <ShoppingCartCheckoutIcon />
              </>
            )}
          </IconButton>
        )}
      </CardActions>
      </Card>
    );
};

export default ModelCard;