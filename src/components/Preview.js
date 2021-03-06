import React from 'react';
import ResetButton from './ResetButton';
import ProfileImage from './ProfileImage';
import PropTypes from 'prop-types';

class Preview extends React.Component {
    render() {
        const { name, job, email, phone, linkedin, github, palette } = this.props.newCard;
        return (
            <div>
                <section className={`section__card option${palette}`}>
                    <div className="card__box">
                        <ResetButton actionReset = {this.props.actionReset} />
                        <div className="card__box--header">
                            <div className="card__box--text">
                                <h3 className="card__name resultName">{name === '' ? 'Nombre y apellidos' : name}</h3>
                                <p className="card__job-title resultJob">{job === '' ? 'Front end developer' : job}</p>
                            </div>
                        </div>
                        <ProfileImage profile={this.props.profile}/>
                        <ul className="card__list">
                            <li className={`list__item list__item--email  ${email === '' ? 'hidden' : ''}`}>
                                <a href={`mailto:${email}`} className="card__list--link far fa-envelope email__icon" target="_blank" rel="noopener noreferrer" >email</a>
                            </li>
                            <li className={`list__item list__item--phone ${phone === '' ? 'hidden' : ''}`}>
                                <a href={`tel:${phone}`} className="card__list--link fas fa-mobile-alt phone__icon" target="_blank" rel="noopener noreferrer" >mobile</a>
                            </li>
                            <li className={`list__item list__item--linkelind ${linkedin === '' ? 'hidden' : ''}`}>
                                <a href={`https://www.linkedin.com/in/${linkedin}`} className="card__list--link fab fa-linkedin-in linkedin__icon" target="_blank" rel="noopener noreferrer" >linkedin</a>
                            </li>
                            <li className={`list__item list__item--github ${github === '' ? 'hidden' : ''}`}>
                                <a href={`https://github.com/${github}`} className="card__list--link fab fa-github-alt github__icon" target="_blank" rel="noopener noreferrer" >github</a>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        )
    }
}

Preview.propTypes = {
    name: PropTypes.string,
    job: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.number,
    linkedin: PropTypes.string,
    github: PropTypes.string,
    palette: PropTypes.number
}

export default Preview;