import React from 'react'
import Sidebar from './components/list/index'
import Corps from './components/corps/index'
import './style.css'

export default function App() {
    return (
        <div className="app">
            <Sidebar />
            <Corps />
        </div>
    )
}
