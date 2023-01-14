import React from "react";
import {withStyles, WithStyles, AppBar, Toolbar, Typography, CardMedia, Box, Avatar} from '@material-ui/core'
import classnames from 'classnames'

import styles from './styles'

interface IHeaderProps extends WithStyles<typeof styles> {
}

const Header = ({classes}: IHeaderProps) => {
  return (
    <>
      <AppBar color="default" className={classes.container}>
        <Toolbar classes={{root: classes.toolbarRoot}}>
          <Box className={classes.logoWrap}>
            <CardMedia
              image={require('assets/images/logo-physics.jpeg')}
              className={classes.mainLogo}
            />
          </Box>
          <Box className={classes.titleGroup}>
            <Typography variant={"h3"} color={"textPrimary"}>
              Yermakov Group
            </Typography>
          </Box>
          <Box className={classes.avatar}>
            <CardMedia
              component={"img"}
              src={require('assets/images/yermakov_avatar.jpg')}
            />
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar classes={{root: classes.toolbarRoot}}/>
    </>
  );
};

export default withStyles(styles)(Header)
