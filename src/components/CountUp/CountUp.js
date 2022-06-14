import React, { useState, useEffect, useRef } from "react";

const CountUp = ({ start = 0, end, time = 2000}) => {
  const [number, setNumber] = useState(start);
  const numRef = useRef(start);

  const accumulator = 1;
  const timer = time / end;

  const updateState = () => {
    if(numRef.current < end) {
      const result = numRef.current + accumulator;
      if(result > end) return number(end);
      setNumber(result);
      numRef.current = result;
    }
    if(numRef.current !== end) {
      setTimeout(updateState, timer);
    }
  }

  useEffect(() => {
    let isMounted = true;

    if(isMounted) {
      updateState();
    }

    return () => isMounted = false;
  }, [])

  return <React.Fragment>{number}</React.Fragment>;
}

export default CountUp;