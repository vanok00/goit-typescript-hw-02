import styles from "./LoadMoreBtn.module.css";

interface LoadMoreBtn {
  onClick: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtn> = ({ onClick }) => {
  return (
    <div className={styles.container}>
      <button className={styles.loadMoreBtn} onClick={onClick}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
