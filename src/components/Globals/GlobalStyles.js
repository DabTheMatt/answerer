import {createGlobalStyle} from "styled-components";
import {setColor} from "../../styles";

const Globals = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@1,100;1,300;1,400;1,700;1,900&family=Roboto:wght@100;300;400;500;700;900&display=swap');

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
}
body{
    font-size: 100%;
    color: ${setColor.dark};
    background: ${setColor.light};
    font-family: 'Roboto', sans-serif;
    
}
h1{
    font-size: 3em;
    line-height: 1.2;
    margin-bottom:0.5em;
}
h2{
    font-size: 2em;
    margin-bottom:0.75em;
}
h3{
    font-size: 1.5em;
    line-height: 1;
    margin-bottom: 1em;
}
h4{
    font-size: 1.2em;
    font-weight: bold;
    line-height: 1.2;
    margin-bottom:1.25em;
}
h5{
    font-size: 1em;
    font-weight: bold;
    margin-bottom:1.5em;
}
h6{
    font-size: 1em;
    font-weight: bold;
}
p{
    line-height: 1.5;
    margin: 0 0 1.5rem 0;
}
`;

export default Globals;