export default function getBoxShadowValue(shadows) {

    let finalString = ""

    shadows.forEach(shadow => {
        if(shadow.active) {
            shadow.inputs.forEach(input => {
                if(input.type === 'range') finalString += `${input.value}px `
                else if (input.type === 'color') finalString += `${input.value}`
            })
        }
        if(shadow.inset) finalString += " inset"
        // We can have more than 1 shadow, so manage the separator
        if(shadows.indexOf(shadow) === shadows.length - 1) finalString += ";"
        else finalString += ","
    })
    return finalString
}