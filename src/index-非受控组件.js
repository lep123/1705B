import React from 'react'
import ReactDOM from 'react-dom'

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

  // 
  setCheckbox = option => {
    // console.log(this.state.ch.map(v => {
    //   if (v.id === option.id) {
    //     v.bl = !v.bl
    //   }
    //   return v
    // }))
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
        {/* defaultValue: 默认值 */}
        {/* <input defaultValue="1" type="text" ref={val => this.abc = val} />
        <textarea ref={abc => this.textarea = abc}></textarea>
        <select ref={input => this.select = input}>
          <option>北京</option>
          <option>上海</option>
        </select>
        <input type="checkbox" ref={input => this.checkbox = input} />
        <input name="radio" value="男" type="radio" ref={input => this.radio1 = input} />
        <input name="radio" value="nv" type="radio" ref={input => this.radio2 = input} />
        <button onClick={this.getInput}>按钮</button> */}
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
      </div>
    )
  }
}

ReactDOM.render(
  <Input />,
  document.getElementById('root')
)
