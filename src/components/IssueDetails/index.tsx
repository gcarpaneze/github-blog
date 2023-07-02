import { useNavigate } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import {
  FaCalendarDay,
  FaChevronLeft,
  FaComment,
  FaGithub,
  FaRegShareFromSquare,
} from 'react-icons/fa6'

import { IssueProps } from '../../pages/Details'

import { IssueDetailsContainer, IssueTitle, IssueBody } from './styles'

interface IssueDetailsProps {
  issue: IssueProps
}

export function IssueDetails({ issue }: IssueDetailsProps) {
  const navigate = useNavigate()
  return (
    <>
      <IssueDetailsContainer>
        <IssueTitle>
          <header>
            <button onClick={() => navigate('/')}>
              <FaChevronLeft />
              <span>VOLTAR</span>
            </button>
            <a href={issue?.url}>
              <span>GITHUB</span>
              <FaRegShareFromSquare />
            </a>
          </header>

          <h3>{issue?.title}</h3>

          <footer>
            <div>
              <FaGithub />
              <span>{issue?.login}</span>
            </div>

            <div>
              <FaCalendarDay />
              <span>
                {formatDistanceToNow(new Date(issue?.created_at), {
                  addSuffix: true,
                  locale: ptBR,
                })}
              </span>
            </div>

            <div>
              <FaComment />
              <span>{issue?.comments} comentários</span>
            </div>
          </footer>
        </IssueTitle>

        <IssueBody>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {issue.body}
          </ReactMarkdown>
        </IssueBody>
      </IssueDetailsContainer>
    </>
  )
}
