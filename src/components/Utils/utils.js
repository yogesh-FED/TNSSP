import React, { createContext, useContext, useState } from 'react';
import { useEffect } from 'react';
//const ApiEndpointsContext = createContext();
//const FunctionContext = createContext();
const ElementFontChangeContext = createContext();
//export const useApiEndpoints = () => useContext(ApiEndpointsContext);
//export const useFunctionContext = () => useContext(FunctionContext);
export const useElementFontChange = () => useContext(ElementFontChangeContext);

// export const ApiEndpointsProvider = ({ children }) => {
//     const [endpoints, setEndpoints] = useState({
//       users: 'https://example.com/api/users',
//       products: 'https://example.com/api/products',
//     });

//   const updateEndpoint = () => {
// 		setEndpoints({
//       ...endpoints,
//     });
//   }
//   return (
//     <ApiEndpointsContext.Provider value={{ endpoints, updateEndpoint }}>
//       {children}
//     </ApiEndpointsContext.Provider>
//   );
// };
// export const ElementFontChangeProvider = ({ children }) => {
//   const affectedElements = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6, a, div, .nav-link, span, marquee");
//   const fontSizes = Array.from(affectedElements).map(element => {
//     const computedStyle = window.getComputedStyle(element);
//     return computedStyle.fontSize;
//   });
//   console.log(affectedElements, 'affectedElements');
//   const increaseFontSize = () => {
//     changeFontSize(1);
//   }
//   const decreaseFontSize = () => {
//     changeFontSize(-1);
//   }

//   const changeFontSize = (direction) => {
//     const updatedFontSizes = {};
//     affectedElements.forEach(element => {
//       const currentSize = parseInt(window.getComputedStyle(element).fontSize);
//       const newSize = currentSize + direction;
//       updatedFontSizes[element.id || element.className] = newSize; 
//       element.style.fontSize = newSize + 'px';
//     });
//   }
  // const [originalSizes, setOriginalSizes]  = useState({});
  // const [currentSizes, setCurrentSizes] = useState({});
  // const affectedElementsSelector = "p, h1, h2, h3, h4, h5, h6, a, div, .nav-link, span, .marText";
  // useEffect(() => {
  //   saveOriginalSizes();
  // }, []);

  // useEffect(() => {
  //   setCurrentSizes({ ...originalSizes });
  // }, [originalSizes]);
  // const saveOriginalSizes = () => {
  //   const elements = document.querySelectorAll(affectedElementsSelector);
  //   const origSizes = {};
  //   elements.forEach(element => {
  //     const computedStyle = window.getComputedStyle(element);
  //     origSizes[element] = parseInt(computedStyle.fontSize);
  //   });
  //   setOriginalSizes(origSizes);
  //   console.log(origSizes, 'origSizes');
  // }
  // const changeFontSize = (direction) => { debugger;
  //   setCurrentSizes(prevSizes => {
  //     const updatedSizes = { ...prevSizes };
  //     const elements = document.querySelectorAll(affectedElementsSelector);
  //     elements.forEach(element => {
  //       const origSize = prevSizes[element];
  //       let newSize = origSize + direction;
  //       if (newSize < 0) {
  //         newSize = 0;
  //       }
  //       updatedSizes[element] = newSize;
  //       element.style.fontSize = newSize + 'px';
  //     });
  //     return updatedSizes;
  //   });
  // }
  // const resetFontSize = () => {
  //   const elements = document.querySelectorAll(affectedElementsSelector);
  //   elements.forEach(element => {
  //     const origSize = originalSizes[element];
  //     element.style.fontSize = origSize + 'px';
  //   });
  // }
//   return (
//       <ElementFontChangeContext.Provider value={{ fontSizes, increaseFontSize, decreaseFontSize }}>
//         {children}
//       </ElementFontChangeContext.Provider>
//     );
// }

// export const FunctionContextProvider = ({ children }) => {
//   const [apiData, setApiData] = useState([]);
//   useEffect(() => {
//     fetchApi();
//   },[])
//   const fetchApi = async() => {
//     try {
//       const response = await fetch('../../workingJson/generalDetails.json');
//       const jsonData = await response.json();
//       setApiData(jsonData);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   }
// return (
//   <FunctionContext.Provider value={{ apiData, fetchApi }}>
//     {children}
//   </FunctionContext.Provider>
// );
// };

export const ElementFontChangeProvider = ({ children }) => {
  let affectedElements = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6, a, div, .nav-link, span, marquee");
  const fontSizes = Array.from(affectedElements).map(element => {
    const computedStyle = window.getComputedStyle(element);
    //console.log('computedStyle', computedStyle)
    return computedStyle.fontSize;
  });
  const changeFontSize = (direction) => {
    affectedElements.forEach(element => {
      let currentSize = parseInt(window.getComputedStyle(element).fontSize);
      let newSize = currentSize + direction;
      element.style.fontSize = newSize + 'px';
    });
  }

  const increaseFontSize = () => {
    changeFontSize(1);
  }

  const decreaseFontSize = () => {
    changeFontSize(-1);
  }

  const resetFontSize = () => {  debugger;
    affectedElements.forEach(element => {
      element.style.removeProperty('font-size');
    });
  }

  return (
    <ElementFontChangeContext.Provider value={{ fontSizes, increaseFontSize, decreaseFontSize, resetFontSize }}>
      {children}
    </ElementFontChangeContext.Provider>
  );
};


export { ElementFontChangeContext };