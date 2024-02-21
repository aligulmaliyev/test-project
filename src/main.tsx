import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { APPRouter } from './routes/index.tsx'
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <ChakraProvider>
        <RouterProvider router={APPRouter} />
    </ChakraProvider>
)
