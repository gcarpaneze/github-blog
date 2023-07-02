import { FormEvent, useEffect, useState } from 'react'
import HashLoader from 'react-spinners/HashLoader'
import { FaSearch } from 'react-icons/fa'

import { api } from '../../services/api'

import { ProfileDetails } from '../../components/ProfileDetails'
import { IssueCard } from '../../components/IssueCard'

import {
  LoaderContainer,
  HomeContainer,
  SectionIssues,
  GridIssues,
} from './styles'

interface UserProps {
  id: string
  login: string
  avatarUrl: string
  url: string
  name: string
  company: string | null
  followers: number
  bio: string | null
}

export interface IssuesProps {
  id: string
  title: string
  body: string
  created_at: string
}

async function getUserInfo() {
  const { data } = await api.get('/users/gcarpaneze')
  return data
}

async function getIssuesInfo() {
  const { data } = await api.get('/repos/gcarpaneze/github-blog/issues')
  return data
}

export function Home() {
  const [searchInput, setSearchInput] = useState('')
  const [user, setUser] = useState<UserProps>()
  const [issues, setIssues] = useState<IssuesProps[]>([])

  useEffect(() => {
    async function loadUserInfo() {
      await Promise.all([getUserInfo(), getIssuesInfo()]).then((response) => {
        const user = response[0]
        const issues = response[1]

        const userInfo = {
          id: user.id,
          login: user.login,
          avatarUrl: user.avatar_url,
          url: user.html_url,
          name: user.name,
          company: user.company,
          followers: user.followers,
          bio: user.bio,
        }

        setUser(userInfo)

        const issuesInfo = issues.map((issue: any) => {
          return {
            id: issue.number,
            title: issue.title,
            body: issue.body,
            created_at: issue.created_at,
          }
        })

        setIssues(issuesInfo)
      })
    }

    loadUserInfo()
  }, [])

  async function handleGetIssues(e: FormEvent) {
    e.preventDefault()

    try {
      const { data } = await api.get(
        `/search/issues?q=${searchInput}+repo:gcarpaneze/github-blog+in:title+type:issue`,
      )

      const { items } = data

      if (items.lenght === 0) return

      const issuesInfo = items.map((item: any) => {
        return {
          id: item.number,
          title: item.title,
          body: item.body,
          created_at: item.created_at,
        }
      })

      setIssues(issuesInfo)
    } catch (error) {}
  }

  if (user === undefined) {
    return (
      <LoaderContainer>
        <HashLoader color="#3294f8" size={60} />
      </LoaderContainer>
    )
  } else {
    return (
      <HomeContainer>
        <ProfileDetails user={user} />

        <SectionIssues>
          <header>
            <h3>Publicações</h3>
            <span>{issues.length} Publicações</span>
          </header>
          <form onSubmit={(e) => handleGetIssues(e)}>
            <input
              type="text"
              placeholder="Buscar conteúdo"
              onChange={(e) => setSearchInput(e.target.value)}
              value={searchInput}
            />
            <button type="submit">
              <FaSearch />
            </button>
          </form>

          <GridIssues>
            {issues.map((issue) => {
              return <IssueCard key={issue.id} issue={issue} />
            })}
          </GridIssues>
        </SectionIssues>
      </HomeContainer>
    )
  }
}
