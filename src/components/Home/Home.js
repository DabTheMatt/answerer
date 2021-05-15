import React from "react";
import styled from "styled-components";
import { setColor, setFlex, setRem } from "../../styles";
import Section from "../Globals/Section";
import Arrow from "../Globals/Arrow";
import jsxToString from "jsx-to-string";

const Home = () => {
  return (
    <div>
      <HomeWrapper>
        <TitleWrapper>find the answer</TitleWrapper>
        <a href="#mapFilter">
          <Arrow color={setColor.light} />
        </a>
      </HomeWrapper>
      <SectionWrapper>
        <Section id="mapFilter">
          <MapFilterWrapper>
            <h1>Map / Filter Methods Mystery</h1>
            <h2>Array.prototype.map()</h2>
            <p>
              The <span>map() method</span> creates a new array populated with
              the results of calling a provided function on every element in the
              calling array.
            </p>
            <code>
              const array1 = [1, 4, 9, 16]; <br />
              const map1 = array1.map(x => x * 2); <br />
              console.log(map1);
              <br />
              <br />
              Output:
              <br />
              Array [2, 8, 18, 32]
            </code>
            <p>
              <span>map</span> calls a provided callbackFn function once for
              each element in an array, in order, and constructs a new array
              from the results. callbackFn is invoked only for indexes of the
              array which have assigned values (including undefined).
            </p>
            <p>It is not called for missing elements of the array; that is:</p>

            <ul>
              <li>indexes that have never been set;</li>
              <li>indexes which have been deleted.</li>
            </ul>
            <p>
              Since <span>map</span> builds a new array, using it when you
              aren't using the returned array is an anti-pattern; use forEach or
              for...of instead.
            </p>
            <p>
              You shouldn't be using <span>map</span> if:
            </p>
            <ul>
              <li>you're not using the array it returns; and/or</li>
              <li>you're not returning a value from the callback.</li>
            </ul>
            <a href="#mapFilter2">
              <Arrow color={setColor.dark} />
            </a>
          </MapFilterWrapper>
        </Section>
      </SectionWrapper>
      <SectionWrapper>
        <Section id="mapFilter2" color="#e4d9a0">
          <MapFilterWrapper>
            <h2>Array.prototype.filter()</h2>
            <p>
              The filter() method creates a new array with all elements that
              pass the test implemented by the provided function.
            </p>
            <code>
              const words = ['spray', 'limit', 'elite', 'exuberant',
              'destruction', 'present'];
              <br />
              const result = words.filter(word => word.length > 6);
              <br />
              console.log(result);
              <br />
              <br />
              Output:
              <br />
              Array ["exuberant", "destruction", "present"]
            </code>
            <p>
              filter() calls a provided callbackFn function once for each
              element in an array, and constructs a new array of all the values
              for which callbackFn returns a value that coerces to true.
              callbackFn is invoked only for indexes of the array which have
              assigned values; it is not invoked for indexes which have been
              deleted or which have never been assigned values. Array elements
              which do not pass the callbackFn test are skipped, and are not
              included in the new array.
            </p>
            <p>callbackFn is invoked with three arguments:</p>
            <ul>
              <li>the value of the element</li>
              <li>the index of the element</li>
              <li>the Array object being traversed</li>
            </ul>
            <p>
              If a thisArg parameter is provided to filter, it will be used as
              the callback's this value. Otherwise, the value undefined will be
              used as its this value. The this value ultimately observable by
              callback is determined according to the usual rules for
              determining the this seen by a function.
            </p>
            <p>filter() does not mutate the array on which it is called.</p>
            <p>
              The range of elements processed by filter() is set before the
              first invocation of callbackFn. Elements which are appended to the
              array (from callbackFn) after the call to filter() begins will not
              be visited by callbackFn. If existing elements of the array are
              deleted in the same way they will not be visited.
            </p>
            <a href="#mapFilter3">
              <Arrow color={setColor.dark} />
            </a>
          </MapFilterWrapper>
        </Section>
      </SectionWrapper>
      <SectionWrapper>
        <Section id="mapFilter3" color="#dbcc80">
          <MapFilterWrapper>
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
            <code>
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
            </code>
            <h3>explanation in my words</h3>
            <p>
              The <span>delTask</span> ​​function creates a new array based on
              the <span>tasks</span> array stored in the component state. The{" "}
              <span>delActivities</span> table will contain all the elements
              that will pass the test of the filter method (whose id will be
              different from the id passed to the function).Then this.setState
              will overwrite the <span>tasks</span> array.
            </p>
            <Arrow color={setColor.dark} />
          </MapFilterWrapper>
        </Section>
      </SectionWrapper>
      <SectionWrapper>
        <Section id="mapFilter4" color="#d2bf60">
          <MapFilterWrapper>
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
            <code>
              <div>const taskList = this.state.tasks.map((task) => &#40;</div>
              <div>&#60;Tab</div>
              <div> id=&#123;task.id&#125;</div>
              <div>...</div>
              <div>/&#62;</div>
              <div>&#41;&#41;&#59;</div>
            </code>
            <h3>explanation in my words</h3>
            <p>
              Using the <span>map</span> method, I create the{" "}
              <span>taskList</span> array. Iterating through the array, I create
              a new component <span>Tab</span> for each <span>task</span>{" "}
              element by sending to it needed props.
            </p>
            <p>
              <span>Map</span> method is usually used to return an array in
              which all the elements have been subjected to a given function.
            </p>
            <p>In this case, I think I need a better example :)</p>
            <p>
              The <span>Filter</span> method filters the provided array and returns a new
              array containing only elements that match the specified criteria.
            </p>

            <p>
              <span>Map</span> method returns a new array containing all elements that have
              been subjected to the attached function.
            </p>
            <p>
              I conclude that the <span>map</span> method is much more flexible because it
              allows you to create filters when the <span>Filter</span> method won't let you
              (for example) multiply every element of the array by 2 :)
            </p>
            <Arrow color={setColor.dark} />
          </MapFilterWrapper>
        </Section>
      </SectionWrapper>
      <SectionWrapper>
        <Section id="copy1" color="#003049">
          <MapFilterWrapper>
              <div className="lightText">
                  <div></div>
            <h1>why do you need a copy?</h1>
            <p>React components has a built-in state object. The state object is where you store property values that belongs to the component. When the state object changes, the component re-renders.</p>
            <p>To control when re-rendering happens, you need to make sure to use the <span>this.setState&#40;	&#41;</span>	method. It allows component to know that its state has changed, so it can call the render&#40;	&#41;	 method again.</p>
            </div>
            <Arrow color={setColor.dark} />
          </MapFilterWrapper>
        </Section>
      </SectionWrapper>
      <SectionWrapper>
        <Section id="copy2" color="#00507a">
          <MapFilterWrapper>
          <div className="lightText">
            <h2>changing state ant setState&#40;	&#41;	 method example</h2>
            <p style={{textAlign: "center"}}>
              Snippet from Ping:{" "}
              
              <a style={{color: "white"}}
                href="https://github.com/DabTheMatt/ping/blob/main/src/components/Screen.js"
                target="_blank"
              >
                src/App3.js (line: 21)
              </a>
            </p><div id="onBlue">
            <code >
              <div>componentDidMount = &#40;&#41; => &#40;</div>
              <div>let tempArray = this.state.ping.split&#40;" "&#41;</div>
              <div> this.setState&#40;&#123;	</div>
              <div>pingArray: tempArray,</div>
              <div>&#125;&#41;</div>
              <div>&#41;&#59;</div>
            </code>
            </div>
            <h3>explanation in my words</h3>
            <p>
            After mounting the component&#40;	<span>componentDidMount&#40;&#41;&#41;</span>, I assign to <span>tempArray</span> a string broken into fragments using the <span>split&#40;&#41;</span>method, derived from the ping property value derived from the component state. Then, using <span>this.setState&#40;&#41;</span>) method, I assign the value of the <span>tempArray</span> variable to the <span>pingArray</span> state property.
            </p>
            <p>
            I did an operation on the value of the state property by copying it and assigning it to the new state property.
            </p>
            <p>
            When <span>this.setState&#40;&#41</span>; is executed, component knows that its state has been updated and re-renders.
            </p>
            
            <a href="#">
            <Arrow color={setColor.dark} />
            </a>
            </div>
          </MapFilterWrapper>
        </Section>
      </SectionWrapper>
      <SectionWrapper>
        <Section id="copy2" color="#00507a">
          <MapFilterWrapper>
          <div className="lightText">
            <h2>changing state ant setState&#40;	&#41;	 method example</h2>
            <p style={{textAlign: "center"}}>
              Snippet from Ping:{" "}
              
              <a style={{color: "white"}}
                href="https://github.com/DabTheMatt/ping/blob/main/src/components/Screen.js"
                target="_blank"
              >
                src/App3.js (line: 21)
              </a>
            </p><div id="onBlue">
            <code >
              <div>componentDidMount = &#40;&#41; => &#40;</div>
              <div>let tempArray = this.state.ping.split&#40;" "&#41;</div>
              <div> this.setState&#40;&#123;	</div>
              <div>pingArray: tempArray,</div>
              <div>&#125;&#41;</div>
              <div>&#41;&#59;</div>
            </code>
            </div>
            <h3>explanation in my words</h3>
            <p>
            After mounting the component&#40;	<span>componentDidMount&#40;&#41;&#41;</span>, I assign to <span>tempArray</span> a string broken into fragments using the <span>split&#40;&#41;</span>method, derived from the ping property value derived from the component state. Then, using <span>this.setState&#40;&#41;</span>) method, I assign the value of the <span>tempArray</span> variable to the <span>pingArray</span> state property.
            </p>
            <p>
            I did an operation on the value of the state property by copying it and assigning it to the new state property.
            </p>
            <p>
            When <span>this.setState&#40;&#41</span>; is executed, component knows that its state has been updated and re-renders.
            </p>
            
            <a href="#">
            <Arrow color={setColor.dark} />
            </a>
            </div>
          </MapFilterWrapper>
        </Section>
      </SectionWrapper>
      
    </div>
  );
};

const HomeWrapper = styled.div`
  background: ${setColor.dark};
  color: ${setColor.light};
  height: 100vh;
  ${setFlex()};
  flex-direction: column;
  a {
    margin: 30px;
    align-self: center;
  }
  
  
`;

const TitleWrapper = styled.h1`
  font-size: ${setRem(64)};
  font-weight: 100;
`;

const SectionWrapper = styled.div`
  height: auto;
  ${setFlex()};
  flex-direction: column;
  
      
  
      .lightText {
          width: 100%;
      color: ${setColor.light};
      

      p {
        text-align: left;
      }
      
  }
  #onBlue {
    width: 100%;
    font-size: ${setRem(20)};
    margin: 0 auto;
    margin-bottom: ${setRem(32)};
    padding: ${setRem(16)};
    background: ${setColor.lighten};
    color: ${setColor.dark};
    text-align: left;
  }

  
`;

const MapFilterWrapper = styled.div`
  ${setFlex({justify:"flex-start", align:"flex-start"})};
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  height: 100%;
  align-self: left;

  code {
    width: 100%;
    font-size: ${setRem(20)};
    margin: 0 auto;
    margin-bottom: ${setRem(32)};
    padding: ${setRem(16)};
    background: ${setColor.lighten};
    color: ${setColor.dark};
  }
  ul {
    margin-bottom: ${setRem(32)};
  }

  span {
    font-weight: 900;
  }
`;

export default Home;
