import { globalCss } from './stitches.config'

export const globalStyles = globalCss({
  '*': {
    padding: 0,
    margin: 0,
    boxSizing: 'border-box',
  },

  body: {
    background: '$baseBackground',
    color: '$baseText',
  },

  'body, input, textarea, button': {
    fontFamily: 'Nunito, sans-serif',
  },

  ':focus': {
    outline: 'transparent',
    boxShadow: '0 0 0 2px $brandBlue',
  },
})
