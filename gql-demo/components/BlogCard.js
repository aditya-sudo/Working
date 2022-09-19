import Link from "next/link";
import styles from "../styles/BlogCard.module.css";

function BlogCard({ title, author, coverPhoto, key, datePublished, slug }) {
  return (
    <div className={styles.card}>
      <Link href={"/post/" + slug} className={styles.child}>
        <>
          <div className={styles.imageContainer}>
            <img
              width={100}
              height={100}
              src={coverPhoto?.url}
              alt="not working"
            />
          </div>
        </>
      </Link>
      <div className={styles.child}>
        <h2>{title}</h2>
        <div className={styles.details}>
          <div styles={styles.author}>
            <img src={author.avatar.url} alt="" width={100} height={100} />
            <h3>{author.name}</h3>
          </div>
          <div className={styles.date}>
            <h3>{datePublished}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
