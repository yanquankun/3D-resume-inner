import React from 'react';
import ResumeDownload from './ResumeDownload';
import dayjs from 'dayjs';

export interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = (props) => {
    const currentYear = dayjs().year();

    return (
        <div className="site-page-content">
            <ResumeDownload />
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>美团</h1>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href={'https://www.meituan.com/'}
                        >
                            <h4>www.meituan.com</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Frontend Engineer</h3>
                        <b>
                            <p>Autumn 2021 - Summer 2024</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    美团是一家科技零售公司，致力于通过技术和数据驱动的零售来提升消费者的生活质量。美团的使命是“让生活更美好”，通过技术和数据驱动的零售来提升消费者的生活质量。美团在中国拥有超过5亿活跃用户，覆盖了餐饮、酒店、旅游、外卖等多个领域。
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            负责的业务包括H5、Web、Native 、小程序，技术栈涉及
                            vue、react、rn等，项目包含骑手专送 App 、骑手众包
                            App 中的 RN、H5的迭代
                        </p>
                    </li>
                    <li>
                        <p>
                            承担骑手履约和智能硬件的跟版需求及日常开发工作，如外卖柜、换电柜、骑手地图笔记等
                        </p>
                    </li>
                    <li>
                        <p>
                            承接项目需求，承担项目主R角色，完成前端技术方案编写及评审工作，添加项目告警指标，制定灰度策略，跟进、推动项目
                            进展
                        </p>
                    </li>
                    <li>
                        <p>
                            调研新的 Web 项目使用 fero 配置化平台【low code
                            】可行性方案，编写项目结构流程图，接入配置化能力，解决配置化页
                            面所遇到的技术难点，承担部分组件物料的开发工作
                        </p>
                    </li>
                    <li>
                        <p>线上问题排查解决，TT 工单问题解决，日常组内值班</p>
                    </li>
                </ul>
                <b>业绩</b>
                <ul>
                    <li>
                        <p>
                            所负责的骑手地图笔记，目前 pv
                            量级达到了138w+，帮助骑手提升了找店指引效率，降低骑手取餐送餐难度，同时拉动了骑
                            手之间的互动
                        </p>
                    </li>
                    <li>
                        <p>
                            所负责的外卖柜小程序，日活用户达300w级别，日 pv
                            量级2500w+，为骑手和用户提供了稳定、快捷的存取餐方式
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },
    skillRow: {
        flex: 1,
        justifyContent: 'space-between',
    },
    skillName: {
        minWidth: 56,
    },
    skill: {
        flex: 1,
        padding: 8,
        alignItems: 'center',
    },
    progressBar: {
        flex: 1,
        background: 'red',
        marginLeft: 8,
        height: 8,
    },
    hoverLogo: {
        height: 32,
        marginBottom: 16,
    },
    headerContainer: {
        alignItems: 'flex-end',
        width: '100%',
        justifyContent: 'center',
    },
    hoverText: {
        marginBottom: 8,
    },
    indent: {
        marginLeft: 24,
    },
    headerRow: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
    },
};

export default Experience;
