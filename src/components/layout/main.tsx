import { Children as ChildrenType } from '@/types/children'

export default function Main({ children }: ChildrenType) {
  return (
    <div className="font-body">
      <div className="max-w-3xl mx-auto p-4 lg:p-0">{children}</div>
    </div>
  )
}

