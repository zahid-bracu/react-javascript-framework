import React, {Suspense,lazy} from 'react'
const About = lazy(() => import('./About'));
const Home = lazy(() => import('./Home'));
export default function MainHomeLazyLoad() {
    return (
        <div>
            <Suspense fallback={<div>Loading Home Page...</div>}>
                <Home/>
            </Suspense>

            <Suspense fallback={<div>Loading About Page...</div>}>
                <About/>
            </Suspense>
        </div>
    )
}
