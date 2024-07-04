'use client';

// hooks
import React, { createContext, useState } from 'react';



// Create the context with the specified type
export const ActiveSectionContext = createContext({
    activeSection: '',
    setActiveSection: () => {},
});



// Use the defined props type
export function ActiveSectionProvider({
    children,
}) {
    const [activeSection, setActiveSection] = useState('');

    return (
        <ActiveSectionContext.Provider
            value={{
                activeSection,
                setActiveSection,
            }}
        >
            {children}
        </ActiveSectionContext.Provider>
    );
}
