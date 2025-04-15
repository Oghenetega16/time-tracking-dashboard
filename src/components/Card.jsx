import data from "/public/data.json"
export default function Card() {

    const colors = {
        lightOrange: 'hsl(15, 100%, 70%)',
        softBlue: 'hsl(195, 74%, 62%)',
        lightRed: 'hsl(348, 100%, 68%)',
        limeGreen: 'hsl(145, 58%, 55%)',
        violet: 'hsl(264, 64%, 52%)',
        softOrange: 'hsl(43, 84%, 65%)'
    }

    const colorKeys = Object.keys(colors)

    return (
        <>
            {data.map((item, index) => (
                <div className="card" key={index} style={{backgroundColor: colors[colorKeys[index]]}}>
                    <div className="card-details">
                        <div className="activity">
                            <p>{item.title}</p>
                            <img src="./src/assets/images/icon-ellipsis.svg" alt="ellipsis" />
                        </div>
                        <div className="duration">
                            <h1>{item.timeframes.weekly.current}hrs</h1>
                            <span>Last Week - {item.timeframes.weekly.previous}hrs</span>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}