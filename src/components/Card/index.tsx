import React from "react";
import {
    Container,
    Image,
    Title,
    Foundation,
} from './style';

import united from '../../assets/mancherster-united.png';


export function Card(){
    return (
        <Container
            animation="pulse"
            duration={1000}
            iterationCount="infinite"
        >
            <Image 
                source={united} 
                resizeMode="contain"
                //animation="pulse"
                iterationCount="infinite"
            />
            <Title>Manchester United</Title>
            <Foundation>1878</Foundation>
        </Container>
    )
}