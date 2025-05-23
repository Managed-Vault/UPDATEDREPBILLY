import React, { useState, useEffect, useCallback, useRef } from 'react';
import activityData from '../data/recentActivity.json';

const Toast = ({ activity, isExiting }) => (
  <div className={`fixed bottom-4 right-4 z-[9999] bg-white rounded-lg shadow-xl p-4 max-w-sm w-full transform ${
    isExiting ? 'animate-fade-out-down' : 'animate-fade-in-up'
  }`}>
    <div className="flex items-center">
      <div className="flex-shrink-0">
        <div className="h-10 w-10 rounded-full bg-brand-600 flex items-center justify-center text-white font-bold">
          {activity.name.charAt(0)}
        </div>
      </div>
      <div className="ml-3 w-0 flex-1">
        <p className="text-sm font-medium text-gray-900">{activity.name}</p>
        <p className="mt-1 text-sm text-gray-500">
          Purchased {activity.product} from {activity.location}
        </p>
        <p className="mt-1 text-xs text-gray-400">{activity.timeAgo}</p>
      </div>
    </div>
  </div>
);

function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

// Random delay between 40-60 seconds
const getRandomDelay = () => Math.floor(Math.random() * (60000 - 40000) + 40000);

export default function RecentActivity() {
  const [activities, setActivities] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [batchIndex, setBatchIndex] = useState(0);
  const [currentToast, setCurrentToast] = useState(null);
  const [isExiting, setIsExiting] = useState(false);
  const [isWaitingForDelay, setIsWaitingForDelay] = useState(false);
  const lastShownName = useRef('');
  const timeoutRef = useRef(null);

  const initializeActivities = useCallback(() => {
    setActivities(shuffleArray(activityData.activities));
    setCurrentIndex(0);
    setBatchIndex(0);
  }, []);

  useEffect(() => {
    initializeActivities();
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [initializeActivities]);

  const showNextToast = useCallback(() => {
    if (isWaitingForDelay) return;

    if (currentIndex >= activities.length) {
      initializeActivities();
      return;
    }

    let nextIndex = currentIndex;
    while (nextIndex < activities.length && activities[nextIndex].name === lastShownName.current) {
      nextIndex++;
    }

    if (nextIndex >= activities.length) {
      initializeActivities();
      return;
    }

    const activity = activities[nextIndex];
    lastShownName.current = activity.name;
    setCurrentToast(activity);
    setIsExiting(false);
    setCurrentIndex(nextIndex + 1);
    setBatchIndex((prev) => (prev + 1) % 4);
    setIsWaitingForDelay(true);

    // Start fade out after 4.7 seconds
    timeoutRef.current = setTimeout(() => {
      setIsExiting(true);
      
      // Remove toast after animation completes
      timeoutRef.current = setTimeout(() => {
        setCurrentToast(null);
        
        // Set up the random delay for the next toast
        timeoutRef.current = setTimeout(() => {
          setIsWaitingForDelay(false);
        }, getRandomDelay());
      }, 300);
    }, 4700);
  }, [activities, currentIndex, initializeActivities, isWaitingForDelay]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      const milestones = [25, 50, 75, 100];
      
      if (milestones.some(milestone => scrollPercent >= milestone)) {
        if (!currentToast && batchIndex < 4 && !isWaitingForDelay) {
          showNextToast();
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentToast, batchIndex, showNextToast, isWaitingForDelay]);

  return currentToast ? <Toast activity={currentToast} isExiting={isExiting} /> : null;
}