import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';

export default function Equipment() {
    return (
        <div>
            <Box

                sx={{
                    pt: {
                        xs: 6,
                        md: 8,
                    },
                    pb: 14,
                    backgroundColor: 'background.default',
                }}
            >
                <Container maxWidth="lg">
                    <Typography variant="h1" sx={{ mt: { xs: 0, md: -5 }, fontSize: { xs: 30, md: 48 } }}>
                        Equipments
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={4}>
                            yiyhoit oi yoi jouio ijuiy jotuity
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </div>
    )
}
