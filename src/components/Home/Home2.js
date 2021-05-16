import React from "react";
import styled from "styled-components";
import { setColor, setFlex, setRem, media } from "../../styles";
import Arrow from "../Globals/Arrow";
import jsxToString from "jsx-to-string";

const Home = () => {
  return (
    <Wrapper>
      <Section color="#003049" className="100vh" id="start">
        <div id="hello">
          <p
            style={{
              fontSize: "20px",
              textAlign: "right",
              
            }}
          >
         
          </p>
          <h1 style={{marginTop:"20vh"}}><a href="https://github.com/DabTheMatt" target="_blank" style={{color:"grey", textDecoration:"none", fontSize: "1.4rem", fontWeight:"lighter"}}>DabTheMatt</a> <br/>looks for an answers</h1>
          
          <ul id="topics" style={{marginTop:"10vh"}}>
            <a href="#mapFilter">
              <li>Map / Filter Methods Mystery</li>
            </a>
            <a href="#copy1">
              <li>why do you need a copy?</li>
            </a>
            <a href="#hiddenKey">
              <li>hidden key</li>
            </a>
          </ul>
        </div>
      </Section>

      <Section id="mapFilter">
        <h1>Map / Filter Methods Mystery</h1>
        <h2>Array.prototype.map()</h2>
        <p>
          The <span>map() method</span> creates a new array populated with the
          results of calling a provided function on every element in the calling
          array.
        </p>
        <Code>
          const array1 = [1, 4, 9, 16]; <br />
          const map1 = array1.map(x => x * 2); <br />
          console.log(map1);
          <br />
          <br />
          Output:
          <br />
          Array [2, 8, 18, 32]
        </Code>
        <p>
          <span>map</span> calls a provided callbackFn function once for each
          element in an array, in order, and constructs a new array from the
          results. callbackFn is invoked only for indexes of the array which
          have assigned values (including undefined).
        </p>
        <p>It is not called for missing elements of the array; that is:</p>

        <ul>
          <li>indexes that have never been set;</li>
          <li>indexes which have been deleted.</li>
        </ul>
        <p>
          Since <span>map</span> builds a new array, using it when you aren't
          using the returned array is an anti-pattern; use forEach or for...of
          instead.
        </p>
        <p>
          You shouldn't be using <span>map</span> if:
        </p>
        <ul>
          <li>you're not using the array it returns; and/or</li>
          <li>you're not returning a value from the callback.</li>
        </ul>
        <br/>
        <a href="#start">&#94; hop to top</a>
      </Section>

      <Section id="mapFilter2" color="#e4d9a0">
        <h2>Array.prototype.filter()</h2>
        <p>
          The filter() method creates a new array with all elements that pass
          the test implemented by the provided function.
        </p>
        <Code>
          const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction',
          'present'];
          <br />
          const result = words.filter(word => word.length > 6);
          <br />
          console.log(result);
          <br />
          <br />
          Output:
          <br />
          Array ["exuberant", "destruction", "present"]
        </Code>
        <p>
          filter() calls a provided callbackFn function once for each element in
          an array, and constructs a new array of all the values for which
          callbackFn returns a value that coerces to true. callbackFn is invoked
          only for indexes of the array which have assigned values; it is not
          invoked for indexes which have been deleted or which have never been
          assigned values. Array elements which do not pass the callbackFn test
          are skipped, and are not included in the new array.
        </p>
        <p>callbackFn is invoked with three arguments:</p>
        <ul>
          <li>the value of the element</li>
          <li>the index of the element</li>
          <li>the Array object being traversed</li>
        </ul>
        <p>
          If a thisArg parameter is provided to filter, it will be used as the
          callback's this value. Otherwise, the value undefined will be used as
          its this value. The this value ultimately observable by callback is
          determined according to the usual rules for determining the this seen
          by a function.
        </p>
        <p>filter() does not mutate the array on which it is called.</p>
        <p>
          The range of elements processed by filter() is set before the first
          invocation of callbackFn. Elements which are appended to the array
          (from callbackFn) after the call to filter() begins will not be
          visited by callbackFn. If existing elements of the array are deleted
          in the same way they will not be visited.
        </p>
        <a href="#start">&#94; hop to top</a>
      </Section>

      <Section id="mapFilter3" color="#dbcc80">
        <h2>Array.prototype.filter() example</h2>
        <p>
          Snippet from Matt-s-Motivator:{" "}
          <a
            href="https://github.com/DabTheMatt/Matt-s-Motivator/blob/master/src/App3.js"
            target="_blank"
          >
            src/App3.js (line: 115)
          </a>
        </p>
        <Code>
          <div>delTask = (id) => &#123;</div>
          <div>
            {" "}
            const delActivities = this.state.tasks.filter((task) => id !==
            task.id);
          </div>
          <div>
            this.setState&#40;&#123;tasks:
            &#91;...delActivities&#93;&#125;&#41;&#59;
          </div>
          <div>&#125;&#59;</div>
        </Code>
        <h3>my thoughts:</h3>
        <p>
          The <span>delTask</span> ​​function creates a new array based on the{" "}
          <span>tasks</span> array stored in the component state. The{" "}
          <span>delActivities</span> table will contain all the elements that
          will pass the test of the filter method (whose id will be different
          from the id passed to the function).Then this.setState will overwrite
          the <span>tasks</span> array.
        </p>
        <a href="#start">&#94; hop to top</a>
      </Section>

      <Section id="mapFilter4" color="#d2bf60">
        <h2>Array.prototype.map() example</h2>
        <p>
          Snippet from Matt-s-Motivator:{" "}
          <a
            href="https://github.com/DabTheMatt/Matt-s-Motivator/blob/master/src/App3.js"
            target="_blank"
          >
            src/App3.js (line: 174)
          </a>
        </p>
        <Code>
          <div>const taskList = this.state.tasks.map((task) => &#40;</div>
          <div>&#60;Tab</div>
          <div> id=&#123;task.id&#125;</div>
          <div>...</div>
          <div>/&#62;</div>
          <div>&#41;&#41;&#59;</div>
        </Code>
        <h3>my thoughts:</h3>
        <p>
          Using the <span>map</span> method, I create the <span>taskList</span>{" "}
          array. Iterating through the array, I create a new component{" "}
          <span>Tab</span> for each <span>task</span> element by sending to it
          needed props.
        </p>
        <p>
          <span>Map</span> method is usually used to return an array in which
          all the elements have been subjected to a given function.
        </p>
        <p>In this case, I think I need a better example :)</p>
        <p>
          The <span>Filter</span> method filters the provided array and returns
          a new array containing only elements that match the specified
          criteria.
        </p>

        <p>
          <span>Map</span> method returns a new array containing all elements
          that have been subjected to the attached function.
        </p>
        <p>
          I conclude that the <span>map</span> method is much more flexible
          because it allows you to create filters when the <span>Filter</span>{" "}
          method won't let you (for example) multiply every element of the array
          by 2 :)
        </p>
        <a href="#start">&#94; hop to top</a>
      </Section>

      <Section id="copy1" color="#004266">
        <div style={{color:"lightgrey"}}>
          
          <h1>why do you need a copy?</h1>
          <p>
            React components has a built-in state object. The state object is
            where you store property values that belongs to the component. When
            the state object changes, the component re-renders.
          </p>
          <p>
            To control when re-rendering happens, you need to make sure to use
            the <span>this.setState&#40; &#41;</span> method. It allows
            component to know that its state has changed, so it can call the
            render&#40; &#41; method again.
          </p>
        </div>
        <a href="#start" style={{color:"grey", textDecoration:"none"}}>&#94; hop to top</a>
      </Section>

      <Section  style={{color:"lightgrey"}}id="copy2" color="#00507a">
        <div className="lightText">
          <h2>changing state ant setState&#40; &#41; method example</h2>
          <p style={{ textAlign: "center" }}>
            Snippet from Ping:{" "}
            <a
              style={{ color: "white" }}
              href="https://github.com/DabTheMatt/ping/blob/main/src/components/Screen.js"
              target="_blank"
            >
              src/App3.js (line: 21)
            </a>
          </p>
          <div className="onBlue">
            <Code>
              <div>componentDidMount = &#40;&#41; => &#40;</div>
              <div>let tempArray = this.state.ping.split&#40;" "&#41;</div>
              <div> this.setState&#40;&#123; </div>
              <div>pingArray: tempArray,</div>
              <div>&#125;&#41;</div>
              <div>&#41;&#59;</div>
            </Code>
          </div>
          <h3>my thoughts:</h3>
          <p>
            After mounting the component&#40;{" "}
            <span>componentDidMount&#40;&#41;&#41;</span>, I assign to{" "}
            <span>tempArray</span> a string broken into fragments using the{" "}
            <span>split&#40;&#41;</span>method, derived from the ping property
            value derived from the component state. Then, using{" "}
            <span>this.setState&#40;&#41;</span>) method, I assign the value of
            the <span>tempArray</span> variable to the <span>pingArray</span>{" "}
            state property.
          </p>
          <p>
            I did an operation on the value of the state property by copying it
            and assigning it to the new state property.
          </p>
          <p>
            When <span>this.setState&#40;&#41</span>; is executed, component
            knows that its state has been updated and re-renders.
          </p>
        </div>
        <a href="#start" style={{color:"grey", textDecoration:"none"}}>&#94; hop to top</a>
          
      </Section>

      <Section id="hiddenKey" color="#adb5bd">
        <div>
          <h1>hidden key</h1>
          <p>
            In order to hide API_KEY in the Balance application I followed three
            steps:
          </p>
          <ul>
            <li>
              in the src directory I created the .env file and then assigned the
              API_KEY used to the name preceded by REACT_APP_...
            </li>
            <br />
            <li>
              in the .gitignore file, I excluded the .env file from commits
            </li>
            <br />
            <li>
              in the What.js file that uses API_KEY, I got access to the key
              value through the process.env object
            </li>
          </ul>
          <p style={{ textAlign: "center" }}>
            Snippet from Balance:{" "}
            <a
              style={{ color: "white" }}
              href="https://github.com/DabTheMatt/balance/blob/master/src/components/What/What.js"
              target="_blank"
            >
              src/App3.js (line: 29)
            </a>
          </p>
          <h3>before</h3>
          <div className="onBlue">
            <Code>
              <div>componentDidMount&#40; &#41; &#123; </div>
              <div>Tabletop.init&#40;&#123; </div>
              <div>key: "s0m3th1ngs0m3th1ngs0m3th1ng"</div>
              <div>....</div>
            </Code>
          </div>

          <h3>after</h3>
          <div className="onBlue">
            <Code>
              <div>componentDidMount&#40; &#41; &#123; </div>
              <div>Tabletop.init&#40;&#123; </div>
              <div>key: process.env.REACT_APP_VALUES_KEY,</div>
              <div>....</div>
            </Code>
          </div>
        </div>
        <a href="#start">&#94; hop to top</a>
      </Section>
    </Wrapper>
  );
};


export const Wrapper = styled.div`
#hello {
    color: ${setColor.light};
    height: 71vh;


    ul {
        list-style: none;
    }
    li {
        color: ${setColor.light};
        margin-bottom: 1rem;
    }

    li:hover {
        color: ${setColor.orange};
    }
}
`;
export const Section = styled.div`
padding: ${setRem(120)};
background: ${props => props.color};
height: 100%;
width: 100%;
max-width: 1200px;
box-shadow: -5px 0px 20px rgba(0,0,0,0.5);
margin: 0 auto;
word-break: break-word;

ul {
list-style: inside;
margin-bottom: ${setRem(20)};
}
@media (max-width: 500px) {
    padding: 1rem;
    h1 {
        font-size: 2.8rem;
    }
    h2 {
        font-size: 1.6rem;
    }
    a {
        font-size: 1.1rem;
    }
}

@media (max-width: 800px) {
    padding: ${setRem(40)};
    h1 {
        font-size: 2.2rem;
    }
    h2 {
        font-size: 1.6rem;
    }
}

a {
    text-decoration: none;
    font-size: 1.3rem;
}
`;

export const Code = styled.div`
background: ${setColor.lighten};
font-family: 'Courier New', Courier, monospace;
font-weight: bold;
font-size: ${setRem(20)};
padding: ${setRem(32)};
margin: 0 auto;
margin-bottom: ${setRem(32)};
color: ${setColor.dark};
line-height: ${setRem(24)};
width: 100%;

@media (max-width: 500px) {
    font-size: ${setRem(14)};
    line-height: ${setRem()};
    padding: ${setRem(16)};
}
`;

export default Home;
