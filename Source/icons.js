const fs = require('fs')
const os = require('os')
const path = require('path')

const fas = require('@fortawesome/free-solid-svg-icons')
const faSvgSprite = require('fontawesome-svg-sprite-generator')

const sprite = faSvgSprite.generate([fas.faStar])

fs.writeFile(path.join(__dirname, '../dist/fa-icons.svg'), sprite.svg, (err) => {
    if (err) {
        throw err
    }
})

fs.writeFile(path.join(__dirname, '../dist/fa.json'), JSON.stringify(sprite.attributes, null, 4), (err) => {
    if (err) {
        throw err
    }
})

function toCamelCase(str) {
    return str.replace(/([-_][a-z])/gi, ($1) => {
        return $1.toUpperCase().replace('-', '').replace('_', '')
    })
}

const keysObjects = Object.keys(sprite.attributes).map((x) => ({
    class: sprite.attributes[x].class,
    id: x,
    enum: toCamelCase(x),
    viewBox: sprite.attributes[x].viewBox,
    width: (parseInt(sprite.attributes[x].viewBox.split(' ')[2], 10) / 512) * 16
}))

function keyObjectToString(fn) {
    return keysObjects
        .map((x, i) => {
            const end = i < keysObjects.length - 1 ? os.EOL : '';
            return `${fn(x)},${end}`
        })
        .reduce((prev, cur) => `${prev}${cur}`, '')
}

const enumName = 'Icons'
const outputEnum = `
export enum ${enumName} {
    ${keyObjectToString((x) => `${x.enum}`)}
}`
const outputIconMap = `export const faIconMap = new Map<${enumName}, {class: string, id: string, viewBox: string, width: number}>([
    ${keyObjectToString(
        (x) => `[${enumName}.${x.enum}, { class: '${x.class}', id: '${x.id}', viewBox: '${x.viewBox}', width: ${x.width}} ]`
    )}
])`

const outputIdMap = `export const faIdMap = new Map<string, ${enumName}>([
${keyObjectToString((x) => `["${x.id}", ${enumName}.${x.enum}]`)}
])`


const outputSvgFromIconFn = `export function faSvgFromIcon(icon: ${enumName}, scale: number = 1) {
    const aria = 'aria-hidden="true"'
    const focus = 'focusable="false"'
    const role = 'role="img"'
    const xmlns = 'xmlns="http://www.w3.org/2000/svg"'

    const ic = faIconMap.get(icon)
    const css = \`class="\${ic.class} fa-\${scale}x"\`
    const viewBox = \`viewBox="\${ic.viewBox}"\`
    const href = \`href="./fa-icons.svg#\${ic.id}"\`
    return \`<svg \${css} \${viewBox} \${aria} \${focus} \${role} \${xmlns}><use \${href}></use></svg>\`
}`

const output = `
${outputEnum}

${outputIconMap}

${outputIdMap}

${outputSvgFromIconFn}
`

fs.writeFile(path.join(__dirname, 'fa-icons.ts'), output, (err) => {
    if (err) {
        throw err
    }
})
