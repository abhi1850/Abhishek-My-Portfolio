import { Suspense } from 'react';
import { Navigate } from 'react-router-dom'; // Import Navigate for redirection

import About from './Components/About';
import Contact from './Components/Contact';
import Experience from './Components/Experience';
import Home from './Components/Home';
import Projects from './Components/Projects';
import BaseLayout from './layouts/BaseLayout';
import { ErrorPage } from './Reusable/ErrorPage';

export const routes = [
    {
        path: '/',
        element: (
            <Suspense>
                {/* <Authenticate> */}
                <BaseLayout />
                {/* </Authenticate> */}
            </Suspense>
        ),
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Navigate to="/Home" />,
            },
            {
                path: 'Home',
                element: (
                    <Suspense>
                        <Home />
                    </Suspense>
                ),
                errorElement: <ErrorPage />,
            },
            {
                path: 'About',
                element: (
                    <Suspense>
                        <About />
                    </Suspense>
                ),
                errorElement: <ErrorPage />,
            },
            {
                path: 'Projects',
                element: (
                    <Suspense>
                        <Projects />
                    </Suspense>
                ),
                errorElement: <ErrorPage />,
            },
            {
                path: 'Experience',
                element: (
                    <Suspense>
                        <Experience />
                    </Suspense>
                ),
                errorElement: <ErrorPage />,
            },
            {
                path: 'Contact',
                element: (
                    <Suspense>
                        <Contact />
                    </Suspense>
                ),
                errorElement: <ErrorPage />,
            },
        ],
    },
];
