import './Techs.css'

export default function Techs() {
    return (
        <>
            <section className='tech-section' id='tech-section'>
                <h2 className='techs-section__header-title'>Технологии</h2>
                <h3 className='techs-section__title'>7 технологий</h3>
                <p className='techs-section__subtitle'>На курсе веб-разработки мы&nbsp;освоили технологии, которые применили
                    в&nbsp;дипломном проекте.</p>
                <ul className="techs-section__list">
                    <li className="techs-section__list-item">HTML</li>
                    <li className="techs-section__list-item">CSS</li>
                    <li className="techs-section__list-item">JS</li>
                    <li className="techs-section__list-item">React</li>
                    <li className="techs-section__list-item">Git</li>
                    <li className="techs-section__list-item">Express.js</li>
                    <li className="techs-section__list-item">mongoDB</li>
                </ul>
            </section>

        </>
    )
}
