import React from 'react';
import ProductInfo from './ProductInfo';
import LinkButton from './LinkButton';

export default class Properties extends React.Component {
	render () {
		return (
			<div className="col-md-6 col-sm-12 col-xs-12">
				<h1>Properties</h1>
				<ProductInfo previewProperties={this.props.previewProperties}/>
				<LinkButton previewProperties={this.props.previewProperties}/>
			</div>
		);
	}
}
