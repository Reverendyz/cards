import { Card } from 'antd';
import { useState } from 'react'



export default function Message({list}){
    return (
        <div>
            {list.map((card) => (
                <Card key={card.id} title={card.title}>
                    {card.description} 
                </Card>
            ))}
        </div>
    )
}