import github from"../../image/github.svg"
import linkdin from"../../image/linkdin.svg"
import figma from "../../image/figma.svg"
import styles from"./Footer.module.css"



function Footer(){
    return(
        <div className={styles.footer}>
            <div className={styles.contact}>
                <h3>
                    Meu Contato:<br/>
                    79 981715807
                </h3>
                <h3>
                    Email:<br/>
                    alissonsantos6150@gmail.com
                </h3>
            </div>
            <div className={styles.midia}>
                <img src={github} alt="" />
                <img src={linkdin} alt="" />
                <img src={figma} alt="" />

            </div>
        </div>
    );
};

export default Footer;