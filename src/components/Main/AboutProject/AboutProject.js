import './AboutProject.css'

export default function AboutProject() {
    return (
        <section className='project-section' id='project'>
            <h2 className='project-section__title'> О проекте</h2>
            <div className='project-section__description-block'>
                <div className='project-section__column'>
                    <h3 className='project-section__description-block-title'>
                        Дипломный проект включал 5&nbsp;этапов
                    </h3>
                    <p className='project-section__description-block-paragraph'>
                        Составление плана, работу над бэкендом, вёрстку, добавление функциональности и&nbsp;финальные
                        доработки.
                    </p>
                </div>
                <div className='project-section__column'>
                    <h3 className='project-section__description-block-title'>
                        На&nbsp;выполнение диплома ушло 5&nbsp;недель
                    </h3>
                    <p className='project-section__description-block-paragraph'>
                        У&nbsp;каждого этапа был мягкий и&nbsp;жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно
                        защититься.
                    </p>
                </div>
            </div>
            <div className='project-section__scale'>
                <div>
                    <p className='project-section__scale-title project-section__scale-title_selection'>1 неделя</p>
                    <p className='project-section__scale-text'>Back-end</p>
                </div>
                <div>
                    <p className='project-section__scale-title'>4&nbsp;недели</p>
                    <p className='project-section__scale-text'>Front-end</p>
                </div>
            </div>
        </section>
    )
}
