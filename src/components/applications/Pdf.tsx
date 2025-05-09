import React from 'react';
import Window from '../os/Window';
import useInitialWindowSize from '../../hooks/useInitialWindowSize';
import IframeLoading from '../general/IframeLoading';

export interface ThisComputerProps extends WindowAppProps {}

const Pdf: React.FC<ThisComputerProps> = (props) => {
    const { initWidth, initHeight } = useInitialWindowSize({ margin: 100 });

    return (
        <Window
            top={116}
            left={156}
            width={initWidth - 150}
            height={initHeight - 50}
            windowBarIcon="computerSmall"
            windowTitle="pdf工具"
            closeWindow={props.onClose}
            onInteract={props.onInteract}
            minimizeWindow={props.onMinimize}
            bottomLeftText={'© Copyright 2024 闫全堃（Mint）'}
        >
            <div className="site-page">
                {IframeLoading()}
                <iframe
                    src="https://www.yanquankun.cn/pdf/?lang=zh_CN"
                    title="pdf工具"
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

export default Pdf;
