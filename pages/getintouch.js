import React, { useState } from 'react'
import NavBar from '../components/navbar/NavBar'
import Footer from '../components/footer/footer'
import styles from '../styles/getintouch.module.css'

const GetInTouch = () => {
    const [email, setEmail] = useState("Email Address")
    const handleClick = (e) => {
        if (e.target.value == "Email Address") {
            setEmail("")
        }

    }

    return (
        <div>
            <NavBar />
            <div className={styles.wrapper}>
                <div className={styles.title}>  Get in Touch 🙌  </div>
                <div className={styles.subtitle}>Our expert team will
                    answer all your questions.
                    Write an email to  <a href="mailto:hi@sightspectrum.com"> hi@sightspectrum.com</a> </div>
                <div className={styles.inputs}>
                    <div className={styles.inputlabel}>
                        <div className={styles.label}>Name</div>
                        <input className={styles.input1} type="text" />
                    </div>
                    <div className={styles.inputlabel}>
                        <div className={styles.label}>Email</div>
                        <input className={styles.input1} type="text" />
                    </div>

                </div>
                <div className={styles.inputs}>
                    <div className={styles.inputlabel}>
                        <div className={styles.label}>Mobile Number</div>
                        <input className={styles.input1} type="text" />
                    </div>
                    <div className={styles.inputlabel}>
                        <div className={styles.label}>How Did You
                            Find Us?</div>
                        <select className={styles.input1}  >
                            <option value="null" > Null</option>
                        </select>
                    </div>

                </div>
                <div className={styles.inputs}>
                    <div className={styles.inputlabel2}>
                        <div className={styles.label}>Message</div>
                        <textarea className={styles.input2} type="text" />
                    </div>

                </div>

                <div className={styles.button}>Send</div>
            </div>


            <Footer />

        </div >
    )
}

export default GetInTouch