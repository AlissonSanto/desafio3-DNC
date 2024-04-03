import styles from"./TimeLine.module.css"

function TimeLine({year, text}){
    return(
        <div className={styles.timeline}>
            <div>
            <nav className={styles.line}>
                <h4>{year}</h4>
            </nav>

            <nav className={styles.life}>
                <p>{text}</p>
            </nav>
            </div>
        </div>
    );
};

export default TimeLine;