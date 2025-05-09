import React from 'react';
import Window from '../os/Window';
import useInitialWindowSize from '../../hooks/useInitialWindowSize';
import IframeLoading from '../general/IframeLoading';

export interface ThisComputerProps extends WindowAppProps {}

const Website: React.FC<ThisComputerProps> = (props) => {
    const { initWidth, initHeight } = useInitialWindowSize({ margin: 100 });

    return (
        <Window
            top={156}
            left={196}
            width={initWidth - 170}
            height={initHeight - 50}
            windowBarIcon="computerSmall"
            windowTitle="个人主页"
            closeWindow={props.onClose}
            onInteract={props.onInteract}
            minimizeWindow={props.onMinimize}
            bottomLeftText={'闫全堃（Mint）个人主页'}
        >
            <div className="site-page">
                {IframeLoading()}
                <iframe
                    src="https://www.yanquankun.cn/home/resume"
                    title="个人主页"
                    width="100%"
                    height="100%"
                    onLoad={() => {
                        const loading =
                            document.getElementById('iframe-loading');
                        if (loading) {
                            loading.style.display = 'none';
                        }
                    }}
                />
            </div>
        </Window>
    );
};

export default Website;
