import styled from 'styled-components';

export const DirectoryMenuContainer = styled.div`
  background-color: #fff3e0;
  width: 100%;
  display: flex;
  ${'' /* flex-wrap: grid(3, 1fr); */}
  flex-direction: row;
  justify-content: space-between;
  ${'' /* align-items: center; */}
  text-align: left;
  h1 {
    font-size: 2.5rem;
    margin: 0 auto;
    padding: 1.5rem 2.5rem;
  }
`;

export const SingleQuoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  padding: 0 10px;
`;

export const MultipleQuoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  padding: 0 10px;
`;

//set for media devices
