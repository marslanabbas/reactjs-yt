import React from 'react'
import styles from './Header.module.css'



const Header = () => {
  return (
    <div className={styles.header}>
      <h3 className={styles.logo}>Arslan</h3>
      <button className={styles.btn}>LogIn</button>
    </div>
  )
}

export default Header