  
import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {makeStyles} from '@material-ui/styles';
import {
  Card,
  CardContent,
  Grid,
  Button,
  Typography,
  Dialog,
  DialogContent,
  DialogTitle,
  CardActions,
} from '@material-ui/core';

const useStyles = makeStyles (() => ({
  root: {},
}));

const ModalForm = props => {
  const {
    className,
    modalTitle,
    title1,
    title2,
    title3,
    title4,
    title5,
    title6,
    title7,
    openModal,
    handleCloseModal,
    ...rest
  } = props;

  //ticket: {_id, taskDescription, name, avatar, user, date, isCompleted}

  const classes = useStyles ();

  return (
    <Dialog
      {...rest}
      open={openModal}
      onClose={handleCloseModal}
      fullWidth
      maxWidth="lg"
    >
      <PerfectScrollbar>
        <DialogTitle id="form-dialog-title">{modalTitle} Form</DialogTitle>
        <DialogContent>
         
            <Card {...rest} className={clsx (classes.root, className)}>
              <CardContent>
                <Grid
                  container
                  spacing={1}
                  direction="column"
                  style={{margin: '1px'}}
                  alignItems="stretch"
                >
                  <Grid
                    item
                    container
                    direction="column"
                    spacing={2}
                    md={12}
                    xs={6}
                  >
                    <Grid item>
                      <Typography variant="h3">
                        {title1}:
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="h3">
                        {title2}:
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="h3">
                        {title3}:
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="h3">
                        {title4}:
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="h3">
                        {title5}:
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="h3">
                        {title6}:
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="h3">
                        {title7}:
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
              <CardActions>
                <Grid container justify="flex-end">
                  <Button onClick={handleCloseModal} color="primary">
                    Exit
                  </Button>
                </Grid>
              </CardActions>
            </Card>
        </DialogContent>
      </PerfectScrollbar>
    </Dialog>
  );
};

ModalForm.propTypes = {
  className: PropTypes.string,
  // projectId: PropTypes.string.isRequired,
  // ticket: PropTypes.object.isRequired,
  // // auth: PropTypes.object.isRequired,
  // deleteTicket: PropTypes.func.isRequired,
  // toggleTicketCompleted: PropTypes.func.isRequired,
};

export default ModalForm;