import styled from "styled-components";
import { setRem } from "../../styles";

const Section = styled.div`
padding: ${setRem(32)};
background: ${props => props.color};
height: 100vh;
`;

export default Section;