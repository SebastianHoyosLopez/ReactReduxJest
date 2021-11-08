import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import Product from "./Product";
import { connect } from "react-redux";
import { add_to_cart } from "../redux/actions/index";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
  },
}));

const Products = (props) => {
  const classes = useStyles();
  const { products } = props;

  const handleAddToCart = (product) => () => {
    props.add_to_cart(product);
  };
  return (
    <Grid container className={classes.root}>
      {products.map((product) => (
        <Grid item sm={12} md={6} lg={4} key={product.id}>
          <Product
            textBotton="Agregar"
            product={product}
            handleAction={handleAddToCart}
          />
        </Grid>
      ))}
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.shopping.products,
  };
};

const mapDispatchToProps = {
  add_to_cart: add_to_cart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
