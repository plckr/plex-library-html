import {LitElement, html, css} from 'lit'
import {unsafeHTML} from 'lit/directives/unsafe-html.js'
import './media-card'
import mycss from './custom-css'

import Swiper from 'tiny-swiper/lib/index.full.js'

class mediaModal extends LitElement{
    static get styles() {
      return [
        mycss.scroll,
        css`
          * {
              font-family: Open Sans Semibold, Helvetica Neue, Helvetica, Arial, sans-serif;
          }
          #container {
            width: 100% !important;
            height: 100%;
            overflow-x: hidden;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            box-sizing: border-box;
            padding: 3rem;
          }
          #top {
            font-size: 13px;
            font-family: Open Sans Semibold, Helvetica Neue, Helvetica, Arial, sans-serif;
            position: relative;
            color: #eee;
            display: flex;
            flex-wrap: wrap;
            max-width: 100%;
            column-gap: 3rem;
          }
          #topPoster {
            width: 250px;
            height: 375px;
            position: relative;
            border-radius: 4px;
            background-color: rgba(0,0,0,.45);
            box-shadow: 0 0 4px rgba(0,0,0,.3);
            background-size: cover;
            background-position: center center;
            background-repeat: no-repeat;
            margin-bottom: 3rem;
          }
          #topInfo {
            flex-grow: 1;
            min-width: 10%;
            width: 60%;
            max-width: 750px;
            flex-basis: 350px;
            margin-bottom: 3rem;
          }
          #topInfo .primary {
            font-size: 24px;
            max-width: 100%;
          }
          #topInfo .secondary {
            font-size: 15px;
            line-height: 30px;
          }
          #topInfo .tertiary {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            margin-top: 4px;
            color: hsla(0,0%,98%,.75);
            font-size: 15px;
          }
          #topInfo .tertiary span.contentRating {
            text-transform: uppercase;
            font-size: 13px;
            background-color: rgba(0,0,0,.15);
            padding: 0 8px;
            border-radius: 4px;
            white-space: nowrap;
            transition: all .2s;
          }
          #topInfo .tertiary .audienceRating {
            display: flex;
          }
          #topInfo .tertiary div.imdb-icon {
            width: 2.5em;
            background-image: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAwMCA1NjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlLW1pdGVybGltaXQ9IjEuNDE0IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PHBhdGggZD0iTTAgODkuOTk2QzAgNjIuMzg0IDIyLjM3OCA0MCA0OS45OTcgNDBoOTAwLjAwNkM5NzcuNjE2IDQwIDEwMDAgNjIuMzg4IDEwMDAgODkuOTk2djM4MC4wMDhjMCAyNy42MTItMjIuMzc4IDQ5Ljk5Ni00OS45OTcgNDkuOTk2SDQ5Ljk5N0MyMi4zODQgNTIwIDAgNDk3LjYxMiAwIDQ3MC4wMDRWODkuOTk2eiIgZmlsbD0iI2UxYmUwMCIvPjxwYXRoIGQ9Ik03NjkuNjggMTM0Ljc2djk0LjY0YzYuMDMtNi45NzYgMTIuNzUzLTEyLjE4MSAyMC4xNy0xNS42MSA3LjQxOS0zLjQyOCAxOC41NTItNS4xNTcgMjcuMjQtNS4xNTcgMTAuMDEgMCAxOC42ODUgMS41NTIgMjYuMDQgNC42NjcgNy4zNjIgMy4xMDkgMTIuOTY3IDcuNDcxIDE2LjgyOSAxMy4wOCAzLjg1NyA1LjYxNCA2LjE3MiAxMS4xMSA2Ljk2MiAxNi40ODUuNzgxIDUuMzc3IDEuMTc2IDE2Ljg0MyAxLjE3NiAzNC40MXY4MS42M2MwIDE3LjQ0OC0xLjE3NiAzMC40MzQtMy41MjggMzguOTgxLTIuMzU3IDguNTQzLTcuODgxIDE1Ljk1OC0xNi41NjcgMjIuMjMtOC42OTEgNi4yNjctMTkgOS40MDUtMzAuOTUyIDkuNDA1LTguNTY3IDAtMTkuNjQ4LTEuODU3LTI3LjA3LTUuNTgxLTcuNDI0LTMuNzI0LTE0LjIxLTkuMzE0LTIwLjM2Mi0xNi43NjdsLTQuNzA5IDE4LjUzOGgtNjguMDR2LTI5MC45NWg3Mi44MDltLTYzMS41OCAyOTAuOTVoNzUuNTh2LTI5MC45NWgtNzUuNTh2MjkwLjk1bTE5OS4zOC0yOTAuOTVjMi44ODEgMTcuNjE1IDUuOSAzOC4yOSA5LjA2IDYyLjAxbDEwLjgyOSA3My45MTUgMTcuNTA1LTEzNS45Mmg5OC43M3YyOTAuOTVoLTY1Ljk5bC0uMjM5LTE5Ni4zOC0yNi40MzMgMTk2LjM4aC00Ny4xNWwtMjcuODYyLTE5Mi4xMS0uMjM4IDE5Mi4xMWgtNjYuMnYtMjkwLjk1aDk3Ljk5bTIxOC4zNiAwYzM2LjU4MSAwIDU3LjYyOSAxLjY4MSA3MC41MiA1LjAzIDEyLjg5NSAzLjM0NyAyMi43MDUgOC44NDcgMjkuNDE5IDE2LjUwNCA2LjcxOSA3LjY1NyAxMC45MTUgMTYuMTgxIDEyLjU5NSAyNS41NjcgMS42NzcgOS4zOSAyLjc1MiAyNy44NDMgMi43NTIgNTUuMzZ2MTAyLjE4YzAgMjYuMDgtMS40NjEgNDMuNTE5LTMuOTE4IDUyLjMxLTIuNDYyIDguOC02Ljc0OCAxNS42NzYtMTIuODYyIDIwLjYzOC02LjEyNCA0Ljk2Mi0xMy42NzYgOC40MzMtMjIuNjcyIDEwLjQwNC05IDEuOTc3LTIyLjU1MSAyLjk2Mi00MC42NTcgMi45NjJoLTkxLjU3di0yOTAuOTVoNTYuMzltMjM5LjMzIDIyMC4zNWMwIDE0LjA4LS43IDIyLjk3Ny0yLjA5NiAyNi42NzctMS40IDMuNzA0LTcuNDg1IDUuNTY2LTEyLjEgNS41NjYtNC41IDAtNy41LTEuNzg2LTkuMDItNS4zNzEtMS41MTktMy41ODEtMi4yNzItMTEuNzU3LTIuMjcyLTI0LjUzOHYtNzYuODkxYzAtMTMuMjU3LjY2Ny0yMS41MTkgMi0yNC44MDkgMS4zMzMtMy4yNzcgNC4yNDgtNC45MjQgOC43NDMtNC45MjQgNC42MDkgMCAxMC43OTYgMS44NzEgMTIuMzc2IDUuNjMzIDEuNTc2IDMuNzYyIDIuMzY3IDExLjc5NSAyLjM2NyAyNC4wOXY3NC41N20tMjAzLjM3LTE2Ny45OWMyLjk4NiAxLjcyOCA0LjkwMSA0LjQ1NyA1LjczNCA4LjE1Ny44MzMgMy43MDkgMS4yNTcgMTIuMTM4IDEuMjU3IDI1LjI5djExMi44YzAgMTkuMzcxLTEuMjU3IDMxLjIzLTMuNzY3IDM1LjU5NS0yLjUwOSA0LjM3MS05LjIgNi41NDgtMjAuMDYgNi41NDh2LTE5MC45OWM4LjIzNCAwIDEzLjg1Mi44NjYgMTYuODM4IDIuNiIvPjwvc3ZnPg==);
            background-repeat: no-repeat;
          }
          #topInfo #summary {
            margin-top: 20px;
            overflow: hidden;
            max-width: 750px;
            color: #fafafa;
            line-height: 1.71428571;
            font-size: 15px;
          }
          #summary .collapsible {
            max-height: 75px;
            overflow: hidden;
            transition: max-height 0.2s ease-in-out 0s;
          }
          #summary button {
            color: hsla(0,0%,100%,.45);
            text-transform: uppercase;
            font-size: 13px;
            font-family: Open Sans Bold, Helvetica Neue, Helvetica, Arial, sans-serif;
          }
          #summary button:hover {
            color: white;
          }
          #topInfo #details {
            margin-top: 30px;
          }
          #topInfo #details div{
            display: flex;
          }
          #topInfo #details div span.title {
            flex: 0 0 110px;
            margin-right: 10px;
            padding-top: 2px;
            color: hsla(0,0%,98%,.45);
            text-transform: uppercase;
          }
          #topInfo #details div span.group {
            font-size: 15px;
          }
          #topInfo #details div span.group span:hover {
            text-decoration: underline;
          }

          #roles {
            width: 100%;
          }

          #rolesTitle {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 10px;
            min-height: 25px;
            max-width: 100%;
          }

          #rolesTitle>span {
            color: #eee;
            font-size: 15px;
            font-family: Open Sans Bold, Helvetica Neue, Helvetica, Arial, sans-serif;
            line-height: 24px;
            overflow: hidden!important;
            min-width: 0;
            max-width: 100%;
            text-overflow: ellipsis;
            white-space: nowrap!important;
            flex-grow: 1;
          }

          #rolesTitle>div {
            flex-shrink: 0;
            margin-left: auto;
            font-size: 18px;
            line-height: 24px;
          }

          #rolesTitleButtons button {
            font-size: 18px;
            cursor: pointer;
            color: hsla(0,0%,100%,.7);
            margin-left: 10px;
            padding: 0 5px;
            outline: none;
            border: 0;
            background: none;
            transition: color .2s;
            fill: currentColor;
          }

          :root {
            font-size: 1vw;
          }

          #rolesTitleButtons button.disabled {
            cursor: default;
            opacity: .15;
            color: hsla(0,0%,100%,.3);
            pointer-events: none;
          }

          #rolesTitleButtons button>svg {
            height: 1em;
            width: 1em;
          }

          #rolesTitleButtons button:hover {
            color: #fff;
          }

          #rolesGallery {
            width: 100%;
            box-sizing: border-box;
            padding-bottom: 20px;
            display: flex;
            align-content: start;
            justify-content: space-between;
            gap: 1rem;
            overflow-x: auto;
            scroll-behavior: smooth;
          }

          #rolesGallery>div {
            padding: 2px;
            z-index: 0;
            transition: none 0s ease 0s;
            max-width: 10rem;
          }

          #rolesGallery>div .gallery-round.image {
            margin-top: -10rem;
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
          }

          #rolesGallery>div .gallery-round {
            border-radius: 50%;
            width: 10rem;
            height: 10rem;
          }

          #rolesGallery>div .gallery-round.text {
            position: relative;
            background-color: rgba(0,0,0,.45);
            box-shadow: 0 0 4px rgb(0 0 0 / 30%);
            font-size: 40px;
            z-index: -1;
            color: hsla(0,0%,100%,.15);
            margin: auto auto;
            text-align: center;
            line-height: 10rem;
          }

          #rolesGallery>div .gallery-round:hover {
            box-shadow: 0 0 0 1px #e5a00d, 0 0 4px rgb(0 0 0 / 30%);
          }

          #rolesGallery>div .group {
            padding-top: 10px;
            text-align: center;
            font-size: 13px;
            display: flex;
            flex-direction: column;
            cursor: default;
            text-overflow: ellipsis;
            white-space: nowrap;
            max-width: 100%;
            overflow: hidden;
          }

          #rolesGallery>div .group>span {
            font-size: inherit;
            overflow: inherit;
            text-overflow: inherit;
          }

          #rolesGallery>div .group .primary {
            color: #fff;
          }

          #rolesGallery>div .group .secondary {
            color: hsla(0,0%,100%,.45);
          }

          button {
            margin: 0;
            padding: 0;
            outline: none;
            border: 0;
            border-radius: 0;
            background: none;
            text-align: inherit;
            text-decoration: none;
            cursor: pointer;
            transition: color .2s;
            -webkit-user-select: none;
            user-select: none;
            touch-action: manipulation;
            -webkit-tap-highlight-color: transparent;
          }
        `
      ]
    }
  
  get _htmlContentRating() {
    if (!('contentRating' in this.media)) return
    return html`<span class="contentRating">${this.media.contentRating}</span>`
  }

  get _htmlAudienceRating() {
    let imageClass = ""
    if (!('audienceRating' in this.media)) return
    if ('audienceRatingImage' in this.media) {
      if (this.media.audienceRatingImage.startsWith("imdb"))
        imageClass = "imdb-icon"
    }
    return html`
      <div class="audienceRating">
        <div class="${imageClass}"></div>
        <span>${this.media.audienceRating}</span>
      </div>
    `
  }

  render(){
    if (!(["movie", "show"].includes(this.media.type)))
    // Need to add support to `season` and `episode`
    // until then show as Not Supported
      return html`
        <div style="display: flex; justify-content: center; align-items: center; flex-direction: column; width: 100%; height: 100%;">
          <div style="height: 3rem; width: 3rem; color: #e5a00d; fill: currentcolor;">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 140.464 595.279 560.961">
              <g><g><path d="M582.911,569.707L372.628,183.151c-33.786-56.878-116.145-56.954-149.976,0L12.379,569.707 c-34.538,58.121,7.276,131.719,74.97,131.719h420.575C575.56,701.425,617.449,627.886,582.911,569.707z M297.64,631.666 c-19.228,0-34.88-15.65-34.88-34.879s15.652-34.879,34.88-34.879s34.88,15.65,34.88,34.879S316.867,631.666,297.64,631.666z M332.52,492.148c0,19.227-15.652,34.879-34.88,34.879s-34.88-15.652-34.88-34.879V317.749c0-19.228,15.652-34.88,34.88-34.88 s34.88,15.652,34.88,34.88V492.148z"/></g></g>
            </svg>
          </div>

          <p>NOT SUPPORTED YET</p>
        </div>
      `

    let genres, directors, writers, producers;
    if ('genre' in this.media)
        genres = html`${unsafeHTML(this.media.genre.map(item=>{return `<span>${item.name}</span>`}).join(", "))}`
    if ('director' in this.media)
        directors = html`${unsafeHTML(this.media.director.map(item=>{return `<span>${item.name}</span>`}).join(", "))}`
    if ('writer' in this.media)
        writers = html`${unsafeHTML(this.media.writer.map(item=>{return `<span>${item.name}</span>`}).join(", "))}`
    if ('producer' in this.media)
        producers = html`${unsafeHTML(this.media.producer.map(item=>{return `<span>${item.name}</span>`}).join(", "))}`


    return html`
      <div id="container">
        <div id="top">
          <div id="topPoster" style="background-image: url(${this.media.posterLarge})"></div>
          <div id="topInfo">
            <div class="primary">${this.media.title}</div>
            <div class="secondary">${this.media.year}</div>
            <div class="tertiary">
              <span>${this.getTimeDuration(this.media.duration)}</span>
            </div>
            ${this.media.summary.trim() != "" ? html`
              <div id="summary">
                <div class="collapsible">
                  <div class="measureContainer">
                    ${this.media.summary}
                  </div>
                </div>
                <button @click=${this._readMoreClickEvent}>Read more</button>
              </div>
            `:``}
            <div id="details">
              <div><span class="title">Directed by</span><span class="group">${directors}</span></div>
              <div><span class="title">Written by</span><span class="group">${writers}</span></div>
              <div><span class="title">Studio</span><span class="group"><span>${this.media.studio}</span></span></div>
              <div><span class="title">Genre</span><span class="group">${genres}</span></div>
            </div>
          </div>
        </div>
        ${this.media.type == "show" ? html`
          <div style="display: flex; gap: 15px; flex-wrap: wrap;">
            ${this.mediaSeasons.map(item => html`
              <media-card
                .media=${item}
                .library=${this.currentLibrary}
                ?showTimeAgo=${false}
                id=${item.id}
              ></media-card>
            `)}
          </div>
        `:``}
        ${'role' in this.media ? html`
          <div id="roles">
            <div id="rolesTitle">
              <span>Cast</span>
              <!-- <div id="rolesTitleButtons">
                <button class="disabled"><svg viewBox="0 0 560 560" xmlns="http://www.w3.org/2000/svg" stroke-miterlimit="1.414" stroke-linejoin="round"><path d="m28 280l252-252 56 56-196 196 196 196-56 56-252-252"></path></svg></button>
                <button class=""><svg viewBox="0 0 560 560" xmlns="http://www.w3.org/2000/svg" stroke-miterlimit="1.414" stroke-linejoin="round"><path d="m532 280l-252-252-56 56 196 196-196 196 56 56 252-252"></path></svg></button>
              </div> -->
            </div>
              <div id="rolesGallery">
                ${this.media.role.map(item => html`
                  <div>
                    <div class="gallery-round text">${this.getTwoCapitalLetters(item.name)}</div>
                    <div class="gallery-round image" style="background-image: url(${item.thumb});"></div>
                    <div class="group">
                      <span class="primary" title="${item.name}">${item.name}</span>
                      <span class="secondary" title="${item.role}">${item.role}</span>
                    </div>
                  </div>
                `)}
            </div>
          </div>
        `:``}
      </div>
    `
  }

  _getPosterBlob() {
    if (!'posterLarge' in this.media) return
    if (this._posterBlob) return
    
    fetch(this.media.posterLarge)
    .then(response => response.blob())
    .then(blob => {
      this._posterBlob = URL.createObjectURL(blob)
    })
  }

  _readMoreClickEvent() {
    const elCollapsible = this.shadowRoot.querySelector('#summary .collapsible')
    const elMeasure = this.shadowRoot.querySelector('#summary .measureContainer')
    const elButton = this.shadowRoot.querySelector('#summary button')
    const size = elMeasure.offsetHeight
    if (elCollapsible.style.maxHeight == "") {
      elCollapsible.style.maxHeight = size+'px'
      elButton.textContent = "Read less"
    } else {
      elCollapsible.style.maxHeight = ""
      elButton.textContent = "Read more"
    }
  }

  getTwoCapitalLetters(str) {
    let result = str.trim().split(" ")
    if (result.length >= 2) {
      return (result[0][0]+result[result.length-1][0]).toUpperCase()
    }
    if (result.length == 1) {
      return result[0][0].toUpperCase()
    }
    return ""
  }

  getTimeDuration(timems) {
    let time = new Date(timems)
    if (time.getUTCHours() < 1)
      return time.getMinutes()+' min'
    return time.getUTCHours()+' h '+time.getMinutes()+' min'
  }

  get mediaSeasons() {
    if (!('seasons' in this.media)) return {}
    return this.media.seasons.filter( season => 'id' in season )
  }

  static get properties(){
      return{
          currentLibrary: { type: Object },
          media: { type: Object }
      }
  }
}

customElements.define('media-modal', mediaModal)