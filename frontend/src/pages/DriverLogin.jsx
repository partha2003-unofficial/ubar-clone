import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { DriverDataContext } from '../../context/driverContext'

const inputClass =
  'bg-[#eeeeee] rounded-2xl px-4 py-3 w-full text-base placeholder:text-neutral-500 outline-none ring-2 ring-transparent focus:ring-black transition-shadow'
const labelClass = 'block text-base font-medium mb-2'

const DriverLogin = () => {

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { setDriver } = useContext(DriverDataContext);

  async function handleSubmit(e) {

    e.preventDefault()

    const driverData = {
      email: email,
      password: password
    }

    await axios.post(`${import.meta.env.VITE_API_BASE_URL}/driver/login`, driverData)
      .then((response) => {
        if (response.data) {
          setDriver(response.data.findDriver);
          localStorage.setItem('token', response.data.token)
          navigate('/driver-home');
        }
      })

    setEmail('')
    setPassword('')
  }

  return (
    <div className='min-h-screen lg:grid lg:grid-cols-2'>
      {/* Photo panel: desktop only */}
      <aside className='relative hidden lg:block bg-cover bg-center bg-[url(https://i.pinimg.com/736x/00/7e/95/007e95423e1fad5833bf80d35e5cc92a.jpg)]'>
        <div className='absolute inset-0 bg-linear-to-t from-black/75 via-black/10 to-transparent' />
        <p className='absolute bottom-14 left-14 right-14 max-w-md text-white text-4xl xl:text-5xl font-semibold tracking-tight leading-[1.05]'>
          Drive when it suits you. Get paid for it.
        </p>
      </aside>

      <main className='flex min-h-screen flex-col justify-between p-8 lg:px-14 lg:py-10'>
        <div className='w-full max-w-md lg:mx-auto lg:my-auto'>
          <img
            className='w-20 mb-10 lg:mb-12'
            src='https://static.vecteezy.com/system/resources/previews/027/127/451/non_2x/uber-logo-uber-icon-transparent-free-png.png'
            alt='Uber'
          />
          <h1 className='hidden lg:block text-3xl font-semibold tracking-tight mb-8'>Log in to drive</h1>

          <form onSubmit={handleSubmit}>
            <div className='mb-6'>
              <label htmlFor='email' className={labelClass}>What's your email</label>
              <input
                id='email'
                required
                type='email'
                autoComplete='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
            <Link to='/driver-signup' className='text-blue-700 hover:underline'>Register as a driver</Link>
          </p>
        </div>

        <div className='w-full max-w-md lg:mx-auto'>
          <Link
            to='/login'
            className='bg-yellow-600 text-white mb-2 flex justify-center rounded-2xl px-4 py-3 w-full text-lg font-medium hover:brightness-110 transition'
          >
            Sign in as user
          </Link>
        </div>
      </main>
    </div>
  )
}

export default DriverLogin
