import React, { useEffect } from 'react';

const Button = () => {
  // This line will crash with `Invalid hook call` if React isn't shared between 'app1' and 'app2'
  // (useEffect relies on some internal module-level state React has, and having two copies of React breaks it)
  useEffect(() => { console.log('Hello from App2\'s Button!') }, [])
  return <button>App 2 Button!</button>;
};

export default Button;
