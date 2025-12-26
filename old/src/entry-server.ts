import AppFrame from '../api/views/mods/app_frame'
import Main from '../api/views/components/elements/main'
import Div from '../api/views/components/elements/div'

const css = /*css*/`
  .hide{
    display:none;
  }
  .main-wrapper{
    display:flex;
    flex-direction:row;
    flex-grow:1;
    min-width:100%;
  }
  @media screen and (max-width:63em){
    .main-wrapper{
      flex-direction:column;
    }
  }
`
export async function render(_url: string,context:{publicKey:string|null; isHtmx?:boolean}) {
  const {publicKey} = context

  const tmplUrl=  _url===''?'home':_url.toLowerCase()
  const clientUrl = _url===''|| _url==='home'?'/':_url.toLowerCase()

  const html = /*html*/`   
    ${AppFrame({
      content:/*html*/`
      <style>${css}</style>
      <!-- start app frame  -->
      ${Div({
        content:'',
        id:'top_header',
        'hx-get':'/views/mod/main-header',
        'hx-oob-swap':'true',
        'hx-target':'#top_header',
        'hx-trigger':'load'
      })}
     
        ${
        Main({
        content:'',
        id:'content_module',
        class:'main_columns',
        'hx-get':`/views/page/${tmplUrl}`,
        'hx-target':'#content_module',
        'hx-swap':'innerHtml',
        'hx-trigger':'load',
        'hx-push-url':clientUrl,
      })} </main>
      ${Div({
        content:'',
        id:'chaindata',
        'hx-get':'views/mod/chaindata',
        'hx-swap':'outerHtml',
        'hx-trigger':'load',
        'hx-target':'#chaindata'
      })}
     
      ${Div({
        content:'',
        id:'main_footer',
        class:'main-footer',
        'hx-get':'views/mod/main-footer',
        'hx-swap':'outerHtml',
        'hx-target':'#main_footer',
        'hx-trigger':'load'
      })} 
      <!-- end app frame -->
    `,
  })}
    `
   
  return { html }
}
