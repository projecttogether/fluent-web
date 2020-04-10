import { FluentBundle, FluentResource } from "@fluent/bundle";
import { mapBundleSync } from "@fluent/sequence";
import { CachedSyncIterable } from "cached-iterable";

function parsedBundles(fetchedMessages) {
  const bundles = [];

  for (let [locale, messages] of fetchedMessages) {
    let resource = new FluentResource(messages);
    let bundle = new FluentBundle(locale);

    bundle.addResource(resource);
    bundles.push(bundle);
  }

  return bundles;
}

customElements.define(
  "fluent-web",
  class extends HTMLElement {
    constructor() {
      super();

      if (window.fluentWeb == null) {
        window.fluentWeb = new FluentWeb();
      }
    }

    connectedCallback() {
      this.render();
    }

    set messages(newValue) {
      this.buildBundles(newValue);
      this.render();
    }

    set args(newValue) {
      this.messageArgs = newValue;
      this.render();
    }

    static get observedAttributes() {
      return ["messageTag", "messageId"];
    }

    attributeChangedCallback(name, oldValue, newValue) {
      if (name === "messageId") {
        this.render();
      }
    }

    buildBundles(messages) {
      let bundles = parsedBundles(messages);
      window.fluentWeb.setBundles(bundles);
    }

    render() {
      if (this.hasAttribute("messageTag")) {
        const message = window.fluentWeb.getMessage({
          messageId: this.getAttribute("messageId"),
          args: this.messageArgs,
        });

        if (message) {
          if (this.firstElementChild) {
            Object.entries(message.attributes).forEach(([key, val]) => {
              this.firstElementChild.setAttribute(key, val);
            });

            if (message.value) {
              this.firstElementChild.innerHTML = message.value;
            }
          } else {
            const el = document.createElement(this.getAttribute("messageTag"));

            Object.entries(message.attributes).forEach(([key, val]) => {
              el.setAttribute(key, val);
            });

            if (message.value) {
              el.innerHTML = message.value;
            }

            this.appendChild(el);
          }
        }
      } else {
        if (this.hasAttribute("messageId")) {
          const message = window.fluentWeb.getMessage({
            messageId: this.getAttribute("messageId"),
            args: this.messageArgs,
          });

          if (message.value) {
            this.innerHTML = message.value;
          }
        }
      }
    }
  }
);

class FluentWeb {
  setBundles(bundles) {
    this.bundles = CachedSyncIterable.from(bundles);
  }

  getMessage({ messageId, args }) {
    if (this.bundles) {
      const bundle = mapBundleSync(this.bundles, messageId);

      if (bundle) {
        const message = bundle.getMessage(messageId);

        if (message) {
          let errors = [];
          const value = bundle.formatPattern(message.value, args, errors);

          return { value, attributes: message.attributes };
        }
      }
    }

    return null;
  }
}
