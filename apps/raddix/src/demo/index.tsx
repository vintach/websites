import { ReactNode } from 'react';
import styles from './demo.module.scss';

const Demo = ({ children }: { children: ReactNode }) => {
  return <div className={styles.demo}>{children} </div>;
};

export const componentsDemo = {
  Demo
};
