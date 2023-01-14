import {createStyles, makeStyles, Theme} from '@material-ui/core'

const useStyles = makeStyles(({spacing}: Theme) =>
  createStyles({
    accordRoot: {
      marginBottom: spacing(2.5),
      paddingTop: spacing(0.5),
      flex: 1,
    },
  }),
);

export default useStyles
