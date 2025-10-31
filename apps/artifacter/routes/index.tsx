import type { RouteObject } from 'react-router-dom'
import { HomeView } from '../views/HomeView'
import { DemoView } from '../views/DemoView'

export interface AppRoute {
  path: string
  element: JSX.Element
  label: string
}

export const routes: AppRoute[] = [
  {
    path: '/',
    element: <HomeView />,
    label: 'Home'
  },
  {
    path: '/demo',
    element: <DemoView />,
    label: 'Demo'
  }
]
