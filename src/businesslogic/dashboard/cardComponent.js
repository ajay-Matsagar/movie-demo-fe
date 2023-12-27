import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import vectorImage1 from "../../images/Vectors.png";
import { GridMoreVertIcon } from "@mui/x-data-grid";

export default function CardComponent() {
  const [anchorEl, setAnchorEl] = useState(false);
  const [cardPosition, setCardPosition] = useState({ top: 0, left: 0 });
  const handleClose = (e) => {
    const { clientX, clientY } = e;
    setAnchorEl(!anchorEl);
    setCardPosition({
        top: clientY + window.scrollY,
        left: clientX + window.scrollX,
      });
  };
  const handleOptionClick = () => {};
  return (
    <Card sx={{ maxWidth: 345 }}>
      {/* <CardHeader
        avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
            </Avatar>
        }
        action={
            <IconButton aria-label="settings">
            <MoreVertIcon />
            </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
        /> */}
      <CardMedia
        component="img"
        height="194"
        image={vectorImage1}
        alt="Paella dish"
      />
      <CardContent>
        <div>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </div>
        <div>
          <IconButton aria-label="settings">
            <GridMoreVertIcon onClick={handleClose} />
          </IconButton>
          <div
            sx={{
              top: cardPosition.top,
              left: cardPosition.left,
              zIndex: 1000,
            }}
          >
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={() => handleOptionClick("Option 1")}>
                Option 1
              </MenuItem>
              <MenuItem onClick={() => handleOptionClick("Option 2")}>
                Option 2
              </MenuItem>
              {/* Add more MenuItems as needed */}
            </Menu>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
