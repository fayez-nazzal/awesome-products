import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography
} from "@material-ui/core";

const ProductCard = (props) => {
  return (
    <Card>
      <Box padding="8px">
        <CardMedia>
          <img width="90%" height="200px" src={props.image} alt="product" />
        </CardMedia>
        <CardContent>
          <Typography variant="body1">{props.children}</Typography>
        </CardContent>
        <Button variant="contained" color="secondary">
          Buy now
        </Button>
      </Box>
    </Card>
  );
};

export default ProductCard;
