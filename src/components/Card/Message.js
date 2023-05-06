import { Card,Space } from 'antd';

export default function Message({list}){
    const isEmpty = list == null || list.length === 0;

    if (isEmpty) {
        return null;
    } 
    return (
        <Space
            size={[5,12]}
            wrap
            >
            {list.map((card) => (
                <Card 
                    key={card.id}
                    title={card.title} 
                    style={{
                        maxWidth: "15rem",
                        minWidth: "10rem",
                    }}>
                    {card.description} 
                </Card>
            ))}
        </Space>
    )
}