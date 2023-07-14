import './Tech.css'

export default function Tech() {
    return (
        <>
            <section className='tech-section' id='tech'>
                <h2 className='tech-section__header-title'>Технологии</h2>
                <h3 className='tech-section__title'>7 технологий</h3>
                <p className='tech-section__subtitle'>На курсе веб-разработки мы&nbsp;освоили технологии, которые
                    применили
                    в&nbsp;дипломном проекте.</p>
                <ul className="tech-section__list">
                    <li className="tech-section__list-item">HTML</li>
                    <li className="tech-section__list-item">CSS</li>
                    <li className="tech-section__list-item">JS</li>
                    <li className="tech-section__list-item">React</li>
                    <li className="tech-section__list-item">Git</li>
                    <li className="tech-section__list-item">Express.js</li>
                    <li className="tech-section__list-item">mongoDB</li>
                </ul>
            </section>

        </>
    )
}
