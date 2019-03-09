import '../styles/style.scss';
import Link from 'next/link';
import Store from '../datastore';
import React, { useState, useEffect } from 'react';
import Button from 'react-bulma-components/src/components/button';

const About = () => {

  const [state, setState] = useState(Store.store.value);
  useEffect(() => {Store.store.subscribe(update => setState(update)); } , []) ;

  return(
    <div>
      <div>{state}</div>
      <Link prefetch href='/'>
        <a>Home</a>
      </Link>
      <Button onClick={() => Store.store.next(Store.store.value + 1)}>Hallo</Button>
    </div>
  );

}

export default About;
