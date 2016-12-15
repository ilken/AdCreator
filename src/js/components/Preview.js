import React from 'react';
import Frame from './Frame';
import FrameCode from './FrameCode';

export default class Preview extends React.Component {
	render () {
		return (
			<div className="col-md-6 col-sm-12 col-xs-12">
				<h1>Live Preview</h1>
				<Frame previewProperties={this.props.previewProperties}/>
				<FrameCode previewProperties={this.props.previewProperties}/>
			</div>
		);
	}
}
