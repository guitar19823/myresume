import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { images } from '../../../images';
import { Section } from '../sectionHoc/Section';
import { saveUserLanguage } from '../../../store/actions/pageAction';
import './SettingsSection.css';
import { Loader } from '../../loader/Loader';

export const SettingsSection = () => {
  const dispatch = useDispatch();
  const { pageData, isLoaded, activeLanguage } = useSelector(state => state.page);

  const handleClick = (language) => {
    if (activeLanguage !== language) {
      saveUserLanguage(language)(dispatch);
    }
  };

  if (!isLoaded) {
    return <Loader />;
  }

  return (
    <div className="SettingsSection_wr">
      <Section title={pageData.settings.title} image={images.settings}>
        {
          pageData.settings.data.map(setting => (
            <div key={setting.settingsName} className="SettingsSection">
              <strong>{setting.settingsName}</strong>
              <div className="SettingsSection__buttons">
                {
                  Object.keys(setting.buttons).map(language => (
                    <button
                      key={language}
                      className={activeLanguage === language ? 'btn_blue' : 'btn_grey'}
                      onClick={() => handleClick(language)
                    }>
                      {setting.buttons[language]}
                    </button>
                  ))
                }
              </div>
            </div>
          ))
        }
      </Section>
    </div>
  );
};