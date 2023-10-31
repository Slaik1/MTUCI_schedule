const date = new Date()
export const DaysOfWeek = {
    'пн':'Понедельник',
    'вт':'Вторник',
    'ср':'Среда',
    'чт':'Четверг',
    'пт':'Пятница',
    'сб':'Суббота',
    'вс':'Воскресение',
}

export const MakeValidDayOfWeek = (day: keyof typeof DaysOfWeek) => {
    return DaysOfWeek[day]
}


export const getCurrentDate = (): string => {
    let day = String(date.getDate())
    const month = String(date.getMonth() + 1)

    if (day.length === 1) day = day.padStart(2, '0')

    return `${day}.${month}`
}