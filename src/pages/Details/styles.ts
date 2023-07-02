import { styled } from '../../styles/stitches.config'

export const DetailsContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  margin: '-5.5rem auto',
  width: '54rem',
  alignItems: 'center',
})

export const LoaderContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: 'auto',
  marginTop: 'calc((100vh - 18.5rem)/2)',
  width: '54rem',
})
