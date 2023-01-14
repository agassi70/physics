import React, {useCallback, useState, MouseEvent} from "react";
import {Box, Button, Menu, MenuItem} from "@material-ui/core";
import {Link, useNavigate, useLocation} from "react-router-dom";

function MainMenu() {
  const navigate = useNavigate()
  const {pathname} = useLocation()

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = useCallback((event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  return (
    <Box
      className="horizontal-row"
      py={1} px={2.5}
      boxShadow={5}
      mb={0.25} mx={-2.5}
    >
      <Box>
        <Button
          id="button-about"
          aria-haspopup="true"
          aria-controls="customized-menu"
          onClick={() => navigate('/')}
          color={pathname === '/' ? 'primary' : 'default'}
        >
          ABOUT
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={anchorEl?.id === 'button-about'}
          onClose={handleClose}
          keepMounted
          MenuListProps={{
            'aria-labelledby': 'button-about',
          }}
          anchorOrigin={{vertical: 'bottom', horizontal: 'left'}}
          getContentAnchorEl={null}
        >
          <MenuItem onClick={handleClose} component={Link} to="/education">Education</MenuItem>
          <MenuItem onClick={handleClose} component={Link} to="/employment">Employment</MenuItem>
          <MenuItem onClick={handleClose} component={Link} to="/awards">Awards</MenuItem>
          <MenuItem onClick={handleClose} component={Link} to="/reviewer">Reviewer</MenuItem>
        </Menu>
      </Box>
      <Button
        id="button-organizers"
        component={Link}
        to="/awards"
        color={pathname === '/awards' ? 'primary' : 'default'}
      >
        AWARDS
      </Button>
      <Box>
        <Button
          id="button-projects"
          aria-haspopup="true"
          aria-controls="customized-menu"
          onClick={handleClick}
        >
          RESEARCH PROJECTS
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={anchorEl?.id === 'button-projects'}
          keepMounted
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'button-projects',
          }}
          anchorOrigin={{vertical: 'bottom', horizontal: 'left'}}
          getContentAnchorEl={null}
        >
          <MenuItem onClick={handleClose} component={Link} to="/surfaceWaves">Surface waves</MenuItem>
          <MenuItem onClick={handleClose} component={Link} to="/polarization">Polarization degree of
            freedom</MenuItem>
          <MenuItem onClick={handleClose} component={Link} to="/metasurfaces">Metasurfaces on fiber tip</MenuItem>
          <MenuItem onClick={handleClose} component={Link} to="/interaction">Spin-orbit interactions on
            light</MenuItem>
        </Menu>
      </Box>
      <Box>
        <Button
          id="button-publications"
          component={Link}
          to="/publications"
          color={pathname === '/publications' ? 'primary' : 'default'}
        >
          PUBLICATIONS
        </Button>
      </Box>
      <Box>
        <Button
          id="button-talks"
          aria-haspopup="true"
          aria-controls="customized-menu"
          onClick={handleClick}
        >
          TALKS
        </Button>
        <Menu
          anchorEl={anchorEl}
          keepMounted
          open={anchorEl?.id === 'button-talks'}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'button-talks',
          }}
          anchorOrigin={{vertical: 'bottom', horizontal: 'left'}}
          getContentAnchorEl={null}
        >
          <MenuItem onClick={handleClose} component={Link} to="/conferences">Conferences</MenuItem>
          <MenuItem onClick={handleClose} component={Link} to="/seminars">Seminars</MenuItem>
        </Menu>
      </Box>
      <Button
        id="button-organizers"
        component={Link}
        to="/publication"
      >
        ORGANIZERS
      </Button>
    </Box>
  );
};

export default MainMenu;
