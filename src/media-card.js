import {LitElement, html, css} from 'lit'
import { styleMap } from 'lit/directives/style-map'
import page from 'page'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)
import 'dayjs/locale/pt'
dayjs.locale('pt')
import axios from 'axios'
import mycss from './custom-css'

class Media extends LitElement{
    static get styles() {
      return [
        css`
          @keyframes CrossFadeImage {
            from { opacity: 0 }
            to { opacity: 1 }
          }

          :host {
            font-size: 1rem;
          }

          .item {
            width: 7.3rem;
            height: 16rem;
            font-size: max(13px, 0.8rem);
            font-family: 'Open Sans Semibold', sans-serif;
            -webkit-font-smoothing: antialiased;
            /* padding: 15px 15px; */
          }
          .item .poster {
            width: 7.3rem;
            height: 11rem;
            position: relative;
            overflow: hidden;
            border-radius: 4px;
            background-color: rgba(0,0,0,.45);
            box-shadow: 0 0 4px rgba(0,0,0,.3);
            cursor: pointer;
          }
          .poster-icon {
            position: relative;
            width: 100%;
            transform: translateY(calc(11rem / 2));
          }
          .poster-icon>svg {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            color: hsla(0,0%,100%,.15);
            fill: currentColor;
            width: 2rem;
            height: 2rem;
          }
          .item .poster div {
            min-width:100%;
            min-height: 100%;
            background-size: cover;
            background-position: center center;
            animation-name: CrossFadeImage;
            animation-duration: 600ms;
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
          .item .title-container span.loading {
            color: #fff;
          }
          .item .title-container span {
            color: hsla(0,0%,100%,.45);
          }

          .item .poster span.episodes {
            top: 4px;
            right: 4px;
            background-color: #e5a00d;
            color: #1f2326;
            position: absolute;
            padding: 0 6px;
            min-width: 14px;
            border-radius: 4px;
            text-align: center;
            font-family: 'Open Sans Bold', sans-serif;
            line-height: 22px;
            font-size: 14px;
            opacity: 1;
            transition: all .2s;
          }

          .item .poster:hover span.episodes {
            opacity: 0;
            transform: translateY(-10px);
          }
        `
      ]
    }

    render(){
      if (!this.loaded)
        return html`
          <div class="item">
            <div class="poster">
              <div></div>
            </div>
            <div class="title-container">
              <span class="loading">A carregar...</span>
            </div>
          </div>
        `
        return html`
            <div class="item">
              <div class="poster-icon">
                ${this._htmlIcon(this.library.type)}
              </div>
              <div class="poster" @click="${this._handleClick}">
                <div style=${styleMap({backgroundImage: `${this.posterBlob}`})}></div>
                ${this.media.episodes!==undefined?html`<span class="episodes">${this.media.episodes}</span>`:``}
                <button class="moreDetails">
                  <svg viewBox="17.64 140.945 560 560"> <path d="M264.418,570.445v-33.222h-59.634l74.75-74.75l-23.421-23.423l-74.75,74.75v-59.633h-33.222v116.277H264.418 M339.168,402.839l74.75-74.75v59.634h33.222V271.445H330.863v33.223h59.633l-74.75,74.75L339.168,402.839z"/> </svg>
                </button>
              </div>
              <div class="title-container">
                <a title="${this.media.title}" @click="${this._handleClick}">${this.media.title}</a>
                <span class="year">${this.media.year}</span>
                ${this.showTimeAgo?html`
                  <span class="secondary-info">${dayjs.unix(this.media.added).fromNow()}</span>
                `:``}
              </div>
            </div>
        `
    }

    get posterBlob() {
      if (!this._posterBlob) return `url("data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7")`
      return `url("${this._posterBlob}")`
    }

    _htmlIcon(type) {
      switch(type) {
        case "menu":
          return html`
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 560">
              <path d="M28 420h504v62.222H28V420zm0-171.333h504v62.222H28v-62.222zM28 78h504v62.222H28V78z"></path>
            </svg>
          `
        case "home":
          return html`
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 560">
              <path d="M0 520V296.569a40 40 0 0 1 11.716-28.285L280 0l268.284 268.284A40 40 0 0 1 560 296.57V520c0 22.091-17.909 40-40 40H340V360H220v200H40c-22.091 0-40-17.909-40-40z"></path>
            </svg>
          `
        case "show":
          return html`
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 560">
              <path d="M400 10h70L351.25 110H546c7.732 0 14 6.268 14 14v412c0 7.732-6.268 14-14 14H14c-7.732 0-14-6.268-14-14V124c0-7.732 6.268-14 14-14h194.75L90 10h70l120 100L400 10zm100 433V177a7 7 0 0 0-7-7H67a7 7 0 0 0-7 7v266a7 7 0 0 0 7 7h426a7 7 0 0 0 7-7z"></path>
            </svg>
          `
        case "music":
          return html`
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 560">
              <path d="M199.855 473.52a35.61 35.61 0 0 1 .145 3.222c0 33.115-44.809 68.962-100 80-55.191 11.039-100-6.885-100-40s44.809-68.961 100-80c22.504-4.5 43.282-4.186 60 .01V96.85c0-11.257 8.788-22.154 19.612-24.319L540.388.377C551.212-1.788 560 5.594 560 16.85V392c0 .52-.05 1.028-.145 1.52.096 1.058.145 2.132.145 3.222 0 33.115-44.808 68.962-100 80-55.192 11.039-100-6.885-100-40s44.808-68.961 100-80c22.504-4.5 43.282-4.186 60 .01V124.455l-320 64V472c0 .52-.05 1.028-.145 1.52z"></path>
            </svg>
          `
        case "photos":
          return html`
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 560">
              <path d="M440 120h100c11.038 0 20 8.962 20 20v360c0 11.038-8.962 20-20 20H20c-11.038 0-20-8.962-20-20V140c0-11.038 8.962-20 20-20h100V60c0-11.038 8.962-20 20-20h280c11.038 0 20 8.962 20 20v60zm-160 40c-88.306 0-160 71.694-160 160s71.694 160 160 160 160-71.694 160-160-71.694-160-160-160zm0 80c44.153 0 80 35.847 80 80s-35.847 80-80 80-80-35.847-80-80 35.847-80 80-80z"></path>
            </svg>
          `
        // movies
        default:
          return html`
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 560">
              <path d="M560 40c0-11.038-8.962-20-20-20H20C8.962 20 0 28.962 0 40v480c0 11.038 8.962 20 20 20h520c11.038 0 20-8.962 20-20V40zM100 468v24c0 4.415-3.585 8-8 8H68c-4.415 0-8-3.585-8-8v-24c0-4.415 3.585-8 8-8h24c4.415 0 8 3.585 8 8zm400 0v24c0 4.415-3.585 8-8 8h-24c-4.415 0-8-3.585-8-8v-24c0-4.415 3.585-8 8-8h24c4.415 0 8 3.585 8 8zM400 310v180c0 5.52-4.48 10-10 10H170c-5.52 0-10-4.48-10-10V310c0-5.52 4.48-10 10-10h220c5.52 0 10 4.48 10 10zm100 78v24c0 4.415-3.585 8-8 8h-24c-4.415 0-8-3.585-8-8v-24c0-4.415 3.585-8 8-8h24c4.415 0 8 3.585 8 8zm-400 0v24c0 4.415-3.585 8-8 8H68c-4.415 0-8-3.585-8-8v-24c0-4.415 3.585-8 8-8h24c4.415 0 8 3.585 8 8zm0-80v24c0 4.415-3.585 8-8 8H68c-4.415 0-8-3.585-8-8v-24c0-4.415 3.585-8 8-8h24c4.415 0 8 3.585 8 8zm400 0v24c0 4.415-3.585 8-8 8h-24c-4.415 0-8-3.585-8-8v-24c0-4.415 3.585-8 8-8h24c4.415 0 8 3.585 8 8zM400 70v180c0 5.52-4.48 10-10 10H170c-5.52 0-10-4.48-10-10V70c0-5.52 4.48-10 10-10h220c5.52 0 10 4.48 10 10zm100 158v24c0 4.415-3.585 8-8 8h-24c-4.415 0-8-3.585-8-8v-24c0-4.415 3.585-8 8-8h24c4.415 0 8 3.585 8 8zm-400 0v24c0 4.415-3.585 8-8 8H68c-4.415 0-8-3.585-8-8v-24c0-4.415 3.585-8 8-8h24c4.415 0 8 3.585 8 8zm0-80v24c0 4.415-3.585 8-8 8H68c-4.415 0-8-3.585-8-8v-24c0-4.415 3.585-8 8-8h24c4.415 0 8 3.585 8 8zm400 0v24c0 4.415-3.585 8-8 8h-24c-4.415 0-8-3.585-8-8v-24c0-4.415 3.585-8 8-8h24c4.415 0 8 3.585 8 8zm0-80v24c0 4.415-3.585 8-8 8h-24c-4.415 0-8-3.585-8-8V68c0-4.415 3.585-8 8-8h24c4.415 0 8 3.585 8 8zm-400 0v24c0 4.415-3.585 8-8 8H68c-4.415 0-8-3.585-8-8V68c0-4.415 3.585-8 8-8h24c4.415 0 8 3.585 8 8z"></path>
            </svg>
          `
      }
    }

    updated(changedProperties) {
      super.updated(changedProperties)
      if (changedProperties.has('media') || changedProperties.has('loaded')) {
        this._posterBlob = null
        this._getPosterBlob()
      }
    }

    _handleClick(e) {
        e.preventDefault()
        page(`/${this.library.id}/${this.library.slug}/${this.id}`)
    }

    _getPosterBlob() {
      if (!this.loaded) return
      if (!'poster' in this.media) return
      if (this._posterBlob) return

      // axios.get(this.media.poster)
      //   .then(res=>res.data)
      //   .then(data=>console.log(data))
      //   .then(blob=>this._posterBlob=URL.createObjectURL(blob))
      // return
      fetch(this.media.poster)
        .then(response => response.blob())
        .then(blob => {
          this._posterBlob = URL.createObjectURL(blob)
        })
    }

    constructor(){
        super()
        this._posterBlob = null
        this.loaded = false // for lazyloading
    }

    firstUpdated() {
      const el = this.shadowRoot.querySelector('.item')
      const observer = new IntersectionObserver( (entries) => {
        if (entries.some( ({isIntersecting}) => isIntersecting ) ) {
          this.loaded = true
        }
      })
      observer.observe(el)
    }

    static get properties(){
        return{
            library: { type: Object },
            media: { type: Object },
            _posterBlob: { type: String },
            loaded: { type: Boolean },
            showTimeAgo: { type: Boolean }
        }
    }

}

customElements.define('media-card', Media)