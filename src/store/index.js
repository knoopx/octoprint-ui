import { types } from 'mobx-state-tree'

export default types
  .model('Store', {
    endpoint: types.optional(types.string, 'octopi.local'),
    apiKey: types.optional(types.string, ''),
  })
  .volatile(self => ({
    isConnected: false,
    status: {
      state: {},
      job: { file: {} },
      progress: {},
    },
    temps: [],
  }))
  .views(self => ({}))
  .actions(self => ({
    afterCreate() {
      self.connect()
    },
    connect() {
      const sock = new WebSocket(`ws://${self.endpoint}/sockjs/websocket`)

      sock.onopen = (e) => {
        console.log('open', e)
      }

      sock.onmessage = (e) => {
        const data = JSON.parse(e.data)
        if (data.history) {
          self.setStatus(data.history)
          self.temps.push(...data.history.temps)
        }

        if (data.current) {
          self.setStatus(data.current)
          self.setIsConnected(true)
          if (data.current.temps) {
            self.temps.push(...data.current.temps)
          }
        }
      }

      sock.onclose = (e) => {
        self.setIsConnected(false)
      }
    },
    setIsConnected(value) {
      self.isConnected = value
    },
    setStatus(status) {
      self.status = status
    },
  }))
