import { useState } from 'react';
export function useWindowScroll() {
    const [y, sety] = useState(0);
    window.addEventListener('scroll', () => {
        const h = document.documentElement.scrollTop
        sety(h)
    })
    return [y]
}





// 如在app.js中使用

import { useWindowScroll } from './useWindowScroll'

function App() {
    const [y] = useWindowScroll();
    return (
        <div>
            {y}
        </div>
    )
}