

export enum Icons {
    fasFaStar,
}

export const faIconMap = new Map<Icons, {class: string, id: string, viewBox: string, width: number}>([
    [Icons.fasFaStar, { class: 'svg-inline--fa fa-star fa-w-18', id: 'fas-fa-star', viewBox: '0 0 576 512', width: 18} ],
])

export const faIdMap = new Map<string, Icons>([
["fas-fa-star", Icons.fasFaStar],
])

export function faSvgFromIcon(icon: Icons, scale: number = 1) {
    const aria = 'aria-hidden="true"'
    const focus = 'focusable="false"'
    const role = 'role="img"'
    const xmlns = 'xmlns="http://www.w3.org/2000/svg"'

    const ic = faIconMap.get(icon)
    const css = `class="${ic.class} fa-${scale}x"`
    const viewBox = `viewBox="${ic.viewBox}"`
    const href = `href="./fa-icons.svg#${ic.id}"`
    return `<svg ${css} ${viewBox} ${aria} ${focus} ${role} ${xmlns}><use ${href}></use></svg>`
}
