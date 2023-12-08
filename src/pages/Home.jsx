import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Picture1 from "../assets/BANNER.png";
import Picture2 from "../assets/AGLAONEMA PINK 1.png";
import Picture3 from "../assets/GOLDEN KING MARBLE 1.png";
import Picture4 from "../assets/Sansevieria Fernwood Mikado 1.png";
import Picture5 from "../assets/IMG_2961-04022021 1.png";

const Home = () => {
  return (
    <>
      <div>
        <img src={Picture1} alt="Logo" />
      </div>
      <div>
        <img src={Picture2} alt="Logo" />;
        <img src={Picture3} alt="Logo" />;
        <img src={Picture4} alt="Logo" />;
        <img src={Picture2} alt="Logo" />;
      </div>
      <div>
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0}>
          <Grid md={4}>
            <Box >
              <Typography variant="h6" color="text.primary" gutterBottom>
                The world's 1st subscription based Indoor Plant Company
              </Typography>
            </Box>
          </Grid>
          <Grid md={8}>
            <Box>
              <img src={Picture5} alt="Logo" />;
            </Box>
          </Grid>
        </Grid>
        </Box>
      </div>
    </>
  );
};

export default Home;
