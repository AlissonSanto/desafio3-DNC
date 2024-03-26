import styles from"./Header.module.css"
import github from"../../image/github.svg"
import linkdin from"../../image/linkdin.svg"


function Header(){
    return(
        <div>
            <a>
                <button type="button">Projetos</button>
                <button type="button">Tecnologias</button>
                <button type="button">Sobre mim</button>
            </a>

            <nav className="nav_img">
                <a href="">
                <img src={github} alt="Erro" />
                <img src={linkdin} alt="Erro" />
                </a>
            </nav>

        </div>
    );
};

export default Header;