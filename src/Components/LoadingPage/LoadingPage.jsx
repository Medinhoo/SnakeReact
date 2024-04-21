
import './LoadingPage.css'

export const LoadingPage = ({content}) => {

    return (
        <div className="loadingPage">
            <div className="loadingContent" dangerouslySetInnerHTML={{ __html: content }}>
            </div>
        </div>
    );

}