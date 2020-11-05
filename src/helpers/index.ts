//transforma datas do formato DD/MM/YYYY para YYYY-MM-DD e vice-versa

export const transformDate = (date: string): string => {
    const fromInput = date.includes('/')

    if(fromInput) {
        const [day, month, year] = date.split('/')
        return `${year}-${month}-${day}`
    } else {
        const [day, month, year] = date.split('-')
        return `${day}/${month}/${year}`
    }
}
