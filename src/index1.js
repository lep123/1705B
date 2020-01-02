import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route, Link, useParams } from "react-router-dom"
import 'antd/dist/antd.css'
import './index.css'
import { Carousel } from 'antd';

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: '',
      arr: [1, 2, 3, 4],
      none: false,
    }
  }

  componentDidMount () {
    this.onChange(0)
  }

  onChange = v => {
    console.log(v)
    this.setState({
      value: this.state.arr[v]
    })
  }

  handleChange (e) {
    this.setState({
      value: e.target.value
    })
  }

  noneEl = () => {
    this.setState({
      none: true,
    })
  }

  render () {
    return (
      <div>
        <div 
          onClick={this.noneEl}
          className={this.state.none ? 'none' : 'block'}
        >
          <Carousel 
            dotPosition="right" 
            autoplay 
            afterChange={this.onChange}
          >
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
          </Carousel>
        </div>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
      </div>
    )
  }
}

ReactDOM.render(
  <Home />,
  document.getElementById('root')
)





/**
 1. 父子组件传值
 4. 子路由默认展示
 2. 图片不展示
 3. antd flex 没了
 5. 路由嵌套
 6. 路由传参

 7. 文字滚动
 * 
 */