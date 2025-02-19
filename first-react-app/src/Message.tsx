function Message(){

    const name = 'Gang';
    if (name)
        return <h1> Hello {name}</h1>
    return <h1>Hello Nico</h1>
}
export default Message;