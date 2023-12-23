import "./header.css"

export default function Header(){



    return(
        <header>
            <div className="logo">
                <img src="./assets/parametres.svg" alt="" />
            </div>
            <nav>
                <ul>
                    <li><a href="./cat">Buy Me A Cat</a></li>
                    <li><a href="https://github.com/AbdelkrimElAyachi?tab=repositories">My others projects</a></li>
                    <li><a href="#">Contribute</a></li>
                </ul>
            </nav>
        </header>
    )
}