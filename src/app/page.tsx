import React from 'react';
import { useAuth } from '../hooks/useAuth'; // hypothetical hook for authentication
import Layout from '../components/Layout'; // hypothetical Layout component

const MainPage: React.FC = () => {
    const { isAuthenticated } = useAuth();

    return (
        <Layout>
            {isAuthenticated ? (
                <div>
                    <h1>Welcome to Optiploy</h1>
                    {/* Add your main content here */}
                </div>
            ) : (
                <div>
                    <h1>Please log in to continue.</h1>
                    {/* Add login button or link here */}
                </div>
            )}
        </Layout>
    );
};

export default MainPage;
