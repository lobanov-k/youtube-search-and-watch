import React from 'react';
import store from '../store';
import { Provider } from 'react-redux';

import History from './History';
import Search from './search/index';
import Player from './Player';

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <div className="container">
                    <div className="sidebar">
                        <p>Watch History</p>
                        {/* <History/> */}
                    </div>
                    <div className="mainContent">
                        <Search/>
                        {/* <Player/> */}
                    </div>
                </div>
            </Provider>
        );
    }
}

export default App;