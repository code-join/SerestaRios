// CSS
import './index.css';

// App
import App from './App.jsx';

// React e Router
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// Routes (Pages)
import Home from './routes/Home.jsx';
import Gallery from './routes/Gallery.jsx';

const router = createBrowserRouter([
	{
		path: '/SerestaRios/',
		element: <App />,
		children: [
			{
				path: '/SerestaRios/',
				element: <Home />,
			},
			{
				path: '/SerestaRios/fotos',
				element: <Gallery />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
