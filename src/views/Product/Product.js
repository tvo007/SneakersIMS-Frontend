import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/styles';
import {Grid, Typography} from '@material-ui/core';
import {connect} from 'react-redux';
import {getProduct} from '../../actions/product';
import {compose} from 'redux'
import { withRouter } from "react-router";

const useStyles = makeStyles (theme => ({
  root: {
    padding: theme.spacing (4),
  },
}));

const Product = ({getProduct, product: {product, loading}, match}) => {
  useEffect (
    () => {
      getProduct (match.params.id);
    },
    [getProduct, match.params.id]
  );
  const classes = useStyles ();


  return loading || product === null
    ? <div>LOADING!</div>
    : <div className={classes.root}>
        <Grid container spacing={4}>
          <Grid item lg={12} md={12} xl={12} xs={12}>
            <Typography>
                {product.title}
            </Typography>
            <Typography>
                {product.description}
            </Typography>
            
          </Grid>
        </Grid>
      </div>;
};

Product.propTypes = {
  getProduct: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  product: state.product,
});

export default connect (mapStateToProps, {getProduct}) (withRouter(Product));

// export default compose (withRouter, connect (mapStateToProps, {getProduct})) (
//     Product
//   );
  