import React, {useEffect, useState} from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const Characters = () => {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/')
    .then(response => response.json())
    .then(data => setCharacters(data.results));
  }, []);

  return ( 
    <div className='Characters'>
    <Box sx={{ flexGrow: 1, p: 1, borderRadius: '20px' }}>
      <Grid container spacing={{ xs: 2, sm: 4, md: 4, lg:6 }} row={{ xs: 1, sm: 2, md: 3, lg:4 }}>
        {characters.map(character => (
          <Grid item xs={12} sm={6} md={4} lg={4} key={character.id}>
            <Item>
            <Card sx={{ maxWidth: 345 }} variant="outlined">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="300"
                  image={character.image}
                  display="block"
                  alt={character.name}
                  loading="lazy"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {character.name}
                  </Typography>
                  <Stack direction="row" spacing={1} display="flex" with='100%' justifyContent="center">
                    <Chip label={character.status} size="small" color="primary"/>
                    <Chip label={character.species} size="small" color="warning" />
                  </Stack>
                </CardContent>
              </CardActionArea>
              </Card>
            </Item>
          </Grid>
        ))}
      </Grid>
      </Box>
    </div>
   );
}
 
export default Characters;