import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Progress } from 'reactstrap';

class ServerList extends PureComponent {
  render() {
    const renderedServers = this.props.servers.map((server) => {
      const limitList = [];
      Object.keys(server.progress).forEach((key) => {
        const progress = server.progress[key];
        const name = key.substring(0, 1).toUpperCase() + key.substring(1);
        limitList.push(`${name} ${progress.current}/${progress.limit}`);
      });
      const progress = limitList.join(', ');
      const alternatives = server.iwadAlternatives
        ? ` (or ${server.iwadAlternatives.join(', ')})`
        : '';
      const pwads = server.pwads
        .map((pwad) => {
          const pwadAlternatives = pwad.iwadAlternatives
            ? ` (or ${pwad.iwadAlternatives.join(', ')})`
            : '';
          return `${pwad.original}${pwadAlternatives}`;
        })
        .join(', ');

      const joined = server.players.joined.length;
      const joinLeft = server.players.maxToJoin - joined;
      const spectates = server.players.spectates.length;
      const totalLeft = server.players.maxTotal - joined - spectates;
      const joinedNames = server.players.joined
        .map((player) => player.name)
        .join(', ');
      const spectatesNames = server.players.spectates
        .map((player) => player.name)
        .join(', ');
      return [
        <tr key={server.id}>
          <td>{server.name} ({server.address})</td>
          <td>{pwads}</td>
          <td>{progress}</td>
          <td>{server.type}</td>
          <td>{server.iwad}{alternatives}</td>
        </tr>,
        <tr>
          <td colSpan="5">
            <Progress multi>
              <Progress bar value={joined} max={server.players.maxTotal} color="success">{joined} joined</Progress>
              <Progress bar value={joinLeft} max={server.players.maxTotal} color="inverse">{joinLeft} can join</Progress>
              <Progress bar value={spectates} max={server.players.maxTotal} striped color="success">{spectates} spectates</Progress>
              <Progress bar value={totalLeft} max={server.players.maxTotal} striped color="inverse">{totalLeft} can spectate</Progress>
            </Progress>
          </td>
        </tr>,
        <tr>
          <td colSpan="5">
            <div>Map: {server.map.name} ({server.map.id})</div><div>Joined: {joinedNames}</div><div>Spectates: {spectatesNames}</div>
          </td>
        </tr>,
      ];
    });
    return (
      <table
        style={{
          width: '100%',
        }}
      >
        {renderedServers}
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  servers: state.serverList.servers,
});

const mapDispatchToProps = (dispatch) => ({
});

const ConnectedServerList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ServerList);

export default ConnectedServerList;
