// import React, {useCallback, useState, MouseEvent} from "react";
import {Grid, Box, Typography, withStyles, WithStyles, CardMedia, Divider, IconButton} from "@material-ui/core";
import {ArrowForwardIos, ArrowBackIos} from '@material-ui/icons';
import Slider, {Settings} from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {Link} from "react-router-dom";

import styles from './styles';

function NextArrow({onClick}: any) {
  return (
    <Box
      position={"absolute"}
      top={"calc(50% - 16px)"}
      right={-56}
    >
      <IconButton color="primary" aria-label="next slide" onClick={onClick}>
        <ArrowForwardIos/>
      </IconButton>
    </Box>
  );
}

function PrevArrow({onClick}: any) {
  return (
    <Box
      position={"absolute"}
      top={"calc(50% - 16px)"}
      left={-56}
    >
      <IconButton color="primary" aria-label="next slide" onClick={onClick}>
        <ArrowBackIos/>
      </IconButton>
    </Box>
  );
}

const MainPage = ({classes}: WithStyles<typeof styles>) => {

  return (
    <Grid item xs={12}>
      <Box mt={5} pl={2.5} fontWeight={600}>
        <Typography variant={"h4"} color={"textPrimary"}>
          Welcome to Oleh Yermakov’s research group webpage
        </Typography>
      </Box>
      <Box className={"horizontal-row"} py={2.5} px={2.5}>
        <Typography variant={"body1"} color={"textSecondary"} align={"justify"}>
          Oleh Yermakov is the founding director of the Photonics Initiative at the CUNY Advanced Science Research
          Center,
          Einstein Professor of Physics at the CUNY Graduate Center, and Professor of Electrical Engineering at The City
          College of New York. He is affiliated with the Wireless Networking and Communications Group and the Applied
          Research Laboratories, both based at the University of Texas at Austin, where he is a Senior Research
          Scientist and Adjunct Professor. His research interests span over a broad range of technical areas, including
          applied electromagnetics, nano-optics and nanophotonics, microwave, THz, infrared, optical and acoustic
          metamaterials and metasurfaces, plasmonics, nonlinearities and nonreciprocity, cloaking and scattering,
          acoustics, optical nanocircuits and nanoantennas.
        </Typography>
        {/*<CardMedia*/}
        {/*  image={require('assets/images/yermakov_cv_photo.png')}*/}
        {/*  className={classes.imageMain}*/}
        {/*/>*/}
      </Box>
      <Divider/>
      <Box mt={2.5} pb={10}>
        <Grid container>
          <Grid item xs={8}>
            <Box px={7.5}>
              <Slider
                dots={true}
                infinite={false}
                nextArrow={<NextArrow/>}
                prevArrow={<PrevArrow/>}
                slidesToShow={1}
                slidesToScroll={1}
                adaptiveHeight
              >
                <Box width={"100%"} height={"auto"}>
                  <CardMedia
                    component={"img"}
                    src={require('assets/images/2021_PRX.png')}
                  />
                </Box>
                <Box width={"100%"} height={"auto"}>
                  <CardMedia
                    component={"img"}
                    src={require('assets/images/banner2.png')}
                  />
                </Box>
                <Box width={"100%"} height={"auto"}>
                  <CardMedia
                    component={"img"}
                    src={require('assets/images/img3.jpeg')}
                  />
                </Box>
              </Slider>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box>
              <Box fontWeight={500} mt={1} mb={2.5}>
                <Typography variant={"h4"} color={"textPrimary"} align={"center"}>
                  News
                </Typography>
              </Box>
              <Typography variant={"subtitle1"} color={"textSecondary"} align={"justify"}>
                News news news news news news news news. News news news news news news news news.
                News news news news news news news news. News news news news news news news news.
                News news news news news news news news.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};

export default withStyles(styles)(MainPage);
