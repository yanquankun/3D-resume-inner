const IframeLoading = () => {
    return (
        <div
            id="iframe-loading"
            style={Object.assign({}, styles.overlay, {
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            })}
        >
            <div style={styles.body} className="loading-screen-body">
                <p style={styles.green}>
                    <b>正在加载中，请耐心等待...</b>
                </p>
                <span
                    style={{ marginLeft: '5px' }}
                    className="blinking-cursor"
                />
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    overlay: {
        backgroundColor: 'black',
        width: '100%',
        height: '100%',
        display: 'flex',
        transition: 'opacity 0.2s, transform 0.2s',
        MozTransition: 'opacity 0.2s, transform 0.2s',
        WebkitTransition: 'opacity 0.2s, transform 0.2s',
        OTransition: 'opacity 0.2s, transform 0.2s',
        msTransition: 'opacity 0.2s, transform 0.2s',
        transitionTimingFunction: 'ease-in-out',
        MozTransitionTimingFunction: 'ease-in-out',
        WebkitTransitionTimingFunction: 'ease-in-out',
        OTransitionTimingFunction: 'ease-in-out',
        msTransitionTimingFunction: 'ease-in-out',
        boxSizing: 'border-box',
        fontSize: 16,
        letterSpacing: 0.8,
    },
    spacer: {
        height: 16,
    },
    link: {
        color: '#4598ff',
        cursor: 'pointer',
    },
    overlayText: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    body: {
        flex: 1,
        display: 'flex',
        width: '100%',
        boxSizing: 'border-box',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'end',
    },
    green: {
        color: '#00ff00',
    },
};
export default IframeLoading;
