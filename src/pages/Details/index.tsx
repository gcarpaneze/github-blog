import { useParams } from 'react-router-dom'

import { IssueDetails } from '../../components/IssueDetails'

import { DetailsContainer } from './styles'

export function Details() {
  const { id } = useParams()

  return (
    <DetailsContainer>
      <IssueDetails />
    </DetailsContainer>
  )
}
