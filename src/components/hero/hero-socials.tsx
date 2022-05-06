import {
  FACEBOOK_PROFIL,
  TWITTER_PROFIL,
  GITHUB_PROFIL,
  LINKEDIN_PROFIL,
} from '../../constants'
import { Link as LinkType } from '../../types/link'
import { ExternalLink } from '../button-link'

type SocialLink = LinkType & { color?: string }

const socialLinks: SocialLink[] = [
  {
    href: FACEBOOK_PROFIL,
    label: 'facebook',
  },
  {
    href: TWITTER_PROFIL,
    label: 'twitter',
  },
  {
    href: GITHUB_PROFIL,
    label: 'github',
  },
  {
    href: LINKEDIN_PROFIL,
    label: 'linkedIn',
  },
]

const HeroSocials = () => {
  return (
    <div className="flex flex-wrap space-x-3">
      {socialLinks.map(({ href, label, color }) => (
        <ExternalLink key={href} href={href} label={label}>
          {label}
        </ExternalLink>
      ))}
    </div>
  )
}

export default HeroSocials
