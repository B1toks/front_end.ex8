import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectClockDate, updateDate } from '../store/clockslice';

const Clock = () => {
  const dispatch = useDispatch();
  const date = useSelector(selectClockDate);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(updateDate());
    }, 1000);

    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <div>
      <p>Current Time: {date}</p>
    </div>
  );
};

export default Clock;
