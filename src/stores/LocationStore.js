import {observable, computed, action} from 'mobx';
import {LocationModel} from '../models'

export default class LocationStore {

	socket;
	@observable location ;

	constructor () {
	  this.location = new LocationModel(this, 1, '', 0, 0);
	}


	// subscribeServerToStore() {
	// 	autorun(() => {
	// 		const locations = this.toJS();
	// 		if (this.subscribedServerToModel !== true) {
	// 			this.subscribedServerToModel = true;
	// 			return;
	// 		}
	// 		fetch('/api/todos', {
	// 			method: 'post',
	// 			body: JSON.stringify({ todos }),
	// 			headers: new Headers({ 'Content-Type': 'application/json' })
	// 		})
	// 	});
	// }

	// createLocation (name, lat, lng) {
	// 	this.location = new LocationModel(this, 1, name, lat, lng);
	// }
	@action setName (name) {
		this.location.name = name;
	}
	@action setLocation (lat, lng) {
		this.location.setLocation(lat,lng)
	}
	toJS() {
		return this.location.toJS();
	}

	static fromJS(array) {
		const locationStore = new LocationStore();
		locationStore.locations = array.map(item => LocationModel.fromJS(locationStore, item));
		return locationStore;
	}
}
