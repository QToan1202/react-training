import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Header } from '../layouts'
import logo from '../assets/logo.svg'

const Root = () => (
  <>
    <Header logo={logo} />
    <Outlet />
    <ToastContainer />
  </>
)

export default Root
