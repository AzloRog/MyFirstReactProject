import photo from "../images/Photo.png"

export default function Info() {
    return (
        <>
            <div className="info-image">
                <img className="info-image" src={photo} alt="the image"></img>

            </div>
            <div className="info-text">
                <div className="info-name">Daniel</div>
                <div className="info-job">Frontend Developer</div>
                <div className="info-buttons">
                    <a href="#" className="info-button info-button-email">Email</a>
                    <a href="#" className="info-button info-button-linkedIn">LinkedIn</a>
                </div>
            </div>
        </>
    )
}