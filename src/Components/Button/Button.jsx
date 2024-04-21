import './Button.css'

export const Button = ({onClick, content}) => {
    return (
        <div className='d-flex justify-content-center mb-5'>
            <button 
            type='button' 
            className='btn btn-primary btn-lg'
            onClick={onClick}
            >
                {content}
            </button>
        </div>
    )
}