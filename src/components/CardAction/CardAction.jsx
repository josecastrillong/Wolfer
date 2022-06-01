import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import { useState, useEffect } from 'react';
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

  return (
    <div className={styles.container}>
      {list.map((url) => (
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={url}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
}

export default ActionAreaCard;
