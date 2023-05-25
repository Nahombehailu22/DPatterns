import React, { useState, useRef } from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import './Popover.css';
import { Modal } from '@mui/material';

const InfoPopover = React.memo(props => {
  const {title, description, backColor, hide} = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const [hidden, setHidden] = useState(hide);
 

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setHidden(!hidden);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setHidden(!hidden);
  };

  const open = Boolean(anchorEl) || !hidden
  // const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined;

  const anchorRef = useRef();
  
  return (
    <div style={{ display: "flex" }}>
      <Button variant="contained" style={{ backgroundColor: backColor, color: "#fff" }} onClick={handleClick} ref={anchorRef}>
        <FontAwesomeIcon icon={faInfoCircle} style={{ marginRight: "5px" }} />
        Info
      </Button>
      <Modal
        id={id}
        open={open}
        anchorEl={anchorRef.current}
        onClose={handleClose}
        // anchorOrigin={{
        //   vertical: 'center',
        //   horizontal: 'center',
        // }}
        sx={{ maxWidth: '1200px'}}
      >
        <div className="info-popover-content">
            <Typography variant="h5">{title} </Typography>
            <Typography variant="body1">
                {description}
            </Typography>
        </div>
      </Modal>
    </div>
  );
});

export default InfoPopover;
