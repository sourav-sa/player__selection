import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const Players = (props) => {
    const{name,salary,image}=props.player;
    const{className}=props;
    const handleChoosePlayers = props.handleChoosePlayers;
    
    
    
    return (
        <div className={ className}>

        <Card  style={{ width: '15rem',backgroundColor:' #67859d',color:'white' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>Name: {name}</Card.Title>
          <Card.Text>Salary: ${salary}M
          </Card.Text>
          <Button style={{backgroundColor:'#424c38'}} 
         onClick={()=>handleChoosePlayers(props.player)}
          >Choose</Button>
        </Card.Body>
      </Card>
        </div>
    );
};

export default Players;