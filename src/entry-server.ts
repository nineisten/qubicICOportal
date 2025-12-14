import AppFrame from '../api/views/mods/app_frame'
import Main from '../api/views/components/elements/main'
import Div from '../api/views/components/elements/div'
export function render(_url: string) {
 const tmplUrl =_url===''?'home':_url.toLowerCase()
  const html = /*html*/`
    
    ${AppFrame({
      content:/*html*/`
      <!-- start app frame  -->
      ${Div({
        content:'',
        id:'top_header',
        'hx-get':'/portal/views/mod/main-header',
        'hx-swap':'outerHtml',
        'hx-target':'this',
        'hx-trigger':'load'
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
      ${Div({
        content:'',
        id:'chaindata',
        'hx-get':'/portal/views/mod/chaindata',
        'hx-swap':'outerHtml',
        'hx-trigger':'load',
        'hx-target':'this'
      })}
      ${Div({
        content:'',
        id:'main_footer',
        class:'main-footer',
        'hx-get':'/portal/views/mod/main-footer',
        'hx-swap':'outerHtml',
        'hx-target':'this',
        'hx-trigger':'load'
      })} 
      <!-- end app frame 
    `
  })}
    `
  return { html }
}
