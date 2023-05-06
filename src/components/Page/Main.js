import { Button, Form, Layout, Menu, Space } from 'antd';
import { useState } from 'react';
import Message from '../Card/Message';

export default function Main(){
    const [selected] = useState('0');
    const [cardTitle, setCardTitle] = useState('');
    const [cardDescription, setCardDescription] = useState('');
    const { Header, Content, Sider, Footer } = Layout;
    const headerMenu = [
        {
            key: '1',
            label: 'one'
        },
        {
            key: '2',
            label: 'two'
        }
    ];

    const [cards, setCards] = useState([]);
    function addCard(title, description){
        if (!title || !description){
            return;
        }
        const newCard = {id: cards.length+1, title: title, description: description};
        setCards([...cards, newCard]);
    }
    return (
        <Space 
            direction='vertical'
            style={{width: '100%'}}
            size={[0, 48]}
            >
            <Layout>
                <Header className='header'>
                    <div className='logo'/>
                    <Menu 
                        theme='dark'
                        mode='horizontal'
                        defaultSelectedKeys={[headerMenu[selected].key]}
                        items={headerMenu}
                    />
                </Header>
                <Layout>
                    <Sider
                        width={400}
                        style={{
                            margin: "0 auto",
                            padding:"1rem",
                            backgroundColor: 'white',
                            textAlign:'left',
                            alignContent:"center",
                            }}>
                        <Form onFinish={() => {addCard(cardTitle, cardDescription)}}
                            labelCol={{ span: 10 }}
                            labelAlign='left'
                            >
                            <Form.Item
                                label="Card Title"
                                name="cardTitle"
                                rules={[
                                    {
                                        required: true,
                                    }
                                ]}
                            >
                                <input 
                                    type='text'
                                    value={cardTitle}
                                    onChange={(a) => {setCardTitle(a.target.value)}}
                                />
                            </Form.Item>
                            <Form.Item
                                label="Card Description"
                                name="cardDescription"
                                rules={[
                                    {
                                        required: true,
                                    }
                                ]}
                            >
                                <input 
                                    type='text'
                                    value={cardDescription}
                                    onChange={(a) => {setCardDescription(a.target.value)}}
                                />
                            </Form.Item>
                            <Form.Item>
                                <Button
                                    type='primary'
                                    htmlType='submit'>
                                        Hit
                                </Button>
                            </Form.Item>
                        </Form>
                    </Sider>
                    <Content
                        style={{
                            backgroundColor: "lightGrey",
                            height: "86vh",
                        }}
                        
                        >
                        <Message list={cards}/>
                    </Content>
                </Layout>
                <Footer style={{textAlign: 'center'}}>
                    Made by me and spreaded to the world
                </Footer>
            </Layout>
        </Space>    
    )
}