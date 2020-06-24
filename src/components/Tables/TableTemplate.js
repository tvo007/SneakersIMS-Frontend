import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Card,
  CardActions,
  CardContent,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TablePagination,
} from '@material-ui/core';

const TableTemplate = props => {
  const {
    selectedItems,
    items,
    handlePageChange,
    handleRowsPerPageChange,
    page,
    rowsPerPage,
    colName1,
    colName2,
    colName3,
    colName4,
    colName5,
    colName6,
    children,
    classes,
    className,
    ...rest
  } = props;

  return (
    <Card {...rest} className={clsx (className)}>
      <CardContent>
        <PerfectScrollbar>
          <div>
            <Table>
              <TableHead>
                <TableRow>
                  
                    <TableCell>{colName1}</TableCell>
                  <TableCell>{colName2}</TableCell>
                  <TableCell>{colName3}</TableCell>
                  <TableCell>{colName4}</TableCell>
                  <TableCell>{colName5}</TableCell>
                  <TableCell>{colName6}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {children}
              </TableBody>
            </Table>
          </div>
        </PerfectScrollbar>
      </CardContent>
      <CardActions>
        <TablePagination
          component="div"
          count={items.length}
          onChangePage={handlePageChange}
          onChangeRowsPerPage={handleRowsPerPageChange}
          page={page}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </CardActions>
    </Card>
  );
};

export default TableTemplate;
