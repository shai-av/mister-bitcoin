import { NavLink } from "react-router-dom";

export function AppHeader() {
    return (
        <header className='app-header'>
            <section className='container'>
                <h1 className="logo">misterBitcoin</h1>
                <nav>
                    <NavLink exact to='/' >Home</NavLink>
                    <NavLink to='/contact'>Contacts</NavLink>
                    <NavLink to='/statistics'>Statistics</NavLink>
                </nav>
            </section>
        </header>
    )
}