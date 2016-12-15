import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';

class Store extends EventEmitter {
	constructor () {
		super();
		this.products = [{id:'', img: '', description: '', link: ''}];
		this.backgroundColour = 'white';
		this.textColour = 'black';
		this.buttonBackgroundColour = 'blue';
		this.buttonTextColour = 'white';
	}

	loadData (response) {
		this.products = response.data.products;
		this.emit('PropertiesChange');
	}

	getProperties () {
		return {
			backgroundColour: this.backgroundColour,
			textColour: this.textColour,
			buttonBackgroundColour: this.buttonBackgroundColour,
			buttonTextColour: this.buttonTextColour,
			products: this.products
		};
	}

	setBackgroundColour (data) {
		this.backgroundColour = data;
		this.emit('PropertiesChange');
	}

	setTextColour (data) {
		this.textColour = data;
		this.emit('PropertiesChange');
	}

	setButtonBackgroundColour (data) {
		this.buttonBackgroundColour = data;
		this.emit('PropertiesChange');
	}

	setButtonTextColour (data) {
		this.buttonTextColour = data;
		this.emit('PropertiesChange');
	}

	handleActions (action) {
		switch (action.type) {
			case 'LOAD_AD_DATA':{
				this.loadData(action.data);
				break;
			}
			case 'BACKGROUND_COLOUR_CHANGE':{
				this.setBackgroundColour(action.data);
				break;
			}
			case 'TEXT_COLOUR_CHANGE':{
				this.setTextColour(action.data);
				break;
			}
			case 'BUTTON_BACKGROUND_COLOUR_CHANGE':{
				this.setButtonBackgroundColour(action.data);
				break;
			}
			case 'BUTTON_TEXT_COLOUR_CHANGE':{
				this.setButtonTextColour(action.data);
				break;
			}
		}
	}
}

const store = new Store();
dispatcher.register(store.handleActions.bind(store));

export default store;
