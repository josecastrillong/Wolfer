import styles from './styles.module.css';
import housePhoto from './assets/house_photos/front.jpg';

function PropertyPhotos() {
  return (
    <section className={styles.photosContainer}>
      <div className={styles.photo1Container}>
        <img className={styles.house_img} src={housePhoto} alt="house front" />
      </div>
      <div className={styles.secondPhotoSection}>
        <div className={styles.flex_row}>
          <div className={styles.photo_element}>
            <img className={styles.house_img} src={housePhoto} alt="house kitchen" />
          </div>
          <div className={styles.photo_element}>
            <img className={styles.house_img} src={housePhoto} alt="house kitchen" />
          </div>
        </div>
        <div className={styles.flex_row}>
          <div className={styles.photo_element}>
            <img className={styles.house_img} src={housePhoto} alt="house kitchen" />
          </div>
          <div className={styles.photo_element}>
            <img className={styles.house_img} src={housePhoto} alt="house kitchen" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PropertyPhotos;
