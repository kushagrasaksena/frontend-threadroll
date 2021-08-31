import Link from 'next/link'
import Navbar from '../components/NavBar'
export default function Home() {
  return (
    <div>
      <h1>hahah</h1>
      <Link href="/signin"><a>sign in </a></Link>
      <Link href="/signup"><a>sign up </a></Link>

      </div>
  )
}
