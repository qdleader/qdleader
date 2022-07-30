import { useEffect, useState } from "react";

export function useLocalStorage(key, defaultValue) {
    const [message, setMessage] = useState(defaultValue)
    useEffect(() => {
        window.localStorage.setItem(key, message)
    }, [])
    return [message, setMessage]
}

// 如在app.js中使用

import { useLocalStorage } from './useWindowScroll'
import { message } from 'antd';

function App() {
    const [message, setMessage] = useLocalStorage('hook-key', 'qdleader');
    setTimeout(() => {
        setMessage('qdleader2')
    })
    return (
        <div>
            {message}
        </div>
    )
}