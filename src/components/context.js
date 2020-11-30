import React, { createContext } from 'react'

export const ShopState = createContext({
    state: {},
    dispatch: null,
    shopping: null
})

// export function withConsumer(Component) {
//     return (props) => {
//         return <ShopState.Consumer>
//             {(state, dispatch, value) => <Component  {...props} state={state} dispatch={dispatch} value={value}/>}
//         </ShopState.Consumer>
//     }
// }