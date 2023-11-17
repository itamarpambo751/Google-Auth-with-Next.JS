import UserInfo from '@/components/UserInfo'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-[500px] flex-col items-center justify-center px-24">
      <UserInfo />
    </main>
  )
}
