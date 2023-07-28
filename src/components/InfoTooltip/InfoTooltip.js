import './InfoTooltip.css'
import {useClickClosePopup} from "../../Hooks/useClickClosePopup";

const InfoTooltip = ({isOpenConfig, onClose, toolTipText, }) => {


    useClickClosePopup(onClose, isOpenConfig)
    return (
        <section
            className={`popup ${isOpenConfig?.isOpen ? 'popup_opened' : ''}`}>
            <div className="popup__container">
                <button type="button" onClick={onClose} className="popup__close-icon"/>
                <div className={isOpenConfig?.status ? `popup__tooltip-icon_success` : `popup__tooltip-icon_fail `}/>
                <p className="popup__tooltip-text">{toolTipText}</p>
            </div>
        </section>
    )
}

export default InfoTooltip
