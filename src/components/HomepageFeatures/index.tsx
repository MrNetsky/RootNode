import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

import { SquareTerminal, NotebookPen, Joystick } from 'lucide-react'

type FeatureItem = {
  title: string;
  Icono: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Entornos de desarrollo y editores',
    Icono: SquareTerminal,
    description: (
      <>
        Mi flujo de trabajo en la terminal: configuraciones de editores modernos y sistemas Linux.
      </>
    ),
  },
  {
    title: 'Blog y bitácora',
    Icono: NotebookPen,
    description: (
      <>
        Artículos sobre descubrimientos y reflexiones técnicas.
      </>
    ),
  },
  {
    title: 'Hardware retro y modding',
    Icono: Joystick,
    description: (
      <>
        Proyectos de restauración, modding de consolas y hardware antiguo traído al presente.
      </>
    ),
  },
];

function Feature({title, Icono, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Icono className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
