import React from 'react';
import createTheme from 'spectacle/lib/themes/default/index.js';
import config from './config';

// Components
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from 'spectacle';

// Demos
import CompositionDemo from './demos/HelloReact';
import CounterMixin from './demos/CounterMixin';
import CounterHOC from './demos/CounterHOC';

// Base styles
require('normalize.css');
require('./styles/main');

const theme = createTheme(config.theme.colors, config.theme.fonts);

class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={config.slide.transition} transitionDuration={config.slide.transitionDuration}>

          {
            // Title
          }
          <Slide bgColor="secondary">
            <Image src={require('./images/react-logo.png')} margin="0px auto 40px" height="293px" fit/>
            <Heading size={1} lineHeight={1} textColor="white">React</Heading>
            <Text textSize="1.5em" textFont="primary" textColor="primary" margin="20px 0px 0px" bold>an objective synopsis</Text>
          </Slide>

          {
            // Bio
          }
          <Slide bgColor="quartenary">
            <Layout>
              <Fill>
                <Heading size={2} lineHeight={1} textColor="#111" textAlign="left" margin="10px 0 0">Dane Grant</Heading>
                <Text textAlign="left" textSize=".9em" textFont="primary" textColor="#8a8a8a" margin="10px 0px 0px" letterSpacing="-4px">
                  unwaveringly following my commands
                </Text>
                <Layout>
                  <Link href="https://twitter.com/danecando" textAlign="left" bold>@danecando</Link>
                  <Text textAlign="left" textSize=".7em" lineHeight={1} margin="3px 25px" bold>
                    <span id="social-info" className="lead">
                      twitter <span className="pop">.</span> github <span className="pop">.</span> medium
                    </span>
                  </Text>
                </Layout>
              </Fill>
              <Image className="photo--circle" src={require('./images/dane.jpg')} margin="0px 0px 40px" height="200px" fit/>
            </Layout>
          </Slide>

          {
            // Outline Slide
          }
          <Slide bgColor="secondary" transition={["zoom"]}>
            <Heading size={2} lineHeight={1} className="uppercase" textColor="quartenary" textAlign="center" margin="10px 0 0">Outline</Heading>
            <List>
              <Appear><ListItem>Introduction</ListItem></Appear>
              <Appear><ListItem>React overview</ListItem></Appear>
              <Appear><ListItem>An objective synopsis</ListItem></Appear>
              <Appear><ListItem>React in practice</ListItem></Appear>
              <Appear><ListItem>Demos (maybe?)</ListItem></Appear>
            </List>
          </Slide>


          {
            // Old School Meme
          }
          <Slide bgColor="#000" transition="zoom fade">
            <Image id="cover-img" src={require('./images/oldschool.jpg')} />
          </Slide>


          {
            //  Opinionated
          }
          <Slide bgColor="#fff" transition="zoom spin">
            <Image src={require('./images/objective-key.png')} margin="0px 0px 40px" height="auto" width="100%" />
          </Slide>


          {
            // New Hotness
          }
          <Slide bgColor="#fff" transition="zoom spin">
            <Image src={require('./images/new-hotness.png')} />
          </Slide>


          {
            // Personal Journey
          }
          <Slide bgColor="#fff" transition="zoom spin">
            <Heading className="uppercase" size={2} lineHeight={1} textColor="secondary" textAlign="center" margin="25px 0">My Journey</Heading>
            <Image src={require('./images/my-journey.png')} width="100%" height="auto" />
            <List className="dark-gray-text">
              <Appear><ListItem>Doesn't own your whole stack</ListItem></Appear>
              <Appear><ListItem>Build things up with simple components</ListItem></Appear>
              <Appear><ListItem>Hype <em>(fast, groundbreaking, facebook)</em></ListItem></Appear>
            </List>
          </Slide>


          {
            // Important Considerations
          }
          <Slide bgColor="primary" transition="spin zoom slide" align="center middle">
            <Heading className="uppercase" size={4} lineHeight={1} textColor="quartenary" textAlign="center" margin="25px 0">Important Considerations</Heading>
            <Text textColor="secondary">(when considering a new library or framework)</Text>
            <List className="black-text list">
              <Appear><ListItem>What problems will it help me solve?</ListItem></Appear>
              <Appear><ListItem>How does it work / what's going on behind the scenes? <em>(be weary of too much magic!)</em></ListItem></Appear>
              <Appear><ListItem>Is it just a shiny new toy or does it have a future based on quality and substance?</ListItem></Appear>
              <Appear><ListItem>Is it a fit for our project & can the team easily get on board and be productive?</ListItem></Appear>
              <Appear><ListItem>Will I enjoy working with it? Is there demand for it in the job market?</ListItem></Appear>
            </List>
          </Slide>


          {
            // React Intro
          }
          <Slide bgColor="secondary" transition={["zoom"]}>
            <Heading className="uppercase" size={2} lineHeight={1} textColor="primary" textAlign="center" margin="25px 0">React Intro</Heading>
            <Image src={require('./images/instagram-facebook-icons.png')} width="auto" height="100px" />
            <Text className="key-value" margin="50px 0px" bold>Creator: <span className="key-value__value">Jordan Walke</span></Text>
            <Text className="key-value" margin="50px 0px" bold>Tagline: <span className="key-value__value--smaller">A JavaScript Library for Building User Interfaces</span></Text>
          </Slide>


          {
            // React Inro: Just the UI
          }
          <Slide bgColor="quartenary" transition="zoom spin">
            <Heading size={2} lineHeight={1} textColor="#111" textAlign="center" margin="25px 0">Just the UI</Heading>
            <Text lineHeight={1.25} margin="0 0 10% 0">Lots of people use React as the V in MVC. Since React makes no assumptions about the rest of your technology stack, it's easy to try it out on a small feature in an existing project.</Text>
          </Slide>


          {
            // React Intro: Virtual DOM
          }
          <Slide transition="zoom fade" bgImage={require('./images/virtual-insanity.jpg')} bgDarken={0.65}>
            <Heading size={2} lineHeight={1} textColor="#fff" textAlign="center" margin="25px 0">Virtual DOM</Heading>
            <Text className="rounded-corners" bgColor="rgba(250, 250, 250, .6)" lineHeight={1.25} padding="15px" margin="0 0 10% 0">React abstracts away the DOM from you, giving a simpler programming model and better performance. React can also render on the server using Node, and it can power native apps using React Native.</Text>
          </Slide>


          {
            // React Intro: Data Flow
          }
          <Slide transition="fade spin" bgImage={require('./images/hackers-movie.jpg')} bgDarken={0.65}>
            <Heading size={2} lineHeight={1} textColor="#fff" textAlign="center" margin="25px 0">Data Flow</Heading>
            <Text className="rounded-corners" bgColor="rgba(250, 250, 250, .6)" lineHeight={1.25} padding="15px" margin="0 0 10% 0">React implements one-way reactive data flow which reduces boilerplate and is easier to reason about than traditional data binding.</Text>
          </Slide>

          {
            // React Overview Intro
          }
          <Slide bgColor="secondary">
            <Heading size={1} lineHeight={1} textColor="primary">React Overview</Heading>
          </Slide>


          {
            // React Component CreateClass
          }
          <Slide bgColor="#333">
            <CodePane lang="jsx" source={require("raw!./content/simple-component/HelloReact.jsx.example")} margin="20px auto" textSize="26px" />
            <Appear><CodePane lang="jsx" source={require("raw!./content/simple-component/HelloReact2015.jsx.example")} margin="20px auto" textSize="26px" /></Appear>
          </Slide>

          {
            // Component Instantiation
          }
          <Slide bgColor="#333">
            <CodePane lang="jsx" source={require("raw!./content/simple-component/HelloReact.jsx.example")} margin="20px auto" textSize="26px" />
            <CodePane lang="jsx" source={require("raw!./content/simple-component/usage.jsx.example")} margin="20px auto" textSize="26px" />
          </Slide>

          {
            // JSX before
          }
          <Slide bgColor="#333">
            <Heading size={4} textColor="#fff">JSX</Heading>
            <Text textColor="primary">Compiles to vanilla JavaScript</Text>
            <CodePane lang="jsx" source={require("raw!./content/JSX/jsx-before.jsx.example")} margin="20px auto" textSize="26px" />
          </Slide>

          {
            // JSX After
          }
          <Slide bgColor="#333">
            <CodePane lang="jsx" source={require("raw!./content/JSX/jsx-after.js.example")} margin="20px auto" textSize="26px" />
          </Slide>

          {
            // Composition
          }
          <Slide bgColor="#333">
            <Heading size={4} textColor="#fff">Composition</Heading>
            <Appear><Text textColor="primary">We build up our UI by combining components</Text></Appear>
            <Appear><CodePane lang="jsx" source={require("raw!./content/composition/Container.jsx.example")} margin="20px auto" textSize="26px" /></Appear>
          </Slide>

          {
            // Events
          }
          <Slide bgColor="#333">
            <Heading size={4} textColor="#fff">Events</Heading>
            <Text textColor="primary">Pass event handlers as camelCased props</Text>
            <CodePane lang="jsx" source={require("raw!./content/events/events.jsx.example")} margin="20px auto" textSize="26px" />
          </Slide>

          {
            // Components are just state machines
          }
          <Slide transition="zoom spin" bgColor="primary">
            <Heading size={4} textColor="#111">Components are Just State Machines</Heading>
            <Appear><Text textColor="white">By thinking of a UI as being is various states and rendering those states, it's easy to keep your UI consistent</Text></Appear>
          </Slide>

          {
            // State
          }
          <Slide bgColor="#333">
            <CodePane lang="jsx" source={require("raw!./content/state/container.jsx.example")} margin="20px auto" textSize="26px" />
          </Slide>

          {
            // Rendering
          }
          <Slide transition={['spin']} bgColor="#333">
            <Heading size={4} textColor="#fff">Rendering</Heading>
            <Text textColor="primary">We need to render our top level components!</Text>
            <CodePane lang="jsx" source={require("raw!./content/rendering/render-dom.js.example")} margin="20px auto" textSize="26px" />
          </Slide>

          {
            // Composiiton Demo
          }
          <Slide transition="zoom spin" bgColor="quartenary">
            <CompositionDemo />
          </Slide>

          {
            // Lifecycle methods
          }
          <Slide transition="zoom spin" bgColor="primary">
            <Heading size={4} textColor="#111">Lifecycle Methods</Heading>
            <Appear><Text textColor="white">Mad props helping orchestrate your component state</Text></Appear>
          </Slide>

          <Slide transition={['zoom']} bgColor="quartenary">
            <Heading size={4} textColor="#111" textAlign="center">Mounting / Unmounting</Heading>
            <List className="black-text list" textAlign="center">
              <Appear><ListItem>getInitialState()</ListItem></Appear>
              <Appear><ListItem>getDefaultProps()</ListItem></Appear>
              <Appear><ListItem>componentWillMount()</ListItem></Appear>
              <Appear><ListItem>componentDidMount()</ListItem></Appear>
              <Appear><ListItem>componentWillUnmount()</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={['zoom']} bgColor="primary">
            <Heading size={4} textColor="quartenary" textAlign="center">Updating</Heading>
            <List className="black-text list" textAlign="center">
              <Appear><ListItem>componentWillReceiveProps()</ListItem></Appear>
              <Appear><ListItem>shouldComponentUpdate()</ListItem></Appear>
              <Appear><ListItem>componentWillUpdate()</ListItem></Appear>
              <Appear><ListItem>componentDidUpdate()</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition="zoom spin" bgColor="#333">
            <CodePane lang="jsx" source={require("raw!./content/lifecycle-hooks/data-fetch.jsx.example")} margin="50px auto 0" textSize="18px" />
          </Slide>


          {
            // Common Patterns
          }
          <Slide transition={['zoom']} bgColor="quartenary">
            <Heading size={4} textColor="primary" textAlign="left">Common Patterns</Heading>
            <List className="black-text list">
              <ListItem>Smart & Dumb Components</ListItem>
              <ListItem>Mixins</ListItem>
              <ListItem>Higher-Order Components</ListItem>
            </List>
          </Slide>



          {
            // Mixins
          }
          <Slide transition={['zoom', 'spin']} bgColor="#333">
            <Heading size={4} textColor="primary" textAlign="center">Mixins</Heading>
            <CodePane lang="jsx" source={require("raw!./content/common-patterns/CounterMixin.jsx.example")} margin="20px auto" textSize="26px" />
          </Slide>

          <Slide transition={['spin']} bgColor="#333">
            <CounterMixin />
            <CodePane lang="jsx" source={require("raw!./content/common-patterns/ClickCount.jsx.example")} margin="20px auto" textSize="26px" />
          </Slide>

          {
            // Higher-order Components
          }
          <Slide transition={['zoom', 'spin']} bgColor="#333">
            <Heading size={5} textColor="primary" textAlign="center">Higher-order Components</Heading>
            <CodePane lang="jsx" source={require("raw!./content/common-patterns/CounterHOC.jsx.example")} margin="20px auto" textSize="26px" />
          </Slide>

          <Slide transition={['spin']} bgColor="#333">
            <CounterHOC/>
            <CodePane lang="jsx" source={require("raw!./content/common-patterns/ClickCountHOC.jsx.example")} margin="20px auto" textSize="26px" />
          </Slide>

          {
            // An objective synopsis
          }
          <Slide transition="zoom" bgColor="primary">
            <Heading size={4} textColor="#111">An objective synopsis</Heading>
            <Appear><Text textColor="white">or something like that</Text></Appear>
          </Slide>

          {
            // Core Types
          }
          <Slide bgColor="quartenary">
            <Heading size={4} textColor="primary" textAlign="left" margin="40px 0">Main Types</Heading>
            <Layout>
              <Heading size={5} textColor="secondary" margin="0 15px 0 0">Component,</Heading>
              <Heading size={5} textColor="secondary" margin="0 15px 0 0">Instance,</Heading>
              <Heading size={5} textColor="secondary" margin="0 15px 0 0">Element,</Heading>
              <Heading size={5} textColor="secondary" margin="0 15px 0 0">Node</Heading>
            </Layout>
          </Slide>

          {
            // Component
          }
          <Slide transition="zoom spin" bgColor="#333">
            <Heading size={4} textColor="white" margin="100px 0 0 0">React Component</Heading>
            <Text textColor="primary">a blueprint</Text>
            <Appear><CodePane lang="jsx" source={require("raw!./content/types/stateless-function.jsx.example")} margin="20px auto" textSize="26px" /></Appear>
          </Slide>

          {
            // Component Instance
          }
          <Slide bgColor="#333">
            <Heading size={4} textColor="white" margin="100px 0 0 0">Component Instance</Heading>
            <Text textColor="primary">an instantiated component</Text>
            <Appear><CodePane lang="jsx" source={require("raw!./content/types/component-instance.jsx.example")} margin="60px auto" textSize="26px" /></Appear>
          </Slide>

          {
            // Element
          }
          <Slide bgColor="#333">
            <Heading size={4} textColor="white" margin="100px 0 0 0">React Element</Heading>
            <Text textColor="primary">an immutable object that describes a React or DOM Element</Text>
            <Appear><CodePane lang="jsx" source={require("raw!./content/types/element.jsx.example")} margin="60px auto" textSize="26px" /></Appear>
          </Slide>

          {
            // Node
            //  <Heading size={4} textColor="secondary" margin="100px 0 0 0">React Node</Heading>
            //  <Heading size={5} textColor="white" margin="0 15px 0 0">React Element, Array of Nodes</Heading>
            //  <CodePane lang="jsx" source={require("raw!./content/types/nodes.jsx.example")} margin="60px auto" textSize="26px" />
            //</Slide>
          }

          {
            // Virtual DOM
            //<Slide transition={['zoom', 'spin']} bgColor="quartenary">
            //  <Image src={require('./images/react-devtools.png')} margin="75px 0 0 0" />
            //</Slide>
          }
          <Slide transition={['zoom']} bgColor="quartenary">
            <Heading size={4} textColor="secondary" margin="100px 0 0 0">Virtual DOM</Heading>
            <Appear><Text textColor="primary">is a just a ReactElement</Text></Appear>
            <Image src={require('./images/tree.png')} margin="75px 0 0 0" />
          </Slide>


          <Slide transition={['zoom']} bgColor="quartenary">
            <Heading size={5} textColor="secondary" margin="100px 0 0 0">Re-rendering</Heading>
            <Text textColor="primary" textSize="34px">setState marks components dirty, they will be re-rendered</Text>
            <Appear><Image src={require('./images/re-render.png')} margin="75px 0 0 0" /></Appear>
          </Slide>

          <Slide transition={['zoom']} bgColor="quartenary">
            <Heading size={5} textColor="secondary" margin="100px 0 0 0">Reconciliation / Diff'ing</Heading>
            <Text textColor="primary" textSize="34px">Compares new representation with old, level by level</Text>
            <Appear><Image src={require('./images/rec.png')} margin="75px 0 0 0" /></Appear>
          </Slide>

          <Slide transition={['zoom']} bgColor="quartenary">
            <Heading size={5} textColor="secondary" margin="100px 0 0 0">Batch updates</Heading>
            <Appear>
              <div>
                <Text textColor="primary" textSize="34px">After DOM operations are calculated, React waits for a certain point in the event loop to execute DOM update operations, all at once.</Text>
                <Image src={require('./images/event-loop.png')} margin="75px 0 0 0" />
              </div>
            </Appear>
          </Slide>

          {
            // Immuatability
          }
          <Slide transition={['zoom', 'spin']} bgColor="primary">
            <Heading size={5} textColor="secondary" margin="100p33x 0 0 0">Immutability</Heading>
            <Appear><Text textColor="#fff" textSize="34px">Once a value is set, it can't be changed</Text></Appear>
            <Appear><Text textColor="#fff">Who caress?!??!</Text></Appear>
          </Slide>

          <Slide transition={['zoom', 'spin']} bgColor="primary">
            <Heading size={6} textColor="white" margin="100px 0 0 0">shouldComponentUpdate(nextProps, nextState)</Heading>
            <Appear><Text textColor="secondary" textSize="34px">Allows you to short-circuit the rendering process</Text></Appear>
            <Appear><CodePane lang="jsx" source={require("raw!./content/immutability/scu.jsx.example")} margin="60px auto" textSize="26px" /></Appear>
          </Slide>

          <Slide transition={['zoom']} bgColor="white">
            <Image src={require('./images/should-component-update.png')} />
          </Slide>

          <Slide bgColor="secondary">
            <Heading size={6} textColor="primary" margin="100px 0 0 0">PureRenderMixin</Heading>
            <Appear><Text textColor="#fff" textSize="34px">Automatically shallow compares current props & state with next</Text></Appear>
            <Appear><CodePane lang="jsx" source={require("raw!./content/immutability/prmixin.jsx.example")} margin="60px auto" textSize="26px" /></Appear>
          </Slide>


          {
            // Testing
          }
          <Slide transition="zoom spin" bgColor="primary">
            <Heading size={5} textColor="#fff" margin="100px 0px 0px 0px">Testing Components</Heading>
            <Appear><Text textColor="secondary" textSize="34px">It's common in react to render a component and make assertions about the rendered output</Text></Appear>
            <Appear><CodePane lang="jsx" source={require("raw!./content/testing/shallow-rendering.jsx.example")} margin="60px auto" textSize="26px" /></Appear>
          </Slide>


          <Slide transition={['zoom', 'spin']} bgColor="secondary">
            <Heading size={6} textColor="primary" margin="100px 0 0 0">Closing</Heading>
            <Appear><Text textColor="#fff" textSize="48px" margin="20px 0">Rich ecosystem of reusable components</Text></Appear>
            <Appear><Text textColor="#fff" textSize="48px" margin="20px 0">Flux & Redux</Text></Appear>
            <Appear><Text textColor="#fff" textSize="48px" margin="20px 0">React Native / Canvas</Text></Appear>
          </Slide>

        </Deck>
      </Spectacle>
    );
  }
}

export default Presentation;
export { Presentation };
