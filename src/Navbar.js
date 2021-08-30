import { Link } from "react-router-dom";
import { AppBar, Box, makeStyles, Toolbar } from "@material-ui/core";
import { ReactComponent as Logo } from "./svg/tetris.svg";

const Navbar = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar>
        <Toolbar>
          <Link to="/" className={classes.logo}>
            <Box display="flex" alignItems="center" justifyContent="center">
              <Logo width="48px" />
              <Box margin="0 6px">
                <span>Awesome Products</span>
              </Box>
            </Box>
          </Link>
          <Box marginLeft="auto">
            <Link to="/" className={classes.link}>
              Home
            </Link>
            <Link to="/app" className={classes.link}>
              Store
            </Link>
            <Link to="/contact" className={classes.link}>
              Contact
            </Link>
            <span className={classes.link}>About</span>
          </Box>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbar}>content here...</div>
    </>
  );
};

export default Navbar;

const useStyles = makeStyles((theme) => ({
  logo: {
    fontWeight: "bolder",
    color: "#ec443c",
    textDecoration: "none",
    fontSize: "3.8vw",
    [theme.breakpoints.up("sm")]: {
      fontSize: "3.3vw"
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "2vw"
    },
    textShadow: "-0.8px -0.8px #fff"
  },
  link: {
    margin: "0 8px",
    color: "#f5f7fa",
    textDecoration: "none",
    fontSize: "18px",
    cursor: "pointer",
    "&:hover": {
      color: "#efd3a3"
    }
  },
  toolbar: theme.mixins.toolbar
}));
