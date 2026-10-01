import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { DriverDataContext } from '../../context/driverContext'

const inputClass =
  'w-full rounded-xl border border-neutral-300 bg-white px-4 py-3.5 text-[15px] text-neutral-900 placeholder:text-neutral-500 outline-none transition-all duration-200 focus:border-black focus:ring-2 focus:ring-black/10'

const labelClass =
  'mb-2 block text-sm font-medium text-neutral-800'

const DriverSignUp = () => {

  // account details
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  // vehicle details -> maps to the schema's `vehical` object
  const [vehicleColor, setVehicleColor] = useState('')
  const [vehicleNumberPlate, setVehicleNumberPlate] = useState('')
  const [vehicleCapacity, setVehicleCapacity] = useState('')
  const [vehicleType, setVehicleType] = useState('car')

  const navigate = useNavigate()

  const { setDriver } = useContext(DriverDataContext)

  async function handleSubmit(e) {
    e.preventDefault()

    const driverData = ({
      fullName: {
        firstName: firstName,
        lastName: lastName
      },
      email: email,
      password: password,
      vehical: {
        color: vehicleColor,
        NumberPlate: vehicleNumberPlate,
        capacity: Number(vehicleCapacity),
        vehicalType: vehicleType
      }
    })

    await axios.post(`${import.meta.env.VITE_API_BASE_URL}/driver/register`, driverData)
      .then((response) => {
        if (response.status === 201) {
          localStorage.setItem('token', response.data.token)
          setDriver(response.data.createDriver)
          navigate('/driver-home')
        }
      })
      .catch((error) => {
        navigate('/');
        console.log('axios problem', error)
      })

    setEmail('')
    setPassword('')
    setFirstName('')
    setLastName('')
    setVehicleColor('')
    setVehicleNumberPlate('')
    setVehicleCapacity('')
    setVehicleType('car')
  }

  return (
    <div className='min-h-screen bg-white lg:h-screen lg:overflow-hidden lg:grid lg:grid-cols-2'>

      {/* =====================================================
          LEFT — DRIVER IMAGE PANEL
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

        {/* Main message */}
        <div className='absolute bottom-14 left-12 right-12 max-w-xl text-white'>

          <p className='mb-5 text-sm font-medium uppercase tracking-[0.25em] text-white/70'>
            Drive with Uber
          </p>

          <h2 className='text-4xl font-semibold leading-[1.08] tracking-tight xl:text-6xl'>
            Your car.
            <br />
            Your hours.
            <br />
            Your earnings.
          </h2>

          <p className='mt-6 max-w-lg text-base leading-7 text-white/75 xl:text-lg'>
            Join thousands of drivers earning on their own schedule.
          </p>

        </div>
      </aside>


      {/* =====================================================
          RIGHT — SIGNUP FORM
      ====================================================== */}
      <main className='flex min-h-screen flex-col bg-[#f7f7f7] px-5 py-6 sm:px-8 lg:h-screen lg:min-h-0 lg:overflow-hidden lg:bg-white lg:px-14 lg:py-8'>

        {/* Mobile header */}
        <div className='mb-8 flex items-center justify-between lg:hidden'>

          <img
            className='w-20'
            src='https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png'
            alt='Uber'
          />

          <span className='rounded-full bg-black px-3 py-1.5 text-xs font-medium text-white'>
            Driver
          </span>

        </div>


        {/* Form scroll area */}
        <div className='w-full max-w-md lg:mx-auto lg:my-auto lg:max-h-[calc(100vh-120px)] lg:overflow-y-auto lg:pr-2'>

          {/* Desktop logo */}
          <img
            className='mb-7 hidden w-20 lg:block'
            src='https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png'
            alt='Uber'
          />

          {/* Heading */}
          <div className='mb-7'>

            <p className='mb-2 text-sm font-medium text-neutral-500 lg:hidden'>
              Become an Uber driver
            </p>

            <h1 className='text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl lg:text-3xl'>
              Sign up to drive
            </h1>

            <p className='mt-2 text-sm leading-6 text-neutral-500'>
              Create your driver account and start earning.
            </p>

          </div>


          <form onSubmit={handleSubmit}>

            {/* =================================================
                NAME
            ================================================== */}
            <p className={labelClass}>
              What's your name
            </p>

            <div className='mb-5 flex gap-3 sm:gap-4'>

              <input
                required
                type='text'
                aria-label='First name'
                autoComplete='given-name'
                minLength={3}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder='First name'
                className={inputClass}
              />

              <input
                type='text'
                aria-label='Last name'
                autoComplete='family-name'
                minLength={3}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder='Last name'
                className={inputClass}
              />

            </div>


            {/* =================================================
                EMAIL
            ================================================== */}
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
                title='Use a gmail.com address'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='email@gmail.com'
                className={inputClass}
              />

            </div>


            {/* =================================================
                PASSWORD
            ================================================== */}
            <div className='mb-6'>

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
                minLength={6}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Password'
                className={inputClass}
              />

            </div>


            {/* =================================================
                VEHICLE DETAILS
            ================================================== */}
            <div className='mb-4 border-t border-neutral-200 pt-6'>

              <p className='mb-1 text-base font-semibold text-neutral-950'>
                Vehicle details
              </p>

              <p className='mb-5 text-sm text-neutral-500'>
                Tell us about the vehicle you'll drive.
              </p>

            </div>


            {/* Color + Number plate */}
            <div className='mb-5 flex gap-3 sm:gap-4'>

              <input
                required
                type='text'
                aria-label='Vehicle color'
                minLength={3}
                value={vehicleColor}
                onChange={(e) => setVehicleColor(e.target.value)}
                placeholder='Color'
                className={inputClass}
              />

              <input
                required
                type='text'
                aria-label='Number plate'
                minLength={3}
                value={vehicleNumberPlate}
                onChange={(e) => setVehicleNumberPlate(e.target.value)}
                placeholder='Number plate'
                className={inputClass}
              />

            </div>


            {/* Capacity + Vehicle type */}
            <div className='mb-6 flex gap-3 sm:gap-4'>

              <input
                required
                type='number'
                aria-label='Seating capacity'
                min={1}
                value={vehicleCapacity}
                onChange={(e) => setVehicleCapacity(e.target.value)}
                placeholder='Capacity'
                className={inputClass}
              />

              <select
                required
                aria-label='Vehicle type'
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
                className={inputClass}
              >
                <option value='car'>Car</option>
                <option value='motorcycle'>Motorcycle</option>
                <option value='auto'>Auto</option>
              </select>

            </div>


            {/* =================================================
                CREATE ACCOUNT
            ================================================== */}
            <button
              type='submit'
              className='w-full rounded-xl bg-black px-5 py-3.5 text-base font-semibold text-white shadow-sm transition-all duration-200 hover:bg-neutral-800 hover:shadow-md active:scale-[0.985] focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2'
            >
              Create account
            </button>

          </form>


          {/* Login */}
          <p className='mt-5 text-center text-sm text-neutral-600'>

            Already have an account?{' '}

            <Link
              to='/driver-login'
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

export default DriverSignUp
