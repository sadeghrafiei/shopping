import { Grid, Container } from "@material-ui/core";
import Product from "../Product";
import Banner from "../Banner";
import "./style.css";

const Products = ({ products, addProduct }) => {
  if (!products.length) return <p>Loading...</p>;

  return (
    <>
      <Banner />
      <Container id="products">
        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid key={product.id} item xs={12} sm={6} md={4}>
              <Product product={product} addProduct={addProduct} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Products;
