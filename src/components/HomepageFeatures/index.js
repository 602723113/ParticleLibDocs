import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '简洁方便',
    // Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        ParticleLib 提供极其简洁易懂的 API，使你可以毫无压力地开始验证你的绝佳创意，只需编写最少量的代码，即可实现丰富的功能。
      </>
    ),
  },
  {
    title: '易于扩展',
    // Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        众多 ParticleLib 所提供的工具类足以使你减少许多数学上的麻烦, 甚至你可以不需要数学基础就可以写出简单的粒子特效
      </>
    ),
  },
  {
    title: 'MIT 协议',
    // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        任何人都可以自由使用、修改、分发或将其用于商业项目，而不受任何限制。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
