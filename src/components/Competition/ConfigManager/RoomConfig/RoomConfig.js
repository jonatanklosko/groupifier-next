import React, { Component } from 'react';
import Typography from 'material-ui/Typography';

import PositiveIntegerInput from '../../../common/PositiveIntegerInput/PositiveIntegerInput';
import { setIn } from '../../../../logic/helpers';
import { getGroupifierData, setGroupifierData } from '../../../../logic/wcifExtensions';

export default class RoomConfig extends Component {
  get roomData() {
    return getGroupifierData(this.props.room) || { stations: null };
  }

  handleInputChange = (event, value) => {
    const { room, onChange } = this.props;
    onChange(
      setGroupifierData('Room', room, setIn(
        this.roomData, [event.target.name], value)
      )
    );
  };

  render() {
    const { room } = this.props;

    return (
      <div>
        <Typography variant="body2">
          <span style={{
              display: 'inline-block',
              width: 10, height: 10, marginRight: 5,
              borderRadius: '100%', backgroundColor: room.color
            }}
          />
          <span>{room.name}</span>
        </Typography>
        <PositiveIntegerInput
          label="Timing stations"
          value={this.roomData.stations}
          name="stations"
          onChange={this.handleInputChange}
        />
      </div>
    );
  }
}