import logo from "../components/branding/logo.ts"

const MainHeader = (user:true) =>/*html*/`
<header id="main-header">
    ${logo(200)}
    <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#ICO ">ICO</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
    <button>
        wallet connect
    </button>
</header>
`
export default MainHeader;