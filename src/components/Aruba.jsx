import styles from '../css/Aruba.module.css'
import ComponenteProps from './ComponenteProps'
import logo from '../imagens/viagens.png'

function Aruba() {
    return (
        <div className={styles.corpo}>
            <ComponenteProps
                lugar="Aruba"
                texto="Praias paradisíacas, mar cristalino, hotéis requintados,cassinos e programação para toda a família são alguns dos atrativos de Aruba."
                logo_texto={logo} />

        </div>
    )
}
export default Aruba