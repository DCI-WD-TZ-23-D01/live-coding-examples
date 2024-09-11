import './List.css';

export const List = ({ 
    children, 
    color = "blue"
}) => {
    return (
        <ul className='List' style={{ background: color }}>
           { children }
        </ul>
    )
}
