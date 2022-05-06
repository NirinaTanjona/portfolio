import { Header } from './header'
import { Children as ChildrenType } from '@/types/children'

const Layout = ({ children }: ChildrenType) => {
  return (
    <div className="relative text-slate-800">
      <Header />
      <div className="font-body max-w-3xl mx-auto p-4 lg:p-0">{children}</div>
    </div>
  )
}

export default Layout
