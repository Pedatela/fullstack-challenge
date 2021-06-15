import React from 'react'
import { Switch } from 'react-router-dom'
import Route from './Route'

import Detail from '../pages/BookDetail'
import Books from '../pages/Books'
import NewBook from '../pages/NewBook'



export default function Routes() {
  return (
    <Switch>
      <Route path='/' exact component={Books} />
      <Route path='/books' component={Books} />
      <Route path='/new/book' component={NewBook} />
      <Route path='/book/:id' exact component={Detail} />
    </Switch>
  )
}