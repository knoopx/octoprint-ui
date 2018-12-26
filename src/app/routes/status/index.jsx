import React from 'react'
import { inject, observer } from 'mobx-react'

import {
  MdHome,
  MdTimer,
  MdStop,
  MdPause,
  MdOpenWith,
  MdInsertDriveFile,
} from 'react-icons/md'

import { FaThermometerHalf } from 'react-icons/fa'
import Button from 'app/components/button'
import Progress from './progress'
import TempGraph from './temp-graph'

function formatTime(seconds) {
  const h = Math.floor(seconds / 3600)
  const m = Math.floor((seconds % 3600) / 60)
  const s = seconds % 60
  return [h, m > 9 ? m : h ? `0${m}` : m || '0', s > 9 ? s : `0${s}`]
    .filter(a => a)
    .join(':')
}

@inject('store')
@observer
class StatusRoute extends React.Component {
  componentDidMount() {}

  render() {
    const { store } = this.props
    const { status } = store
    return (
      <React.Fragment>
        <div className="flex flex-auto justify-center items-center">
          <div className="mr-4">
            <Progress
              strokeWidth={28}
              size={128}
              percent={status.progress.completion}
            />
          </div>
          <div>
            <div className="text-lg font-bold mb-2">{status.state.text}</div>
            <div className="flex items-center mb-2">
              <MdInsertDriveFile size={24} className="mr-2 text-blue" />
              {status.job.file.display}
            </div>
            <div className="flex items-center mb-4">
              <MdTimer size={24} className="mr-2 text-blue" />
              {formatTime(status.progress.printTimeLeft)}
            </div>
            <div className="flex">
              <Button className="mr-2">
                <MdPause size={36} />
              </Button>
              <Button>
                <MdStop size={36} />
              </Button>
            </div>
          </div>
        </div>
        <div>
          <TempGraph data={store.temps} width={480} height={100} />
        </div>
      </React.Fragment>
    )
  }
}

export default StatusRoute
