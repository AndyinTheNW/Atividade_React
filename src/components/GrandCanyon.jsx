import styles from '../css/GrandCanyon.module.css'
import ComponenteProps3 from './ComponenteProps3'
import logo from '../imagens/viagens.png'

function GrandCanyon(){
    return(
        <div className={styles.corpo}>
            <ComponenteProps3 
            lugar="GrandCanyon"
            texto="O Grand Canyon fica no estado do Arizona e é cortado pelo não tão tímido assim Rio Colorado, e forma uma paisagem mais imponente e impactante pessoalmente do que qualquer imagem possa representar. Por isso mesmo, ele é um dos passeios mais procurados por quem visita Las Vegas, que fica no estado vizinho, Nevada."
        
            logo_texto={logo} />

            
        </div>
    )
}
export default GrandCanyon