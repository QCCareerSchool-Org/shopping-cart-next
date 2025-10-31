import React from 'react';

import styles from './index.module.scss';

const GroomingKitList: React.FC = () => {
  return (
    <div className={`${styles.kitNumberedList} container my-5`}>
      <div className={`${styles.listItem}`}>
        <div className={`${styles.circleNumber}`}>1</div>
        <div className={`${styles.listContent}`}>
          <h4>Professional-Grade Grooming Scissors</h4>
          <p>This kit includes a straight blade, a curved blade, and thinning scissors, wrapped in a beautiful leather case for portability and convenience</p>
        </div>
      </div>
      <div className={`${styles.listItem}`}>
        <div className={`${styles.circleNumber}`} style={{ backgroundColor: 'transparent' }} />
        <div className={`${styles.listContent}`}>
          <h4>Grooming Tools Starter Kit</h4>
        </div>
      </div>
      <div className={`${styles.listItem}`}>
        <div className={`${styles.circleNumber}`}>2</div>
        <div className={`${styles.listContent}`}>
          <p>A Fine-Toothed Comb</p>
        </div>
      </div>
      <div className={`${styles.listItem}`}>
        <div className={`${styles.circleNumber}`}>3</div>
        <div className={`${styles.listContent}`}>
          <p>2 Nail Clippers (Large and Small)</p>
        </div>
      </div>
      <div className={`${styles.listItem}`}>
        <div className={`${styles.circleNumber}`}>4</div>
        <div className={`${styles.listContent}`}>
          <p>2 Mat Breakers (Large and Small)</p>
        </div>
      </div>
      <div className={`${styles.listItem}`}>
        <div className={`${styles.circleNumber}`}>5</div>
        <div className={`${styles.listContent}`}>
          <p>2 Slicker Brushes (Soft and Hard)</p>
        </div>
      </div>
      <div className={`${styles.listItem}`}>
        <div className={`${styles.circleNumber}`}>6</div>
        <div className={`${styles.listContent}`}>
          <p>A Pair of Greyhound Combs</p>
        </div>
      </div>
      <div className={`${styles.listItem}`}>
        <div className={`${styles.circleNumber}`}>7</div>
        <div className={`${styles.listContent}`}>
          <p>An Undercoat Rake</p>
        </div>
      </div><div className={`${styles.listItem}`}>
        <div className={`${styles.circleNumber}`}>8</div>
        <div className={`${styles.listContent}`}>
          <p>A Curry Comb</p>
        </div>
      </div>
    </div>
  );
};

export default GroomingKitList;
