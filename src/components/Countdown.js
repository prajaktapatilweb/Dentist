import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import { Card, Typography } from '@mui/material'
import CountUp from 'react-countup'

export default function Countdown() {
    var Details = [
        {
            numbers: "2000",
            title: "hfjbgj"
        },
        {
            numbers: "5000",
            title: "hfjbgj"
        },
        {
            numbers: "6000",
            title: "hfjbgj"
        }
    ]

    return (
        <div>
            <Box sx={{ boxShadow: 2, py: 4, px: 7, borderRadius: 4, backgroundColor: 'background.paper' }}>

                <Container maxWidth="lg">
                    <Typography variant="h1" sx={{ fontSize: 40 }}>
                        Our Satisfied Clients
                    </Typography>

                    <Grid container spacing={3} sx={{ flexDirection: { xs: 'column', md: 'unset' } }}>
                        {Details.map((item, i) => (
                            <Grid item xs={12} md={4}>
                                <Box sx={{ textAlign: 'center', mb: { xs: 1, md: 0 } }}>
                                    <Typography
                                        sx={{ color: 'secondary.main', mb: { xs: 1, md: 2 }, fontSize: { xs: 34, md: 44 }, fontWeight: 'bold' }}
                                    >
                                        <CountUp end={item.numbers} duration={5} />+
                                    </Typography>
                                    <Typography color="text.secondary" variant="h5">
                                        {item.title}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>

                </Container>
            </Box>
        </div>
    )
}
