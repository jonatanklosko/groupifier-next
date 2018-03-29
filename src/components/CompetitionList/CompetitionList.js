import React, { Component } from 'react';
import List, { ListItem, ListItemText } from 'material-ui/List';
import ListSubheader from 'material-ui/List/ListSubheader';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

import WcaApi from '../../logic/WcaApi';

export default class CompetitionList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      competitions: []
    }
  }

  componentDidMount() {
    WcaApi.getUpcomingManageableCompetitions()
      .then(competitions => this.setState({ competitions }));
  }

  render() {
    return (
      <div>
        <Paper>
          <List subheader={<ListSubheader>Your competitions</ListSubheader>}>
            {this.state.competitions.map(competition =>
              <ListItem key={competition.id} button>
                <ListItemText primary={competition.name} />
              </ListItem>
            )}
          </List>
        </Paper>
      </div>
    );
  }
}