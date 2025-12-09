import serve from '../api/views/pages/serve'
export function render(_url: string) {
  const html = /*html*/`
    <div>
    ${serve(_url)}
  </div>
    `
  return { html }
}
