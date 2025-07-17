"use client";
import styles from "./GridShowcase.module.scss";

export default function GridShowcase() {
  const cards = [
    { title: "Card 1", description: "Modern design with smooth animations", color: "#ff6b6b" },
    { title: "Card 2", description: "Responsive layout with hover effects", color: "#4ecdc4" },
    { title: "Card 3", description: "Flexible grid system", color: "#45b7d1" },
    { title: "Card 4", description: "Clean and minimal aesthetic", color: "#96ceb4" },
    { title: "Card 5", description: "Dynamic content scaling", color: "#ffeead" },
    { title: "Card 6", description: "Interactive card elements", color: "#d4a5a5" },
    { title: "Card 7", description: "Optimized for all devices", color: "#9b59b6" },
    { title: "Card 8", description: "Customizable grid layouts", color: "#3498db" },
  ];

  return (
    <div className={styles.container}>
      <h2>Responsive Grid Showcase</h2>

      <section className={styles.example}>
        <h3>1. Adaptive 3-Column Grid</h3>
        <div className={styles.gridThree}>
          {cards.slice(0, 6).map((card, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.cardHeader} style={{ backgroundColor: card.color }}>
                <h4>{card.title}</h4>
              </div>
              <div className={styles.cardBody}>
                <p>{card.description}</p>
                <button className={styles.cardButton}>Explore</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.example}>
        <h3>2. Masonry Layout</h3>
        <div className={styles.masonry}>
          {cards.map((card, i) => (
            <div
              key={i}
              className={`${styles.card} ${styles[`height${(i % 3) + 1}`]}`}
            >
              <div className={styles.cardHeader} style={{ backgroundColor: card.color }}>
                <h4>{card.title}</h4>
              </div>
              <div className={styles.cardBody}>
                <p>{card.description}</p>
                <button className={styles.cardButton}>Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.example}>
        <h3>3. Auto-fit Fluid Grid</h3>
        <div className={styles.autoFit}>
          {cards.map((card, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.cardHeader} style={{ backgroundColor: card.color }}>
                <h4>{card.title}</h4>
              </div>
              <div className={styles.cardBody}>
                <p>{card.description}</p>
                <button className={styles.cardButton}>View Details</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.example}>
        <h3>4. Staggered Overlap Grid</h3>
        <div className={styles.staggered}>
          {cards.slice(0, 5).map((card, i) => (
            <div key={i} className={`${styles.card} ${styles[`stagger${i % 3}`]}`}>
              <div className={styles.cardHeader} style={{ backgroundColor: card.color }}>
                <h4>{card.title}</h4>
              </div>
              <div className={styles.cardBody}>
                <p>{card.description}</p>
                <button className={styles.cardButton}>Discover</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}