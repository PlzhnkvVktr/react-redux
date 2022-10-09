import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { privateRoutes, publicRoutes } from '../../router'

type Props = {
  owner: any
}

export const AppRouter = ({owner}: Props) => {
  return (
    <Routes>
      
        {/* {privateRoutes.map((route, idx) => 
            <Route 
                key={idx}
                path={route.path}
                element={route.element}
            />
        )

        } */}
      {owner 
      ?
        privateRoutes.map((route, idx) => 
          <Route 
            key={idx}
            path={route.path}
            element={route.element}
          />
        )
      :
        publicRoutes.map((route, idx) => 
          <Route 
            key={idx}
            path={route.path}
            element={route.element}
          />
        )
      }
    </Routes>
  )
}