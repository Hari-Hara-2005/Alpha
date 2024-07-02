import React from 'react'
import { Box, Typography } from '@mui/material'
const Navbar = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ py: [2, 2, 5], width: ['24rem'], zIndex: 10 }}>
                <Box>
                    <nav>
                        <Box sx={{ display: 'flex', bgcolor: '#fff', py: 2, px: 3, alignItems: 'center', borderRadius: '50px', boxShadow: ' rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
                            <Typography variant='h6' sx={{ fontWeight: 'bold' }}>Alpha</Typography>
                            <ul style={{ display: 'flex', alignItems: 'center', listStyle: 'none', gap: '2rem', marginLeft: '1rem' }}>
                                <Typography>
                                    Home
                                </Typography>
                                <Typography>
                                    Product
                                </Typography>
                                <Typography component='li' sx={{ bgcolor: '#282828', px: 1, py: 1, borderRadius: '50px', color: '#fff' }} >
                                    Contact US
                                </Typography>
                            </ul>
                        </Box>
                    </nav>
                </Box>
            </Box>
        </Box>
    )
}

export default Navbar;
