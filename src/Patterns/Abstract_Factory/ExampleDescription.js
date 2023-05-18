import React, { useState } from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';

const FurnitureFactoryModal = () => {
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
    bgcolor: '#1A1110',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

  return (
    <div>
      <Button variant="outlined" style={{ position:"fixed",  left:"10px", zIndex: 10}} onClick={handleOpen}>Furniture Factory Description</Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={modalStyle}>
          <Typography variant="h6">Furniture Factory and Abstract Factory Pattern</Typography>
          <br />
          <Typography variant="body1">
            The problem of the furniture factory involves the creation of various furniture items, such as beds, without tightly coupling the client code to specific implementations. The Abstract Factory pattern is suitable for this problem as it provides an abstraction layer between the client code and the creation of furniture objects.
          </Typography>
          <Typography variant="body1">
            In this context, concrete factories represent different furniture factories, such as 'VictorianFurniture' and 'ModernFurniture', which implement the abstract factory interface. Abstract products, like 'Bed', define common features that all furniture objects must support, such as 'sleepOn()' or 'adjustHeight()'. Concrete products, such as 'VictorianBed' and 'ModernBed', are the actual furniture objects created by the concrete factories.
          </Typography>
          <Typography variant="body1">
            By utilizing the Abstract Factory pattern, the furniture factory problem is addressed by decoupling the client code from specific furniture types. The client code interacts with the abstract factory interface and relies on the abstract product interface, promoting flexibility and extensibility. Different families of furniture can be easily added by implementing new concrete factories and corresponding concrete products, while the client code remains unaffected.
          </Typography>
          <Button variant="outlined" sx={{ mt: 2 }} onClick={handleClose}>Close</Button>
        </Box>
      </Modal>
    </div>
  );
};

export default FurnitureFactoryModal;
