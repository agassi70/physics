import {createStyles, Theme} from '@material-ui/core'

const styles = ({breakpoints, palette, spacing}: Theme) =>
  createStyles({
    container: {
     // background: 'linear-gradient(rgba(21, 124, 199, 1), rgba(21, 124, 199, 0.2) 50%, rgba(255, 255, 0, 0.2) 50%, rgba(255, 255, 0, 1))',
      boxShadow: '0px 4px 20px rgba(0, 46, 79, 0.1)',
      backgroundColor: palette.info.light,
    },
    toolbarRoot: {
      height: 90,
      paddingLeft: 50,
      paddingRight: 50,
      [breakpoints.down(1360)]: {
        height: 90,
        paddingLeft: 40,
        paddingRight: 40,
      },
    },
    logoWrap: {
      padding: 4,
      background: 'linear-gradient(rgba(21, 124, 199, 1), rgba(21, 124, 199, 0.2) 50%, rgba(255, 255, 0, 0.2) 50%, rgba(255, 255, 0, 1))',
      borderRadius: 99,
    },
    mainLogo: {
      width: 58,
      height: 58,
      borderRadius: 99,
    },
    titleGroup: {
      fontWeight: 600,
      marginLeft: spacing(2),
    },
    avatar: {
      width: 61.5,
      height: 72,
      borderRadius: 6,
      overflow: 'hidden',
      marginLeft: 'auto',
    }
  })


export default styles
