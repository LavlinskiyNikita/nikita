export default function handler(req, res) {
  res.status(200).json(
    {
      surname: 'лавлинский',
      name: 'никита',
      patronymic: 'Евгенич',
      photo: 'https://www.thispersondoesnotexist.com/image?11647711583',
      sex: 'Мужчина',
      years: '28 апреля 2005',
      experience: 'нету',
      city: 'воронеж',
      skill: ["JavaScript","html5", "css3", "scss", "less", "верстка", "frontend", "adobe-photoshop", "adobe-Experience Design", "figma", "git", "gulp", "next.js", "react.js"],
      information: 'обмновляю портфолио и ризюме периодический сумму. Зп обговариваю лично ',
      studying: ["react"],
      Queue: ["node js"]
    }
  )
}
