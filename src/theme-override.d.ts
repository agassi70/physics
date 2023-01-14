import { Palette, PaletteOptions } from '@material-ui/core/styles/createPalette'

declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    designGrey: Palette['grey']
  }
  interface PaletteOptions {
    designGrey: PaletteOptions['grey']
  }
}
