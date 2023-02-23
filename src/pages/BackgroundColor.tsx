import { useBackground } from 'hooks'
import React from 'react'
import styles from "./BackgroundColor.module.css"
const BackgroundColor = () => {
  const { ref } = useBackground();
  
  return (
    <section ref={ref} className={styles.section}>
    </section>
  )
}

export default BackgroundColor