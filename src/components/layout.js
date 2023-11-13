import * as React from 'react';
import SideBar from './drawer';
import NavBar from './appBar';

function Layout({ children }) {
    
    return (
        <>
            <div className='root'>
                {/* Drawer */}
                <SideBar />

                {/* AppBar*/}
                <NavBar />
                <div className='children'>
                    {children}
                </div>
            </div>
        </>
    );
}

export default Layout;