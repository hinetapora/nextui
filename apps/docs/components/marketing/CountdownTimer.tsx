// components/marketing/CountdownTimer.tsx
"use client";

import {useState, useEffect} from "react";

interface CountdownTimerProps {
  eventDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = ({eventDate}: CountdownTimerProps) => {
  const calculateTimeDifference = (): TimeLeft | null => {
    const now = Date.now();
    const eventTime = new Date(eventDate).getTime();

    if (isNaN(eventTime)) {
      console.error(`Invalid event date: ${eventDate}`);

      return null;
    }

    const difference = eventTime - now;

    if (difference <= 0) {
      return {days: 0, hours: 0, minutes: 0, seconds: 0};
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {days, hours, minutes, seconds};
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(calculateTimeDifference());

  useEffect(() => {
    if (timeLeft === null) {
      return;
    }

    const interval = setInterval(() => {
      const updatedTime = calculateTimeDifference();

      if (updatedTime === null) {
        clearInterval(interval);

        return;
      }

      setTimeLeft(updatedTime);

      if (
        updatedTime.days === 0 &&
        updatedTime.hours === 0 &&
        updatedTime.minutes === 0 &&
        updatedTime.seconds === 0
      ) {
        clearInterval(interval);
      }
    }, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [eventDate]);

  if (timeLeft === null) {
    return <div className="text-red-500 dark:text-red-400 font-bold">Invalid event date</div>;
  }

  if (
    timeLeft.days === 0 &&
    timeLeft.hours === 0 &&
    timeLeft.minutes === 0 &&
    timeLeft.seconds === 0
  ) {
    return <div className="text-green-500 dark:text-green-400 font-bold">Event has started!</div>;
  }

  return (
    <div className="text-white dark:text-black font-bold">
      Starts in: {String(timeLeft.days).padStart(2, "0")}d:
      {String(timeLeft.hours).padStart(2, "0")}h:
      {String(timeLeft.minutes).padStart(2, "0")}m:
      {String(timeLeft.seconds).padStart(2, "0")}s
    </div>
  );
};

export default CountdownTimer;
