import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { UserDataContext } from '../../context/UserContext.jsx'

const inputClass =
  'w-full rounded-xl border border-neutral-300 bg-white px-4 py-3.5 text-[15px] text-neutral-900 placeholder:text-neutral-500 outline-none transition-all duration-200 focus:border-black focus:ring-2 focus:ring-black/10'

const labelClass =
  'mb-2 block text-sm font-medium text-neutral-800'

const UserSignUp = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const userNavigate = useNavigate(); //for navigate
  const { setUser } = useContext(UserDataContext) //collect data to set the data in the global variable

  async function handleSubmit(e) {
    e.preventDefault()

    const newUser = ({
      fullName: {
        firstName: firstName,
        lastName: lastName
      },
      email: email,
      password: password
    })

    await axios.post(`${import.meta.env.VITE_API_BASE_URL}/user/register`, newUser)
      .then(({ data }) => {
        setUser(data?.createUser)
        localStorage.setItem('token', data.token)
        userNavigate('/home')
      })
      .catch((error) => {
        console.error(error)
      })

    setEmail('')
    setPassword('')
    setFirstName('')
    setLastName('')
  }

  return (
    <div className='min-h-screen bg-white lg:h-screen lg:overflow-hidden lg:grid lg:grid-cols-2'>

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

        {/* Overlay */}
        <div className='absolute inset-0 bg-black/45' />

        {/* Gradient */}
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
            Get where you're going
            <br />
            without the wait.
          </h2>

          <p className='mt-6 max-w-md text-base leading-7 text-white/70 xl:text-lg'>
            Create your account and enjoy convenient rides whenever you need them.
          </p>

        </div>
      </aside>


      {/* =====================================================
          RIGHT — SIGNUP AREA
      ====================================================== */}
      <main className='flex min-h-screen flex-col bg-[#f7f7f7] px-5 py-6 sm:px-8 lg:h-screen lg:min-h-0 lg:overflow-hidden lg:bg-white lg:px-14 lg:py-10 xl:px-20'>

        {/* Mobile header */}
        <div className='mb-8 flex items-center justify-between lg:hidden'>

          <img
            className='w-20'
            src='https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png'
            alt='Uber'
          />

          <span className='rounded-full bg-black px-3 py-1.5 text-xs font-medium text-white'>
            Rider
          </span>

        </div>


        {/* Main form */}
        <div className='my-auto w-full max-w-md lg:mx-auto'>

          {/* Desktop logo */}
          <img
            className='mb-9 hidden w-20 lg:block'
            src='https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png'
            alt='Uber'
          />


          {/* Heading */}
          <div className='mb-7'>

            <p className='mb-2 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500 lg:hidden'>
              Join Uber
            </p>

            <h1 className='text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl lg:text-3xl'>
              Create your account
            </h1>

            <p className='mt-2 text-sm leading-6 text-neutral-500 sm:text-base'>
              Sign up to get started with your journey.
            </p>

          </div>


          {/* =================================================
              SIGNUP FORM
          ================================================== */}
          <form onSubmit={handleSubmit}>

            {/* Name */}
            <p className={labelClass}>
              What's your name
            </p>

            <div className='mb-5 flex gap-3 sm:gap-4'>

              <input
                required
                type='text'
                aria-label='First name'
                autoComplete='given-name'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder='First name'
                className={`${inputClass} min-w-0 flex-1`}
              />

              <input
                required
                type='text'
                aria-label='Last name'
                autoComplete='family-name'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder='Last name'
                className={`${inputClass} min-w-0 flex-1`}
              />

            </div>


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
                Enter password
              </label>

              <input
                id='password'
                required
                type='password'
                autoComplete='new-password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Enter your password'
                className={inputClass}
              />

            </div>


            {/* Create account */}
            <button
              type='submit'
              className='w-full rounded-xl bg-black px-5 py-3.5 text-base font-semibold text-white shadow-sm transition-all duration-200 hover:bg-neutral-800 hover:shadow-md active:scale-[0.985] focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 sm:py-4 sm:text-lg'
            >
              Create account
            </button>

          </form>


          {/* Login */}
          <p className='mt-6 text-center text-sm text-neutral-600 sm:text-base'>

            Already have an account?{' '}

            <Link
              to='/login'
              className='font-semibold text-black underline decoration-neutral-400 underline-offset-4 transition hover:decoration-black'
            >
              Login here
            </Link>

          </p>

        </div>


        {/* =====================================================
            TERMS
        ====================================================== */}
        <p className='mx-auto mt-6 w-full max-w-md text-center text-[10px] leading-4 text-neutral-400 sm:text-xs lg:mt-4'>

          By creating an account, you agree to Uber's terms and
          privacy policy. This website provides ride-booking and
          transportation-related services.

        </p>

      </main>

    </div>
  )
}

export default UserSignUp

