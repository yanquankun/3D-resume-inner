import React, { useState } from 'react';
import houseProject from '../../../assets/pictures/projects/audio/houseProject.png';
import dnbDrumsProject from '../../../assets/pictures/projects/audio/dnbDrumsProject.png';
import { MusicPlayer } from '../../general';
import dayjs from 'dayjs';

export interface MusicProjectsProps {}

const MusicProjects: React.FC<MusicProjectsProps> = (props) => {
    const currentYear = dayjs().year();
    const [currentSong, setCurrentSong] = useState<string>('');

    return (
        <div className="site-page-content">
            <h3>blog</h3>
            <br />
            <div className="text-block">
                <p>这是我的个人博客，我会不定期更新一些文章，不止前端范围.</p>
                <a
                    rel="noreferrer"
                    target="_blank"
                    href={'https://www.yanquankun.cn/'}
                >
                    <h4>www.yanquankun.cn</h4>
                </a>
                <br />
                <p>
                    欢迎来到我的技术博客！在这里，我将与大家分享我的技术见解、学习心得和项目经验。
                </p>
                <br />
                <p>
                    在这个博客中，我将涵盖前端开发的各个方面，包括但不限于HTML、CSS、JavaScript、框架等。我会发布一些技术教程、项目实践和对行业趋势的分析，希望能够给大家带来启发和帮助。
                </p>
                <br />
                <p>
                    我非常欢迎大家在阅读过程中提出任何问题、建议或意见。你们的反馈对我来说非常重要，将帮助我改进博客内容，为大家提供更好的阅读体验。
                </p>
                <br />
                <p>
                    最后，我要衷心感谢每一位阅读这篇文章的你。谢谢你的支持和关注！让我们一起在这个技术的世界里探索、学习、成长！
                </p>
                <br />
                <p>欢迎加入我的技术分享之旅！</p>
                <br />
            </div>
            <h2>博客展示</h2>
            <br />
            <div className="captioned-image">
                <img src={houseProject} alt="" />
                <p>
                    <sub>
                        <b>Figure 1:</b> A screenshot of the project file of
                        Timeless. 64 tracks in total.
                    </sub>
                </p>
            </div>
            <h2>有点无聊?</h2>
            <br />
            <p>那听一首歌曲放松下吧😄</p>
            <br />
            <MusicPlayer
                src="https://oss.yanquankun.cn/music/M800001cVn713lfo9y.mp3?Expires=1746778980&OSSAccessKeyId=TMP.3KmgMSxvych2pBDXjg4NNbNYWwXdDJtCxWRnCRMiPegW43aPchp2GzKDFYi97yjQARxR319WzTdtuM7G3vf4ZNEYx1wyaf&Signature=mCmIZadwB1l7HolPEbXQYt%2Fyjmc%3D"
                title="牵丝戏 [0.9x]"
                subtitle={'闫全堃（Mint） - 2019/' + currentYear}
                currentSong={currentSong}
                setCurrentSong={setCurrentSong}
            />
            <br />
            <h2>博客</h2>
            <br />
            <iframe
                src="https://www.yanquankun.cn/"
                style={styles.iframe}
                height={500}
                title="yanquankun"
            ></iframe>
        </div>
    );
};

const styles: StyleSheetCSS = {
    iframe: {
        width: '100%',
    },
};

export default MusicProjects;
