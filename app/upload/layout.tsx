import styles  from './upload.module.css';





export default function UploadLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <section>
        <main className={styles.main}>
            {children}
        </main>
        
      </section>
    );
  }