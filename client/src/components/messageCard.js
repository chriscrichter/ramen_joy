import React,{ useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MessageCard(props) {


  const [messageInput, setmessageInput] = useState(); 
  const {  name, _id, addMessage } = props; 
  const classes = useStyles();


  function handleUserInput(e){
    e.preventDefault(); 
    setmessageInput(e.target.value) 
  }


  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          // image={imageUrl}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <form> 
          <input type="text" onChange={handleUserInput}/> 
          <Button value={ _id } onClick={()=> addMessage(_id, name, messageInput) } size="small" color="primary">
          send message
        </Button>
        </form>
      </CardActions>
    </Card>
  );
}