import React, {Suspense, lazy} from "react";
import {Grid, Box, CircularProgress} from '@material-ui/core'
import MainMenu from "features/Menu";
import {Route, Routes} from "react-router-dom";

const Main = lazy(() => import('pages/Main'))
const Awards = lazy(() => import('pages/Awards'))
const Publications = lazy(() => import('pages/Publications'))

export default function Layout() {

  return (
    <Grid container className={"grid-container"}>
      <Grid item xs={12}>
        <MainMenu/>
      </Grid>
      <Suspense
        fallback={
          <Box className="box-flex-center">
            <CircularProgress/>
          </Box>
        }
      >
        <Routes>
          <Route index element={<Main/>}/>
          <Route path='/awards' element={<Awards/>}/>
          <Route path='/publications' element={<Publications/>}/>
        </Routes>
      </Suspense>
    </Grid>
  );
};
