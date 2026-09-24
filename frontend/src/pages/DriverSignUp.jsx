import { useState } from 'react'
import { Link } from 'react-router-dom'

const inputClass =
  'bg-[#eeeeee] rounded-2xl px-4 py-3 w-full text-base placeholder:text-neutral-500 outline-none ring-2 ring-transparent focus:ring-black transition-shadow'
const labelClass = 'block text-base font-medium mb-2'

const DriverSignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [driverData, setDriverData] = useState({})

  function handleSubmit(e) {
    e.preventDefault()
    setDriverData({
      fullName: {
        firstName: firstName,
        lastName: lastName
      },
      email: email,
      password: password
    })
    setEmail('')
    setPassword('')
    setFirstName('')
    setLastName('')
  }

  return (
    <div className='min-h-screen lg:grid lg:grid-cols-2'>
      {/* Photo panel: desktop only */}
      <aside className='relative hidden lg:block bg-cover bg-center bg-[url(https://i.pinimg.com/736x/00/7e/95/007e95423e1fad5833bf80d35e5cc92a.jpg)]'>
        <div className='absolute inset-0 bg-linear-to-t from-black/75 via-black/10 to-transparent' />
        <p className='absolute bottom-14 left-14 right-14 max-w-md text-white text-4xl xl:text-5xl font-semibold tracking-tight leading-[1.05]'>
          Your car, your hours, your earnings.
        </p>
      </aside>

      <main className='flex min-h-screen flex-col justify-between p-8 lg:px-14 lg:py-10'>
        <div className='w-full max-w-md lg:mx-auto lg:my-auto'>
          <img
            className='w-20 mb-10 lg:mb-12'
            src='https://static.vecteezy.com/system/resources/previews/027/127/451/non_2x/uber-logo-uber-icon-transparent-free-png.png'
            alt='Uber'
          />
          <h1 className='hidden lg:block text-3xl font-semibold tracking-tight mb-8'>Sign up to drive</h1>

          <form onSubmit={handleSubmit}>
            <p className={labelClass}>What's your name</p>
            <div className='flex gap-4 mb-6'>
              <input
                required
                type='text'
                aria-label='First name'
                autoComplete='given-name'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder='First name'
                className={`${inputClass} w-1/2`}
              />
              <input
                required
                type='text'
                aria-label='Last name'
                autoComplete='family-name'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder='Last name'
                className={`${inputClass} w-1/2`}
              />
            </div>

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
              <label htmlFor='password' className={labelClass}>Enter password</label>
              <input
                id='password'
                required
                type='password'
                autoComplete='new-password'
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
              Signup
            </button>
          </form>
          <p className='text-center mt-4'>
            Already have an account?{' '}
            <Link to='/driver-login' className='text-blue-700 hover:underline'>Login here</Link>
          </p>
        </div>

        <p className='w-full max-w-md lg:mx-auto text-[10px] leading-tight text-neutral-600 lg:text-xs'>
          Terms & Conditions: By using this website, you agree to comply with these Terms & Conditions. This website is intended to provide ride-booking and transportation-related services.
        </p>
      </main>
    </div>
  )
}

export default DriverSignUp
