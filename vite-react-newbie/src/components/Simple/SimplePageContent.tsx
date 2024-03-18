import React from 'react'

interface PageContentProps {
    children: React.ReactNode;
}

export const SimplePageContent: React.FC<PageContentProps> = ({ children }) => {
    return (
        <div className="page-content">
            {children}
        </div>
    );
};
export default SimplePageContent