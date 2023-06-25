import { styled } from '../../styles/stitches.config'

export const IssueDetailsContainer = styled('div', {
  width: '100%',
  background: '$baseProfile',
  borderRadius: 10,
  boxShadow: '0px 2px 28px 0px rgba(0, 0, 0, 0.20);',
  height: '13.25rem',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '2rem',

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: '1.25rem',

    button: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      background: 'transparent',
      border: 0,
      cursor: 'pointer',

      svg: {
        color: '$BrandBlue',
        fontWeight: 'bold',
      },

      span: {
        fontSize: '0.75rem',
        fontWeight: 'bold',
        color: '$BrandBlue',
      },
    },

    a: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      textDecoration: 'none',
      borderBottom: '1px solid transparent',

      '&:hover': {
        borderBottom: '1px solid $BrandBlue',
      },

      svg: {
        color: '$BrandBlue',
        fontWeight: 'bold',
      },

      span: {
        fontSize: '0.75rem',
        fontWeight: 'bold',
        color: '$BrandBlue',
      },
    },
  },

  section: {
    h3: {
      color: '$baseTitle',
      fontSize: '1.5rem',
      fontWeight: 'bold',
      lineHeight: 1.3,
    },

    footer: {
      display: 'flex',
      gap: '1.5rem',
      marginTop: '1.5rem',

      div: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
      },

      svg: {
        color: '$baseLabel',
      },

      span: {
        fontSize: '1rem',
        color: '$baseSubtitle',
        lineHeight: 1.6,
      },
    },
  },
})
