
export const Input = ({ label, value, onChange }) => {

    return (
        <div className="d-flex flex-column justify-content-center align-items-center pt-3">
            <label className="pb-2" htmlFor="id">{label}</label>
            <input 
                name="id"
                type="text"
                onChange={(e) => onChange(e.target.value)}
                value={value} />
                {value.length > 0 && <p className="pt-3 m-0">Have a nice game {value}</p> }

        </div>

    )
}