import React from 'react';
import me from '../../assets/pictures/workingAtComputer.jpg';
import meNow from '../../assets/pictures/currentme.jpg';
import { Link } from 'react-router-dom';
import ResumeDownload from './ResumeDownload';
import dayjs from 'dayjs';

export interface AboutProps {}

const About: React.FC<AboutProps> = (props) => {
    const currentYear = dayjs().year();
    return (
        // add on resize listener
        <div className="site-page-content">
            {/* <img src={me} style={styles.topImage} alt="" /> */}
            <h1 style={{ marginLeft: -16 }}>Welcome</h1>
            <h3>I'm 闫全堃（Mint）</h3>
            <br />
            <div className="text-block">
                <p>
                    一枚一直向前奔跑中的前端程序员~ 业余时间,
                    我会在此持续更新个人介绍.
                    也会在此更新一项个人项目地址，如果对我感兴趣，联系我!
                </p>
                <br />
                <p>
                    感谢您抽出时间来查看我的作品集。我真心希望你们喜欢探索它，就像我喜欢制作它一样。如果您有任何问题或意见，请随时与我联系{' '}
                    ，给我发邮件{' '}
                    <a href="mailto:17600610907@163.com">17600610907@163.com</a>
                </p>
            </div>
            <ResumeDownload />
            <div className="text-block">
                <h3>About Me</h3>
                <br />
                <p>
                    2013年，我开始在大学学习计算机科学。这是我的第一选择，编程除了是我的工作，同样也是我的爱好。大四结束时，我开始了互联网开发工作，主要从事前端工作。
                </p>
                <p>
                    对于编程，与其说是一种谋生的手段，不如说是一种爱好。编程是我生活中不可或缺的一部分，我喜欢用代码来解决问题，创造出有趣的东西。
                </p>
                <p>
                    我喜欢用代码来表达我的想法，创造出有趣的东西。编程让我感到快乐，我希望能把这种快乐传递给更多的人。
                </p>
                <br />
                <div className="captioned-image">
                    <img
                        src="https://www.yanquankun.cn/cdn/resume/self.jpg"
                        style={styles.image}
                        alt=""
                    />
                    <p>
                        <sub>
                            <b>Figure 1:</b> A real photo of me developing this
                            website :)
                        </sub>
                    </p>
                </div>
                <br />
                <div style={{}}>
                    <div
                        style={{
                            flex: 1,
                            textAlign: 'justify',
                            alignSelf: 'center',
                            flexDirection: 'column',
                        }}
                    >
                        <h3>我的爱好</h3>
                        <br />
                        <p>
                            除了软件之外，我还有很多业余爱好。我更具体的爱好是：锻炼、烹饪和（毫不奇怪的）玩电子游戏.
                        </p>
                        <br />
                    </div>
                    <div style={styles.verticalImage}>
                        <img
                            src="https://www.yanquankun.cn/cdn/resume/myself.jpg"
                            style={styles.imageSm}
                            alt=""
                        />
                        <p>
                            <sub>
                                <b>Figure 2:</b> Me, April 2021
                            </sub>
                        </p>
                    </div>
                </div>
                <br />
                <br />
                <p>
                    如果你有任何问题或意见，我很乐意听到。你可以通过{' '}
                    邮件联系到我{' '}
                    <a href="mailto:17600610907@163.com">17600610907@163.com</a>
                </p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    contentHeader: {
        marginBottom: 16,
        fontSize: 48,
    },
    image: {
        height: 'auto',
        width: '30%',
    },
    imageSm: {
        height: 'auto',
        width: '25%',
    },
    topImage: {
        height: 'auto',
        width: '100%',
        marginBottom: 32,
    },
    verticalImage: {
        alignSelf: 'center',
        // width: '80%',
        marginLeft: 32,
        flex: 0.8,

        alignItems: 'center',
        // marginBottom: 32,
        textAlign: 'center',
        flexDirection: 'column',
    },
};

export default About;
