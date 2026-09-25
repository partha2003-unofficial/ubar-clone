import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { DriverDataContext } from '../../context/driverContext'

const inputClass =
  'bg-[#eeeeee] rounded-2xl px-4 py-3 w-full text-base placeholder:text-neutral-500 outline-none ring-2 ring-transparent focus:ring-black transition-shadow'
const labelClass = 'block text-base font-medium mb-2'

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
          setDriver(response.data.createDriver) // update context with the created driver
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
                minLength={3}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder='First name'
                className={`${inputClass} w-1/2`}
              />
              <input
                type='text'
                aria-label='Last name'
                autoComplete='family-name'
                minLength={3}
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
                title='Use a gmail.com address'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='email@gmail.com'
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
                minLength={6}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='password'
                className={inputClass}
              />
            </div>

            <p className={labelClass}>About your vehicle</p>
            <div className='flex gap-4 mb-6'>
              <input
                required
                type='text'
                aria-label='Vehicle color'
                minLength={3}
                value={vehicleColor}
                onChange={(e) => setVehicleColor(e.target.value)}
                placeholder='Color'
                className={`${inputClass} w-1/2`}
              />
              <input
                required
                type='text'
                aria-label='Number plate'
                minLength={3}
                value={vehicleNumberPlate}
                onChange={(e) => setVehicleNumberPlate(e.target.value)}
                placeholder='Number plate'
                className={`${inputClass} w-1/2`}
              />
            </div>
            <div className='flex gap-4 mb-6'>
              <input
                required
                type='number'
                aria-label='Seating capacity'
                min={1}
                value={vehicleCapacity}
                onChange={(e) => setVehicleCapacity(e.target.value)}
                placeholder='Capacity'
                className={`${inputClass} w-1/2`}
              />
              <select
                required
                aria-label='Vehicle type'
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
                className={`${inputClass} w-1/2`}
              >
                <option value='car'>Car</option>
                <option value='motorcycle'>Motorcycle</option>
                <option value='auto'>Auto</option>
              </select>
            </div>

            <button
              type='submit'
              className='bg-[#111] text-white rounded-2xl px-4 py-3 w-full text-lg font-medium hover:bg-neutral-800 active:scale-[0.99] transition'
            >
              Create account
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
