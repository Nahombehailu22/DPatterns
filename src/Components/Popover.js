import React, { useState, useRef } from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import './Popover.css';

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
    setHidden(true);
  };

  const open = Boolean(anchorEl) || !hidden
  const id = open ? 'simple-popover' : undefined;

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Button variant="contained" style={{ backgroundColor: backColor, color: "#fff" }} onClick={handleClick}>
        <FontAwesomeIcon icon={faInfoCircle} style={{ marginRight: "5px" }} />
        Info
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 260,
          horizontal: 100,
        }}
        sx={{ maxWidth: '1200px'}}
      >
        <div className="info-popover-content">
            <Typography variant="h5">{title} </Typography>
            <Typography variant="body1">
                {description}
            </Typography>
        </div>
      </Popover>
    </div>
  );
});

export default InfoPopover;