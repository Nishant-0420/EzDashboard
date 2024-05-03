import { SnackbarProvider } from 'notistack'
import React from 'react'

const template = ({ children }) => {
    return (
        <div>
            <SnackbarProvider>
                {children}
            </SnackbarProvider>
        </div>
    )
}

export default template