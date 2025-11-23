
const css = /*css*/`
  header{
    padding:10pt;
    display: flex;
    flex-direction:row;
    justify-content:space-around;
    align-items:center;
    color:white;
  }
`
function Header (content:string,...meta:{tag:string,val:string}[]){
  const html = /*html*/`
    <style>${css}</style>
    <header  
      ${meta.map(m=>`${m.tag}="${m.val}"`).join(' ')}>
        ${content}
    </header>
  `;
  return html
}
export default Header;