export default function Spinner({isVisible}) {
    return (
        isVisible
        ?
        (
        <div className="d-flex justify-content-center">
            <div className="spinner-grow" role="status">
            <span className="visually-hidden">Loading...</span>
            </div>
        </div>
        )
        :
        null
    );
}