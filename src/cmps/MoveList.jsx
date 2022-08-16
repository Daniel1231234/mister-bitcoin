import Moment from 'react-moment';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import DeleteIcon from '@mui/icons-material/Delete';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';



export function MoveList(props) {
  const moves = props.user.moves 
  return (
    <div className='move-list'>
          <Typography sx={{ pt: 1, mb: 1 }} variant="h6" component="div">
            Your moves
          </Typography>
          <List sx={{ width: '100%', maxWidth: 1200, bgcolor: 'inherit' }}>
        {moves.length === 0 ? <div>No moves yet</div> : moves.map(move => {
          return <ListItem alignItems="flex-start" key={move.toId}>         
            <ListItemText primary={<Moment withTitle>{move.at}</Moment>} />       
            <ListItemText primary={`${'$' + move.amount.amount}`} />
            <Divider variant="inset" component="li" />
            <ListItemText primary={`${move.to}`} />
            <DeleteIcon  />
          </ListItem>
        })}
          </List>
    </div>
  )
}