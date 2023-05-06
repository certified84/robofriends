import React from 'react';
import Card from './Card';

export default function CardList({robots}) {
    if (true) {
        throw new Error('Nooooo!');
    }
    return (
        <div>
            {
                robots.map((user) => {
                    return(
                        <Card 
                            key ={user.id} 
                            id={user.id} 
                            name={user.name} 
                            email={user.email}
                        />
                    );
                })
            }
        </div>
    );
}