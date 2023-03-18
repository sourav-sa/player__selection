import React from 'react';
import Selectedplayer from '../Selectedplayer';
import ListGroup from 'react-bootstrap/ListGroup';

const Chosenplayers = (props) => {
    
const chosenplayer = props.chosenplayer;

const totalBudget=chosenplayer.reduce((sum,chosenplayer)=>sum+chosenplayer.salary ,0)





    return (
        <div>
            <ListGroup as="ol" numbered>

          {
                   chosenplayer.map((e) =>(
                  

                      <Selectedplayer
  
                      key={e.id}
  
                      e={e}
                      
  
                      ></Selectedplayer>
                  
                   ))
                } 
                
            </ListGroup>
                <hr />

                <h3 style={{color:'#c6d7a7'}} >Total Salary :$ {totalBudget} Million</h3>
                
        </div>
    );
};

export default Chosenplayers;