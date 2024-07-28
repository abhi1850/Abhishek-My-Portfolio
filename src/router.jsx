import { Suspense } from 'react';

import Home from './Components/Home';
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
                path: 'Home',
                element: (
                    <Suspense>
                        <Home />
                    </Suspense>
                ),
                errorElement: <ErrorPage />,
            },
        ],
    },
];
