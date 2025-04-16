import data from "/public/data.json"
export default function Card({ frame }) {

    const colors = {
        lightOrange: 'hsl(15, 100%, 70%)',
        softBlue: 'hsl(195, 74%, 62%)',
        lightRed: 'hsl(348, 100%, 68%)',
        limeGreen: 'hsl(145, 58%, 55%)',
        violet: 'hsl(264, 64%, 52%)',
        softOrange: 'hsl(43, 84%, 65%)'
    }

    const images = {
        work: './src/assets/images/icon-work.svg',
        play: './src/assets/images/icon-play.svg',
        study: './src/assets/images/icon-study.svg',
        exercise: './src/assets/images/icon-exercise.svg',
        social: './src/assets/images/icon-social.svg',
        selfcare: './src/assets/images/icon-self-care.svg'
    }

    const previousTitle = {
        'daily': 'Yesterday',
        'weekly': 'Last Week',
        'monthly': 'Last Month'
    }

    const colorValues = Object.values(colors)

    return (
        <>
            {data.map((item, index) => {
                const key = item.title.toLowerCase().replace(" ", "")
                const current = item.timeframes[frame].current
                const previous = item.timeframes[frame].previous

                return (
                    <div className="card" 
                        key={index} 
                        style={{
                            backgroundColor: colorValues[index % colorValues.length],
                            backgroundImage: `url(${images[key]})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'top -8px right 15px',
                            backgroundSize: '70px'
                        }}>
                        <div className="card-details">
                            <div className="activity">
                                <p>{item.title}</p>
                                <img src="./src/assets/images/icon-ellipsis.svg" alt="ellipsis" />
                            </div>
                            <div className="duration">
                                <h1>{current}{current < 2 ? 'hr' : 'hrs'}</h1>
                                <span>{previousTitle[frame]} - {previous}{previous < 2 ? 'hr' : 'hrs'}</span>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}