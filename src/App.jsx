import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container, Grid } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function App() {
  const products = [
    {
      title: "product 1",
      description: "product description",
      price: 11.25,
      id: 482991816,
    },
    {
      title: "product 2",
      description: "product 2 description",
      price: 13.75,
      id: 658878345,
    },
  ];
  return (
    <Box>
      <Container>
        <Grid container spacing={2}>
          {products.map((p) => {
            return (
              <Grid item sm={12} md={4} lg={3}>
                <Card>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      category
                    </Typography>
                    <Typography variant="h5" component="div">
                      {p.title}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      subtitle
                    </Typography>
                    <Typography variant="body2">
                      {p.description}
                      <br />
                    </Typography>
                  </CardContent>
                  <CardActions
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography variant="body1" sx={{fontWeight: 'bold'}}>&euro; {p.price}</Typography>
                    <Button size="small" variant="contained">
                      <Typography variant="button" sx={{pr:1}}>Add To Cart</Typography>
                      <ShoppingCartIcon fontSize="small" />
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}

export default App;
