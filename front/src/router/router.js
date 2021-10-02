import { lazy } from 'react'

import { HOME } from './path'

const Home = lazy(() => import('../components/Views/Home'))

export const routes = [ // creo un array de rutas
  {
    path: HOME,
    component: Home
  },
]
