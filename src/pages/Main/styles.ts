import {createStyles, Theme} from '@material-ui/core'

const styles = ({breakpoints, palette, spacing}: Theme) =>
  createStyles({
    imageMain: {
      width: 128,
      minWidth: 128,
      height: 196.7,
      marginLeft: spacing(2),
    },

  })


export default styles
