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
})
