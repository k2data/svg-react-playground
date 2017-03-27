import asyncRoute from '../asyncRoute'

// async route
export default asyncRoute.bind(null, () => import('./containers/CounterContainer'))
