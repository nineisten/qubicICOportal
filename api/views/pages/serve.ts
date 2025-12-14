import Main from "../components/elements/main"

export default function Serve(url:string){
    const tmplUrl = url===''?'home':url.toLowerCase()
    const html = /*html*/`
         ${Main({
                content:/*html*/`
                  loading...
                    <!--main content loads here-->
                `,
                id:'content_module',
                'hx-get':`/portal/views/page/${tmplUrl}`,
                'hx-target':'#content_module',
                'hx-swap':'innerHTML',
                'hx-trigger':'load delay:500ms',
                'hx-location':`${tmplUrl==='home'?'/':tmplUrl}`,
                'hx-push-url':true
            })}


    `
    return html.trim()
}