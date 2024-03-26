import styles from"./Card.module.css"
import Button from"../Button.jsx"

function Card({img,link, title, desc}){
    return(
        <div className={styles.card}>
            <div>
            <img src={img} alt="Erro" />
            <h4>{title}</h4>
            <p>{desc}</p>
            <Button 
            text="Clique aqui"
            link={link}/>
            </div>
        </div>
    );
};

export default Card;