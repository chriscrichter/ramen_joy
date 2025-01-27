import React,{useState} from 'react';
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

export default function FriendCard(props) {

  const { addFriend, name, id } = props; 
  const classes = useStyles();
  // const [ message, setMessage] = useState(false); 

  // function addMessage(){
  //   setMessage(true); 
  // }

  // function sendMessage(e){
  //   e.preventDefault();
  //   console.log("sendform")
  // }

  // function addMessageForm(){
  //   return (
  //     <form onSubmit={sendMessage}>
  //       <input type="text" /> 
  //       <button>Submit</button> 
  //     </form>
  //   )
  // }

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
        <Button value={id} onClick={()=> addFriend(id, name) } size="small" color="primary">
          Add Friend
        </Button>
      </CardActions>
    </Card>
  );
}

/* <Button onClick={addMessage()}>Add Message</Button>
          {message ? addMessageForm : "no message"} */
