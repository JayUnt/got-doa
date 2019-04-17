import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { styles } from './Scores.style';
import { Typography } from '@material-ui/core';

function Scores(props) {
  const { classes, scores } = props;
  const sortedScores = scores.sort((a, b) => parseInt(b.TotalScore) - parseInt(a.TotalScore));

  return (
    <div>
      <Typography variant="h3" gutterBottom>
        Scores
      </Typography>
        
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>User</TableCell>
              <TableCell align="right">Score</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedScores.map(n => (
              <TableRow key={n.User}>
                <TableCell component="th" scope="row">
                  {n.User}
                </TableCell>
                <TableCell align="right">{n.TotalScore}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}

Scores.propTypes = {
  classes: PropTypes.object.isRequired,
  scores: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default withStyles(styles)(Scores);