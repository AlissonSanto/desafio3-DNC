import styles from"./Projects.module.css"
import Card from "../../objects/Cards/Card";
import dncwea from"../../image/dncWeather.svg"
import dncarq from"../../image/dncarquite.svg"



function Projects(){
    return(
        <div className={styles.projects}>
            <h2>Projetos</h2>
        <div>
            <Card 
            img={dncwea}
            link="https://desafio2-dnc.vercel.app/"
            title="DNC Weather"
            desc="Esse foi um dos desafio passado no curso da escola DNC,
                  no qual tive que fazer a parte do Front-End e integrar
                  duas APIs nela uma sendo o viaCep e a outra o open-Meteo!"/>
            <Card 
            img={dncarq}
            link="https://arquitetura-jade.vercel.app/"
            title="DNC Arquitetura"
            desc="Desafio da escola DNC a fazer um mini projeto Front-End."/>
        </div>
        <div>
            <Card 
            img="https://placehold.co/1200x700"
            link="https://desafio2-dnc.vercel.app/"
            title="Em Breve"
            desc="loren bla bla bla bla bla bla bla bla bla bla bla bla bla bla"/>
            <Card 
            img="https://placehold.co/1200x700"
            link="https://arquitetura-jade.vercel.app/"
            title="Em Breve"
            desc="contar ate 1000...1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
                  12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
                  25,..............................................................1000!"/>
        </div>
        </div>
    );
};

export default Projects;