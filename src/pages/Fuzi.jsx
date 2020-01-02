import React, { Component } from 'react'
import F1 from './F1'
export default class Fuzi extends Component {
    constructor(props) {
        super(props)
        this.state={
            data:[
                {
                    name:"张三",
                    price:[
                        {name:"20",sex:"女"}
                    ]
                },
                {
                    name:"李四",
                    price:[
                        {name:"21"}
                    ]
                },
                {
                    name:"王五",
                    price:[
                        {name:"22",sex:"男"}
                    ]
                }
            ],
            datas:[
                {price:"20"},
                {price:"21"},
                {price:"22"},
            ]
        }
    }
  render() {
    return (
      <div>
          <li>
              如果没有性别，默认中性人
          </li>
        <F1 name={this.state.data[0]}/>
        <F1 name={this.state.data[1]}/>
        <F1 name={this.state.data[2]}/>
      </div>
    )
  }
}
