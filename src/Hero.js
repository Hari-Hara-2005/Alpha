import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import { animateHero } from './gsapAnimations';
import Navbar from './Navbar';

const Hero = () => {
    useEffect(() => {
        animateHero();
    }, []);

    return (
        <Box sx={{ width: '100%', overflow: 'hidden' }}>
            <Box sx={{ height: '100vh', bgcolor: '#f5f5f7' }}>
                {/* <Box sx={{display:'flex',justifyContent:'center'}}>
                    <Box component='img' src="/Assets/logo.png" sx={{ position: 'absolute'}} />
                </Box> */}
                <Box sx={{ display: 'flex', justifyContent: 'center', py: '6rem', transition: 'all cubic-bezier(0.19, 1, 0.22, 1) 0.5s', }}>
                    <img src='/Assets/cover.png' alt='Cover' style={{ width: '50rem' }} />
                    <Box component='img'
                        id='card'
                        src='/Assets/card-1.png'
                        alt='Card'
                        sx={{
                            width: ['28rem', '40rem', '40rem', '100%', '18rem'],
                            transition: 'all cubic-bezier(0.19, 1, 0.22, 1) 2s',
                            marginLeft: ['5rem', '2rem'],
                            mt: ['1rem', '5.3rem'],
                            position: 'absolute',
                        }}
                    />

                </Box>
            </Box>
            <Box sx={{ height: '120vh', bgcolor: '#282828' }} className="two">
                <Navbar />
                <Box sx={{ display: 'flex', py: ['8.1rem', '5rem'] }}>
                    <img src='/Assets/cover.png' alt='Cover 2' style={{ maxWidth: '100%', marginTop: '3rem' }} />
                </Box>
            </Box>
        </Box>
    );
}

export default Hero;
