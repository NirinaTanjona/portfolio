import { ReactNode } from 'react'
import { Link as LinkType } from '../../types/link'
import Link from 'next/link'

type props = { children: ReactNode } & LinkType

const ExternalLink = ({ children, href }: props) => {
  return (
    <Link href={href}>
      <a className="font-medium block px-3 py-2 text-grayDark bg-white rounded-lg border-solid border border-slate-200 hover:bg-slate-100 hover:text-sky-500">
        {children}
      </a>
    </Link>
  )
}

export default ExternalLink
