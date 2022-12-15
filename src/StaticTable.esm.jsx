import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import StaticTable from './components/StaticTable.jsx';

export default function (props) {
  return renderToStaticMarkup(<StaticTable {...props}/>)
}