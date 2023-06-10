import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 450,
  bgcolor: 	'white',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};


export const AdditionalInfoPop = ({infoDisplayed, setInfoDisplayed, setShowAgain, info}) => {
  const handleClose = () => setInfoDisplayed(false);
  const handleShow = () => {
    setInfoDisplayed(false);
    setShowAgain(false);
  }

  return (
    <div>
      <Modal
        open={infoDisplayed}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h6" color="black">
            Additional Information
          </Typography>
          <br/>
          <Typography variant="body1" color="black">
            {info}
          </Typography>
          <Button variant="contained" sx={{ mt: 2 }} onClick={handleClose}>
            Close
          </Button>
          <Button variant="contained" color="error" sx={{ mt: 2 }} style = {{position: "relative", left: "120px"}} onClick={handleShow}>
            Don't Show Again
          </Button>

        </Box>
      </Modal>
    </div>
  );
}
