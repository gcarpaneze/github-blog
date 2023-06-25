import { styled } from '../../styles/stitches.config'

export const HomeContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  margin: '-5.5rem auto',
  width: '54rem',
  alignItems: 'center',
})

export const SectionIssues = styled('section', {
  width: '100%',
  marginTop: '4.5rem',

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: '0.75rem',

    h3: {
      color: '$baseSubtitle',
      fontSize: '1.125rem',
      fontWeight: 'bold',
      lineHeight: 1.6,
    },

    span: {
      color: '$baseSpan',
      fontSize: '0.875rem',
      lineHeight: 1.6,
      textAlign: 'right',
    },
  },

  input: {
    width: '100%',
    height: '3.125rem',

    borderRadius: 6,
    border: '1px solid $baseBorder',
    background: '$BaseInput',
    padding: '0.75rem 1rem',

    color: '$baseLabel',
    fontSize: '1rem',
    lineHeight: 1.6,

    '&:focus': {
      color: '$baseText',
      border: '1px solid $BrandBlue',
    },
  },
})

export const GridIssues = styled('div', {
  marginTop: '3rem',
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '2rem',
  rowGap: '2rem',
})
