import { HtmlContext } from "next/dist/shared/lib/utils";

export async function getStaticProps(context) {
  try {
    const response = await fetch(`${process.env.API__HOST}/profileBD`);
    const data = await response.json();

    if ( !data ) {
      return {
        notFound: true,
      }
    }

    return {
      props: {user: data}, 
    }
  } catch {}
}

export default function Profile({ user }) {
  const {surname, name, patronymic, photo, sex, years, experience, city, skill, information, studying, Queue } = user || {};

  // skill.forEach(element => {
  //   <li className="skill-user__item skill-user__skills">{`${element}`}</li>
  // });

  return (
    <>
      <div className="Profile">

        <section className="profile-section-block informationUser">
          <div className="informationUser__info-block">
            <h1 className="informationUser__name">{`${surname} ${name} ${patronymic}`}</h1>
            <p className="informationUser__sex-dat">{`${sex}, ${years}`}</p>
            <p className="informationUser__city">{`город: ${city}`}</p>
          </div>
          <div className="userPhoto informationUser__photo">
            <img src={photo} alt="photo user" />
          </div>
        </section>

        <section className="profile-section-block  work-user">
          <h1 className="work-user__experience">опыта работы</h1>
          <p className="work-user__derection">{`${experience}`}</p>
        </section>

        <section className="profile-section-block skill-user">
          <h1 className="skill-user__title">навыки:</h1>
          <ul className="skill-user__list">            
            <li className="skill-user__item skill-user__skills">
              <li className="skill-user__item skill-user__skills">{skill.join(' ')}</li>
            </li>
          </ul>
        </section>

        <section className="profile-section-block">
          <h1 className="skill-user__title">другая информация</h1>
          <p className="skill-user__item">{`${information}`}</p>
        </section>

        <section className="profile-section-block ">
          <h1 className="skill-user__title">изучаю</h1>
          <ul className="skill-user__list">
            <li className="skill-user__item">{`${studying.join(' ')}`}</li>
          </ul>
        </section>

        <section className="profile-section-block">
          <h1 className="skill-user__title">В очереди на изучение:</h1>
          <ul className="skill-user__list">
            <li className="skill-user__item">{`${Queue.join(' ')}`}</li>
          </ul>
        </section>

      </div>
    </>
  )
}