import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import TrafficLight from '../components/TrafficLight';

const Button = styled.button`
  background: green;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  color: #fff;
  margin: 10px;
  font-size: 16px;
  font-weight: bold;
  width: 120px;
  cursor: pointer;
  &:hover {
    background: darkgreen;
  }
`;

const Road = styled.div`
  background-color: #2d2e2b;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
`;

const StreetA = styled(Road)`
  width: 150px;
  height: 100vh;
  max-height: 600px;
  flex-direction: column;
  font-size: 30px;
`;

const StreetB = styled(Road)`
  width: 100vw;
  max-width: 600px;
  height: 150px ;
`;

const TrafficSystem = () => {

    const [currentLight, setCurrentLight] = useState('green');
    const [streetBtLight, setStreetBlight] = useState('red');
    const [isRunning, setIsRunning] = useState(false);
    const [isReversed, setIsReversed] = useState(false);


    useEffect(() => {
        const lightOrder = ['green', 'yellow', 'red'];
        const lightDurations = {
            green: 10000, // 10 seconds for green light
            yellow: 5000, // 5 seconds for yellow light
            red: 10000,   // 10 seconds for red light
        };
        let interval;

        if (isRunning) {
            let currentIndex = lightOrder.indexOf(currentLight);

            interval = setInterval(() => {
                if (isReversed) {
                    currentIndex = currentIndex > 0 ? currentIndex - 1 : lightOrder.length - 1;
                    if (currentIndex === 0) setIsReversed(false);
                } else {
                    currentIndex = (currentIndex + 1) % lightOrder.length;
                    if (currentIndex === lightOrder.length - 1) setIsReversed(true);
                }
                setCurrentLight(lightOrder[currentIndex]);
            }, lightDurations[currentLight]);
        }

        setStreetBlight(() => {
            if (currentLight === 'green') {
                return 'red'
            } else if (currentLight === 'red') {
                return 'green'
            } else {
                return 'yellow'
            };
        })

        return () => clearInterval(interval);

    }, [currentLight, isRunning, isReversed]);

    const handleStartButtonClick = () => {
        setIsRunning(true);
    };

    const handleStopButtonClick = () => {
        setIsRunning(false);
        setCurrentLight('green'); // Reset to the initial state
        setIsReversed(false); // Reset the reverse order
    };



    return (
        <div>
            <StreetA>
                <TrafficLight status={currentLight} />
                <div>👟</div>
                <div style={{ flex: 1 }}></div>
                <div>👟</div>
                <TrafficLight status={currentLight} />
            </StreetA>
            <StreetB>
                <TrafficLight status={streetBtLight} />
                <div>
                    <Button onClick={handleStartButtonClick}>Start</Button>
                    <br />
                    <Button onClick={handleStopButtonClick}>Reset</Button>
                </div>
                <TrafficLight status={streetBtLight} />
            </StreetB>
        </div>
    );
}

export default TrafficSystem;