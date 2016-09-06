import React ,{Component} from 'react'
import {observer, inject} from 'mobx-react'
import {Map , MapCard} from '../../components'
import io from 'socket.io-client'
import {Card} from 'material-ui/Card'
import {Paper} from 'material-ui'
import $ from 'jquery'

const HOST = 'http://localhost' ;
const PORT = 3000 ;

const paperStyle = {
  paddingTop: "14px",
  paddingBottom: "24em",
  position: 'absolute',
  top: '4em', // 8em
  left: '0',
  bottom: '8em', // 8em
  right: 0,
  overflow: 'hidden',
  height: '100%'
}

@inject('store') @observer
class MapContainer extends Component {
  constructor () {
    super()
    this.handleLocationMessage = this.handleLocationMessage.bind(this)
  }
  handleLocationMessage (data) {
    this.props.store.setLocation(data.lat, data.lng)
  }
  componentWillMount () {

  }
  componentDidMount () {
    let locationInterval = 5000;
    setInterval(() => {
      this.serverRequest = $.get('/api/myLocation', function (result) {
        this.handleLocationMessage({
          lat: result.lat,
          lng: result.lng
        })
      }.bind(this));
    }, locationInterval);
    setInterval(() => {
        navigator.geolocation.getCurrentPosition( (position) => {
          var {latitude,longitude} = position.coords;
          var {clientLocation} = this.props.store;
          console.log('update client location')
          clientLocation.setLocation(latitude, longitude);
        });
      }, locationInterval);
  }

  render () {
    return (
      <Paper zDepth={2} style={paperStyle}>
        <MapCard />
        <Map location={this.props.store.location} clientLocation={this.props.store.clientLocation}/>
      </Paper>
    );
  }
}
export default MapContainer