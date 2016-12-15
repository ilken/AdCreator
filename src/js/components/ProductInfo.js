import React from 'react';
import * as Actions from '../actions/Actions';

export default class ProductInfo extends React.Component {
	handleBackgroundColourChange(e){
		Actions.updateBackgroundColour(e.target.value);
	}

	handleTextColourChange(e){
		Actions.updateTextColour(e.target.value);
	}

	render () {
		return (
            <div className="row">
				<div className="col-md-12 col-sm-12 col-xs-12">
					<h2>Product Info Box</h2>
					<div className="form-group">
						<label for="bgColour">Background Colour:</label>
						<input type="text"
							className="form-control"
							id="bgColour"
							value={this.props.previewProperties.backgroundColour}
							onChange={this.handleBackgroundColourChange.bind(this)}
						/>
					</div>
					<div className="form-group">
						<label for="txtColour">Text Colour:</label>
						<input type="text"
							className="form-control"
							id="txtColour"
							value={this.props.previewProperties.textColour}
							onChange={this.handleTextColourChange.bind(this)}
						/>
					</div>
				</div>
			</div>
		);
	}
}
