import { IconButton, Container, Box } from "@mui/material";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import PersonIcon from "@mui/icons-material/Person";
import React from "react";
import Badge from '@mui/material/Badge';

const Header = () => {
  return (
    <Container>
      <Box sx={{ display: "flex", justifyContent: "space-between", py: 2 }}>
        <div>Webstore</div>
        <Box sx={{ "& button": { ml: 2 } }}>
          <IconButton sx={{background: '#F3F5F9'}}>
                <PersonIcon />
          </IconButton>
          <IconButton sx={{background: '#F3F5F9'}}>
              <Badge badgeContent={1} color="primary">
                <ShoppingBagIcon />
              </Badge>
          </IconButton>
        </Box>
      </Box>
    </Container>
  );
};

export default Header;
