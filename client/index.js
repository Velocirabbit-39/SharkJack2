import React from 'react';
import  ReactDOM  from 'react-dom/client';
import App from './components/App.jsx';


// const container = document.getElementById('root');

// // Create a root.
// const root = ReactDOM.createRoot(container);

// // Initial render
// root.render(<App/>);

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render (
    <React.StrictMode>
        <App />
    </React.StrictMode>
);


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );