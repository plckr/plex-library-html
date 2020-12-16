import {LitElement, html, css} from 'lit-element';
import './library-grid';
import './background-container';
import sources from '../config.js';
import page from 'page';

function slugify(string) {
  const a = 'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;'
  const b = 'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------'
  const p = new RegExp(a.split('').join('|'), 'g')

  return string.toString().toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, '') // Trim - from end of text
};

class AppContainer extends LitElement{

  _setupRoutes() {
    page('/', (ctx) => this._libraryRoute(ctx) );
    page('/:library', (ctx) => this._libraryRoute(ctx) );
    page('/:library/:mediaid', (ctx, next) => this._libraryRoute(ctx, next), (ctx) => this._mediaIdRoute(ctx));
    page('*', function(e) {
      page.redirect('/');
    });
    page();
  }

  _libraryRoute(ctx, next) {
    if (!ctx.params.mediaid) this.currentMediaId = undefined;
    this.currentLibrary = sources[0];
    sources.map(src => {
      if (slugify(src.name) == ctx.params.library) {
        this.currentLibrary = src;
        return;
      };
    });
    this.initialized = true;
    if (ctx.params.mediaid) next();
    return;
  }

  _mediaIdRoute(ctx) {
    this.currentMediaId = ctx.params.mediaid;
  }

  static get properties(){
      return {
          initialized: { type: Boolean },
          libraries: { type: Array },
          currentLibrary: { type: Object },
          currentMediaId: { type: String }
      };
  }

  static get styles() {
    return css`
      .content {
          display: flex;
      }
      .content .sidebar {
          position: absolute;
          overflow: hidden;
          min-width: 60px;
          max-width: 60px;
          width: 60px;
          transition: max-width .2s cubic-bezier(.4,0,.2,1),background-color 1s ease-out;
          display: flex;
          flex-direction: column;
          height: 100%;
          background-color: #1f2326;
      }
      .content .library {
          position: absolute;
          top: 0;
          left: 60px;
          right: 0;
          bottom: 0;
      }
      .content .sidebar .link {
        display: block;
        text-decoration: none;
        min-height: 50px;
        display: flex;
        align-items: stretch;
        justify-content: space-between;
        padding: 0;
        width: 100%;
        font-size: 18px;
        color: white;
        cursor: pointer;
      }
      .content .sidebar .link:hover, .content .sidebar .link.active {
        background-color: rgba(255,255,255,0.1);
      }
      .content .sidebar .link.active {
        box-shadow: inset 4px 0 0 0 #e5a00d;
      }
      .content .sidebar .link:hover svg {
        opacity: 1;
      }
      .content .sidebar .link svg {
        position: relative;
        top: -2px;
        display: inline-block;
        width: 20px;
        vertical-align: middle;
        line-height: 1;
        fill: currentColor;
        padding-left: 20px;
        opacity: 0.75;
      }
      .content .sidebar .link.active svg {
        opacity: 1;
      }
    `;
  }

  render(){
    if (!this.initialized) return html``;
    return html`
      <background-container .mediaId="${this.currentMediaId}"></background-container>
      <div class="content">
          <div class="sidebar">
              <div direction="left" style="opacity: 1; transform: translateX(0%) scale(1) translateZ(0px);">
                ${this.libraries.map(item => html`
                  <a class="link ${this.currentLibrary == item ? "active" : ""}" href="/${slugify(item.name)}" title="${item.name}">
                    ${this._getSidebarIcon(item.type)}
                  </a>
                `)}
              </div>
          </div>
          <div class="library">
            <library-grid .src="${this.currentLibrary.src}" .type="${this.currentLibrary.type}" .mediaId="${this.currentMediaId}"></library-grid>
          </div>
      </div>
    `;
  }

  _getSidebarIcon(type) {
    switch(type) {
      case "home":
        return html`
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 560">
            <path d="M0 520V296.569a40 40 0 0 1 11.716-28.285L280 0l268.284 268.284A40 40 0 0 1 560 296.57V520c0 22.091-17.909 40-40 40H340V360H220v200H40c-22.091 0-40-17.909-40-40z"></path>
          </svg>
        `;
      case "tvseries":
        return html`
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 560">
            <path d="M400 10h70L351.25 110H546c7.732 0 14 6.268 14 14v412c0 7.732-6.268 14-14 14H14c-7.732 0-14-6.268-14-14V124c0-7.732 6.268-14 14-14h194.75L90 10h70l120 100L400 10zm100 433V177a7 7 0 0 0-7-7H67a7 7 0 0 0-7 7v266a7 7 0 0 0 7 7h426a7 7 0 0 0 7-7z"></path>
          </svg>
        `;
      // movies
      default:
        return html`
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 560">
            <path d="M560 40c0-11.038-8.962-20-20-20H20C8.962 20 0 28.962 0 40v480c0 11.038 8.962 20 20 20h520c11.038 0 20-8.962 20-20V40zM100 468v24c0 4.415-3.585 8-8 8H68c-4.415 0-8-3.585-8-8v-24c0-4.415 3.585-8 8-8h24c4.415 0 8 3.585 8 8zm400 0v24c0 4.415-3.585 8-8 8h-24c-4.415 0-8-3.585-8-8v-24c0-4.415 3.585-8 8-8h24c4.415 0 8 3.585 8 8zM400 310v180c0 5.52-4.48 10-10 10H170c-5.52 0-10-4.48-10-10V310c0-5.52 4.48-10 10-10h220c5.52 0 10 4.48 10 10zm100 78v24c0 4.415-3.585 8-8 8h-24c-4.415 0-8-3.585-8-8v-24c0-4.415 3.585-8 8-8h24c4.415 0 8 3.585 8 8zm-400 0v24c0 4.415-3.585 8-8 8H68c-4.415 0-8-3.585-8-8v-24c0-4.415 3.585-8 8-8h24c4.415 0 8 3.585 8 8zm0-80v24c0 4.415-3.585 8-8 8H68c-4.415 0-8-3.585-8-8v-24c0-4.415 3.585-8 8-8h24c4.415 0 8 3.585 8 8zm400 0v24c0 4.415-3.585 8-8 8h-24c-4.415 0-8-3.585-8-8v-24c0-4.415 3.585-8 8-8h24c4.415 0 8 3.585 8 8zM400 70v180c0 5.52-4.48 10-10 10H170c-5.52 0-10-4.48-10-10V70c0-5.52 4.48-10 10-10h220c5.52 0 10 4.48 10 10zm100 158v24c0 4.415-3.585 8-8 8h-24c-4.415 0-8-3.585-8-8v-24c0-4.415 3.585-8 8-8h24c4.415 0 8 3.585 8 8zm-400 0v24c0 4.415-3.585 8-8 8H68c-4.415 0-8-3.585-8-8v-24c0-4.415 3.585-8 8-8h24c4.415 0 8 3.585 8 8zm0-80v24c0 4.415-3.585 8-8 8H68c-4.415 0-8-3.585-8-8v-24c0-4.415 3.585-8 8-8h24c4.415 0 8 3.585 8 8zm400 0v24c0 4.415-3.585 8-8 8h-24c-4.415 0-8-3.585-8-8v-24c0-4.415 3.585-8 8-8h24c4.415 0 8 3.585 8 8zm0-80v24c0 4.415-3.585 8-8 8h-24c-4.415 0-8-3.585-8-8V68c0-4.415 3.585-8 8-8h24c4.415 0 8 3.585 8 8zm-400 0v24c0 4.415-3.585 8-8 8H68c-4.415 0-8-3.585-8-8V68c0-4.415 3.585-8 8-8h24c4.415 0 8 3.585 8 8z"></path>
          </svg>
        `;
    }
  }

  connectedCallback() {
    super.connectedCallback();

    // if (!this.initialized) {
    //   this.initialized = true;
    // }
  }

  constructor(){
    super();
    this.libraries = sources;
    this.currentMediaId = "";
    this._setupRoutes();
  }

}

customElements.define('app-container', AppContainer);