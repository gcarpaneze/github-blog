import { styled } from '../../styles/stitches.config'

export const IssueCardContainer = styled('div', {
  width: '26rem',
  height: '16.25rem',
  borderRadius: 10,
  background: '$basePost',
  padding: '2rem',

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1.25rem',
  },

  h3: {
    color: '$baseTitle',
    fontSize: '1.25rem',
    fontWeight: 'bold',
    lineHeight: 1.6,
  },

  span: {
    color: '$baseSpan',
    fontSize: '0.875rem',
    lineHeight: 1.6,
    minWidth: '30%',
  },

  p: {
    overflow: 'hidden',
    height: '7rem',
    textOverflow: '...',
    direction: 'ltr',
    fontSize: '1rem',
    lineHeight: 1.6,
    color: '$baseText',
  },
})
