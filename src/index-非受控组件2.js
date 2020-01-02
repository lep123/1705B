import React from 'react'
import ReactDOM from 'react-dom'
import Person from './pages/person'

/**
  vuex
  commit()
  <input v-model="name" />
  1. 受控表单
  2. 费受控表单
 */

class Input extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      ch: [
        { id: 1, bl: false, active: false },
        { id: 2, bl: false, active: false },
        { id: 3, bl: false, active: false },
      ]
    }
  }

  // 重置
  resetCheckbox = () => {
    this.setState({
      ch: this.state.ch.map(v => {
        v.bl = false
        return v
      })
    })
  }

  setCheckbox = option => {
    this.setState({
      ch: this.state.ch.map(v => {
        if (v.id == option.id) {
          v.bl = !v.bl
        }
        return v
      })
    })
  }

  render () {
    return (
      <div>
        {
          this.state.ch.map((v, key) => {
            return (
              <input
                key={key}
                type="checkbox" 
                name={v.id} 
                checked={v.bl}
                onChange={() => this.setCheckbox(v)} 
              />
            )
          })
        }
        <button onClick={this.resetCheckbox}>重置</button>
        <button>提交</button>
      </div>
    )
  }
}

ReactDOM.render(
  <Input />,
  document.getElementById('root')
)
