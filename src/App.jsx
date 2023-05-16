import Box from "@mui/material/Box";
import {
  Container,
  Grid,
  Paper,
  Rating,
  Typography,
  Button,
} from "@mui/material";
import Header from "./components/header/Header";
import AddIcon from '@mui/icons-material/Add';

function App() {
  const products = [
    {
      title: "product",
      description: "product description",
      price: 11.25,
      id: 482991816,
    },
    {
      title: "product",
      description: "product description",
      price: 11.25,
      id: 482991816,
    },
    {
      title: "product",
      description: "product description",
      price: 11.25,
      id: 482991816,
    },
    {
      title: "product",
      description: "product description",
      price: 11.25,
      id: 482991816,
    },
    {
      title: "product",
      description: "product description",
      price: 11.25,
      id: 482991816,
    },
    {
      title: "product",
      description: "product description",
      price: 11.25,
      id: 482991816,
    },
    {
      title: "product",
      description: "product description",
      price: 11.25,
      id: 482991816,
    },
    {
      title: "product",
      description: "product description",
      price: 11.25,
      id: 482991816,
    },
    {
      title: "product",
      description: "product description",
      price: 11.25,
      id: 482991816,
    },
    {
      title: "product",
      description: "product description",
      price: 11.25,
      id: 482991816,
    },
    {
      title: "product",
      description: "product description",
      price: 11.25,
      id: 482991816,
    },
    {
      title: "product",
      description: "product description",
      price: 11.25,
      id: 482991816,
    },
    {
      title: "product",
      description: "product description",
      price: 11.25,
      id: 482991816,
    },
    {
      title: "product",
      description: "product description",
      price: 11.25,
      id: 482991816,
    },
    {
      title: "product",
      description: "product description",
      price: 11.25,
      id: 482991816,
    },
    {
      title: "product",
      description: "product description",
      price: 11.25,
      id: 482991816,
    },
    {
      title: "product",
      description: "product description",
      price: 11.25,
      id: 482991816,
    },
    {
      title: "product",
      description: "product description",
      price: 11.25,
      id: 482991816,
    },
    {
      title: "product",
      description: "product description",
      price: 11.25,
      id: 482991816,
    },
    {
      title: "product",
      description: "product description",
      price: 11.25,
      id: 482991816,
    },
    {
      title: "product",
      description: "product description",
      price: 11.25,
      id: 482991816,
    },
    {
      title: "product",
      description: "product description",
      price: 11.25,
      id: 482991816,
    },
    {
      title: "product",
      description: "product description",
      price: 11.25,
      id: 482991816,
    },
    {
      title: "product",
      description: "product description",
      price: 11.25,
      id: 482991816,
    },
    {
      title: "product",
      description: "product description",
      price: 11.25,
      id: 482991816,
    },
    {
      title: "product",
      description: "product description",
      price: 11.25,
      id: 482991816,
    },
    {
      title: "product",
      description: "product description",
      price: 11.25,
      id: 482991816,
    },
    {
      title: "product",
      description: "product description",
      price: 11.25,
      id: 482991816,
    },
    {
      title: "product",
      description: "product description",
      price: 11.25,
      id: 482991816,
    },
    {
      title: "product",
      description: "product description",
      price: 11.25,
      id: 482991816,
    },
    {
      title: "product",
      description: "product description",
      price: 11.25,
      id: 482991816,
    },
    {
      title: "product",
      description: "product description",
      price: 11.25,
      id: 482991816,
    },
    {
      title: "product",
      description: "product description",
      price: 11.25,
      id: 482991816,
    },
    {
      title: "product",
      description: "product description",
      price: 11.25,
      id: 482991816,
    },
    {
      title: "product",
      description: "product description",
      price: 11.25,
      id: 482991816,
    },
    {
      title: "product",
      description: "product description",
      price: 11.25,
      id: 482991816,
    },
    {
      title: "product",
      description: "product description",
      price: 11.25,
      id: 482991816,
    },
    {
      title: "product",
      description: "product description",
      price: 11.25,
      id: 482991816,
    },
    {
      title: "product",
      description: "product description",
      price: 11.25,
      id: 482991816,
    },
  ];
  return (
    <Box>
      <Header />
      <Container>
        <Grid container spacing={2}>
          {products.map((p) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={3}>
                {/* Link */}
                <Paper elevation={1}>
                  <Box>{/* Image */}</Box>
                  <Box sx={{ p: "1rem" }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <a href="/">
                        <Box>
                          <Typography
                            variant="h3"
                            sx={{
                              fontSize: "14px",
                              fontWeight: "600",
                              color: "#373F50",
                            }}
                          >
                            {p.title}
                          </Typography>
                          <Rating
                            name="read-only"
                            value={3}
                            readOnly
                            sx={{ my: 1 }}
                          />
                          <Typography
                            variant="body1"
                            sx={{
                              fontSize: "14px",
                              fontWeight: "600",
                              color: "#D23F57",
                            }}
                          >
                            &euro; {p.price}
                          </Typography>
                        </Box>
                      </a>
                      <Box>
                        <Button
                          sx={{ minWidth: "12px", width: '10px', aspectRatio: '1/1'}}
                          variant="outlined"
                          size="medium"
                          color="error"
                        >
                          <AddIcon fontSize="small"/>
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}

export default App;
