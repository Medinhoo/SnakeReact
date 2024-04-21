import { Input } from "./Components/Input/Input"

export const Player = ({ score, value, onChange }) => {
    return (
        <>
            <div className="score d-flex flex-column justify-content-center">
                <div className="d-flex justify-content-center align-items-end">
                <p className="m-0 p-2 border">
                    {`Your score : ${score}`}
                </p>
                </div>
                
                <Input 
                label='Username :' 
                value={value} 
                onChange={onChange} 
                />
            </div>
        </>

    )

}