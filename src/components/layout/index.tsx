import { PropsWithChildren } from 'react'
import { Header } from './header'

type Props = PropsWithChildren<{ children?: React.ReactNode | undefined }>

const Layout = ({ children }: Props) => {
  return (
    <div className="relative text-slate-800">
      <Header />
      <div className="font-body max-w-3xl mx-auto p-4 lg:p-0">{children}</div>
    </div>
  )
}

export default Layout
