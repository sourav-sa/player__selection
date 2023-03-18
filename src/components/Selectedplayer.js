import ListGroup from 'react-bootstrap/ListGroup';

function Selectedplayer(props) {
    const selected=props.e;
  return (
 
        


      <ListGroup.Item as="li" style={{width:'500px',position:'relative'}} >   Name{selected.name} <span style={{position:'absolute',right:'0 ',top:'0'}}> Salary:${selected.salary}M</span></ListGroup.Item>
     
        

  );
}

export default Selectedplayer;