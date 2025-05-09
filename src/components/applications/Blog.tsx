import React from 'react';
import Window from '../os/Window';
import useInitialWindowSize from '../../hooks/useInitialWindowSize';
import IframeLoading from '../general/IframeLoading';

export interface ThisComputerProps extends WindowAppProps {}

const Blog: React.FC<ThisComputerProps> = (props) => {
    const { initWidth, initHeight } = useInitialWindowSize({ margin: 100 });

    return (
        <Window
            top={76}
            left={96}
            width={initWidth - 100}
            height={initHeight - 50}
            windowBarIcon="computerSmall"
            windowTitle="堃堃的博客"
            closeWindow={props.onClose}
            onInteract={props.onInteract}
            minimizeWindow={props.onMinimize}
            bottomLeftText={'闫全堃（Mint）个人博客'}
        >
            <div className="site-page">
                {IframeLoading()}
                <iframe
                    src="https://www.yanquankun.cn/"
                    title="个人博客"
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

export default Blog;
