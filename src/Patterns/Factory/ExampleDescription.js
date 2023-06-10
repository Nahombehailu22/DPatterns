import React, { useState } from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';

const LogisticsFactoryModal = () => {
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
      <Button variant="outlined" style={{ position:"fixed",  left:"10px", zIndex: 10}} onClick={handleOpen}>Logistics Factory Description</Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={modalStyle} >
          <Typography variant="h6" color="black">Logistics Factory and Factory Method Pattern</Typography>
          <br />
          <Typography variant="body1" color="black">
            The problem of the logistics management application involves managing different transportation modes, such as road logistics and sea logistics, without tightly coupling the client code to specific implementations. The Factory Method pattern is suitable for this problem as it provides a way to create transportation objects based on the logistics type.
          </Typography>
          <Typography variant="body1" color="black">
            In this context, concrete factories represent different logistics types, such as 'RoadLogistics' and 'SeaLogistics', which implement the factory method to create transportation objects. The abstract product, 'Transport', defines the common behavior that all transportation objects must have, including the 'deliver()' method. Concrete products, such as 'Truck' and 'Ship', are the actual transportation objects created by the concrete factories.
          </Typography>
          <Typography variant="body1" color="black">
            By utilizing the Factory Method pattern, the logistics management application can dynamically create transportation objects based on the logistics type. The client code interacts with the factory method and abstract product, promoting flexibility and extensibility. Additional logistics types can be easily added by implementing new concrete factories and corresponding concrete products, while the client code remains unaffected.
          </Typography>
          <Button variant="outlined" sx={{ mt: 2 }} onClick={handleClose}>Close</Button>
        </Box>
      </Modal>
    </div>
  );
};

export default LogisticsFactoryModal;
