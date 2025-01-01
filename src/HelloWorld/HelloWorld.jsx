import './HelloWorld.css';

function HelloWorld() {
    const text = 'Hello World';
    return(
        <div>
            <h1>{text.toUpperCase()}</h1>
            <Apalah text='texttttttt'/>
            <DiaApalah/>
        </div>
    )
}

export function Apalah({text = "ini teks"}) {
    return (
        <h2 className="title">{text} apalah</h2>
    )
}

export function DiaApalah() {
    return (
        <h3 className="component">dia apalah</h3>
    )
}

export default HelloWorld;