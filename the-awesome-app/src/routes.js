import React from 'react';
import Login from './components/Login';
import UseCallbackDemo from './components/UseCallbackDemo';
import GadgetShop from './components/GadgetShop';
import Hello from './components/Hello';
import Counter from './components/Counter';
import ViewCart from './components/ViewCart';

const ListProducts = React.lazy(() => import('./components/ListProducts'));

export const routes = [

    {
        component: Login,
        title: "Login",
        icon: "",
        path: "/login",
        secure: false
    },
    {
        component: Hello,
        title: "Home",
        icon: "",
        path: "/home",
        secure: false
    },
    {
        component: Counter,
        title: "Counter",
        icon: "",
        path: "/counter",
        secure: false
    },
    {
        component: ListProducts,
        title: "Products",
        icon: "",
        path: "/products",
        secure: true
    },
    {
        component: GadgetShop,
        title: "Gadgets",
        icon: "",
        path: "/gadgets",
        secure: true
    },
    {
        component: ViewCart,
        title: "Cart",
        icon: "",
        path: "/cart",
        secure: true
    }
]