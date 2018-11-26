import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Segment, Image } from 'semantic-ui-react';
import taco1 from './assets/taco1.jpg';

const HomeContent = () => (
  <Container>
    <Segment.Group horizontal className='home-content'>
      <Segment >
        <div>        
          <Image src={taco1} verticalalign='middle' size='medium' style={styles.img} />
        </div>
      </Segment>
      <Segment>
        <Segment.Group className='taco-go' verticalalign='middle'>
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
  </Container>
)

const styles = {
  img: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translateX(-50%) translateY(-50%)',
    maxWidth: '100%',
    maxHeight: '100%'
  }
}


export default HomeContent;



