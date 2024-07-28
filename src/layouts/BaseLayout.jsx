import { Outlet } from 'react-router-dom';

import Header from './Header';

const BaseLayout = () => {
    return (
        <div className="app-container">
            <>
                <div className="header">
                    <Header />
                </div>
            </>
            <div className="main-content">
                <Outlet />
            </div>
        </div>
    );
};
export default BaseLayout;
