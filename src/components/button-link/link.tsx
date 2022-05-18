import { Link as LinkType } from '@/types/link'
import { Children as ChildrenType } from '@/types/children'
import Link from 'next/link'

type props = ChildrenType & LinkType

export default function ExternalLink({ children, href }: props) {
  return (
    <Link href={href}>
      <a className="font-medium block px-3 py-2 bg-white rounded-lg hover:bg-slate-100 hover:text-sky-500 hover:underline">
        {children}
      </a>
    </Link>
  )
}

