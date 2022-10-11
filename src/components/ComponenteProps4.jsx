import styles from '../css/ComponenteProps4.module.css'

function ComponenteProps4({lugar, texto, logo_texto}){
return(
    <div className={styles.corpo_texto}>
        <h2> Venha explorar este lugar incrível {lugar}!!</h2>
        <p> {texto}</p>
        <img src={logo_texto} alt="logo" />
    </div>
)
}
export default ComponenteProps4