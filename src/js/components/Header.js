import React from 'react';

export default class Header extends React.Component {
	render () {
		return (
            <nav className="navbar navbar-inverse navbar-fixed-top top-nav-collapse" role="navigation">
                <div className="container">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">
							<img src="img/affectv-logo.png" alt="AdCreator"/>Dynamic AdCreator
						</a>
                    </div>
                </div>
            </nav>
		);
	}
}
