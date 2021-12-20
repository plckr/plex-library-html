import { LitElement, html, css } from "lit"
import { styleMap } from "lit/directives/style-map"
import "./library-grid"
import "./background-container"
import "./media-modal"
import mycss from "./custom-css"
import { languageFind } from "./languages"
import page from "page"
import axios from "axios"
import tippy from "tippy.js"

const PAGES = {
  NONE: 0,
  LANDING_PAGE: 1,
  LIBRARY_PAGE: 2,
  MEDIA_PAGE: 3,
}

class AppContainer extends LitElement {
  /****************/
  /* HTML AND CSS */
  /****************/

  static get styles() {
    return [
      mycss.scroll,
      mycss.spinner,
      css`
        button {
          appearance: none;
          border: none;
          background-color: unset;
          outline: none;
          cursor: pointer;
          user-select: none;
          -webkit-user-select: none;
          -ms-user-select: none;
        }

        * {
          font-family: Open Sans Semibold, Helvetica Neue, Helvetica, Arial,
            sans-serif;
        }

        :host {
          width: 100vw;
          height: 100vh;
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;

          --sidebar-width: 60px;
          --header-height: 50px;
          --text-color: rgba(255, 255, 255, 1);
          --text-color-light: rgba(255, 255, 255, 0.75);
          --text-color-lighter: rgba(255, 255, 255, 0.45);
          --text-weight: 600;
          --text-family: "Open Sans Semibold", "Helvetica Neue", Helvetica,
            Arial, sans-serif;
        }

        #container {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: row;
        }

        #sidebar {
          overflow: auto;
          min-width: var(--sidebar-width);
          max-width: var(--sidebar-width);
          width: var(--sidebar-width);
          display: flex;
          flex-direction: column;
          height: 100vh;
          background-color: #1f2326;
          font-size: var(--sidebar-width);
        }

        #content {
          height: 100vh;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

        #content > div:not(#header) {
          width: calc(100vw - var(--sidebar-width));
          height: calc(100vh - var(--header-height));
          flex-grow: 1;
        }

        div.slot {
          width: 100%;
          height: 100%;
          box-sizing: border-box;
          padding: 15px;
          overflow: hidden auto;
          color: var(--text-color-light);
        }

        library-grid,
        media-modal {
          transition: display 0s, opacity 0.5s linear;
        }

        #sidebar .link {
          display: flex;
          justify-content: center;
          align-content: center;
          min-height: var(--header-height);
          height: var(--header-height);
          width: 100%;
          color: var(--text-color-light);
          cursor: pointer;
          font-size: inherit;
          transition: background-color 0.1s;
        }

        #sidebar .link:hover,
        #sidebar .link.active {
          background-color: rgba(255, 255, 255, 0.1);
        }

        #sidebar .link.active {
          box-shadow: inset 4px 0 0 0 #e5a00d;
        }

        #sidebar .link svg {
          width: 0.33em;
          fill: currentColor;
          transition: color 0.2s;
        }

        #sidebar .link:hover svg,
        #sidebar .link.active svg {
          color: var(--text-color);
        }

        #header {
          padding-right: 25px;
          padding-left: 40px;
          height: var(--header-height);
          box-shadow: 0 3px 6px 0 rgb(0 0 0 / 15%);
          color: var(--text-color-light);
          font-size: 16px;
        }

        #header .left {
          display: flex;
          align-items: center;
          height: 100%;
        }

        #header .left button {
          margin-right: 25px;
          padding-right: 13px;
          min-width: 30px;
          color: var(--text-color-light);
          font-size: inherit;
          transition: color 0.2s;
        }

        #header .left button:hover {
          color: var(--text-color);
        }

        #header .left button span.arrow-icon {
          border-style: solid;
          border-color: hsla(0, 0%, 100%, 0.7);
          border-top-width: 0;
          border-right: 4px solid transparent;
          border-bottom-width: 5px;
          border-left: 4px solid transparent;
          transition: border 0.2s, transform 0.4s;
          transform: translateY(-50%) rotateX(180deg);
          position: absolute;
          top: 50%;
          right: 0;
          margin: 0;
          display: inline-block;
          width: 0;
          height: 0;
          vertical-align: middle;
        }

        #header .left button:hover span.arrow-icon {
          border-color: #fff transparent;
        }

        #header .left span.total-items {
          line-height: 1.5;
          background-color: rgba(0, 0, 0, 0.15);
          padding: 0 8px;
          border-radius: 4px;
          white-space: nowrap;
        }

        .tooltip {
          font-size: 13px;
          padding: 2px 10px;
          border-radius: 4px;
          background-color: #191a1c;
          box-shadow: 0 4px 10px 0 rgb(0 0 0 / 35%);
          transform: translate(0);
          color: #eee;
        }
      `,
    ]
  }

  render() {
    if (!this.initialized)
      return html`
        <background-container></background-container>
        <div class="loading-spinner"></div>
      `
    return html`
      <background-container
        .background=${this.background}
      ></background-container>
      <div id="container">
        ${this._htmlSidebar()}
        <div id="content">
          ${this._htmlHeader()}
          <div>
            ${this.currentPage == PAGES.LANDING_PAGE
              ? html` <div class="slot"><slot></slot></div> `
              : ``}
            ${!this.isEmpty(this.libraryContent) &&
            this.currentPage != PAGES.LANDING_PAGE
              ? html`
                  <library-grid
                    .lastFetch=${this.lastLibraryFetch}
                    .library=${this.libraryContent.items}
                    .currentLibrary=${this.currentLibrary}
                    .loading=${this.libraryHasMore}
                    ?hidden=${this.currentPage == PAGES.MEDIA_PAGE}
                  ></library-grid>
                `
              : ``}
            ${this.isEmpty(this.libraryContent) &&
            this.currentPage == PAGES.LIBRARY_PAGE
              ? html` <div class="loading-spinner"></div> `
              : ``}
            ${!this.isEmpty(this.currentMedia) &&
            this.currentPage == PAGES.MEDIA_PAGE
              ? html`
                  <media-modal
                    .media=${this.currentMedia}
                    .currentLibrary=${this.currentLibrary}
                  ></media-modal>
                `
              : ``}
            ${this.isEmpty(this.currentMedia) &&
            this.currentPage == PAGES.MEDIA_PAGE
              ? html` <div class="loading-spinner"></div> `
              : ``}
          </div>
        </div>
      </div>
    `
  }

  _htmlSidebar() {
    return html` <div id="sidebar">
      <a
        class="link ${this.currentPage == PAGES.LANDING_PAGE ? "active" : ""}"
        href="/"
        title="Home"
      >
        ${this._htmlSidebarIcon("home")}
      </a>
      ${this.libraries.map(
        (item) => html`
          <a
            class="link ${this.currentLibrary == item &&
            this.currentPage != PAGES.LANDING_PAGE
              ? "active"
              : ""}"
            href="/${item.id}/${item.slug}"
            title=${item.title}
            data-tooltip-title=${item.title}
          >
            ${this._htmlSidebarIcon(item.type)}
          </a>
        `
      )}
    </div>`
  }

  _htmlSidebarIcon(type) {
    switch (type) {
      case "menu":
        return html`
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 560">
            <path
              d="M28 420h504v62.222H28V420zm0-171.333h504v62.222H28v-62.222zM28 78h504v62.222H28V78z"
            ></path>
          </svg>
        `
      case "home":
        return html`
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 560">
            <path
              d="M0 520V296.569a40 40 0 0 1 11.716-28.285L280 0l268.284 268.284A40 40 0 0 1 560 296.57V520c0 22.091-17.909 40-40 40H340V360H220v200H40c-22.091 0-40-17.909-40-40z"
            ></path>
          </svg>
        `
      case "show":
        return html`
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 560">
            <path
              d="M400 10h70L351.25 110H546c7.732 0 14 6.268 14 14v412c0 7.732-6.268 14-14 14H14c-7.732 0-14-6.268-14-14V124c0-7.732 6.268-14 14-14h194.75L90 10h70l120 100L400 10zm100 433V177a7 7 0 0 0-7-7H67a7 7 0 0 0-7 7v266a7 7 0 0 0 7 7h426a7 7 0 0 0 7-7z"
            ></path>
          </svg>
        `
      case "music":
        return html`
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 560">
            <path
              d="M199.855 473.52a35.61 35.61 0 0 1 .145 3.222c0 33.115-44.809 68.962-100 80-55.191 11.039-100-6.885-100-40s44.809-68.961 100-80c22.504-4.5 43.282-4.186 60 .01V96.85c0-11.257 8.788-22.154 19.612-24.319L540.388.377C551.212-1.788 560 5.594 560 16.85V392c0 .52-.05 1.028-.145 1.52.096 1.058.145 2.132.145 3.222 0 33.115-44.808 68.962-100 80-55.192 11.039-100-6.885-100-40s44.808-68.961 100-80c22.504-4.5 43.282-4.186 60 .01V124.455l-320 64V472c0 .52-.05 1.028-.145 1.52z"
            ></path>
          </svg>
        `
      case "photos":
        return html`
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 560">
            <path
              d="M440 120h100c11.038 0 20 8.962 20 20v360c0 11.038-8.962 20-20 20H20c-11.038 0-20-8.962-20-20V140c0-11.038 8.962-20 20-20h100V60c0-11.038 8.962-20 20-20h280c11.038 0 20 8.962 20 20v60zm-160 40c-88.306 0-160 71.694-160 160s71.694 160 160 160 160-71.694 160-160-71.694-160-160-160zm0 80c44.153 0 80 35.847 80 80s-35.847 80-80 80-80-35.847-80-80 35.847-80 80-80z"
            ></path>
          </svg>
        `
      // movies
      default:
        return html`
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 560">
            <path
              d="M560 40c0-11.038-8.962-20-20-20H20C8.962 20 0 28.962 0 40v480c0 11.038 8.962 20 20 20h520c11.038 0 20-8.962 20-20V40zM100 468v24c0 4.415-3.585 8-8 8H68c-4.415 0-8-3.585-8-8v-24c0-4.415 3.585-8 8-8h24c4.415 0 8 3.585 8 8zm400 0v24c0 4.415-3.585 8-8 8h-24c-4.415 0-8-3.585-8-8v-24c0-4.415 3.585-8 8-8h24c4.415 0 8 3.585 8 8zM400 310v180c0 5.52-4.48 10-10 10H170c-5.52 0-10-4.48-10-10V310c0-5.52 4.48-10 10-10h220c5.52 0 10 4.48 10 10zm100 78v24c0 4.415-3.585 8-8 8h-24c-4.415 0-8-3.585-8-8v-24c0-4.415 3.585-8 8-8h24c4.415 0 8 3.585 8 8zm-400 0v24c0 4.415-3.585 8-8 8H68c-4.415 0-8-3.585-8-8v-24c0-4.415 3.585-8 8-8h24c4.415 0 8 3.585 8 8zm0-80v24c0 4.415-3.585 8-8 8H68c-4.415 0-8-3.585-8-8v-24c0-4.415 3.585-8 8-8h24c4.415 0 8 3.585 8 8zm400 0v24c0 4.415-3.585 8-8 8h-24c-4.415 0-8-3.585-8-8v-24c0-4.415 3.585-8 8-8h24c4.415 0 8 3.585 8 8zM400 70v180c0 5.52-4.48 10-10 10H170c-5.52 0-10-4.48-10-10V70c0-5.52 4.48-10 10-10h220c5.52 0 10 4.48 10 10zm100 158v24c0 4.415-3.585 8-8 8h-24c-4.415 0-8-3.585-8-8v-24c0-4.415 3.585-8 8-8h24c4.415 0 8 3.585 8 8zm-400 0v24c0 4.415-3.585 8-8 8H68c-4.415 0-8-3.585-8-8v-24c0-4.415 3.585-8 8-8h24c4.415 0 8 3.585 8 8zm0-80v24c0 4.415-3.585 8-8 8H68c-4.415 0-8-3.585-8-8v-24c0-4.415 3.585-8 8-8h24c4.415 0 8 3.585 8 8zm400 0v24c0 4.415-3.585 8-8 8h-24c-4.415 0-8-3.585-8-8v-24c0-4.415 3.585-8 8-8h24c4.415 0 8 3.585 8 8zm0-80v24c0 4.415-3.585 8-8 8h-24c-4.415 0-8-3.585-8-8V68c0-4.415 3.585-8 8-8h24c4.415 0 8 3.585 8 8zm-400 0v24c0 4.415-3.585 8-8 8H68c-4.415 0-8-3.585-8-8V68c0-4.415 3.585-8 8-8h24c4.415 0 8 3.585 8 8z"
            ></path>
          </svg>
        `
    }
  }

  _htmlHeader() {
    // ${this.currentPage==PAGES.LIBRARY_PAGE?
    //   html`
    //     <button>Todos <span class="arrow-icon"></span></button>
    //     <button>Por titulo <span class="arrow-icon"></span></button>
    //     <span class="total-items">${this.libraryContent.length}</span>
    //   `:html``
    // }
    return html`
      <div id="header">
        <div class="left">
          ${this.currentPage == PAGES.LANDING_PAGE
            ? html` <button><span>${this.txt("home")}</span></button> `
            : ``}
          ${this.currentPage == PAGES.MEDIA_PAGE
            ? "parent" in this.currentMedia
              ? html`
              <button @click="${() =>
                page(
                  `/${this.currentLibrary.id}/${this.currentLibrary.slug}/${this.currentMedia.parent.id}`
                )}">${this.currentMedia.parent.title}</span></button>
            `
              : html`
              <button @click="${() =>
                page(
                  `/${this.currentLibrary.id}/${this.currentLibrary.slug}`
                )}">${this.currentLibrary.title}</span></button>
            `
            : ``}
          ${this.currentPage == PAGES.LIBRARY_PAGE
            ? html`
              <button @click="${() =>
                page(
                  `/${this.currentLibrary.id}/${this.currentLibrary.slug}`
                )}">${this.currentLibrary.title}</span></button>
              <span class="total-items">${this.libraryContent.totalSize}</span>
            `
            : html``}
        </div>
        <div class="right"></div>
      </div>
    `
  }

  /****************/
  /*    ROUTES    */
  /****************/

  _setupRoutes() {
    // /
    page(
      "/",
      (ctx, next) => this._processInitialData(ctx, next),
      (ctx) => this._pageRouteLanding(ctx)
    )
    // /:id/:slug
    page(
      /^\/(\d+)\/([a-z0-9_-]+)$/,
      (ctx, next) => this._processInitialData(ctx, next),
      (ctx) => this._pageRouteLibrary(ctx)
    )
    // /:id/:slug/:media
    page(
      /^\/(\d+)\/([a-z0-9_-]+)\/(\d+)$/,
      (ctx, next) => this._processInitialData(ctx, next),
      (ctx, next) => this._pageRouteLibrary(ctx, next),
      (ctx) => this._pageRouteMedia(ctx)
    )
    // catchall
    page("*", () => page.redirect("/"))
    page()
  }

  _pageRouteLanding(ctx) {
    this.currentPage = PAGES.LANDING_PAGE
    // this.setDocumentTitle(this.currentLanguage.home)
  }

  _pageRouteLibrary(ctx, next) {
    if (ctx.params[2]) {
      next()
      return
    }

    if (
      this.isEmpty(this.libraryContent) ||
      this.libraryContentId != ctx.params[0]
    )
      this._fetchLibrary(ctx.params[0], this.libraryContent.length)

    this.currentPage = PAGES.LIBRARY_PAGE
  }

  _pageRouteMedia(ctx) {
    this.currentMedia = {}

    this._fetchMedia(ctx.params[2]).then((result) => {
      this.currentMedia = result.media
      if ("parent" in this.currentMedia)
        this.setDocumentTitle(
          this.currentMedia.parent.title + " > " + this.currentMedia.title
        )
      else this.setDocumentTitle(this.currentMedia.title)
    })
    this.currentPage = PAGES.MEDIA_PAGE
  }

  _checkActiveLibrary(id, cmpSlug = false) {
    if (!this.initialized) return
    this.libraries.map((src) => {
      if (src.id == id) {
        this.currentLibrary = src
        // this.setDocumentTitle(this.currentLibrary.title)
        if (cmpSlug) {
          if (src.slug != cmpSlug) {
            // Change path to match slug, if incorrect
            let url = window.location.pathname.split("/")
            url[2] = src.slug
            url = url.join("/")
            history.replaceState(null, "", url)
          }
        }
      }
    })
  }

  _processInitialData(ctx, next) {
    if (this.initialized) {
      if (Object.keys(ctx.params).length > 1)
        this._checkActiveLibrary(ctx.params[0], ctx.params[1])
      next()
      return
    }
    Promise.all([this._fetchServerInfo(), this._fetchLibraries()]).then(() => {
      this.initialized = true
      this._processInitialData(ctx, next)
    })
  }

  async _fetchServerInfo() {
    // Not much relevant
    return axios
      .get(`/api/server`)
      .then((res) => (this.serverInfo = res.data.result))
      .then(
        (res) =>
          (this.currentLanguage = languageFind(this.serverInfo.countryCode))
      )
  }

  async _fetchLibraries() {
    return axios(`/api/libraries`).then(
      (res) => (this.libraries = res.data.result)
    )
  }

  async _fetchLibrary(id, start = 0) {
    if (start == 0) this.libraryContent = {}

    if (typeof this.libraryCancelToken != typeof undefined)
      this.libraryCancelToken.cancel()

    this.libraryCancelToken = axios.CancelToken.source()

    axios
      .get(`/api/libraries/${id}`, {
        params: { start: start },
        cancelToken: this.libraryCancelToken.token,
      })
      .then((res) => {
        if (start == 0) this.libraryContent = res.data.result
        else
          this.libraryContent.items = [
            ...this.libraryContent.items,
            ...res.data.result.items,
          ]
        this.lastLibraryFetch = Date.now()
      })
  }

  async _fetchMedia(id) {
    if (typeof this.mediaCancelToken != typeof undefined)
      this.mediaCancelToken.cancel()

    this.mediaCancelToken = axios.CancelToken.source()

    return axios
      .get(`/api/media/${id}`, {
        cancelToken: this.mediaCancelToken.token,
      })
      .then((res) => res.data.result)
  }

  _handleLibraryFetchMore() {
    this._fetchLibrary(this.libraryContentId, this.libraryContent.items.length)
  }

  _pageChangeEvent() {
    let event = new CustomEvent("page-change", {
      detail: {
        currentLibrary: this.currentLibrary,
        currentPage: this.currentPage,
        background: this.background,
      },
      bubbles: true,
      composed: true,
    })
    this.dispatchEvent(event)
  }

  /*****************/
  /* AUX FUNCTIONS */
  /*****************/

  isEmpty(obj) {
    return Object.keys(obj).length === 0
  }

  setDocumentTitle(prefix) {
    document.title = prefix + " > Plex"
  }

  /*********************/
  /* GETTERS & SETTERS */
  /*********************/

  txt(val) {
    if (!this.currentLanguage) return ""
    return this.currentLanguage[val]
  }

  get libraryHasMore() {
    if ("totalSize" in this.libraryContent)
      if (this.libraryContent.totalSize <= this.libraryContent.items.length)
        return false
    return true
  }

  get libraryContentId() {
    if (this.isEmpty(this.libraryContent)) return null
    if ("library" in this.libraryContent) return this.libraryContent.library.id
  }

  get currentPage() {
    return this._currentPage
  }

  set currentPage(page) {
    this._currentPage = page
    switch (page) {
      case PAGES.LANDING_PAGE:
        this.setDocumentTitle(this.currentLanguage.home)
        break
      case PAGES.LIBRARY_PAGE:
        this.setDocumentTitle(this.currentLibrary.title)
        break
    }
    this._pageChangeEvent()
  }

  get background() {
    if (this.currentPage != PAGES.MEDIA_PAGE) return null
    if (this.currentMedia)
      if ("background" in this.currentMedia) return this.currentMedia.background
  }

  /*****************/
  /* LIT FUNCTIONS */
  /*****************/

  connectedCallback() {
    super.connectedCallback()
    window.addEventListener(
      "library-fetch-more",
      this._handleLibraryFetchMore.bind(this)
    )
  }

  disconnectedCallback() {
    window.removeEventListener(
      "library-fetch-more",
      this._handleLibraryFetchMore
    )
    super.disconnectedCallback()
  }

  static get properties() {
    return {
      isLoading: { type: Boolean },
      _currentPage: { type: Number },

      initialized: { type: Boolean },

      serverInfo: { type: Object },
      libraries: { type: Array },
      currentLibrary: { type: Object },
      libraryContent: { type: Object },
      lastLibraryFetch: { type: Number },
      currentMedia: { type: Object },
    }
  }

  constructor() {
    super()
    this.currentPage = PAGES.NONE
    this.initialized = false
    this.lastLibraryFetch = null
    this.libraryContent = {}
    this.currentMedia = {}
    this._setupRoutes()
  }
}

customElements.define("app-container", AppContainer)
