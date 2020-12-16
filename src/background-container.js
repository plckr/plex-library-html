import {LitElement, html, css} from 'lit-element';

class BackgroundContainer extends LitElement{
  static get styles() {
    let mediaid = css``;
    if (this.mediaId) mediaid = css`url(/dist/img/posters/33362.jpg)`;
    return css`
      .background-container {
          overflow: hidden;
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          z-index: -1;
          background-color: #3f4245;
      }
      .background-container .background-image {
          position: absolute;
          width: 100%;
          height: 100%;
          background-image: url(/dist/img/background.png);
          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;
      }
      .background-image.media {
        filter: blur(45px);
        opacity: 0.2;
        animation: fadeInFromNone 0.5s ease-out;
        /* todo: background-image dynamic based on mediaid if modal */
      }
      .background-container .background-image-noise {
          position: absolute;
          width: 100%;
          height: 100%;
          background-image: url(/dist/img/noise.png);
          z-index: 2;
      }
    `;
  }

  render(){ 
    return html`
      <div class="background-container">
          <div class="background-image"></div>
          <div class="background-image media"></div>
          <div class="background-image-noise"></div>
      </div>
    `;
  }

  _getBackgroundImage() {
    if (typeof(this.mediaId) != 'undefined' && this.mediaId.length > 0) {
      return html`style="background-image: url(/dist/img/posters/${this.mediaId}.jpg);"`;
    }
    return html``;
  }

  static get properties(){
      return{
          mediaId: { type: String }
      };
  }
}

customElements.define('background-container', BackgroundContainer);