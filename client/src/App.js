// in src/App.js
import * as React from "react";
//import { Admin } from 'react-admin';
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import authProvider from './authProvider';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

//const App = () => <Admin dataProvider={dataProvider} />;
const App = () => (
   <Admin dataProvider={dataProvider} authProvider={authProvider}>
       <Resource name="users" list={ListGuesser} />
    </Admin>
)

export default App