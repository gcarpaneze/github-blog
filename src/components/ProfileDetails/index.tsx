import {
  FaBuilding,
  FaGithub,
  FaRegShareFromSquare,
  FaUserGroup,
} from 'react-icons/fa6'

import { ProfileContainer } from './styles'

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

interface ProfileDetailsProps {
  user: UserProps
}

export function ProfileDetails({ user }: ProfileDetailsProps) {
  return (
    <ProfileContainer>
      <img src={user?.avatarUrl} alt={`${user?.name} photo profile`} />

      <section>
        <header>
          <h3>{user?.name}</h3>
          <a href={user?.url}>
            <span>GITHUB</span>
            <FaRegShareFromSquare />
          </a>
        </header>

        {user?.bio && <p>{user?.bio}</p>}

        <footer>
          <div>
            <FaGithub />
            <span>{user?.login}</span>
          </div>

          {user?.company && (
            <div>
              <FaBuilding />
              <span>{user?.company}</span>
            </div>
          )}

          <div>
            <FaUserGroup />
            <span>{user?.followers} seguidores</span>
          </div>
        </footer>
      </section>
    </ProfileContainer>
  )
}
