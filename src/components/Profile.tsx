import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return(
         <div className={styles.profileContainer}>
             <img src="https://avatars.githubusercontent.com/u/56081906?s=460&u=3ec07f792b3fa690983bec21ef934a81edc67ecb&v=4" alt=""/>
             <div>
                 <strong>Bruna Romeiro</strong>
                <p>
                    <img src="icons/level.svg" alt="level"/>
                    Level 1
                </p>
             </div>
         </div>
    )
}