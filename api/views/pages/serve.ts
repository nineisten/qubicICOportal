import AppFrame from "../mods/app_frame.ts"
import MainHeader from "../mods/main_header.ts";
import Main from "../components/elements/main.ts";
import Footer from "../components/elements/footer.ts";

const serve = (_url:string)=>{
    console.log(_url)
    const templateFromUrl = _url !== ''? _url:'home'
    const html = /*html*/`
        
        ${AppFrame({
            content:/*html*/`
                <!--app starts here-->
            ${MainHeader({
                content:/*html*/``
            })}
            ${Main({
                content:/*html*/`
                    <!--main content loads here-->
                `,
                id:'content_module',
                'hx-get':`portal/views/page/${templateFromUrl}`,
                'hx-target':'#content_module',
                'hx-swap':'innerHTML',
                'hx-trigger':'load',
                'hx-push-url':_url==='home'?'/':_url,
            })}
            ${Footer(
                {year:2025,entity:'Qubic ICO'},
                {
                    content:/*html*/`

                    `,
                    id:'main_footer'
                }
            )}
            <!--app ends here-->
            `,'hx-boost':true
        })}
    `
    return html
}
export default serve;