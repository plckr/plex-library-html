import {LitElement, html, css} from 'lit'
import './media-card.js'
import mycss from './custom-css'

class LibraryGrid extends LitElement{
    static get styles() {
      return [
        mycss.scroll,
        mycss.spinner,
        css`
          * {
              font-family: Open Sans Semibold, Helvetica Neue, Helvetica, Arial, sans-serif;
          }
          @keyframes spin {
            0% {
                transform: rotate(0deg)
            }
            to {
                transform: rotate(1turn)
            }
          }
          #spinnerWrap {
            display: flex;
            margin: 1em auto 2em auto;
          }
          .loading-spinner {
            position: relative;
          }
          .container {
            height: 100%;
            width: 100%;
            overflow-y: auto;
            overflow-x: hidden;
          }
          .container .row {
            display: grid;
            grid-template-columns: repeat(auto-fill, 7.3rem);
            grid-gap: 1rem;
            justify-content: space-between;
            justify-items: center;
            margin: 1rem;
          }
        `
      ]
    }

    render(){
      return html`
        <div class="container">
          <div class="row">
            ${this.library.map(item => html`
              <media-card 
                .media=${item} 
                .library=${this.currentLibrary} 
                id=${item.id} 
                title=${item.title}
                ?showTimeAgo=${true}
              ></media-card>
            `)}
          </div>
          ${this.loading?html`<div id="spinnerWrap"><div class="loading-spinner"></div></div>`:``}
        </div>
      `;
    }

    updated(changedProperties) {
      if (this.intersectionObserver) this.intersectionObserver.disconnect()
      if (!this.loading) return

      const options = {
        // Not sure why isn't working
        // root: this.shadowRoot.querySelector('div.container'),
        // rootMargin: '200px 0px 0px 0px',
        // threshold: 0
      }
      const el = this.shadowRoot.querySelector('#spinnerWrap')
      this.intersectionObserver = new IntersectionObserver( (entries) => {
        if (entries.some( ({isIntersecting}) => isIntersecting ) ) {
          let event = new CustomEvent('library-fetch-more', {
            bubbles: true, 
            composed: true })
          this.dispatchEvent(event)
        }
      }, options)
      this.intersectionObserver.observe(el)
    }

    static get properties(){
        return{
          currentLibrary: { type: Object },
          library: { type: Object },
          lastFetch: { type: Number },
          loading: { type: Boolean }
        };
    }

}

customElements.define('library-grid', LibraryGrid);