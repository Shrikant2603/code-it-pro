import React, { lazy } from 'react';

const Home = lazy(()=> import('../pages/Home'))
const PlayGround = lazy(()=> import('../pages/PlayGround'))
const Page404 = lazy(()=> import('../pages/Page404'))

const routes = [
    {
        path: "/",
        component:<Home/>
    },
    {
        path: "/code/:folderID/:playgroundID",
        component:<PlayGround/>
    },
    {
        path: "*",
        component:<Page404/>
    },
]

export default routes;