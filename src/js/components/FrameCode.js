import React from 'react';

export default class FrameCode extends React.Component {
	render () {
		const iframeContent = document.getElementById('iFrameContent');
		const htmlCode = iframeContent ? iframeContent.innerHTML : '';
		return (
			<div className="form-group">
				<label for="code">HTML:</label>
				<textarea className="form-control"
					rows="5"
					cols="50"
					id="code"
					value={htmlCode}
					disabled>
				</textarea>
			</div>
		);
	}
}
