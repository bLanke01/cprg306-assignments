export default function Item(props) {
    return (
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
            <h1 className="text-xl font-bold mb-2">{props.name}</h1>
            <li className="text-sm text-gray-100">Buy {props.quantity} in {props.category} </li>
        </div>
    );
}