import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getProducts} from '../../actions/product';
import {makeStyles} from '@material-ui/styles';
import {Typography} from '@material-ui/core';
import TableTemplate from '../../components/Tables/TableTemplate';
import ItemTemplate from '../../components/Tables/ItemTemplate';
// import {IconButton, Grid, Typography} from '@material-ui/core';
// import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

const useStyles = makeStyles (theme => ({
  root: {
    padding: theme.spacing (3),
  },
  content: {
    marginTop: theme.spacing (2),
  },
  pagination: {
    marginTop: theme.spacing (3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
}));

const Products = ({getProducts, product: {products, loading}, auth}) => {
  const classes = useStyles ();

  useEffect (
    () => {
      getProducts ();
    },
    [getProducts]
  );

  // const [openModal, setOpenModal] = useState (false);

  // const handleClickOpenModal = () => {
  //   setOpenModal (true);
  // };

  // const handleCloseModal = () => {
  //   setOpenModal (false);
  // };

  const [selectedProducts, setselectedProducts] = useState ([]);

  const [value, setValue] = React.useState (0); //mui tab state

  const handleChange = (event, newValue) => {
    setValue (newValue);
  };

  const [rowsPerPage, setRowsPerPage] = useState (10);
  const [page, setPage] = useState (0);

  // const handleSelectOne = (event, id) => {
  //   const selectedIndex = selectedProducts.indexOf (id);
  //   let newselectedProducts = [];

  //   if (selectedIndex === -1) {
  //     newselectedProducts = newselectedProducts.concat (selectedProducts, id);
  //   } else if (selectedIndex === 0) {
  //     newselectedProducts = newselectedProducts.concat (
  //       selectedProducts.slice (1)
  //     );
  //   } else if (selectedIndex === selectedProducts.length - 1) {
  //     newselectedProducts = newselectedProducts.concat (
  //       selectedProducts.slice (0, -1)
  //     );
  //   } else if (selectedIndex > 0) {
  //     newselectedProducts = newselectedProducts.concat (
  //       selectedProducts.slice (0, selectedIndex),
  //       selectedProducts.slice (selectedIndex + 1)
  //     );
  //   }

  //   setselectedProducts (newselectedProducts);
  // };

  const handlePageChange = (event, page) => {
    setPage (page);
  };

  const handleRowsPerPageChange = event => {
    setRowsPerPage (event.target.value);
  };

  return (
    <div className={classes.root}>
      {products === null || loading
        ? <div>LOADING!</div>
        : <div className={classes.content}>
            <TableTemplate
              selectedItems={selectedProducts}
              items={products}
              handlePageChange={handlePageChange}
              handleRowsPerPageChange={handleRowsPerPageChange}
              rowsPerPage={rowsPerPage}
              page={page}
              colName1="Title"
              colName2="SKU"
              colName3="Price"
              colName4="Brand"
              colName5="Material"
              colName6="More Options"
            >
              {products.slice (0, rowsPerPage).map (product => {
                return (
                  <ItemTemplate
                    key={product.id}
                    itemId={product.id}
                    colData1={product.title}
                    colData2={product.sku}
                    colData3={product.price}
                    colData4={product.brand}
                    colData5={product.material}
                    selectedItems={selectedProducts}
                  />
          
                  
                );
              })}
            </TableTemplate>
          </div>}
    </div>
  );
};

Products.propTypes = {
  className: PropTypes.string,
  getProducts: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  product: state.product,
  auth: state.auth,
});

export default connect (mapStateToProps, {getProducts}) (Products);

/**
 * 
 * <ProductTable
              selectedItems={selectedProducts}
              items={products}
              handlePageChange={handlePageChange}
              handleRowsPerPageChange={handleRowsPerPageChange}
              page={page}
            />
 */
