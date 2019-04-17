import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ViewListIcon from '@material-ui/icons/ViewList';
import PeopleIcon from '@material-ui/icons/People';
import { SECTIONS } from './constants';

export const mainListItems = (onClick) => (
  <div>
    <ListItem>
      <ListItemText primary="Game of Thrones" secondary="Dead or Alive" />
    </ListItem>
    <ListItem button onClick={() => onClick(SECTIONS.SCORES)}>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Scores" />
    </ListItem>
    <ListItem button onClick={() => onClick(SECTIONS.MASTER)}>
      <ListItemIcon>
        <ViewListIcon />
      </ListItemIcon>
      <ListItemText primary="Master" />
    </ListItem>    
  </div>
);

export const secondaryListItems = (users, onClick) => {
  
  if( !users ){
    return null;
  }
    
  return (
    <div>
      <ListSubheader inset>Details</ListSubheader>    
      { users && users.map( u => {
        return (
          <ListItem button key={u.name} onClick={() => onClick(SECTIONS.USER_DETAIL, u.name)}>
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary={u.name} />
          </ListItem>
        )
      })}
    </div>
  );
};