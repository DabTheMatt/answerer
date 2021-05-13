import React from "react";
import styled from "styled-components";
import { setColor, setFlex, setRem } from "../../styles";
import Section from "../Globals/Section";
import Arrow from "../Globals/Arrow";

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
            filter() calls a provided callbackFn function once for each element in an array, and constructs a new array of all the values for which callbackFn returns a value that coerces to true. callbackFn is invoked only for indexes of the array which have assigned values; it is not invoked for indexes which have been deleted or which have never been assigned values. Array elements which do not pass the callbackFn test are skipped, and are not included in the new array.
            </p>
            <p>callbackFn is invoked with three arguments:</p>
            <ul>
                <li>the value of the element</li>
                <li>the index of the element</li>
                <li>the Array object being traversed</li>
            </ul>
            <p>
            If a thisArg parameter is provided to filter, it will be used as the callback's this value. Otherwise, the value undefined will be used as its this value. The this value ultimately observable by callback is determined according to the usual rules for determining the this seen by a function.
            </p>
            <p>
            filter() does not mutate the array on which it is called.
            </p>
            <p>
            The range of elements processed by filter() is set before the first invocation of callbackFn. Elements which are appended to the array (from callbackFn) after the call to filter() begins will not be visited by callbackFn. If existing elements of the array are deleted in the same way they will not be visited.  
            </p>
            <Arrow color={setColor.dark} />
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
`;

const TitleWrapper = styled.h1`
  font-size: ${setRem(64)};
  font-weight: 100;
`;

const SectionWrapper = styled.div`
  min-height: 100vh;
  ${setFlex()};
  flex-direction: column;
`;

const MapFilterWrapper = styled.div`
  ${setFlex()};
  flex-direction: column;
  width: 80%;
  margin: 0 auto;

  code {
    width: 80%;
    font-size: ${setRem(20)};
    margin: 0 auto;
    margin-bottom: ${setRem(32)};
  }
  ul {
    margin-bottom: ${setRem(32)};
  }

  span {
    font-weight: 900;
  }
`;

export default Home;
