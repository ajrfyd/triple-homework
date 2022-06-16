import React, { useState, useEffect, useRef, useCallback } from "react";

const CountUp = ({ start = 0, end, time = 2000 }) => {
  const [number, setNumber] = useState(start);
  const numRef = useRef(start);

  
  const timer = Math.ceil(time / end);
  const slowTriggerNum = end - 5;
  const accumulator = 1;

  const updateState = useCallback(() => {
    // 숫자가 목표보다 작을때
    if(numRef.current < end) {
      const result = numRef.current + accumulator;
      // 값이 목표값보다 커지면 목표값으로 state 설정
      if(result > end) return number(end);
      // 누적되는 값을 state로 설정
      if(result !== number) {
        setNumber(result);
        numRef.current = result;
      }
    }

    // 목표값과 일치하지 않으면 일정 시간 후 다시 호출
    if(numRef.current !== end) {
      if(numRef.current <= slowTriggerNum) {
        setTimeout(updateState, timer);
      } else {
        setTimeout(updateState, 300);
      }
    }
    
  }, [number])

  useEffect(() => {
    let isMounted = true;

    if(isMounted) {
      updateState();
    }

    return () => {
      isMounted = false;
      clearTimeout(updateState);
    };
  }, [])

  return <React.Fragment>{number}</React.Fragment>;
}

export default CountUp;