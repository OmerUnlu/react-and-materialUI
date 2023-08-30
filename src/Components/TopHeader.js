import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material'

const TopHeader = () => {
    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                        Lessons
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default TopHeader