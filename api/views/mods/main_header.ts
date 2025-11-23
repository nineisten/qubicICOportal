const css = /*css*/`
    .main_header{

    }
`

import logo from "../components/branding/logo.ts"
import Header from "../components/elements/header"
function MainHeader(user:true){
    
    const html=/*html*/`
    
${Header(/*html*/`
    <style>${css}</style>
    ${user?/*html*/`
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
`
:/*html*/`
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
    `}
`,{tag:'class',val:'main_header'})}
`
return html;
}
export default MainHeader;