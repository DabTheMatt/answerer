import styled from "styled-components";
import { setRem } from "../../styles";

const Section = styled.div`
padding: ${setRem(32)};
background: ${props => props.color};
height: 100%;
width: 100%;
box-shadow: -5px 0px 20px rgba(0,0,0,0.5);
`;

export default Section;