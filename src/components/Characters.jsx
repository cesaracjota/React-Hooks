import React, {useEffect, useState, useContext, useReducer} from 'react';

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
import Button from '@mui/material/Button';

import ThemeContext from '../context/ThemeContext';

const initialState = {
  favorites: [],
}

const favoritesReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITE':
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      };
      default:
        return state;
  }
}

const Characters = () => {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const color = useContext(ThemeContext);

  const [characters, setCharacters] = useState([]);

  const [ favorites, dispatch] = useReducer(favoritesReducer, initialState);

  const handleClick = favorite => {
    dispatch({ type: 'ADD_TO_FAVORITE', payload: favorite });
  }

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/')
    .then(response => response.json())
    .then(data => setCharacters(data.results));
  }, []);

  return ( 
    <div className='Characters'>
      {favorites.favorites.map(favorite =>{
        <li key={favorite.id}>
            <h1>{favorite.name}</h1>
            {console.log(favorite.name)}
        </li>
      })}
    <Box sx={{ flexGrow: 1, p: 1, borderRadius: '20px' }} style={{color}}>
      <Grid container spacing={{ xs: 2, sm: 4, md: 4, lg:6 }} row={{ xs: 1, sm: 2, md: 3, lg:4 }}>
        {characters.map(character => (
          <Grid item xs={12} sm={6} md={4} lg={4} key={character.id}>
            <Item>
            <Card sx={{ maxWidth: 345, paddingBottom: 2  }} variant="outlined">
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
              <Button variant="contained" type='button' size="small" color="primary" onClick={()=> handleClick(character)}> agregar a favoritos</Button>
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