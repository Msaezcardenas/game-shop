import styles from './sign-up.module.scss';
import { JoinLayout } from '@/layouts/JoinLayout';
import Link from 'next/link';
import { RegisterForm } from '@/components/Auth';

export default function SignUpPage() {
  return (
    <>
      <JoinLayout>
        <div className={styles.singIn}>
          <h3>Crear cuenta </h3>
          <RegisterForm />
          <div className={styles.actions}>
            <Link href='/join/sign-in'> atrás </Link>
          </div>
        </div>
      </JoinLayout>
    </>
  );
}
