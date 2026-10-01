import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { UserDataContext } from '../../context/UserContext.jsx'

const inputClass =
  'w-full rounded-xl border border-neutral-300 bg-white px-4 py-3.5 text-[15px] text-neutral-900 placeholder:text-neutral-500 outline-none transition-all duration-200 focus:border-black focus:ring-2 focus:ring-black/10'

const labelClass =
  'mb-2 block text-sm font-medium text-neutral-800'

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
        localStorage.setItem('token', data.token)
        setUser(data?.userFind);
        navigate('/home')
      })

    setEmailID('')
    setPassword('')
  }

  return (
    <div className='h-screen overflow-hidden bg-white lg:grid lg:grid-cols-2'>

      {/* =====================================================
          LEFT — IMAGE PANEL
      ====================================================== */}
      <aside
        className='relative hidden h-screen overflow-hidden bg-cover bg-center lg:block'
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1600&q=85')"
        }}
      >

        {/* Dark overlay */}
        <div className='absolute inset-0 bg-black/45' />

        {/* Bottom gradient */}
        <div className='absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent' />

        {/* Uber logo */}
        <div className='absolute left-12 top-10 z-10 xl:left-14 xl:top-12'>
          <img
            className='w-24 brightness-0 invert xl:w-28'
            src='https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png'
            alt='Uber'
          />
        </div>

        {/* Hero content */}
        <div className='absolute bottom-14 left-12 right-12 z-10 xl:bottom-20 xl:left-14 xl:right-14'>

          <span className='mb-5 inline-block rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-medium tracking-wide text-white backdrop-blur-md'>
            Move with freedom
          </span>

          <h2 className='max-w-xl text-4xl font-semibold leading-[1.05] tracking-tight text-white xl:text-6xl'>
            Your ride is
            <br />
            just a few taps away.
          </h2>

          <p className='mt-6 max-w-md text-base leading-7 text-white/70 xl:text-lg'>
            Request a ride, meet your driver, and get where you need to go.
          </p>

        </div>
      </aside>


      {/* =====================================================
          RIGHT — LOGIN
      ====================================================== */}
      <main className='flex h-screen min-h-0 flex-col overflow-hidden bg-[#f7f7f7] px-5 py-6 sm:px-8 lg:bg-white lg:px-14 lg:py-10 xl:px-20'>

        {/* Mobile header */}
        <div className='mb-10 flex items-center justify-between lg:hidden'>

          <img
            className='w-20'
            src='https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png'
            alt='Uber'
          />

          <span className='rounded-full bg-black px-3 py-1.5 text-xs font-medium text-white'>
            Rider
          </span>

        </div>


        {/* Login content */}
        <div className='my-auto w-full max-w-md lg:mx-auto'>

          {/* Desktop logo */}
          <img
            className='mb-10 hidden w-20 lg:block'
            src='https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png'
            alt='Uber'
          />

          {/* Heading */}
          <div className='mb-8'>

            <p className='mb-2 text-sm font-medium text-neutral-500 lg:hidden'>
              Welcome back
            </p>

            <h1 className='text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl lg:text-3xl'>
              Log in
            </h1>

            <p className='mt-2 text-sm leading-6 text-neutral-500'>
              Enter your details to continue your journey.
            </p>

          </div>


          {/* =================================================
              LOGIN FORM
          ================================================== */}
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
                value={emailid}
                onChange={(e) => setEmailID(e.target.value)}
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
                placeholder='Enter your password'
                className={inputClass}
              />

            </div>


            {/* Login button */}
            <button
              type='submit'
              className='w-full rounded-xl bg-black px-5 py-3.5 text-base font-semibold text-white shadow-sm transition-all duration-200 hover:bg-neutral-800 hover:shadow-md active:scale-[0.985] focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 sm:text-lg'
            >
              Login
            </button>

          </form>


          {/* Register */}
          <p className='mt-6 text-center text-sm text-neutral-600 sm:text-base'>

            New here?{' '}

            <Link
              to='/signup'
              className='font-semibold text-black underline decoration-neutral-400 underline-offset-4 transition hover:decoration-black'
            >
              Register as a user
            </Link>

          </p>

        </div>


        {/* =====================================================
            DRIVER LOGIN
        ====================================================== */}
        <div className='mx-auto mt-8 w-full max-w-md lg:mt-0'>

          <div className='mb-3 flex items-center gap-3'>

            <div className='h-px flex-1 bg-neutral-200' />

            <span className='text-[11px] font-medium uppercase tracking-wider text-neutral-400'>
              Or continue as
            </span>

            <div className='h-px flex-1 bg-neutral-200' />

          </div>


          <Link
            to='/driver-login'
            className='flex w-full items-center justify-center rounded-xl bg-[#111111] px-5 py-3.5 text-base font-semibold text-white transition-all duration-200 hover:bg-neutral-800 active:scale-[0.985] focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 sm:text-lg'
          >
            Sign in as driver
          </Link>

          <p className='mt-3 text-center text-[11px] text-neutral-400'>
            Looking to earn with Uber?
          </p>

        </div>

      </main>

    </div>
  )
}

export default UserLogin
