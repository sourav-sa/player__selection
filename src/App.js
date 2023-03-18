import { useEffect, useState } from "react";
import "./App.css";
import playerData from "./payers_info.json";
import Chosenplayers from "./components/Chosenplayers/Chosenplayers";
import Players from "./components/Players/Players";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  const [players, setPlayers] = useState([]);
  const [chosenplayer, setChosenplayer] = useState([]);

  const handleChoosePlayers = (player) => {
    const newList = [...chosenplayer, player];
    setChosenplayer(newList);
  };

  useEffect(() => {
    setPlayers(playerData);
  }, []);

  return (
    <Container className="App">
      <Row>
        <Col style={{position:'fixed',zIndex:'1'}} >
         
            <div style={{position:'fixed',zIndex:'1',backgroundColor:'#16456f',width:'20rem'}} >

            <h2>Players to choose</h2>

            <hr />
            </div>
         </Col>   
            <Col style={{position:'static'}}>
              <div>

            {players.map((player) => (
              <Players
                key={player.id}
                player={player}
                handleChoosePlayers={handleChoosePlayers}
                className={"m-4"}
              ></Players>
            ))}
            </div>
            </Col>
        
       
        <Col >
          <div style={{position:'fixed'}} >
            <h2>Selected players :{chosenplayer.length}</h2>
            <hr />
            <Chosenplayers chosenplayer={chosenplayer}></Chosenplayers>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
