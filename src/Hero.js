import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import { animateHero } from './gsapAnimations';
import Navbar from './Navbar';

const Hero = () => {
    useEffect(() => {
        animateHero();
    }, []);

    return (
        <Box sx={{overflow:'hidden'}}>
            <Box sx={{ height: '100vh', bgcolor: '#fff', overflow: 'hidden' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', py: '6rem', transition: 'all cubic- bezier(0.19, 1, 0.22, 1)0.5s', transition: 'transform', overflow: 'hidden' }}>
                    <img src='/Assets/cover.png' alt='Cover' style={{ maxWidth: '100%', marginTop: '3rem' }} />
                    <Box component='img'
                        id='card'
                        src='/Assets/card.png'
                        alt='Card'
                        sx={{
                            width: ['100%', '40rem', '40rem', '40rem', '40rem'],
                            transition: 'transform',
                            transition: 'all cubic- bezier(0.19, 1, 0.22, 1) 2s',
                            marginLeft: ['0rem', '20rem'],
                            mt: ['1rem', '0rem'],
                            position: 'absolute',
                        }}
                    />
                </Box>
            </Box>
            <Box sx={{ height: '100vh', bgcolor: '#282828', }} className="two">
                <Navbar />
                <Box sx={{ display: 'flex', py: '5rem' }}>
                    <img src='/Assets/cover.png' alt='Cover 2' style={{ maxWidth: '100%', marginTop: '3rem' }} />
                </Box>
            </Box>
            <Box sx={{ height: '100vh' }} className="two">
                <Box sx={{ display: 'flex' }}>
                    <img src='/Assets/cover.png' alt='Cover 2' style={{ maxWidth: '100%' }} />
                </Box>
            </Box>
        </Box>
    );
}

export default Hero;
