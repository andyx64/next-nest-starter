import '../styles/style.scss';
import Link from 'next/link';
import '../styles/style.scss';
import Store from '../datastore';
import React, { useState, useEffect } from 'react';
import Button from 'react-bulma-components/src/components/button';

const Index = () => {

  const [state, setState] = useState(Store.store.value);
  useEffect(() => {Store.store.subscribe(update => setState(update)); } , []) ;

  return(
    <div>
      <div>{state}</div>
      <Link prefetch href='/about'>
        <a>About</a>
      </Link>
      <Button onClick={() => Store.store.next(Store.store.value + 1)}>Add</Button>
    </div>
  );

};

export default Index;
