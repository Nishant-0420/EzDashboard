'use client';
import { SnackbarProvider } from 'notistack'
import React from 'react'

const template = ({ children }) => {
    return (
        <div>
            <SnackbarProvider anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}>
                {children}
            </SnackbarProvider>
        </div>
    )
}

export default template