import React, { useEffect, useState, useCallback } from 'react';
import colors from '../../constants/colors';
import twitterIcon from '../../assets/pictures/contact-twitter.png';
import ghIcon from '../../assets/pictures/contact-gh.png';
import inIcon from '../../assets/pictures/contact-in.png';
import ResumeDownload from './ResumeDownload';

export interface ContactProps {}

// function to validate email
const validateEmail = (email: string) => {
    const re =
        // eslint-disable-next-line
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

interface SocialBoxProps {
    icon: string;
    link: string;
}

const SocialBox: React.FC<SocialBoxProps> = ({ link, icon }) => {
    return (
        <a rel="noreferrer" target="_blank" href={link}>
            <div className="big-button-container" style={styles.social}>
                <img src={icon} alt="" style={styles.socialImage} />
            </div>
        </a>
    );
};

const Contact: React.FC<ContactProps> = () => {
    return (
        <div className="site-page-content">
            <div style={styles.header}>
                <h1>Contact</h1>
                <div style={styles.socials}>
                    <SocialBox
                        icon={ghIcon}
                        link={'https://github.com/yanquankun'}
                    />
                </div>
            </div>
            <div className="text-block">
                <p>
                    如果你对我感兴趣，请随时联系我-我很乐意聊天！你可以通过我的个人邮箱联系我，或者填写下面的表格！
                </p>
                <br />
                <p>
                    <b>Email: </b>
                    <a href="mailto:17600610907@163.com">17600610907@163.com</a>
                </p>
            </div>
            <div className="text-block">
                <p>你也可以通过我的个人微信小程序和公众号关注我~</p>
                <br />
                <p>
                    <b>微信小程序: </b>
                    <br />
                    <img
                        src="https://www.yanquankun.cn/cdn/mini-program-qrcode.png"
                        style={styles.image}
                        alt=""
                    />
                </p>
                <p>
                    <b>公众号: </b>
                    <br />
                    <img
                        src="https://www.yanquankun.cn/cdn/gongzhonghao-qrcode.jpg"
                        style={styles.image}
                        alt=""
                    />
                </p>
            </div>
            <ResumeDownload altText="需要我的一份个人简历?" />
        </div>
    );
};

const styles: StyleSheetCSS = {
    socialImage: {
        width: 36,
        height: 36,
    },
    image:{
        width: '25%',
        height: 'auto',
    },
    buttons: {
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    formInfo: {
        textAlign: 'right',

        flexDirection: 'column',
        alignItems: 'flex-end',
        paddingLeft: 24,
    },
    star: {
        paddingRight: 4,
        color: 'red',
    },
    button: {
        minWidth: 184,
        height: 32,
    },
    header: {
        alignItems: 'flex-end',
        justifyContent: 'space-between',
    },
    socials: {
        marginBottom: 16,
        justifyContent: 'flex-end',
    },
    social: {
        width: 4,
        height: 4,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 8,
    },
};

export default Contact;
