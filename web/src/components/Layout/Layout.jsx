import Footer from "./Footer/Footer"
import Header from "./Header/Header"
import Header from "./Layout.module.css"

const Layout = () => {
    return (
        <div className={StyleSheet.layout}>
            <Header />

            <Footer />

        </div>
    )
}

export default Layout