const date = new Date()

export const getCurrentDate = (): string => {
    let day = String(date.getDate())
    const month = String(date.getMonth() + 1)

    if (day.length === 1) day = day.padStart(2, '0')

    return `${day}.${month}`
}