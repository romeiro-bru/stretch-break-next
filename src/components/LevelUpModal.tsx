import styles from '../styles/components/LevelUpModal.module.css';

export function LevelUpModal() {
    return (
        <div className={styles.overlay}>
            <div className={styles.container}>
                <header>2</header>

                <strong>Parabéns</strong>
                <p>Você alcançou mais um level.</p>

                <button type="button">
                    <img src="/icons/close.svg" alt="fechar modal"/>
                </button>
            </div>
        </div>
    )
}