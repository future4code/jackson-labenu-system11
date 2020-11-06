//transforma datas do formato DD/MM/YYYY para YYYY-MM-DD e vice-versa

export const transformDate = (date: string): string => {
    const fromInput: boolean = date.includes('/')

    if(fromInput) {
        const [day, month, year] = date.split('/')
        return `${year}-${month}-${day}`
    } else {
        const [day, month, year] = date.split('-')
        return `${day}/${month}/${year}`
    }
}

export const getAge = (birthdate: string): number => {
    const birthdateTimestamp: number = new Date(birthdate).getTime()

    return Math.round((Date.now() - birthdateTimestamp)/1000/60/60/24/365)
}
