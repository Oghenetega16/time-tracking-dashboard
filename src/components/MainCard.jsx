export default function MainCard() {
    return (
        <div className="main-card">
            <div className="top-card">
                <div className="card-image">
                    <img src="./src/assets/images/image-jeremy.png" alt="jeremy photo" />
                </div>
                <div className="card-report">
                    <span>Report for</span>
                    <h1>Jeremy Robson</h1>
                </div>
            </div>
            <div className="bottom-card">
                <ul>
                    <li>Daily</li>
                    <li>Weekly</li>
                    <li>Monthly</li>
                </ul>
            </div>
        </div>
    )
}