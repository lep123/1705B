import React , {Component} from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { post, get } from '@/utils/request'
import api from '@/services/api'
import qs from 'qs'

export default class Index3 extends Component {

    constructor(props) {
        super(props)

        this.state = {
            hasMore: true,
            data: [],
            count: 0,
        }

        this.loadFunc(1)

    }

    loadFunc = page => {
        // page 当前滚动到了第几页
        const { data, count } = this.state
        // 超过200条数据 不继续监听下拉事件
        if (count && data.length >= count) {
          return false
        }
        // page 是当前请求第几页数据
        // limit 每页我需要返回的数据条数
        post(api.updown, qs.stringify({ page, limit: 10 }))
          .then(res => {
                this.setState({
                    data: [...data, ...res.data.result.list],
                    count: res.count,
                })
          })
          .catch(err => console.log(err))
      }

    render() {
        const { hasMore, data } = this.state
        console.log(data)
        return (
            <div className="index3">
                 <InfiniteScroll
                    initialLoad={false}//       组件是否应加载第一组项目
                    pageStart={1}//要加载的第一页的编号，默认值为0，第一页为1
                    loadMore={this.loadFunc}
                    hasMore={hasMore}//是否还有更多项目要加载。如果事件监听器被删除false
                    loader={<div className="loader" key={0}>Loading ...</div>}
                    useWindow={false}//将滚动侦听器添加到窗口，或者添加组件的parentNode
                >
                    {
                        data.map((v,k) => {
                            return(
                             <div key={k} style={{height:'100px',margin:"10px 0"}}>
                                {v.title}
                             </div>
                            )
                        })
                    }
 
                </InfiniteScroll>
            </div>
        )
    }
    
}