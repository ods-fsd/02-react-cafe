import styles from "./VoteStats.module.css"
import type { Votes } from "../../types/votes";

interface VoteStatsProps {
    votes: Votes;
}


export default function VoteStats({votes}: VoteStatsProps) {
    const { good, neutral, bad } = votes;
    const totalVotes = good + neutral + bad;
    const positiveRate =
    totalVotes > 0 ? Math.round((good / totalVotes) * 100) : 0;
    return (
        <div className={styles.container}>
           <div className={styles.container}>
            <p className={styles.stat}>Good: <strong>{good}</strong></p>
      <p className={styles.stat}>Neutral: <strong>{neutral}</strong></p>
      <p className={styles.stat}>Bad: <strong>{bad}</strong></p>
    <p className={styles.stat}>Total: <strong>{totalVotes}</strong></p>
      <p className={styles.stat}>Positive: <strong>{positiveRate}%</strong></p>        
        </div></div>
    );
}