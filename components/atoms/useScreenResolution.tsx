"use client";
import { useEffect, useState } from "react";

export const useScreenResolution = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [width, setWidth] = useState(0);
  //   const [islarge, setIsLarge] = useState(false);

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  const setResolution = (screenWidth: number) => {
    setWidth(screenWidth);
    setIsMobile(Boolean(screenWidth <= 900));
    // setIsTablet(Boolean(screenWidth <= 1024));
    setIsTablet(Boolean(screenWidth <= 1200));
  };

  useEffect(() => {
    setResolution(getWindowSize().innerWidth);
    function handleWindowResize() {
      setResolution(getWindowSize().innerWidth);
    }
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { isMobile, width, isTablet };
};
