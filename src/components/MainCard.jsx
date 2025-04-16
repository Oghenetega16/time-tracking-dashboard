export default function MainCard({ handleClick, frame }) {
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
                    <li 
                    className={frame === 'daily' && 'active'}
                    onClick={() => handleClick('daily')}>Daily</li>
                    <li 
                    className={frame === 'weekly' && 'active'}
                    onClick={() => handleClick('weekly')}>Weekly</li>
                    <li 
                    className={frame === 'monthly' && 'active'}
                    onClick={() => handleClick('monthly')}>Monthly</li>
                </ul>
            </div>
        </div>
    )
}