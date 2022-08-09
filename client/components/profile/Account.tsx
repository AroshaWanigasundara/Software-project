import React from 'react'
import Image from 'next/image';
import user from '../../assets/icons/man.png'
import TextField from '@mui/material/TextField';
import styles from './Styles.module.scss'

function Account() {
  return (
    <div>
      <h3>Account Settings</h3>
      <div className={styles.account_profile_card}>
        <div className={styles.account_profile_card_container}>
          <div className={styles.account_profile_card_container_left}>
              <div className={styles.account_profile_card_container_left_img}><Image className={styles.account_profile_card_container_left_img_icon} src = {user} layout = "responsive" objectFit="cover" m-50="true" alt=''/></div>
          </div>
          <div className={styles.account_profile_card_container_right}>
            <h1>Lakshan Pathiraja</h1>
            asdasdsad@gmail.com
          </div>
        </div>
      </div>
      <hr />
      <div className={styles.account_profile_container}>
          <h1>Personal Information</h1>
          you should verify your email before change this details.
          <div className={styles.account_profile_container_form}>
            <div className={styles.account_profile_container_form_section1}>
                <div className={styles.account_profile_container_form_section1_left}>
                    First Name
                    <br></br>
                    <TextField fullWidth
                      id="filled-read-only-input"
                      defaultValue="Lakshan"
                      InputProps={{
                        readOnly: true,
                      }}
                      variant="filled"
                    />
                </div>
                <div className={styles.account_profile_container_form_section1_right}>
                    Last Name
                    <br></br>
                    <TextField fullWidth
                      id="filled-read-only-input"
                      defaultValue="aPathiraja"
                      InputProps={{
                        readOnly: true,
                      }}
                      variant="filled"
                    />
                </div>
            </div>
            <div className={styles.account_profile_container_form_section2}>
              Email Address
              <br></br>
              <TextField fullWidth
                id="filled-read-only-input"
                defaultValue="abc@gmail.com"
                InputProps={{
                  readOnly: true,
                }}
                variant="filled"
              />
            </div>
            <div className={styles.account_profile_container_form_section3}>
              <div className={styles.account_profile_container_form_section3_left}>
                  
              </div>
              <div className={styles.account_profile_container_form_section3_right}>
                <div className={styles.account_profile_container_form_section3_right_btn}>
                  Save Changes
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Account