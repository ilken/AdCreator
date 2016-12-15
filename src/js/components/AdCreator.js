import React from 'react';
import Properties from './Properties';
import Preview from './Preview';
import Store from '../stores/Store';
import * as Actions from '../actions/Actions';

export default class AdCreator extends React.Component {
	constructor () {
		super();
		this.state = {
			previewProperties: {
				backgroundColour: 'white',
				textColour: 'black',
				buttonBackgroundColour: 'blue',
				buttonTextColour: 'white',
				products: [{id:'', img: '', description: '', link: ''}]
			}
		};
	}

	componentWillMount () {
		Store.on('PropertiesChange', () => {
			this.setState({
				previewProperties: Store.getProperties()
			});
		});

		fetch('data/products.json')
		.then(response => response.json())
		.then(data => {
			Actions.update(data);
		})
	}

	render () {
		return (
            <div className="row">
				<Properties previewProperties={this.state.previewProperties}/>
				<Preview previewProperties={this.state.previewProperties}/>
            </div>
		);
	}
}
