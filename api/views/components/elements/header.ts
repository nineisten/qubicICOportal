const Header = (content:string,...meta:{tag:string,val:string}[]) => {
  return /*html*/`
    <div  class="header" ${meta.map(m=>`${m.tag}="${m.val}"`).join(' ')}>
        ${content}
    </div>
  `;
}