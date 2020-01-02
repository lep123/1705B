import React , {Component} from 'react';
import { connect} from 'react-redux'
import { dodata } from '@/actions/home'
import { Table, Divider, Modal, Progress, Button, Input, message} from 'antd';
import { get, post} from '@/utils/request'
import qs from 'qs'


export default
@connect(state =>({
    data: state.home.data
}), {
    dodata
})
class  extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            visible: false,
            button: '',
            name:'',
            age:'',
            id:"",
            hospital:''
        }

    }

    showModal = (data) => {
        this.setState({
            visible: true,
            button:data
        });
    };

    handleOk = () => {
        this.setState({ loading: true });
        if(this.state.button === "添加") {
            
            let obj = {
                name: this.state.name,
                age: this.state.age,
                hospital: this.state.hospital
            }

            post('/api/index.php/home/v5/add',qs.stringify(obj))
                .then(res => {
                    message.info('添加成功')
                    this.setState({
                        name: '',
                        age: '',
                        hospital: ''
                    })
                    this.props.dodata()
                })

        } else {
            let obj = {
                name: this.state.name,
                age: this.state.age,
                hospital: this.state.hospital,
                id: this.state.id
            }

            post('/api/index.php/home/v5/updateUser',qs.stringify(obj))
                .then(res => {
                    console.log(res)
                    this.setState({
                        name: '',
                        age: '',
                        hospital: ''
                    })
                    message.info('修改成功')
                    this.props.dodata()
                })

        }
        this.setState({ loading: false, visible: false });
    };

    handleCancel = () => {
        this.setState({
            name: '',
            age: '',
            hospital: '',
            visible: false
        })
    };

    //更改姓名
    name = (e) => {
        this.setState({
            name: e.target.value
        })
    }

     //更改年龄
     age = (e) => {
        this.setState({
            age: e.target.value
        })
    }

    hospital = (e) => {
        this.setState({
            hospital: e.target.value
        })
    }
    

    componentDidMount() {
       this.props.dodata()
    }

    //删除
    del = id =>{
        post('/api/index.php/home/v5/deleteUser',qs.stringify({id}))
        message.info('删除成功')
        this.props.dodata()
    }
    render() {
        const columns = [
            {
                title: 'Id',
                dataIndex: 'id',
                render: text => <a>{text}</a>,
              },
            {
              title: 'Name',
              dataIndex: 'name',
              render: text => <a>{text}</a>,
            },
            {
              title: 'Age',
              dataIndex: 'age',
              render: (text) => {
                  return(
                     <Progress percent={Number(text)} />
                )
              }
            },
            {
                title: 'hospital',
                dataIndex: 'hospital',
                render: text => <a>{text}</a>
            },
            {
              title: 'Action',
              render: (text, record) => (
                <span>
                  <a
                    onClick={()=>{
                        console.log(record)
                        this.setState({
                            name:record.name,
                            age: record.age,
                            id:record.id
                        })
                        this.showModal('修改')
                    }}
                  >update</a>
                  <Divider type="vertical" />
                  <a
                    onClick={() =>{
                        this.del(text.id)
                    }}
                  >Delete</a>
                </span>
              ),
            },
          ];
        const { data } = this.props
        const { visible, loading } = this.state;
        return (
            <div className="index1">
               <div className="top">
                <Button type="primary" onClick={()=>{
                    this.showModal('添加')
                }}>
                    添加
                </Button>
               </div>

               <div className="sec">
                    <Table 
                        columns={columns}
                        dataSource={data}
                        rowKey = {v => v.id}
                        pagination = {{pageSize:7}}
                    />
               </div>

               <Modal
                    visible={visible}
                    title="Title"
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={[
                        <Button key="back" onClick={this.handleCancel}>
                            取消
                        </Button>,
                        <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
                            {this.state.button}
                        </Button>,
                    ]}
                >
                    <Input 
                        placeholder="用户名"
                        value = {this.state.name}
                        onChange= {this.name}
                     />
                    <br/><br/>
                    <Input 
                        placeholder="年龄"
                        type="number"
                        max={100}
                        min={0}
                        value = {this.state.age}
                        onChange= {this.age}    
                    />
                    <br/><br/>
                     <Input 
                        placeholder="地址"
                        value = {this.state.hospital}
                        onChange= {this.hospital}    
                    />
                </Modal>

            </div>
        )
    }
    
}



