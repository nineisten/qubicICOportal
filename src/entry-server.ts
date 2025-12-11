import AppFrame from '../api/views/mods/app_frame'
import MainHeader from '../api/views/mods/main_header'
import Main from '../api/views/components/elements/main'
import Footer from '../api/views/components/elements/footer'
import Chaindata from '../api/views/mods/chaindata'
export function render(_url: string) {
 const tmplUrl =_url===''?'home':_url.toLowerCase()
  const html = /*html*/`
    
    ${AppFrame({
      content:/*html*/`
      <!-- start app frame  -->
        ${MainHeader({
            content:/*html*/``
            })}
        
            ${Main({
                content:/*html*/`
                    <!--main content loads here-->
                `,
                id:'content_module',
                'hx-get':`portal/views/page/${tmplUrl}`,
                'hx-target':'#content_module',
                'hx-swap':'innerHTML',
                'hx-trigger':'load',
                'hx-push-url':`${tmplUrl==='home'?'/':tmplUrl}`,
            })}
            ${Chaindata()}
            ${Footer(
                {year:2025,entity:'Qubic ICO'},
                {
                    content:/*html*/`

                    `,
                    id:'main_footer'
                }
            )}

      <!-- end app frame  -->
    `,'hx-boost':true
  })}
    `
  return { html }
}
