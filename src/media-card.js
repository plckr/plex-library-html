import {LitElement, html, css} from 'lit-element';
import page from 'page';

class Media extends LitElement{
    static get styles() {
      return css`
        @keyframes CrossFadeImage {
            0% {
                opacity: 0
            }
        
            to {
                opacity: 1
            }
        }

        .item {
            width: 116px;
            height: 244px;
            font-size: 13px;
            font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;
            font-weight: 600;
            -webkit-font-smoothing: antialiased;
            padding: 15px 15px;
        }
        .item .poster {
            width: 116px;
            height: 174px;
            perspective: 500px;

            position: relative;
            transition: transform .8s;
            transform: rotateY(0deg);
            transform-style: preserve-3d;
            -webkit-user-select: none;
            user-select: none;

            overflow: hidden;
            border-radius: 4px;
            background-color: rgba(0,0,0,.45);
            box-shadow: 0 0 4px rgba(0,0,0,.3);

            cursor: pointer;
        }
        .item .poster div {
            min-width:100%;
            min-height: 100%;
            background-size: cover;
            background-position: center center;
        }
        .item .poster:hover {
            box-shadow: 0 0 0 1px #e5a00d, 0 0 4px rgba(0,0,0,.3);
            cursor: pointer;
            color:hsla(0,0%,100%,.7);
        }
        .item .poster:hover::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(farthest-corner at 50% 50%,rgba(50,50,50,.5) 50%,#323232 100%);
            animation-duration: 250ms;
            animation-name: CrossFadeImage;
        }
        .item .poster button {
            color: inherit;
        }
        .item .poster button.moreDetails {
            margin: 0;
            padding: 0;
            outline: none;
            border: 2px solid hsla(0,0%,100%,.7);
            border-radius: 50%;
            cursor: pointer;
            transition: color .2s;
            -webkit-user-select: none;
            user-select: none;
            touch-action: manipulation;
            -webkit-tap-highlight-color: transparent;
            background-color: rgba(0,0,0,.45);

            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);

            display: none;
            width: 42px;
            height: 42px;
            transition: all .2s;
            opacity: 0;
            fill: currentcolor;
        }
        .item .poster button.moreDetails:hover {
            background-color: #e5a00d;
            color: #1F2326;
            border-color: transparent;
        }
        .item .poster:hover button.moreDetails {
            opacity: 1;
            display: block;
            animation-duration: 250ms;
            animation-name: CrossFadeImage;
        }
        .item .title-container {
            padding-top: 10px;
        }
        .item .title-container * {
            display: block;
            cursor: default;
            color: #fff;
            line-height: 20px;
            height: 20px;
            user-select: none;
            -webkit-user-select: none;
            overflow: hidden !important;
            min-width: 0;
            max-width: 100%;
            text-overflow: ellipsis;
            white-space: nowrap !important;
        }
        .item .title-container a {
            text-decoration: none;
            cursor: pointer;
        }
        .item .title-container a:hover {
            text-decoration: underline;
            cursor: pointer;
        }
        .item .title-container span {
            color: hsla(0,0%,100%,.45);
        }
      `;
    }

    render(){
        return html`
            <link rel="stylesheet" href="/dist/fonts/open-sans/open-sans.css" type="text/css">
            <div class="item">
                <div class="poster" @click="${this._handleClick}">
                    <div style="background-image: url(/dist/img/posters/${this.id}.jpg)"></div>
                    <button class="moreDetails">
                        <svg viewBox="17.64 140.945 560 560"> <path d="M264.418,570.445v-33.222h-59.634l74.75-74.75l-23.421-23.423l-74.75,74.75v-59.633h-33.222v116.277H264.418 M339.168,402.839l74.75-74.75v59.634h33.222V271.445H330.863v33.223h59.633l-74.75,74.75L339.168,402.839z"/> </svg>
                    </button>
                </div>
                <div class="title-container">
                    <a title="${this.name}" @click="${this._handleClick}">${this.name}</a>
                    <span class="year">${this.year}</span>
                    <span class="secondary-info">${this.secondaryInfo}</span>
                </div>
            </div>
        `;
    }

    _handleClick(e) {
        e.preventDefault();
        page('/filmes-criancas/'+this.id);
    }

    constructor(){
        super();
        this.name = "Unknown";
        this.year = 2020;
        this.secondaryInfo = "um dia atrás";
    }

    static get properties(){
        return{
            name: { type: String },
            id: { type: String },
            year: { type: Number },
            secondaryInfo: { type: String }
        };
    }

}

customElements.define('media-card', Media);