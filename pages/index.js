import Head from 'next/head'
import Image from 'next/image'
import Login from '../components/Login'
import UserDashboard from '../components/UserDashboard'
import { useAuth } from '../context/AuthContext'

export default function Home() {
  const { currentUser } = useAuth()

  return (
    < >
      <Head>
        <title>todo app OOP 2</title>
        <meta name="todo app" content="OOP 2 project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!currentUser && <Login />}
      {currentUser && <UserDashboard/>}
    </>
  )
}
