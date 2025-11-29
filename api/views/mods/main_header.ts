const css = /*css*/`
    .main_header{

    }
    .main_header a {
        font-size:10pt;
        font-weight:600;
    }
`

import Logo from "../components/branding/logo.ts"
import Link from "../components/elements/link.ts"
import Li from "../components/elements/li.ts"
import Ul from "../components/elements/ul.ts"
import Header from "../components/elements/header"
import {links} from "../../models/links.ts"
import Button from "../components/elements/button.ts"
import Nav from "../components/elements/nav.ts"
import { lock } from "../components/svg/lock.ts"
function MainHeader(user:true){
const html=/*html*/`
    <style>${css}</style>
    ${Header(/*html*/`
        ${(Logo(200))}

        ${Nav(/*html*/`
            ${Ul(/*html*/`
                ${links.map((l,i)=>/*html*/`
                    ${Li(/*html*/`
                        ${Link(`${l.url}`,/*html*/`
                            ${l.label}
                            <!-- end html-->
                        `,
                        {tag:'id:',val:`nav_link_${l.label}`},
                        {tag:'key',val:`nav_link_${l.label}_${i}`},
                        {tag:'hx-get',val:l.view},
                        {tag:'hx-swap',val:'innerHTMl'},
                        {tag:'hx-trigger',val:'click'},
                        {tag:'hx-push-url',val:`${l.url}`},
                        {tag:'hx-target',val:`#content_module`},
                        {tag:'hx-location',val:`${l.url}`}
                        )}
                        <!-- end html-->
                    `)}
            `).join('\n ')}

        `)}
        
            <!-- end html-->
        `)}
        ${Button(`${lock(9,9)} Wallet Connect`)}
    <!-- end html-->
    `)} 
<!-- end html-->
 `
return html.trim();
}
export default MainHeader;