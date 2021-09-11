import React from 'react';
import { Container, Screen,Previous, Current, Button } from './Styled';

const Calculator = () => {
    return ( 
        <Container>
            <Screen>
                <Previous>1 +</Previous>
                <Current>2</Current>
            </Screen>
            <Button gridSpan={2} color={'skyblue'}>AC</Button>
            <Button color={'skyblue'}>DEL</Button>
            <Button color={'gray'}>/</Button>
            <Button>7</Button>
            <Button>8</Button>
            <Button>9</Button> 
            <Button color={'gray'}>*</Button>           
            <Button>4</Button>
            <Button>5</Button>
            <Button>6</Button>
            <Button color={'gray'}>+</Button>
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button color={'gray'}>-</Button>
            <Button color={'skyblue'} border={'left'}>.</Button>
            <Button>0</Button>
            <Button gridSpan={2} color={'gray'} border={'right'}>=</Button>
        </Container>
     );
}
 
export default Calculator;