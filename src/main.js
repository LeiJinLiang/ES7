import React  from 'react'
import { render } from 'react-dom'
import store from './store'
import { Provider } from 'react-redux'
import Client from './client'






render((<Provider store = {store}>
       <Client />
    </Provider>),
    document.getElementById('root')
)
