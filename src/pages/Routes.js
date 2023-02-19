import React, { lazy } from 'react';

const Home = lazy(()=> import('../pages/Home'))
<<<<<<< HEAD
const Playground = lazy(()=> import('../pages/Playground'))
=======
const Playground = lazy(()=> import('./Playground'))
>>>>>>> origin/master
const Page404 = lazy(()=> import('../pages/Page404'))

const routes = [
    {
        path: "/",
        component:<Home/>
    },
    {
        path: "/code/:folderID/:playgroundID",
        component:<Playground/>
    },
    {
        path: "*",
        component:<Page404/>
    },
]

export default routes;