import { useNavigate } from 'react-router-dom'

import {
  FaCalendarDay,
  FaChevronLeft,
  FaComment,
  FaGithub,
  FaRegShareFromSquare,
} from 'react-icons/fa6'

import { IssueDetailsContainer } from './styles'

const user = {
  id: '68884602',
  login: 'gcarpaneze',
  url: 'https://github.com/gcarpaneze',
  name: 'Guilherme Carpaneze',
  company: 'Microsoft',
  followers: 0,
}

export function IssueDetails() {
  const navigate = useNavigate()
  return (
    <IssueDetailsContainer>
      <header>
        <button onClick={() => navigate('/')}>
          <FaChevronLeft />
          <span>VOLTAR</span>
        </button>
        <a href={user?.url}>
          <span>GITHUB</span>
          <FaRegShareFromSquare />
        </a>
      </header>

      <section>
        <h3>JavaScript data types and data structures</h3>

        <footer>
          <div>
            <FaGithub />
            <span>{user?.login}</span>
          </div>

          <div>
            <FaCalendarDay />
            <span>Há 1 dia</span>
          </div>

          <div>
            <FaComment />
            <span>5 comentários</span>
          </div>
        </footer>
      </section>
    </IssueDetailsContainer>
  )
}
