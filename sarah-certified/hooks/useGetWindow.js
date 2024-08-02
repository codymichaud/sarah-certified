
import React from "react";

export default function useGetWindow() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowInfo, setWindowInfo] = React.useState({
        isMobile: false,
    });
  
    React.useEffect(() => {
        if (typeof window !== 'undefined') {
            // only execute all the code below in client side
            // Handler to call on window resize
            function handleGetSize() {
                // Set window width/height to state
                    setWindowInfo({
                        isMobile: window.innerWidth < 767,
                    });
            }
            
            // Add event listener
            window.addEventListener("resize", handleGetSize);
            
            // Call handler right away so state gets updated with initial window size
            handleGetSize();
            // Remove event listener on cleanup
            return () => window.removeEventListener("resize", handleGetSize);
        }
    }, [windowInfo]); // Empty array ensures that effect is only run on mount
    return windowInfo;
  }