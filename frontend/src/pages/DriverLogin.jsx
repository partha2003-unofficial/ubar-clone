import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { DriverDataContext } from '../../context/driverContext'

const inputClass ='w-full rounded-xl border border-neutral-300 bg-white px-4 py-3.5 text-[15px] text-neutral-900 placeholder:text-neutral-500 outline-none transition-all duration-200 focus:border-black focus:ring-2 focus:ring-black/10'

const labelClass ='mb-2 block text-sm font-medium text-neutral-800'

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
   <div className='h-screen overflow-hidden bg-white lg:grid lg:grid-cols-2'>

      {/* LEFT — DRIVER IMAGE PANEL */}
      <aside
        className='relative hidden min-h-screen overflow-hidden bg-cover bg-center lg:block'
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1600&q=85')"
        }}
      >
        {/* Dark overlay */}
        <div className='absolute inset-0 bg-black/45' />

        {/* Gradient */}
        <div className='absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent' />

        {/* Uber logo */}
        <div className='absolute left-12 top-10'>
          <img
            className='w-24 brightness-0 invert'
            src='https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png'
            alt='Uber'
          />
        </div>

        {/* Bottom content */}
        <div className='absolute bottom-14 left-12 right-12 max-w-xl text-white'>
          <p className='mb-5 text-sm font-medium uppercase tracking-[0.25em] text-white/70'>
            Drive with Uber
          </p>

          <h2 className='text-4xl font-semibold leading-[1.08] tracking-tight xl:text-6xl'>
            Drive when you want.
            <br />
            Earn on your terms.
          </h2>

          <p className='mt-6 max-w-lg text-base leading-7 text-white/75 xl:text-lg'>
            Turn your free time into earnings. Sign in and get back on the road.
          </p>
        </div>
      </aside>

      {/* RIGHT — LOGIN AREA */}
      <main className='flex min-h-screen flex-col bg-[#f7f7f7] px-5 py-6 sm:px-8 lg:bg-white lg:px-14 lg:py-10'>

        {/* Mobile header */}
        <div className='mb-12 flex items-center justify-between lg:hidden'>
          <img
            className='w-20'
            src='https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png'
            alt='Uber'
          />

          <span className='rounded-full bg-black px-3 py-1.5 text-xs font-medium text-white'>
            Driver
          </span>
        </div>

        {/* Form container */}
        <div className='my-auto w-full max-w-md lg:mx-auto'>

          {/* Desktop logo */}
          <img
            className='mb-10 hidden w-20 lg:block'
            src='https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png'
            alt='Uber'
          />

          <div className='mb-8'>
            <p className='mb-2 text-sm font-medium text-neutral-500 lg:hidden'>
              Welcome back
            </p>

            <h1 className='text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl lg:text-3xl'>
              Log in to drive
            </h1>

            <p className='mt-2 text-sm leading-6 text-neutral-500'>
              Enter your account details to continue.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Email */}
            <div className='mb-5'>
              <label
                htmlFor='email'
                className={labelClass}
              >
                What's your email
              </label>

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

            {/* Password */}
            <div className='mb-7'>
              <label
                htmlFor='password'
                className={labelClass}
              >
                Enter your password
              </label>

              <input
                id='password'
                required
                type='password'
                autoComplete='current-password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Password'
                className={inputClass}
              />
            </div>

            {/* Login button */}
            <button
              type='submit'
              className='w-full rounded-xl bg-black px-5 py-3.5 text-base font-semibold text-white shadow-sm transition-all duration-200 hover:bg-neutral-800 hover:shadow-md active:scale-[0.985] focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2'
            >
              Log in
            </button>

          </form>

          {/* Register */}
          <p className='mt-6 text-center text-sm text-neutral-600'>
            New here?{' '}
            <Link
              to='/driver-signup'
              className='font-semibold text-black underline decoration-neutral-400 underline-offset-4 transition hover:decoration-black'
            >
              Register as a driver
            </Link>
          </p>

        </div>

        {/* Bottom action */}
        <div className='mt-10 w-full max-w-md lg:mx-auto'>

          <div className='mb-3 flex items-center gap-3'>
            <div className='h-px flex-1 bg-neutral-200' />
            <span className='text-xs text-neutral-400'>
              OR
            </span>
            <div className='h-px flex-1 bg-neutral-200' />
          </div>

          <Link
            to='/login'
            className='flex w-full items-center justify-center rounded-xl border border-neutral-300 bg-white px-5 py-3.5 text-base font-semibold text-neutral-900 transition-all duration-200 hover:border-black hover:bg-neutral-50 active:scale-[0.985]'
          >
            Sign in as user
          </Link>

          <p className='mt-4 text-center text-xs leading-5 text-neutral-400'>
            By continuing, you agree to Uber's terms and privacy policy.
          </p>

        </div>
      </main>
    </div>
  )
}

export default DriverLogin
