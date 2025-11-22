

export function render(_url: string) {
  const html = /*html*/`
    <div 
      id="app_frame" 
      hx-get="portal/views/page/serve"
      hx-trigger="load" 
      hx-target="#app_frame" 
      hx-swap="innerHTML"
    >
      <!--app content will be loaded here-->
      Loading... 
    </div>
  `
  return { html }
}
