import styles from"./Button.module.css"

function Button({text, link}){
    return(
        <div className={styles.button}>
            <a href={link}>
                <button> {text}</button>
                </a>
        </div>
    );
};

export default Button;