"use client";
import styles from "./FlexShowcase.module.scss";

export default function FlexShowcase() {
  const cards = [
    { title: "Card 1", description: "Flexible layout with smooth transitions", color: "#ff6b6b" },
    { title: "Card 2", description: "Responsive design for all devices", color: "#4ecdc4" },
    { title: "Card 3", description: "Interactive flexbox elements", color: "#45b7d1" },
    { title: "Card 4", description: "Modern and clean aesthetic", color: "#96ceb4" },
    { title: "Card 5", description: "Dynamic content scaling", color: "#ffeead" },
    { title: "Card 6", description: "Optimized for performance", color: "#d4a5a5" },
    { title: "Card 7", description: "Customizable layouts", color: "#9b59b6" },
    { title: "Card 8", description: "Engaging user experience", color: "#3498db" },
  ];

  return (
    <div className={styles.container}>
      <h2>Responsive Flexbox Showcase</h2>

      <section className={styles.example}>
        <h3>1. Equal Width Cards</h3>
        <div className={styles.equalCards}>
          {cards.slice(0, 4).map((card, i) => (
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
        <h3>2. Sidebar + Content Layout</h3>
        <div className={styles.sidebarLayout}>
          <div className={styles.sidebar}>
            <div className={styles.card}>
              <div className={styles.cardHeader} style={{ backgroundColor: cards[0].color }}>
                <h4>Sidebar Menu</h4>
              </div>
              <div className={styles.cardBody}>
                <p>Navigation and controls</p>
                <button className={styles.cardButton}>Menu</button>
              </div>
            </div>
          </div>
          <div className={styles.content}>
            {cards.slice(1, 4).map((card, i) => (
              <div key={i} className={styles.card}>
                <div className={styles.cardHeader} style={{ backgroundColor: card.color }}>
                  <h4>{card.title}</h4>
                </div>
                <div className={styles.cardBody}>
                  <p>{card.description}</p>
                  <button className={styles.cardButton}>View</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.example}>
        <h3>3. Wrapping Cards with Variable Widths</h3>
        <div className={styles.wrapLayout}>
          {cards.map((card, i) => (
            <div
              key={i}
              className={`${styles.card} ${styles[`width${(i % 3) + 1}`]}`}
            >
              <div className={styles.cardHeader} style={{ backgroundColor: card.color }}>
                <h4>{card.title}</h4>
              </div>
              <div className={styles.cardBody}>
                <p>{card.description}</p>
                <button className={styles.cardButton}>Details</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.example}>
        <h3>4. Centered Hero Layout</h3>
        <div className={styles.heroLayout}>
          {cards.slice(0, 3).map((card, i) => (
            <div
              key={i}
              className={`${styles.card} ${i === 1 ? styles.heroCard : ""}`}
            >
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