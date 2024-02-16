import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Contact from './Contacts';
import EditContacts from './EditContacts';
import Error from './Error';
import Index from './Index';
import Root from './Root';
import { createContactAction, deleteContactAction, editContactAction, updateContctAction } from './actions/contactsAction';
import './index.css';
import { getContactloader, getContactsoader } from './loaders/contactsLoader';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    loader: getContactsoader,
    action: createContactAction,
    children: [
      {
        errorElement: <Error />,
        children: [
          {
            index: true,
            element: <Index />
          },
          {
            path: '/contacts/:contactId',
            element: <Contact />,
            loader: getContactloader,
            action: updateContctAction,
          },
          {
            path: '/contacts/:contactId/edit',
            element: <EditContacts />,
            loader: getContactloader,
            action: editContactAction,
          },
          {
            path: '/contacts/:contactId/destroy',
            action: deleteContactAction,
            errorElement: <div>Oops! There was an error.</div>,
          }
        ]
      }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
