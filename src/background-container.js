import {LitElement, html, css} from 'lit';
import { styleMap } from 'lit/directives/style-map';

class BackgroundContainer extends LitElement{
  static get styles() {
    return css`
      :host {
        overflow: hidden;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -1;
        background-color: #3f4245;
      }
      .background-image {
        position: absolute;
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        transition: background 0.5s ease-in-out 0s;
        -webkit-transition: background 0.5s ease-in-out 0s;
        -moz-transition: background 0.5s ease-in-out 0s;
        -o-transition: background 0.5s ease-in-out 0s;
      }
      .background-image-noise {
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: url(/img/noise.png);
        z-index: 2;
      }
    `;
  }

  render(){ 
    return html`
      <div class="background-image" style=${styleMap({'background-image': this.backgroundUrl})}></div>
      <div class="background-image-noise"></div>
    `;
  }

  constructor(){
      super();
  }

  get backgroundUrl() {
    if (!this.background) return `url(/img/background.png)`
    return `url(${this.background})`
  }

  static get properties(){
      return{
          background: { type: String }
      };
  }
}

customElements.define('background-container', BackgroundContainer);