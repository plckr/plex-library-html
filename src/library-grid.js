import {LitElement, html, css} from 'lit-element';
import {until} from 'lit-html/directives/until.js';
import XLSX from 'xlsx';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);
import 'dayjs/locale/pt';
dayjs.locale('pt');
import './media-card.js';

class LibraryGrid extends LitElement{
    static get styles() {
      return css`
        * {
            scrollbar-color: hsla(0,0%,100%,.2) transparent;
            -webkit-overflow-scrolling: touch;
        }
        *::-webkit-scrollbar {
            width: 14px;
            /* background-color: rgba(0,0,0,0.35); */
        }
        *::-webkit-scrollbar-track, *::-webkit-scrollbar-corner {
            background-color: transparent;
        }
        *::-webkit-scrollbar-thumb {
            min-height: 50px;
            border: 3px solid transparent;
            border-radius: 8px;
            background-color: hsla(0,0%,100%,.2);
            background-clip: padding-box
        }
        *::-webkit-scrollbar-thumb:hover{
            background-color:hsla(0,0%,100%,.3);
        }
        *::-webkit-scrollbar-thumb:window-inactive {
            background-color: hsla(0,0%,100%,.05)
        }
        @keyframes spin {
          0% {
              transform: rotate(0deg)
          }
          to {
              transform: rotate(1turn)
          }
        }
        .spinner {
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
          display: table-cell;
        }
        .container {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          overflow-y: auto;
          overflow-x: hidden;
        }
        .container .row {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }
        .container.modal {
          font-size: 13px;
          font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;
          font-weight: 600;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          position: relative;
          height: 100%;
          color: #eee;
          padding: 50px;
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          align-items: flex-start;
          gap: 50px;
        }
        .container.modal .poster {
          min-width: 250px;
          width: 250px;
          min-height: 375px;
          height: 375px;
          position: relative;
          border-radius: 4px;
          background-color: rgba(0,0,0,.45);
          box-shadow: 0 0 4px rgba(0,0,0,.3);
          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;
        }
        .container.modal .info {
          flex-grow: 1;
          min-width: 10%;
          overflow: hidden !important;
        }
        .container.modal .primary {
          font-size: 24px;
          min-width: 0;
          max-width: 100%;
          text-overflow: ellipsis;
          white-space: nowrap !important;
        }
        .container.modal .secondary {
          font-size: 15px;
          line-height: 30px;
        }
        .container.modal .tertiary {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          margin-top: 4px;
          color: hsla(0,0%,98%,.75);
          font-size: 15px;
        }
        .container.modal .tertiary span:nth-child(2) {
          text-transform: uppercase;
          font-size: 13px;
          background-color: rgba(0,0,0,.15);
          padding: 0 8px;
          border-radius: 4px;
          white-space: nowrap;
          transition: all .2s;
        }
        .container.modal .summary {
          margin-top: 20px;
          overflow: hidden;
          max-width: 750px;
          color: #fafafa;
          line-height: 1.71428571;
          font-size: 15px;
        }
        .container.modal .details {
          margin-top: 30px;
        }
        .container.modal .details div{
          display: flex;
        }
        .container.modal .details div span:nth-child(1) {
          flex: 0 0 110px;
          margin-right: 10px;
          padding-top: 2px;
          color: hsla(0,0%,98%,.45);
          text-transform: uppercase;
        }
        .container.modal .details div span:nth-child(2) {
          font-size: 15px;
        }
      `;
    }

    render(){
      if(!this.initialized) {
        return html`<div class="spinner"></div>`;
      } else {
        if (typeof(this.mediaId) != 'undefined' && this.mediaId.length > 0) {
          var item = this.data.find(item => item["Media ID"] == this.mediaId);
          return html`
            <div class="container modal">
              <div class="poster" style="background-image: url(/dist/img/posters/${item["Media ID"]}.jpg)"></div>
              <div class="info">
                <div class="primary">${item["Title"]}</div>
                <div class="secondary">${item["Year"]}</div>
                <div class="tertiary">
                  <span>${item["Duration"]}</span>
                  <span>${item["Content Rating"]}</span>
                  <span>${item["Rating"]}</span>
                </div>
                <div class="summary">${item["Summary"]}</div>
                <div class="details">
                  <div><span>Realizado por</span><span>${item["Directors"].replaceAll(',',', ')}</span></div>
                  <div><span>Escrito por</span><span>${item["Writers"].replaceAll(',',', ')}</span></div>
                  <div><span>Estúdio</span><span>${item["Studio"].replaceAll(',',', ')}</span></div>
                  <div><span>Género</span><span>${item["Genres"].replaceAll(',',', ')}</span></div>
                </div>
              </div>
            </div>
          `;
        } else {
          return html`
            <div class="container">
              <div class="row">
                ${(this.type == "movies" ? this._renderMovies() : this._renderTvSeries )}
              </div>
            </div>
          `;
        }
      }
    }

    _renderMovies() {
      return html`
        ${this.data.map((item, i) => {
            return html`<media-card name="${item["Title"]}" id="${item["Media ID"]}" year="${item["Year"]}" secondaryInfo="${dayjs(item["Added"], "YYYY-MM-DD").fromNow()}"></media-card>`;
        })}
      `;
    }

    _renderTvSeries() {
      let data = new Map(Object.entries(this.data));
      return html`
        ${data.map((item, i) => {
          return html`<media-card name=""></media-card>`;
        })}
      `;
    }

    // shouldUpdate(changedProperties) {
    //   return changedProperties.has('src');
    // }

    update(changedProperties) {
      super.update(changedProperties);
    }

    _updateData() {
      fetch(encodeURI(this.src))
        .then(res => {
          return res.arrayBuffer();
        })
        .then(ab => {
          this.workbook = XLSX.read(new Uint8Array(ab), {type:"array"});
          let tmpData = XLSX.utils.sheet_to_json(this.workbook.Sheets[this.workbook.SheetNames[0]], {header:""});
          let tmpDataTv = {};
          if (this.type == "movies") {
            this.data = tmpData;
            this.initialized = true;
          } else if (this.type == "tvseries") {
            tmpData.map((item, i) => {
              let obj = {
                title: item["Series Title"],
                season: String(item["Season"]),
                episode: String(item["Episode"])
              };
              if (typeof(tmpDataTv[obj.title]) == 'undefined') {
                tmpDataTv[obj.title] = {};
              }
              if (typeof(tmpDataTv[obj.title][obj.season]) == 'undefined') {
                tmpDataTv[obj.title][obj.season] = {};
              }
              tmpDataTv[obj.title][obj.season][obj.episode] = item;
            });
            this.data = tmpDataTv;
            this.initialized = true;
          }
        });
    }

    connectedCallback() {
      super.connectedCallback();

      if (!this.initialized) {
        this._updateData();
      }
    }

    constructor(){
        super();

        this.initialized = false;
    }

    static get properties(){
        return{
            initialized: { type: Boolean },
            type: { type: String },
            src: { type: String },
            data: { type: Array },
            workbook: { type: Array},
            mediaId: { type: String }
        };
    }

}

customElements.define('library-grid', LibraryGrid);