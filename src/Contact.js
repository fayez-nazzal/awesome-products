import { Box, Grid, Typography, TextField, Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import useGA from "./useGA";

const ContactRoute = () => {
  useGA();
  const { register, handleSubmit, errors } = useForm();

  return (
    <Box margin="18px 42px" textAlign="center">
      <Typography gutterBottom variant="h3" component="h1">
        Contact us
      </Typography>
      <form>
        <Box margin="0 120px">
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <TextField
                fullWidth
                label="name"
                variant="outlined"
                {...register("name")}
                error={errors?.name}
              />
            </Grid>
            <Grid item xs={8}>
              <TextField
                fullWidth
                label="email"
                variant="outlined"
                {...register("email")}
                error={errors?.name}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="message"
                variant="outlined"
                multiline
                minRows={12}
                {...register("message")}
              />
            </Grid>
            <Grid item xs={12}>
              <Box margin="0 auto">
                <Button
                  variant="contained"
                  color="secondary"
                  type="submit"
                  size="large"
                >
                  Submit
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </form>
    </Box>
  );
};

export default ContactRoute;
