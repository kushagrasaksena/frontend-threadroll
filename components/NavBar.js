import Link from 'next/link'

const NavBar = () => {
    return (
        <div>
        <nav>
            <div className="nav-wrapper grey darken-1 ">
            <Link href="/"><a className="brand-logo left">Home</a></Link>
            <ul id="nav-mobile" className="right">
                <li><Link href="/signin"><a >Sign In</a></Link></li>
                <li><Link href="/signup"><a >Sign Up</a></Link></li>
                {/* <li><a href="collapsible.html">JavaScript</a></li> */}
            </ul>
            </div>
        </nav>
        
        </div>
    )
}
export default NavBar