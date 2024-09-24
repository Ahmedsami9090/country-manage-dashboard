export interface regionDetails {
    id: string,
    arabicName: string,
    englishName: string,
    isActive: boolean
}
export interface countryDetails {
    id: string,
    arabicName: string,
    englishName: string,
    isActive: boolean,
    regions?: regionDetails[]
}

const countries: countryDetails[] = []
for (let i = 0; i < 100; i++) {
    let x: countryDetails = {
        id: ('S' + i + 1).toString(),
        arabicName: "المملكة العربية السعودية",
        englishName: `Saudi Arabia  ${'S' + i + 1}`,
        isActive: true,
        regions: [
            {
                id: (i + 1).toString() + '.1',
                arabicName: "الرياض",
                englishName: "Riyadh",
                isActive: true
            },
            {
                id: (i + 1).toString() + '.2',
                arabicName: "جدة",
                englishName: "Jeddah",
                isActive: false
            },
            {
                id: (i + 1).toString() + '.3',
                arabicName: "الدمام",
                englishName: "Dammam",
                isActive: false
            },
            {
                id: (i + 1).toString() + '.4',
                arabicName: "تبوك",
                englishName: "Tabouk",
                isActive: true
            },
        ]
    }
    let y: countryDetails = {
        id: ('U' + i + 2).toString(),
        arabicName: "الامارات العربية المتحدة",
        englishName: `United Arab of Emirates ${'U' + i + 2}`,
        isActive: false,
        regions: [
            {
                id: (i + 2).toString() + '.1',
                arabicName: "دبي",
                englishName: "Dubai",
                isActive: false
            },
            {
                id: (i + 2).toString() + '.2',
                arabicName: "ابو ظبي",
                englishName: "Abu Dhabi",
                isActive: false
            },
            {
                id: (i + 2).toString() + '.3',
                arabicName: "الشارقة",
                englishName: "Sharjah",
                isActive: true
            },
            {
                id: (i + 2).toString() + '.4',
                arabicName: "العين",
                englishName: "Al Ain",
                isActive: true
            },
            {
                id: (i + 2).toString() + '.5',
                arabicName: "عجمان",
                englishName: "Ajman",
                isActive: false
            },
        ]
    }
    let z = {
        arabicName: "البحرين",
        id: ('B' + i + 3).toString(),
        englishName: `Bahrain  ${'B' + i + 3}`,
        isActive: true,
        regions: [
            {
                id: (i + 3).toString() + '.1',
                arabicName: "المنامة",
                englishName: "Manama",
                isActive: true
            },
            {
                id: (i + 3).toString() + '.2',
                arabicName: "محرق",
                englishName: "Muharraq",
                isActive: true
            },
            {
                id: (i + 3).toString() + '.3',
                arabicName: "الحديد",
                englishName: "Al Hidd",
                isActive: false
            },
            {
                id: (i + 4).toString() + '.4',
                arabicName: "مدينة حمد",
                englishName: "Hamad Town",
                isActive: false
            },
        ]
    }
    countries.push(x)
    countries.push(y)
    countries.push(z)
}
export default countries