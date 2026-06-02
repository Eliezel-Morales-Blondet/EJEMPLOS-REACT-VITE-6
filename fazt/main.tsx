import React from 'react'
import { createRoot } from 'react-dom/client'
import Appfazt from './Appfazt'
//import "bootswatch/dist/yeti/bootstrap.min.css"

createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Appfazt title="React and Typescript" />
    </React.StrictMode>,
)
