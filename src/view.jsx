import React from 'react'
import AppBar from 'material-ui/lib/app-bar'
import IconMenu from 'material-ui/lib/menus/icon-menu'
import IconButton from 'material-ui/lib/icon-button'
import RaisedButton from 'material-ui/lib/raised-button'
import FlatButton from 'material-ui/lib/flat-button'
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close'
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert'
import MenuItem from 'material-ui/lib/menus/menu-item'

export default React.createClass({
  render () {
    return (
      <div>
      <AppBar
        title={<span>React Material UI App</span>}
        iconElementLeft={<IconButton><NavigationClose /></IconButton>}
        iconElementRight={<FlatButton label="Save" />} />
        <br/>
        <RaisedButton label="Default" />
        <br/>
        <RaisedButton label="Primary" primary={true} />
        <br/>
        <RaisedButton label="Secondary" secondary={true} />
        <br/><br/><br/>
        <FlatButton label="Default" />
        <br/>
        <FlatButton label="Primary" primary={true} />
        <br/>
        <FlatButton label="Secondary" secondary={true} />
      </div>
    );
  }
});
