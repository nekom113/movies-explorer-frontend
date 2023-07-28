import './ErrorMessage.css'

export default function ErrorMessage({errorIsActive, errorMessage}) {
    return (
        <div className='error'>
            <span className={`error__text ${errorIsActive && 'error__text-active'}`}>{errorMessage}</span>
        </div>
    )
}
