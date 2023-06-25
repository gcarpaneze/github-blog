import { useEffect, useState } from 'react'

// import { api } from '../../services/api'

import { ProfileDetails } from '../../components/ProfileDetails'
import { IssueCard } from '../../components/IssueCard'

import { HomeContainer, SectionIssues, GridIssues } from './styles'

interface UserProps {
  id: string
  login: string
  avatarUrl: string
  url: string
  name: string
  company: string | null
  followers: number
}

export function Home() {
  const [user, setUser] = useState<UserProps>()

  useEffect(() => {
    async function loadUserInfo() {
      /*  const { data } = await api.get('/users/gcarpaneze') */

      const data = {
        id: '68884602',
        login: 'gcarpaneze',
        avatar_url: 'https://avatars.githubusercontent.com/u/68884602?v=4',
        html_url: 'https://github.com/gcarpaneze',
        name: 'Guilherme Carpaneze',
        company: 'Microsoft',
        followers: 0,
      }

      const userInfo = {
        id: data.id,
        login: data.login,
        avatarUrl: data.avatar_url,
        url: data.html_url,
        name: data.name,
        company: data.company,
        followers: data.followers,
      }

      setUser(userInfo)
    }

    loadUserInfo()
  }, [])

  return (
    <HomeContainer>
      <ProfileDetails user={user} />

      <SectionIssues>
        <header>
          <h3>Publicações</h3>
          <span>6 Publicações</span>
        </header>

        <input placeholder="Buscar conteúdo" />

        <GridIssues>
          <IssueCard />
          <IssueCard />
        </GridIssues>
      </SectionIssues>
    </HomeContainer>
  )
}
