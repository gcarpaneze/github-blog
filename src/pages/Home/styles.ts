import { styled } from '../../styles/stitches.config'

export const LoaderContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: 'auto',
  marginTop: 'calc((100vh - 18.5rem)/2)',
  width: '54rem',
})

export const HomeContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  margin: '-5.5rem auto',
  width: '54rem',
  alignItems: 'center',
  paddingBottom: '14rem',
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

  form: {
    display: 'flex',
    gap: '0.5rem',

    button: {
      width: '4rem',
      borderRadius: 6,
      background: 'transparent',
      color: '$baseText',
      cursor: 'pointer',
      border: '1px solid $baseBorder',

      '&:focus': {
        border: '1px solid $BrandBlue',
      },

      '&:hover': {
        background: '$BrandBlue',
        border: '$BrandBlue',
        transition: '0.2s',
      },
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
