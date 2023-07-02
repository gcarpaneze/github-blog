import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { api } from '../../services/api'

import { IssueDetails } from '../../components/IssueDetails'

import { DetailsContainer, LoaderContainer } from './styles'
import { HashLoader } from 'react-spinners'

export interface IssueProps {
  id: string
  title: string
  body: string
  created_at: string
  comments: number
  url: string
  login: string
}

export function Details() {
  const { id } = useParams()

  const [issue, setIssue] = useState<IssueProps>()

  useEffect(() => {
    async function getIssuesInfo() {
      if (id === undefined) return

      const { data } = await api.get(
        `/repos/gcarpaneze/github-blog/issues/${id}`,
      )

      const issueInfo = {
        id: data.id,
        title: data.title,
        body: data.body,
        created_at: data.created_at,
        comments: data.comments,
        url: data.html_url,
        login: data.user.login,
      }

      setIssue(issueInfo)
    }

    getIssuesInfo()
  }, [id])

  if (issue === undefined) {
    return (
      <LoaderContainer>
        <HashLoader color="#3294f8" size={60} />
      </LoaderContainer>
    )
  } else {
    return (
      <DetailsContainer>
        <IssueDetails issue={issue} />
      </DetailsContainer>
    )
  }
}
