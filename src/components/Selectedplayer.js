import ListGroup from 'react-bootstrap/ListGroup';

function Selectedplayer(props) {
    const selected=props.e;
  return (
 
        


      <ListGroup.Item as="li" style={{display:'flex',justifyContent:'flex-start',width:'500px'}} >Name{selected.name}  Salary:${selected.salary}M</ListGroup.Item>
     
        

  );
}

export default Selectedplayer;