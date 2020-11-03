import React, {useState} from 'react'
import initialState from './initialState'

const MyContext = React.createContext();

function MyProvider({children}) {
    const [state, setstate] = useState(initialState)
    return (
      <MyContext.Provider value={null} state={state} setstate={setstate}>
          {children}
      </MyContext.Provider>
    )
}

function MyConsumer({children}) {
    return (
        <MyConsumer.Consumer>
            {context => {
                if (context === undefined) throw new Error('Consumer must be used within a Provider')
                return children(context)
            }}
        </MyConsumer.Consumer>
    )
}

export { MyProvider, MyConsumer }