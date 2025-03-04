import styled from 'styled-components';

const Holder = styled.div`
  width: 100%;
  height: 80vh;
  background-image: url(${(props) => props.photo});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 440px) {
    height: 50vh;
  }
`;

const PhotoFrame = ({ photo }) => {
  return <Holder photo={photo} />;
};

export default PhotoFrame;
