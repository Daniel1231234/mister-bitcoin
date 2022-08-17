import Moment from 'react-moment';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import DeleteIcon from '@mui/icons-material/Delete';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';



export function MoveList(props) {
  const moves = props.user.moves 

  const onRemoveMove = (ev) =>{
    // console.log(ev)
  }
  return (
    <div className='move-list'>
          <Typography sx={{ pt: 1, mb: 1 }} variant="h6" component="div">
            Your moves
          </Typography>
      <List sx={{ width: '100%', maxWidth: 1200, bgcolor: 'inherit' }}>
        {/* <Divider variant="inset" component="li" /> */}
        <ListItem>
          <ListItemText primary={'When?'} />
          <ListItemText primary={'How much?'} />
          <ListItemText primary={'Contact'} />
        </ListItem>
        <Divider variant="inset" component="li" />
        {moves.length === 0 ? <div>No moves yet</div> :
          moves.map(move => {
            return (
              <div key={move.toId}>
                <ListItem alignItems="flex-start"> 
                      <ListItemText primary={<Moment format="DD/MM/YYYY HH:mm" withTitle>{move.at}</Moment>} />       
                      <ListItemText primary={`${'$' + move.amount.amount}`} />
                      <ListItemText primary={`${move.to}`} />
                      <Button color="error" onClick={onRemoveMove}> <DeleteIcon /></Button>   
                </ListItem>
                <Divider variant="inset" component="li" />
              </div>)
        })}
      </List>
    </div>
    
  )
}