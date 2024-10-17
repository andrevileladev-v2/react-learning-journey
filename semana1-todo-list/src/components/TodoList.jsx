import React from 'react';
import { List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoList = ({ todos, removeTodo }) => {
  return (
    <List>
      {todos.map((todo, index) => (
        <ListItem
          key={index}
          secondaryAction={
            <IconButton edge="end" aria-label="delete" onClick={() => removeTodo(index)}>
              <DeleteIcon />
            </IconButton>
          }
        >
          <ListItemText primary={todo} />
        </ListItem>
      ))}
    </List>
  );
};

export default TodoList;
