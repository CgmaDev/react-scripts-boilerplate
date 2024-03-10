import React from 'react';
import styles from './HomeScreen.module.scss';

const HomeScreen: React.FC = () => {
  return (
    <>
      <div className={`${styles.container}`}>
        <div className={`${styles.contentContainer}`}>
          <div className={`${styles.cardContainer}`}>
            <img className={`${styles.appLogo}`} src="/assets/logos/cgmalogo.png" alt="cgmalogo" />
            <div className={`${styles.title}`}>CgmaDev | ReactJS</div>
            <div className={`${styles.description}`}>
              React + TypeScript + Tailwind + Prettier + Storybook --&gt; boilerplate code
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
