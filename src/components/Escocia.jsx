import styles from '../css/Escocia.module.css'
import ComponenteProps2 from './ComponenteProps2'
import logo from '../imagens/viagens.png'

function Escocia(){
    return(
        <div className={styles.corpo}>
            <ComponenteProps2
            lugar="Éscocia"
            texto="Turismo na escócia, localizado ao lado da Inglaterra, fica a Escócia, um dos países pertencentes ao Reino Unido.

            Que traz consigo uma grande carga histórica, lindas paisagens naturais e construções antigas, como seus castelos medievais."
            logo_texto={logo} />

            
        </div>
    )
}
export default Escocia