import React, { createContext, useContext, useState } from 'react';

// 1. Create a new context
const EventFormContext = createContext();

// 2. Define a custom provider component
export const EventFormProvider = ({ children }) => {
  // 3. Define state and functions for managing event form data
  const [eventFormData, setEventFormData] = useState({});

  const updateFormData = (updateFunction) => {
    console.log(updateFunction);
    setEventFormData((prevData) => ({
      ...updateFunction(prevData),
    }));
  };

  return (
    // 4. Provide the state and functions to the context
    <EventFormContext.Provider value={{ eventFormData, updateFormData }}>
      {children}
    </EventFormContext.Provider>
  );
};

// 5. Export the context and a custom hook for accessing the context
export const useEventFormContext = () => {
  return useContext(EventFormContext);
};
