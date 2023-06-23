import Image from 'next/image';
import styles from '../app/page.module.css';

export function XataliciousTItle() {
  return (
    <div className={styles.title}>
      <Image src="/xata-icon.png" alt="Xata Icon" height={60} width={60} />
      <h1>Xatalicious</h1>
    </div>
  );
}
