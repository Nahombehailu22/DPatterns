import React, { useState } from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import './Popover.css';

const InfoPopover = React.memo(props => {
  const backColor = props.backColor;
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
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
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <div className="info-popover-content">
            <Typography variant="h5">{props.title} </Typography>
            <Typography variant="body1">
                {props.description}
            </Typography>
        </div>
      </Popover>
    </div>
  );
});

export default InfoPopover;
