import { useNavigate } from 'react-router-dom'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { IssuesProps } from '../../pages/Home'

import { IssueCardContainer } from './styles'

interface propsIssueCard {
  issue: IssuesProps
}

export function IssueCard({ issue }: propsIssueCard) {
  const navigate = useNavigate()

  return (
    <IssueCardContainer onClick={() => navigate(`/details/${issue.id}`)}>
      <header>
        <h3>{issue.title}</h3>
        <span>
          {formatDistanceToNow(new Date(issue?.created_at), {
            addSuffix: true,
            locale: ptBR,
          })}
        </span>
      </header>

      <p>{issue.body}</p>
    </IssueCardContainer>
  )
}
