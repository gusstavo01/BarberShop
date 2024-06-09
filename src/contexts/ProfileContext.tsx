// src/contexts/ProfileContext.tsx
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface ProfileContextType {
    profile: string;
    setProfile: (profile: string) => void;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export const useProfile = () => {
    const context = useContext(ProfileContext);
    if (!context) {
        throw new Error('useProfile must be used within a ProfileProvider');
    }
    return context;
};

interface ProfileProviderProps {
    children: ReactNode;
}

export const ProfileProvider = ({ children }: ProfileProviderProps) => {
    const [profile, setProfile] = useState<string>('customer');  

    return (
        <ProfileContext.Provider value={{ profile, setProfile }}>
            {children}
        </ProfileContext.Provider>
    );
};
