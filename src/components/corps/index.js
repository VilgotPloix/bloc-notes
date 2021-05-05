import React from 'react'

const Index = () => {

    const [title, setTitle] = React.useState('')
    const [content, setContent] = React.useState('')



    return (
        <div className="corps">
            <div className="display">
                <h1 className="title">{title}</h1>
                <h2 className="content">{content}</h2>
            </div>
            <div className="input">
                <input type="text" className="nameInput" placeholder="Title..." onChange={(e) => setTitle(e.target.value)} />
                <textarea className="contentInput" placeholder="Content..." onChange={(e) => setContent(e.target.value)} />
                <div className="btn"><button className="save">Save</button></div>
            </div>
        </div>
    )
}


export default Index