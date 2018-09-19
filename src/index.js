import React from 'react';
import ReactDOM from 'react-dom';
import './less/main.less';

ReactDOM.render( 
	<div>React is ready</div>, 
	document.getElementById('app')
);

module.hot.accept();