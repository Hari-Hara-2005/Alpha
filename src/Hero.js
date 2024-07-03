import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import { animateHero } from './gsapAnimations';
import Navbar from './Navbar';

const Hero = () => {
    useEffect(() => {
        animateHero();
    }, []);

    return (
        <Box>
            <Box sx={{ height: '100vh', bgcolor: '#f5f5f8' }} className="hero_bg" >
                {/* <Box sx={{display:'flex',justifyContent:'center'}}>
                    <Box component='img' src="/Assets/logo.png" sx={{ position: 'absolute'}} />
                </Box> */}
                <Box sx={{ display: 'flex', justifyContent: 'center', py: '8rem', transition: 'all cubic-bezier(0.19, 1, 0.22, 1) 0.5s', }}>
                    <img src='/Assets/cover.png' alt='Cover' style={{ width: '50rem' }} />
                    <Box component='img'
                        id='card'
                        src='/Assets/card-1.png'
                        alt='Card'
                        sx={{
                            width: ['28rem', '40rem', '40rem', '100%', '18rem'],
                            transition: 'all cubic-bezier(0.19, 1, 0.22, 1) 2s',
                            marginLeft: ['5rem', '1.8rem'],
                            mt: ['1rem', '5.899rem'],
                            position: 'absolute',
                            zIndex: 2
                        }}
                    />

                </Box>
            </Box>
            <Box sx={{ height: '100vh', bgcolor: '#282828' }} className="two">
                <Navbar />
                <Box sx={{ display: 'flex', py: ['8.1rem', '0rem'] }}>
                    <img src='/Assets/cover.png' alt='Cover 2' style={{ width: '50rem', marginTop: '1rem', position: 'absolute' }} />
                    <img src='/Assets/card-2.png' alt='Card 2' style={{ zIndex: 2, marginLeft: '21.9%', width: '23.5rem', marginTop: '2.9rem', }} />
                </Box>
            </Box>
        </Box>
    );
}

export default Hero;
