import './styles/style.scss';
import Button from 'react-bulma-components/src/components/button';
import React, { useState } from 'react';

const Index = (props) => {

  const [count, setCount] = useState(props.test);

  return(
  <div>
    <h1>{count}</h1>
    <Button onClick={() => setCount(count + 1)} color='primary'>Increase</Button>
    <Button onClick={() => setCount(count - 1)} color='primary'>Decrease</Button>
    <Button onClick={() => alert(count)} color='primary'>Decrease</Button>
  </div>);

}

Index.getInitialProps =  async (context) => {
  return context.req.props;
}

Index.componentDidMount  = () => {
  alert('Hello world');
}

export default Index;
