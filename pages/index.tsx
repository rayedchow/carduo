import type { NextPage } from 'next'
import Register from '../components/Register'
import UnauthNavbar from '../components/UnauthNavbar'

const Home: NextPage = () => {
  return (
    <div>
      <UnauthNavbar />
      <Register />
    </div>
  )
}

export default Home
