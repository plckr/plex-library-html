import { css } from 'lit'

const scroll = css`
    * {
        scrollbar-color: hsla(0,0%,100%,.2) transparent;
        -webkit-overflow-scrolling: touch;
    }

    *::-webkit-scrollbar {
        min-width: 10px;
        max-width: 14px;
        width: 1vw;
    }

    *::-webkit-scrollbar-track,
    *::-webkit-scrollbar-corner {
        background-color: transparent;
    }

    *::-webkit-scrollbar-thumb {
        min-height: 50px;
        border: 3px solid transparent;
        border-radius: 8px;
        background-color: hsla(0,0%,100%,.2);
        background-clip: padding-box;
    }

    *::-webkit-scrollbar-thumb:hover{
        background-color:hsla(0,0%,100%,.3);
    }

    *::-webkit-scrollbar-thumb:window-inactive {
        background-color: hsla(0,0%,100%,.05);
    }
`

const spinner = css`
    @keyframes spin {
        0% {
            transform: rotate(0deg)
        }
        to {
            transform: rotate(1turn)
        }
    }

    .loading-spinner {
        animation: spin .6s linear infinite;
        border: 2px solid transparent;
        border-radius: 50%;
        width: 24px;
        height: 24px;
        border-top-color: rgb(204, 123, 25);
        border-left-color: rgb(204, 123, 25);
        top: 50%;
        left: 50%;
        position: absolute;
        transform: translate(-50%, -50%);
    }
`

const mycss = {scroll, spinner}

export default mycss