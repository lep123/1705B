import React , {Component} from 'react';
import { Table, Pagination  } from 'antd';
import { post } from '@/utils/request'
import qs from 'qs'

export default class Index5 extends Component {

    constructor(props){
        super(props) 
        this.state = {
            data:[],
            count:''
        }
    }

    componentDidMount() {
        post('https://blogs.zdldove.top/Home/Apis/listWithPage',qs.stringify({page:1,limit:6}))
            .then(res=> {
                console.log(res.data.result)
                this.setState({
                    count: res.data.result.count,
                    data: res.data.result.list
                })
         })
    }


    onChange = (page) => {
        console.log(page,'page');
        post('https://blogs.zdldove.top/Home/Apis/listWithPage',qs.stringify({page,limit:6}))
            .then(res=> {
                this.setState({
                    count: res.data.result.count,
                    data: res.data.result.list
                })
         })
    }

    render() {
        const { data, count } = this.state
        console.log(data)

        return (
            <div className="index5">
               <div className="cons">
                    {
                        data instanceof Array?
                        data.length>0?
                        data.map(v =>{
                        return(
                            <div key={v.id} className="boxs">
                                {v.title}
                            </div>
                        )
                        }):"":""
                    }
               </div>

              <div className="bootom">
                <Pagination 
                        defaultCurrent={1} 
                        pageSize={6}
                        total={Number(count)} 
                        onChange={this.onChange}
                    
                    />
              </div>
            </div>
        )
    }
    
}