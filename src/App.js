import React from 'react';
import './App.css';

import PageContainer from './components/PageContainer';
let hash = '#about'
if (window.location.hash) {
    hash = window.location.hash;
};
const App = () => {
    return (
        < PageContainer pageHash={`${hash}`} />
    );
}

export default App;
