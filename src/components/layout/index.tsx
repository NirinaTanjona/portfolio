import Main from './main'
import Header from './header'
import { Children } from '@/types/children'

export default function Layout({children}: Children) {
  return (
    <div className="text-slate-800">
      <Header />
      <Main>{children}</Main>
    </div>
  )
}