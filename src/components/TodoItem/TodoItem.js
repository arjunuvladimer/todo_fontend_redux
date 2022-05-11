import { Divider, ListItem, ListItemText} from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const TodoItem = ({todo:{todoName,todoDescription}}) => {
    return(
        <>
            <ListItem alignItems="flex-start">
                <ListItemText
                    primary={todoName}
                    secondary={todoDescription}
                />
                <EditIcon />
                <DeleteIcon />
                <Divider variant="inset" component="li" />
            </ListItem>
            
        </>
    )
}

export default TodoItem