import { Button as ButtonType } from '../../types/button'
import { PropsWithChildren } from 'react'

type Props = PropsWithChildren<{ children: React.ReactNode }> & ButtonType

const PrimaryButton = ({ children }: Props) => {
  return <button>{children}</button>
}

export default PrimaryButton
