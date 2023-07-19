import styled from 'styled-components';

const TrafficLightContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  background: #fdc331;
  padding: 5px 10px;
  border-radius: 10px;
`;

const Light = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin: 5px 0;
`;

const RedLight = styled(Light)`
  background-color: ${({ active }) => (active === 'red' ? 'red' : '#c89c29')};
`;

const YellowLight = styled(Light)`
  background-color: ${({ active }) => (active === 'yellow' ? 'yellow' : '#c89c29')};
`;

const GreenLight = styled(Light)`
  background-color: ${({ active }) => (active === 'green' ? 'green' : '#c89c29')};
`;
const TrafficLight = ({ status }) => {
  return (
    <TrafficLightContainer>
      <RedLight active={status}></RedLight>
      <YellowLight active={status}></YellowLight>
      <GreenLight active={status}></GreenLight>
    </TrafficLightContainer>
  );
}

export default TrafficLight;