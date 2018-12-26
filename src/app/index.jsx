import React from 'react'
import { hot } from 'react-hot-loader'
import { inject, observer } from 'mobx-react'

import { MdHome, MdOpenWith } from 'react-icons/md'
import { FaThermometerHalf } from 'react-icons/fa'

import Button from 'app/components/button'
import { Switch, Redirect, withRouter } from 'react-router'
import { Route, BrowserRouter, Link } from 'react-router-dom'

import StatusRoute from './routes/status'
import ControlRoute from './routes/control'

@hot(module)
@withRouter
@inject('store')
@observer
export default class App extends React.Component {
  render() {
    const { store } = this.props
    const { isConnected } = store
    return (
      <div className="flex flex-auto flex-col">
        {!isConnected && (
          <div className="flex flex-auto justify-center items-center text-xl font-medium italic">
            Connecting...
          </div>
        )}
        {isConnected && (
          <React.Fragment>
            <Switch>
              <Route path="/" exact component={StatusRoute} />
              <Route path="/control" exact component={ControlRoute} />
            </Switch>
            <div className="flex">
              <div className="flex flex-auto">
                <Button to="/">
                  <MdHome size={36} />
                </Button>
                <Button to="/control">
                  <MdOpenWith size={36} />
                </Button>
                <Button to="/temperature">
                  <FaThermometerHalf size={36} />
                </Button>
              </div>
            </div>
          </React.Fragment>
        )}
      </div>
    )
  }
}
