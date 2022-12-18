import 'styled-components'
import { LightTheme, DarkTheme } from '../styles/themes/default'

type ThemeTypeLight = typeof LightTheme
type ThemeTypeDark = typeof DarkTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeTypeLight {}
}
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeTypeDark {}
}
