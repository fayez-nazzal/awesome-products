import { makeStyles, Box, Grid, Typography } from "@material-ui/core";
import ProductCard from "./ProductCard";

const AppRoute = () => {
  return (
    <Box margin="18px 42px" textAlign="center">
      <Typography gutterBottom variant="h3" component="h1">
        Awesome products to buy
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <ProductCard image="https://m.media-amazon.com/images/I/61bZEnqQdPL._AC_SX425_.jpg">
            Awesome dinasour lamp
          </ProductCard>
        </Grid>
        <Grid item xs={3}>
          <ProductCard image="https://m.media-amazon.com/images/I/71NYoSQ5MvL._AC_SY879_.jpg">
            Awesome sword house key
          </ProductCard>
        </Grid>
        <Grid item xs={3}>
          <ProductCard image="https://awesomestufftobuy.com/wp-content/uploads/2020/11/keurig-k-mini-coffee-maker-450x450.jpg">
            Awesome coffee maker
          </ProductCard>
        </Grid>
        <Grid item xs={3}>
          <ProductCard image="https://m.media-amazon.com/images/I/61o9g6eWtwL._AC_SX425_.jpg">
            Awesome edison lights
          </ProductCard>
        </Grid>
        <Grid item xs={3}>
          <ProductCard image="https://awesomestufftobuy.com/wp-content/uploads/2020/01/into-focus-mug.jpg">
            Awesome focus mug
          </ProductCard>
        </Grid>
        <Grid item xs={3}>
          <ProductCard image="https://awesomestufftobuy.com/wp-content/uploads/2020/01/dad-jokes-book-2-450x465.jpg">
            Awesome dad jokes
          </ProductCard>
        </Grid>
        <Grid item xs={3}>
          <ProductCard image="https://awesomestufftobuy.com/wp-content/uploads/2019/12/pac-man-ghost-lamp-2-450x412.jpg">
            Awesome pacman light
          </ProductCard>
        </Grid>
        <Grid item xs={3}>
          <ProductCard image="https://awesomestufftobuy.com/wp-content/uploads/2019/01/office-buzzwords-coffee-mugs-3-450x450.jpeg">
            Awesome office mug
          </ProductCard>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppRoute;
