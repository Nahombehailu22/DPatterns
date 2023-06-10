import React, { useState } from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';

const DrawingEditorModal = () => {
  const [open, setOpen] = useState(true);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'white',
    borderRadius: '3%',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

  return (
    <div>
      <Button variant="outlined" style={{ position:"fixed",  left:"10px", zIndex: 10}} onClick={handleOpen}>DrawingEditor Description</Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={modalStyle}>
          <Typography variant="h6" color="black">DrawingEditor and Adapter Method</Typography>
          <br />
          <Typography variant="body1" color="black">
            The problem of the DrawingEditor involves working with different graphical shapes and a specific Adaptee called TextView, which provides a different interface for displaying text. The Adapter Method is suitable for this problem as it allows us to adapt the TextView interface to fit the Shape interface used by the DrawingEditor application.
          </Typography>
          <Typography variant="body1" color="black">
            In this context, the Client Interface is represented by the Target class Shape, which defines the common methods expected when working with shapes. The Adaptee is the TextView class, providing a different interface for text display. The Adapter, known as TextShape, bridges the gap between Shape and TextView, adapting the TextView methods to conform to the Shape interface, enabling seamless integration of text as if it were a shape.
          </Typography>
          <Typography variant="body1" color="black">
            By employing the Adapter Method and utilizing the TextShape adapter, the DrawingEditor application gains the ability to handle both shapes and text uniformly. This approach ensures a consistent and unified interface for the client code, enabling seamless integration of different graphical elements while maintaining flexibility and extensibility.
          </Typography>
          <Button variant="outlined" sx={{ mt: 2 }} onClick={handleClose}>Close</Button>
        </Box>
      </Modal>
    </div>
  );
};

export default DrawingEditorModal;
