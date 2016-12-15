import React from 'react';

export default class Frame extends React.Component {
	render () {
		const properties = this.props.previewProperties;
		const containerStyle = {
			width: '100%',
			height: '100%',
			backgroundColor: 'white',
			padding: '0 15px'
		};
		const productInfoStyle = {
			color: properties.textColour,
			backgroundColor: properties.backgroundColour,
			border: '1px solid black',
			textAlign: 'center',
			padding: '5px'
		};
		const imageStyle = {
			textAlign: 'center'
		};
		const buttonSyle = {
			backgroundColor: properties.buttonBackgroundColour,
			margin: '0 auto',
			textAlign: 'center',
			width: '100px',
			height: '30px',
			borderRadius: '5px'
		};
		const buttonTextSyle = {
			color: properties.buttonTextColour
		};
		const product = properties.products[0];

		return (
			<div id='iFrameContent' className='iFrameContainer'>
				<div style={containerStyle}>
					<div style={imageStyle}>
						<img src={product.img}/>
					</div>
					<div style={productInfoStyle}>
						<h2>{product.name}</h2>
						<div style={buttonSyle}>
							<a style={buttonTextSyle} type='button' target='_parent' href={product.link}>BUY NOW!</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
