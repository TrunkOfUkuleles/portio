const React = require('react');     


const Stack = ({bits}) => {


    const badge = (info) => {
        return (
            <img src={info} alt={`badge${info}`} />
        )
    }

    return (
        <div className='chat-stack'>
        { bits.map(bit=> badge(bit)) }
        </div>
    )
}

export default Stack;