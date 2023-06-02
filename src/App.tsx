import { RouterProvider } from 'react-router-dom';

import '@coreui/coreui/dist/css/coreui.min.css'
import '@coreui/coreui/dist/css/coreui.min.css'

import router from './router'

function App() {
  return <RouterProvider router={router} />
}

export default App
