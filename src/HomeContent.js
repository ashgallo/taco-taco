import React from 'react';
import { Link } from 'react-router-dom';
import { Segment, Image } from 'semantic-ui-react';
import taco1 from './assets/taco1.jpg';

const HomeContent = () => (
  <Segment.Group horizontal className='home-content'>
    <Segment>
      <Image src={taco1} size='big'/>
    </Segment>
    <Segment>
      <Segment.Group className='taco-go'>
        <Segment color='yellow'>
          <Link to={'/buildTaco'}><h3>Build</h3></Link>
        </Segment>
        <Segment>
          <Link to={'/randomtaco'}><h3>Random Taco</h3></Link>
        </Segment>
        <Segment>
          <Link to={"/merchandise"}><h3>Taco Swag</h3></Link>
        </Segment>
      </Segment.Group>
    </Segment>
  </Segment.Group>
)

export default HomeContent;



