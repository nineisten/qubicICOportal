import serve from '../api/views/pages/serve'
export function render(_url: string) {
  const html = /*html*/`
    ${serve(_url)}
    `
  return { html }
}
