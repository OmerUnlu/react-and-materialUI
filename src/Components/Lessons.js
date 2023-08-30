import React from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import {Card,CardMedia, CardContent, Typography} from '@mui/material'
import Angular from '../images/angular.jpg'
import Boot from '../images/bootstrap5.png'
import CC from '../images/ccsharp.png'
import Whole from '../images/kompleweb.jpg'


const Lessons = () => {
    return (
        <>
            <Grid container spacing={2} rowSpacing={2} sx={{margin:"15px"}}>
                <Grid xs={12} md={6} lg={3} >
                    <Card>
                        <CardMedia   image={Angular}  sx={{ height: 200 }}   title="green iguana" />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">Javascript Course</Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid xs={12} md={6} lg={3} >
                    <Card>
                        <CardMedia   image={Boot}   sx={{ height: 200 }}   title="green iguana" />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">BootStramp Course</Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid xs={12} md={6} lg={3} >
                    <Card>
                        <CardMedia   image={CC}  sx={{ height: 200 }}   title="green iguana" />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">CcSharp Course</Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid xs={12} md={6} lg={3} >
                     <Card>
                        <CardMedia   image={Whole}  sx={{ height: 200 }}   title="green iguana" />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">Whole Wep Course</Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}

export default Lessons