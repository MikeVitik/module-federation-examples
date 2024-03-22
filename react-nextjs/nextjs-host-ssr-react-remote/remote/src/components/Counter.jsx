import * as React from 'react';

const Counter = () => {
  const [counter, setCounter] = React.useState(1);
  return (
    <div onClick={() => setCounter(counter + 1)}>
      {`Let's count ${counter}`}
    </div>
  );
};

export default Counter;
