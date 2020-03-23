import React from 'react'
import { Route, withRouter, Switch } from 'react-router-dom'
import { Main } from '../views/main'
import { UserDetails } from '../views/user-details'
import { EditUser } from '../views/edit-user'
import { NotFound } from '../views/not-found/not-found'

export const AppRouter = () => (
    <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/edit/user/:id" component={EditUser} />
        <Route path="/user/:id" component={UserDetails} />
        <Route component={NotFound} />
    </Switch>
)

export const AppRoutes = withRouter(AppRouter)
