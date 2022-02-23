const React = require('react');     


const Stack = ({bits}) => {


    const badge = (info) => {
        return (
            <img className='badge-img' src={info} key={`key-for-${info}`} alt={`badge${info}`} />
        )
    }

    return (
        <div className='chat-stack'>
        { bits.map(bit=> badge(bit)) }
        </div>
    )
}

export default Stack;