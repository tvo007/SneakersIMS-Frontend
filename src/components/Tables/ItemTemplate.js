import React from 'react';
//import clsx from 'clsx';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/styles';
import {Checkbox, TableCell, TableRow, Typography} from '@material-ui/core';
import moment from 'moment';
import AssignmentIcon from '@material-ui/icons/Assignment';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles (() => ({
  root: {},
}));

const ItemTemplate = props => {
  const {
    itemId,
    colData1,
    colData2,
    colData3,
    colData4,
    colData5,
    colData6,
    handleSelectOne,
    selectedItems,
    // deleteTask,
    // toggleTaskCompleted,
    // projectId,
    // taskNumber,
    // editTask,
    // taskType,
    // checkboxChecked,
    // toggleHandler,
    //  handleClickOpenModal,
    // deleteHandler,
    // user,
    // auth,
    //...rest

  } = props;

  const classes = useStyles ();

  return (
    <TableRow
      className={classes.tableRow}
      hover
      selected={selectedItems.indexOf (itemId) !== -1}
    >
      <TableCell>
        <div className={classes.nameContainer}>
        
          <Typography variant="body1">
          <Link to={`/productswip/${itemId}`}>
            {colData1}
            </Link>
          </Typography>
          
        </div>
      </TableCell>
      <TableCell>{colData2}</TableCell>
      <TableCell>
        {colData3}
      </TableCell>
      <TableCell>
        {colData4}
      </TableCell>
      <TableCell>
        {colData5}
      </TableCell>
      <TableCell>
        <AssignmentIcon />
        <DeleteIcon />
      </TableCell>
    </TableRow>
  );
};

ItemTemplate.propTypes = {
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   auth: state.auth,
// });

export default ItemTemplate;

// export default TicketItem;

/**
 * <TaskModal
        handleCloseModal={handleCloseModal}
        openModal={openModal}
        taskNumber={taskNumber}
        colData2={colData2}
        colData3={colData3}
        date={date}
        itemId={itemId}
        projectId={projectId}
        editTask={editTask}
        colData4={colData4}
      />    
      
      
      placeholder for modal actions
      <TableCell>

            <AssignmentIcon onClick={handleClickOpenModal} />
            <DeleteIcon onClick={deleteHandler} />

          </TableCell>
         <TableCell>
            <AssignmentIcon onClick={handleClickOpenModal} />
          </TableCell>

 */
