import styles from '../css/MuralhaChina.module.css'
import ComponenteProps4 from './ComponenteProps4'
import logo from '../imagens/viagens.png'

function MuralhaChina(){
    return(
        <div className={styles.corpo}>
            <ComponenteProps4
            lugar="Muralha da China"
            texto="É a mais longa estrutura já construída pelo homem. Em 1987, a Organização das Nações Unidas (ONU) classificou o monumento como Patrimônio Histórico Mundial, protegendo-o contra os projetos de construção civil permitidos pelas leis chinesas. Tem 21.196 Km de extensão e também é considerada uma das 7 maravilhas do mundo."
            
            logo_texto={logo} />
            
        </div>
    )
}
export default MuralhaChina