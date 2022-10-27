import React from "react";
import { useQuery } from "@tanstack/react-query";
//Components
import { Grid, Drawer, LinearProgress, Badge } from "@mui/material";
import AddShopingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Wrapper } from "./app.styles";
import Item from "./Item/Item";
//Types
export type CartItemType = {
  id: number;
  categorry: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch("https://fakestoreapi.com/products")).json();

const App = () => {
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    ["products"],
    getProducts
  );

  const gettotalItems = () => null;

  const handleAddToCart = (clickedItem: CartItemType) => null;

  const handleRemoveFromCart = () => null;

  if (isLoading) return <LinearProgress />;
  if (error) return <div>Something went wrong ...</div>;

  return (
    <Wrapper>
      <Grid container spacing={3}>
        {data?.map((item) => (
          <Grid item key={item?.id} xs={12} sm={4}>
            <Item item={item} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default App;
