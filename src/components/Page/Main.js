import { Button, Layout, Menu, Space } from 'antd';
import { useState } from 'react';
import Message from '../Card/Message';

export default function Main(){
    const [selected] = useState('0');
    const [cardTitle, setCardTitle] = useState('');
    const { Header, Content, Footer } = Layout;
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

    
    var cardsList = [{}];
    const [cards, setCards] = useState(cardsList);
    function addCard(name){
        const newCard = {id: cards.length+1, title: name, description: "This is a new card"};
        setCards([...cards, newCard]);
        localStorage.setItem("cards", cards);
    }
    return (
        <Layout>
            <Header className='header'>
                <div className='logo'/>
                <Menu theme='dark' mode='horizontal' defaultSelectedKeys={[headerMenu[selected].key]} items={headerMenu}/>
            </Header>
            <Layout>
                <Space direction="vertical" style={{width: '100%'}} size={[0, 48]}>
                    <Content style={{padding: 24,minHeight: '60vh', textAlign: 'center', backgroundColor: 'white'}}>
                        <Space direction='horizontal' size={[2,2]} wrap>
                            <form onSubmit={() => {addCard(cardTitle)}}>
                                <input type='text' value={cardTitle} onChange={(a) => {setCardTitle(a.target.value)}}/>
                                <Button type='primary' onClick={() =>{addCard(cardTitle)}} htmlType='submit'>Hit</Button>
                            </form>
                        </Space>
                    </Content>
                    <Message list={cards}/>
                    <Footer style={{textAlign: 'center'}}>
                        Made by me and spreaded to the world
                    </Footer>
                </Space>
            </Layout>
        </Layout>    
    )
}