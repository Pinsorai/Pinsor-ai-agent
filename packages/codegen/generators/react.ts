export function generateReactPage(name: string) {
  return `
export default function ${name}() {
  return (
    <div>
      <h1>${name}</h1>
    </div>
  )
}
`;
}
