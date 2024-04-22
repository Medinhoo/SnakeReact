
export const Input = ({ label, value, onChange, placeholder }) => {

    return (
        <div className="d-flex flex-column justify-content-center align-items-center pt-3">
            <label className="pb-2" htmlFor="id">{label}</label>
            <input 
                name="id"
                type="text"
                placeholder={placeholder}
                onChange={(e) => onChange(e.target.value)}
                value={value} />
                {value.length > 0 && 
                <p className="pt-3 m-0">Welcome {value} ! Have a nice game !!</p> }
        </div>

    )
}