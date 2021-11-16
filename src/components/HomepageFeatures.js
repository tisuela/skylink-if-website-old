import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Make it yours',
    Svg: require('../../static/img/index/undraw_new_ideas_jdea.svg').default,
    description: (
      <>
        Skylink-IF is currently in very early development. 
        How can we make Infinite Flight more fun for you? Put your ideas here: 
        <a href="https://forms.gle/NM17sCK82Wn75K337"> https://forms.gle/NM17sCK82Wn75K337</a>
      </>
    ),
  },
  {
    title: 'Looking for Developers',
    Svg: require('../../static/img/index/undraw_open_source_-1-qxw.svg').default,
    description: (
      <>
        If you feel inexperienced, we'd love to help you grow as a developer. 
        If you're a Typescript master, have fun with us! Skylink-IF is designed to be a fun side project. 
      </>
    ),
  },
  {
    title: 'Documentation Priorization',
    Svg: require('../../static/img/index/undraw_file_searching_re_3evy.svg').default,
    description: (
      <>
        We'll be prioritizing concise, well-written documentation to make it more enjoyable for 
        new developers to join in! 
        Do not be afraid --  we're here to help you 🥰
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
