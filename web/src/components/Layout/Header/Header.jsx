import styles from "./Header.module.css"
const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.contents}>
            <div>
                Card Capture CHERRY
            </div>

            <nav className={styles.navigation}>
                <ul>
                    <li>
                        CARDS
                    </li>
                    <li>
                        Coming Soon
                    </li>
                </ul>
            </nav>
            </div>
        </header>
    )
}

export default Header