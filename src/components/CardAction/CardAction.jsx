/* eslint-disable max-len */
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { storage } from '../../utils/ConfigFirebase';
import styles from './styles.module.css';

function ActionAreaCard() {
  const listRef = ref(storage, 'home_photos/');
  const [list, setList] = useState([]);

  const urls = async () => {
    try {
      const items = await listAll(listRef);
      items.items.forEach(async (item) => {
        const url = await getDownloadURL(item);
        setList((prev) => [...prev, url]);
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    urls();
  }, []);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/property');
  };

  return (
    <div
      className={styles.container}
      onClick={handleClick}
      role="button"
      onKeyDown={handleClick}
      tabIndex="0"
    >
      {list.map((url) => (
        <Card sx={{ maxWidth: 320 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={url}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Casa
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                Vivienda que goza de increíbles vistas sobre la ciudad y se encuentra solo a poca distancia de colegios, tiendas y restaurantes.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
}

export default ActionAreaCard;
