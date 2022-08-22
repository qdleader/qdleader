import React, { createContext, useContext, useState } from 'react';
const Context = createContext();

function ComA() {
    const count = useContext(Context)
    return (
        <div>this is A
            app 传过来的数据为：{count}
            <ComC></ComC>
        </div>
    )
}

function ComC() {
    const count = useContext();
    return (
        <div>this is C

            app 传过来的数据为：{count}
        </div>
    )
}

function App() {
    const [count, setCount] = useState(0)
    return (
        <Context.Provider value={count}>
            <div>
                <ComA></ComA>
            </div>
        </Context.Provider>
    )
}


export default App