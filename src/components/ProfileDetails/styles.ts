import { styled } from '../../styles/stitches.config'

export const ProfileContainer = styled('div', {
  width: '100%',
  background: '$baseProfile',
  borderRadius: 10,
  boxShadow: '0px 2px 28px 0px rgba(0, 0, 0, 0.20);',
  height: '13.25rem',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '2rem',
  padding: '2.5rem 2rem',

  img: {
    width: '9.25rem',
    height: '9.25rem',
    borderRadius: 8,

    objectFit: 'cover',
  },

  section: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: '0.5rem',

    h3: {
      color: '$baseTitle',
      fontSize: '1.5rem',
      fontWeight: 'bold',
      lineHeight: 1.3,
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

  '> p': {
    width: '100%',
    color: '$baseText',
    fontSize: '1rem',
    lineHeight: 1.6,
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
})
