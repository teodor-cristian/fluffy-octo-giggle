require('file-loader?name=[name].[ext]!./index.html')
import React from 'react';
import { render } from 'react-dom';

render(<h1>Hello webpack</h1>, document.getElementById('app'));