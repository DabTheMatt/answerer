import styled from "styled-components";
import { setRem, setFlex, setColor} from "../../styles";

const Arrow = styled.div`
  
  border: solid ${props => props.color};
  border-width: 0 5px 5px 0;

  display: inline-block;
  padding: 30px;
  transform: rotate(45deg);
  animation: blinking 2.5s ease-in-out infinite;
  
    
  @keyframes blinking {
    50% {
      opacity: 0;
    }
  }
  &:hover {
    border: solid ${setColor.red};
    border-width: 0 5px 5px 0;
    animation: paused;
  }
  &:active {
      
  }
`;

export default Arrow;