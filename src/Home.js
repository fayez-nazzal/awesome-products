import { makeStyles, Typography, Box } from "@material-ui/core";
import chartSrc from "./images/chart.png";

const Home = () => {
  return (
    <Box margin="64px 16px" textAlign="center">
      <Typography variant="h2" component="h1" color="primary">
        We are tracking you{" "}
        <span role="img" aria-label="emoji">
          😈
        </span>
      </Typography>
      <img width="400px" src={chartSrc} alt="chart" />
    </Box>
  );
};

export default Home;

const useStyles = makeStyles((theme) => ({}));
