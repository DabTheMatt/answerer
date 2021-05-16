import styled from "styled-components";
import { setRem } from "../../styles";

export const Section = styled.div`
padding: ${setRem(24)};
background: ${props => props.color};
height: 100%;
width: 80%;
max-width: 1200px;
box-shadow: -5px 0px 20px rgba(0,0,0,0.5);
margin: 0 auto;
word-break: break-word;
`;

export default Section;