import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { UserDataContext } from '../../context/UserContext.jsx'

const inputClass =
  'bg-[#eeeeee] rounded-2xl px-4 py-3 w-full text-base placeholder:text-neutral-500 outline-none ring-2 ring-transparent focus:ring-black transition-shadow'
const labelClass = 'block text-base font-medium mb-2'

const UserLogin = () => {

  const navigate = useNavigate()

  const [emailid, setEmailID] = useState('')
  const [password, setPassword] = useState('')

  const { setUser } = useContext(UserDataContext)

  async function handleSubmit(e) {

    e.preventDefault()
    const userData = ({
      email: emailid,
      password: password
    })

    await axios.post(`${import.meta.env.VITE_API_BASE_URL}/user/login`, userData)
      .then(({ data }) => {
        localStorage.setItem('token',data.token)
        setUser(data?.userFind);
        navigate('/home')
      })

    setEmailID('')
    setPassword('')
  }

  return (
    <div className='min-h-screen lg:grid lg:grid-cols-2'>
      {/* Photo panel: desktop only */}
      <aside className='relative hidden lg:block bg-cover bg-center bg-[url(https://i.pinimg.com/736x/00/7e/95/007e95423e1fad5833bf80d35e5cc92a.jpg)]'>
        <div className='absolute inset-0 bg-linear-to-t from-black/75 via-black/10 to-transparent' />
        <p className='absolute bottom-14 left-14 right-14 max-w-md text-white text-4xl xl:text-5xl font-semibold tracking-tight leading-[1.05]'>
          Your ride is a few taps away.
        </p>
      </aside>

      <main className='flex min-h-screen flex-col justify-between p-8 lg:px-14 lg:py-10'>
        <div className='w-full max-w-md lg:mx-auto lg:my-auto'>
          <img
            className='w-16 mb-10 lg:w-20 lg:mb-12'
            src='https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_logo_2018.png/3840px-Uber_logo_2018.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail'
            alt='Uber'
          />
          <h1 className='hidden lg:block text-3xl font-semibold tracking-tight mb-8'>Log in</h1>

          <form onSubmit={handleSubmit}>
            <div className='mb-6'>
              <label htmlFor='email' className={labelClass}>What's your email</label>
              <input
                id='email'
                required
                type='email'
                autoComplete='email'
                value={emailid}
                onChange={(e) => setEmailID(e.target.value)}
                placeholder='email@example.com'
                className={inputClass}
              />
            </div>
            <div className='mb-6'>
              <label htmlFor='password' className={labelClass}>Enter your password</label>
              <input
                id='password'
                required
                type='password'
                autoComplete='current-password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='password'
                className={inputClass}
              />
            </div>
            <button
              type='submit'
              className='bg-[#111] text-white rounded-2xl px-4 py-3 w-full text-lg font-medium hover:bg-neutral-800 active:scale-[0.99] transition'
            >
              Login
            </button>
          </form>
          <p className='text-center mt-4'>
            New here?{' '}
            <Link to='/signup' className='text-blue-700 hover:underline'>Register as a user</Link>
          </p>
        </div>

        <div className='w-full max-w-md lg:mx-auto'>
          <Link
            to='/driver-login'
            className='bg-green-700 text-white mb-2 flex justify-center rounded-2xl px-4 py-3 w-full text-lg font-medium hover:brightness-110 transition'
          >
            Sign in as driver
          </Link>
        </div>
      </main>
    </div>
  )
}

export default UserLogin
