
import React from "react";

export default function useGetWindow() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowInfo, setWindowInfo] = React.useState({
        windowSize: {
            width: 0,
            height: 0,
        },
    });
  
    React.useEffect(() => {
        if (typeof window !== 'undefined') {
                console.log('window', window)
            // only execute all the code below in client side
            // Handler to call on window resize
            function handleGetSize() {
                console.log('resizing!!11', window)
                // Set window width/height to state
                if (windowInfo.windowSize.width === 0 && windowInfo.windowSize.height === 0) {
                    setWindowInfo({
                        windowSize: {
                            width: window.innerWidth,
                            height: window.innerHeight,
                        },
                    });
                }
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