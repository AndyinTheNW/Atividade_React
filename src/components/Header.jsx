import {Link} from 'react-router-dom'

import Logo from '../imagens/viagens.png'
import Lupa from '../imagens/lupa.png'
import styles from '../css/Header.module.css'

function Header(){
    return(
        <header className={styles.content}>
            <img src={Logo} alt="Logo" className={styles.logo} />
        
        <nav className={styles.menu}>
            <ul>
                <li><Link to='/'> Home </Link></li>
                <li><Link to='/Escocia'> Escocia </Link></li>
                <li><Link to='/GrandCanyon'> GrandCanyon </Link></li>
                <li><Link to='/MuralhaChina'> MuralhaChina </Link></li>
                <li><Link to='/Aruba'> Aruba </Link></li>
            </ul>
        </nav>
        <div className={styles.login}>
            <input type="search" />
        </div>
        <img src={Lupa} alt="Lupa" className={styles.lupa} />
        </header>
    )
}
export default Header