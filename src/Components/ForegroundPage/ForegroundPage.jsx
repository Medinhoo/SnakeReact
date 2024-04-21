
import './ForegroundPage.css'

export const ForegroundPage = ({content, using}) => {

    let classStyle= '';

    switch(using){
        case 'firstLoad':
            classStyle = "loadingPage"
            break
        case 'pause':
            classStyle = "pausingPage"
            break
        default:
            break
    }

    

    return (
        <div className={classStyle}>
            <div className="loadingContent" dangerouslySetInnerHTML={{ __html: content }}>
            </div>
        </div>
    );

}