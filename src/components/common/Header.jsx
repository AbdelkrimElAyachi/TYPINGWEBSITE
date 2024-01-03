import styles from "./header.module.css";

export default function Header(){
    
    return(
        <div className={styles.container}>
            <div className="logo">
                <a href="#">< img className={styles.logo} src="./assets/parametres.svg" alt="" /></a>
            </div>
            <nav>
                <ul className={styles.links} >
                    <li><a href="">Buy Me a Cat</a></li>
                    <li><a href="">My Others Projects</a></li>
                    <li><a href="">Contribute</a></li>
                </ul>
            </nav>
        </div>
    )
}