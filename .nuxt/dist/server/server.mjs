
// --------------------
// Request: /Users/overtrue/www/laravel.xyz/node_modules/nuxt/dist/app/entry
// Parents: 
// - <entry> ($id_c757eb9e)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/ohmyfetch/dist/index.mjs ($id_780217c4)
// - /@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/paths.mjs ($id_946a6a82)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/css.mjs ($id_20c0354f)
// - /@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/plugins/server.mjs ($id_cd2348f9)
// - /@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/root-component.mjs ($id_6e69f58f)
// - /@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/app-component.mjs ($id_91404192)
// --------------------
const $id_24e0160c = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/ohmyfetch/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/paths.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/css.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/plugins/server.mjs");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/root-component.mjs");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/app-component.mjs");

if (!globalThis.$fetch) {
  globalThis.$fetch = __vite_ssr_import_1__.$fetch.create({
    baseURL: __vite_ssr_import_2__.baseURL()
  });
}
let entry;
const plugins = __vite_ssr_import_3__.normalizePlugins(__vite_ssr_import_5__.default);
if (true) {
  entry = async function createNuxtAppServer(ssrContext = {}) {
    const vueApp = __vite_ssr_import_0__.createApp(__vite_ssr_import_6__.default);
    vueApp.component("App", __vite_ssr_import_7__.default);
    const nuxt = __vite_ssr_import_3__.createNuxtApp({ vueApp, ssrContext });
    try {
      await __vite_ssr_import_3__.applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (err) {
      await nuxt.callHook("app:error", err);
      ssrContext.error = ssrContext.error || err;
    }
    return vueApp;
  };
}
if (false) {
  if (true && __vite_ssr_import_meta__.webpackHot) {
    __vite_ssr_import_meta__.webpackHot.accept();
  }
  entry = async function initApp() {
    const isSSR = Boolean(window.__NUXT__?.serverRendered);
    const vueApp = isSSR ? __vite_ssr_import_0__.createSSRApp(__vite_ssr_import_6__.default) : __vite_ssr_import_0__.createApp(__vite_ssr_import_6__.default);
    vueApp.component("App", __vite_ssr_import_7__.default);
    const nuxt = __vite_ssr_import_3__.createNuxtApp({ vueApp });
    nuxt.hooks.hookOnce("app:suspense:resolve", () => {
      nuxt.isHydrating = false;
    });
    try {
      await __vite_ssr_import_3__.applyPlugins(nuxt, plugins);
    } catch (err) {
      await nuxt.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
    try {
      await nuxt.hooks.callHook("app:created", vueApp);
      await nuxt.hooks.callHook("app:beforeMount", vueApp);
      vueApp.mount("#__nuxt");
      await nuxt.hooks.callHook("app:mounted", vueApp);
      await __vite_ssr_import_0__.nextTick();
    } catch (err) {
      await nuxt.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
  };
  entry().catch((error) => {
    console.error("Error while mounting app:", error);
  });
}
__vite_ssr_exports__.default = (ctx) => entry(ctx);
;
}


// --------------------
// Request: /node_modules/vue/dist/vue.cjs.js
// Parents: 
// - /Users/overtrue/www/laravel.xyz/node_modules/nuxt/dist/app/entry ($id_24e0160c)
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_e069d411)
// - /node_modules/nuxt/dist/app/composables/component.mjs ($id_53345950)
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_d5b6a221)
// - /node_modules/nuxt/dist/app/composables/utils.mjs ($id_df511336)
// - /node_modules/nuxt/dist/app/composables/state.mjs ($id_7d872108)
// - /node_modules/nuxt/dist/app/composables/fetch.mjs ($id_41f5ae4e)
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_511b441d)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_04ea9504)
// - /@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/components.plugin.mjs ($id_759f3471)
// - /node_modules/@nuxt/content/dist/runtime/components/ContentDoc.mjs ($id_12ce52f3)
// - /node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.mjs ($id_8f3d0953)
// - /node_modules/@nuxt/content/dist/runtime/components/MarkdownRenderer.mjs ($id_4c793316)
// - /node_modules/@nuxt/content/dist/runtime/components/ContentQuery.mjs ($id_3f801a38)
// - /node_modules/nuxt/dist/app/compat/capi.mjs ($id_0c5717a4)
// - /@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/imports.mjs ($id_3d849a97)
// - /node_modules/@nuxt/content/dist/runtime/components/ContentList.mjs ($id_9fab5abb)
// - /node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.mjs ($id_d2da4ccd)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseA.vue ($id_558bf79f)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseBlockquote.vue ($id_01e2b479)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCode.vue ($id_19429b58)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCodeInline.vue ($id_fab9e310)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseEm.vue ($id_840411f2)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH1.vue ($id_b479ada6)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH2.vue ($id_9c1df7ff)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH3.vue ($id_f86082f5)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH4.vue ($id_7f627a67)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH5.vue ($id_caec80eb)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH6.vue ($id_26303ae9)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseHr.vue ($id_6f4fac0c)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseImg.vue ($id_f72b4351)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseLi.vue ($id_1b78ec5d)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseOl.vue ($id_2e24a6f5)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseP.vue ($id_0990778f)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseStrong.vue ($id_6d4c23c7)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTable.vue ($id_10f5aef2)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTbody.vue ($id_faffa2d8)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTd.vue ($id_b51a8b09)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTh.vue ($id_07608f57)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseThead.vue ($id_17b6f147)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTr.vue ($id_16f58501)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseUl.vue ($id_7728c86d)
// - /node_modules/@vueuse/head/dist/index.mjs ($id_c032264e)
// - /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_e6f12003)
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_a2650341)
// - /node_modules/nuxt/dist/head/runtime/components.mjs ($id_b2a29d6f)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_5fc14cdc)
// - /node_modules/nuxt/dist/pages/runtime/utils.mjs ($id_80f433aa)
// - /node_modules/nuxt/dist/app/components/utils.mjs ($id_69c52686)
// - /pages/about.vue?macro=true ($id_9ddc318c)
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /pages/jobs.vue?macro=true ($id_da245256)
// - /components/TheLinkButton.vue ($id_67823286)
// - /components/Card.vue ($id_243aaff2)
// - /components/PackageCard.vue ($id_bc4dc7c7)
// - /pages/packages.vue?macro=true ($id_84d7e9a6)
// - /components/StarCard.vue ($id_ce2fb5c2)
// - /pages/stars.vue?macro=true ($id_de6eeb3d)
// - /pages/tips/:id.vue?macro=true ($id_b2d27d81)
// - /components/TheTag.vue ($id_83290242)
// - /components/TheTags.vue ($id_a54c4874)
// - /components/TipCard.vue ($id_f4d8b7fe)
// - /pages/tips/index.vue?macro=true ($id_7b998549)
// - /pages/about.vue ($id_a93ccd0b)
// - /pages/index.vue ($id_cca58e97)
// - /pages/jobs.vue ($id_1eaf0ed3)
// - /pages/packages.vue ($id_d713bde7)
// - /pages/stars.vue ($id_765c962d)
// - /pages/tips/:id.vue ($id_d4dd6cfe)
// - /pages/tips/index.vue ($id_2a5fe106)
// - /plugins/dayjs.js ($id_e4088396)
// - /plugins/emoji.js ($id_5ce230b0)
// - /plugins/markdown-it.js ($id_254393a2)
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_e9bfada3)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_b90d4d0f)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_14c8b574)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_bc2d74a1)
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_8cc6d73f)
// - /components/TheNavbar.vue ($id_1e19b72c)
// - /components/TheFooter.vue ($id_cdfd5170)
// - /app.vue ($id_2b46e842)
// Dependencies: 

// --------------------
const $id_60f0615f = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/overtrue/www/laravel.xyz/node_modules/vue/dist/vue.cjs.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/overtrue/www/laravel.xyz/node_modules/vue/dist/vue.cjs.js\".")
  })


// --------------------
// Request: /node_modules/ohmyfetch/dist/index.mjs
// Parents: 
// - /Users/overtrue/www/laravel.xyz/node_modules/nuxt/dist/app/entry ($id_24e0160c)
// Dependencies: 

// --------------------
const $id_780217c4 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/overtrue/www/laravel.xyz/node_modules/ohmyfetch/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/overtrue/www/laravel.xyz/node_modules/ohmyfetch/dist/index.mjs\".")
  })


// --------------------
// Request: /@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/paths.mjs
// Parents: 
// - /Users/overtrue/www/laravel.xyz/node_modules/nuxt/dist/app/entry ($id_24e0160c)
// Dependencies: 
// - /node_modules/ufo/dist/index.mjs ($id_614de060)
// --------------------
const $id_946a6a82 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/ufo/dist/index.mjs");

const appConfig = {"baseURL":"/","buildAssetsDir":"/_nuxt/","assetsPath":{},"cdnURL":"","head":{"charset":"utf-8","viewport":"width=device-width, initial-scale=1","meta":[],"link":[],"style":[],"script":[]}}
const baseURL = () => appConfig.baseURL
Object.defineProperty(__vite_ssr_exports__, "baseURL", { enumerable: true, configurable: true, get(){ return baseURL }});
const buildAssetsDir = () => appConfig.buildAssetsDir
Object.defineProperty(__vite_ssr_exports__, "buildAssetsDir", { enumerable: true, configurable: true, get(){ return buildAssetsDir }});
const buildAssetsURL = (...path) => __vite_ssr_import_0__.joinURL(publicAssetsURL(), buildAssetsDir(), ...path)
Object.defineProperty(__vite_ssr_exports__, "buildAssetsURL", { enumerable: true, configurable: true, get(){ return buildAssetsURL }});
const publicAssetsURL = (...path) => {
  const publicBase = appConfig.cdnURL || appConfig.baseURL
  return path.length ? __vite_ssr_import_0__.joinURL(publicBase, ...path) : publicBase
}
Object.defineProperty(__vite_ssr_exports__, "publicAssetsURL", { enumerable: true, configurable: true, get(){ return publicAssetsURL }});;
}


// --------------------
// Request: /node_modules/ufo/dist/index.mjs
// Parents: 
// - /@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/paths.mjs ($id_946a6a82)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /node_modules/@nuxt/content/dist/runtime/components/ContentQuery.mjs ($id_3f801a38)
// - /node_modules/@nuxt/content/dist/runtime/composables/utils.mjs ($id_3db3e041)
// - /node_modules/@nuxt/content/dist/runtime/composables/query.mjs ($id_47535763)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// Dependencies: 

// --------------------
const $id_614de060 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/overtrue/www/laravel.xyz/node_modules/ufo/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/overtrue/www/laravel.xyz/node_modules/ufo/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/index.mjs
// Parents: 
// - /Users/overtrue/www/laravel.xyz/node_modules/nuxt/dist/app/entry ($id_24e0160c)
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_d5b6a221)
// - /node_modules/nuxt/dist/app/composables/hydrate.mjs ($id_0063df1b)
// - /node_modules/nuxt/dist/app/composables/state.mjs ($id_7d872108)
// - /node_modules/nuxt/dist/app/composables/error.mjs ($id_6fe050f1)
// - /node_modules/nuxt/dist/app/composables/ssr.mjs ($id_c4866ba7)
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_511b441d)
// - /node_modules/nuxt/dist/app/composables/router.mjs ($id_db4d90a8)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_04ea9504)
// - /node_modules/nuxt/dist/app/plugins/preload.server.mjs ($id_9871bba0)
// - /node_modules/@nuxt/content/dist/runtime/components/MarkdownRenderer.mjs ($id_4c793316)
// - /@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/imports.mjs ($id_3d849a97)
// - /node_modules/@nuxt/content/dist/runtime/composables/utils.mjs ($id_3db3e041)
// - /node_modules/@nuxt/content/dist/runtime/composables/query.mjs ($id_47535763)
// - /node_modules/@nuxt/content/dist/runtime/composables/navigation.mjs ($id_e209d000)
// - /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_e6f12003)
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_a2650341)
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_5fc14cdc)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// - /pages/packages.vue?macro=true ($id_84d7e9a6)
// - /pages/stars.vue?macro=true ($id_de6eeb3d)
// - /pages/tips/:id.vue?macro=true ($id_b2d27d81)
// - /pages/packages.vue ($id_d713bde7)
// - /pages/stars.vue ($id_765c962d)
// - /pages/tips/:id.vue ($id_d4dd6cfe)
// - /node_modules/@nuxt/content/dist/runtime/composables/web-socket.mjs ($id_575fe152)
// - /plugins/dayjs.js ($id_e4088396)
// - /plugins/emoji.js ($id_5ce230b0)
// - /plugins/markdown-it.js ($id_254393a2)
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_e9bfada3)
// Dependencies: 
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_e069d411)
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// - /node_modules/nuxt/dist/app/components/index.mjs ($id_161bfe9f)
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_b7351483)
// --------------------
const $id_36927477 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/nuxt.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_0__);
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/index.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_1__);
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/index.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_2__);
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

Object.defineProperty(__vite_ssr_exports__, "useHead", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.useHead }});
Object.defineProperty(__vite_ssr_exports__, "useMeta", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.useMeta }});
const isVue2 = false;
Object.defineProperty(__vite_ssr_exports__, "isVue2", { enumerable: true, configurable: true, get(){ return isVue2 }});
const isVue3 = true;
Object.defineProperty(__vite_ssr_exports__, "isVue3", { enumerable: true, configurable: true, get(){ return isVue3 }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/nuxt.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/nuxt/dist/app/compat/legacy-app.mjs ($id_a48341bc)
// - /node_modules/nuxt/dist/app/composables/component.mjs ($id_53345950)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/hookable/dist/index.mjs ($id_a2c811c4)
// - /node_modules/unctx/dist/index.mjs ($id_a569ca2d)
// - /node_modules/nuxt/dist/app/compat/legacy-app.mjs ($id_a48341bc)
// --------------------
const $id_e069d411 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/hookable/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/unctx/dist/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/compat/legacy-app.mjs");

const nuxtAppCtx = __vite_ssr_import_2__.getContext("nuxt-app");
const NuxtPluginIndicator = "__nuxt_plugin";
Object.defineProperty(__vite_ssr_exports__, "NuxtPluginIndicator", { enumerable: true, configurable: true, get(){ return NuxtPluginIndicator }});
function createNuxtApp(options) {
  const nuxtApp = {
    provide: void 0,
    globalName: "nuxt",
    payload: __vite_ssr_import_0__.reactive({
      data: {},
      state: {},
      _errors: {},
      ...false ? window.__NUXT__ : { serverRendered: true }
    }),
    isHydrating: false,
    _asyncDataPromises: {},
    ...options
  };
  nuxtApp.hooks = __vite_ssr_import_1__.createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  if (nuxtApp.ssrContext) {
    nuxtApp.ssrContext.nuxt = nuxtApp;
  }
  if (true) {
    nuxtApp.ssrContext = nuxtApp.ssrContext || {};
    nuxtApp.ssrContext.payload = nuxtApp.payload;
  }
  if (true) {
    nuxtApp.payload.config = {
      public: options.ssrContext.runtimeConfig.public,
      app: options.ssrContext.runtimeConfig.app
    };
  }
  const runtimeConfig = true ? options.ssrContext.runtimeConfig : __vite_ssr_import_0__.reactive(nuxtApp.payload.config);
  const compatibilityConfig = new Proxy(runtimeConfig, {
    get(target, prop) {
      if (prop === "public") {
        return target.public;
      }
      return target[prop] ?? target.public[prop];
    },
    set(target, prop, value) {
      if (true || prop === "public" || prop === "app") {
        return false;
      }
      target[prop] = value;
      target.public[prop] = value;
      return true;
    }
  });
  nuxtApp.provide("config", compatibilityConfig);
  return nuxtApp;
}
Object.defineProperty(__vite_ssr_exports__, "createNuxtApp", { enumerable: true, configurable: true, get(){ return createNuxtApp }});
async function applyPlugin(nuxtApp, plugin) {
  if (typeof plugin !== "function") {
    return;
  }
  const { provide } = await callWithNuxt(nuxtApp, plugin, [nuxtApp]) || {};
  if (provide && typeof provide === "object") {
    for (const key in provide) {
      nuxtApp.provide(key, provide[key]);
    }
  }
}
Object.defineProperty(__vite_ssr_exports__, "applyPlugin", { enumerable: true, configurable: true, get(){ return applyPlugin }});
async function applyPlugins(nuxtApp, plugins) {
  for (const plugin of plugins) {
    await applyPlugin(nuxtApp, plugin);
  }
}
Object.defineProperty(__vite_ssr_exports__, "applyPlugins", { enumerable: true, configurable: true, get(){ return applyPlugins }});
function normalizePlugins(_plugins) {
  let needsLegacyContext = false;
  const plugins = _plugins.map((plugin) => {
    if (typeof plugin !== "function") {
      return () => {
      };
    }
    if (isLegacyPlugin(plugin)) {
      needsLegacyContext = true;
      return (nuxtApp) => plugin(nuxtApp._legacyContext, nuxtApp.provide);
    }
    return plugin;
  });
  if (needsLegacyContext) {
    plugins.unshift(__vite_ssr_import_3__.legacyPlugin);
  }
  return plugins;
}
Object.defineProperty(__vite_ssr_exports__, "normalizePlugins", { enumerable: true, configurable: true, get(){ return normalizePlugins }});
function defineNuxtPlugin(plugin) {
  plugin[NuxtPluginIndicator] = true;
  return plugin;
}
Object.defineProperty(__vite_ssr_exports__, "defineNuxtPlugin", { enumerable: true, configurable: true, get(){ return defineNuxtPlugin }});
function isLegacyPlugin(plugin) {
  return !plugin[NuxtPluginIndicator];
}
Object.defineProperty(__vite_ssr_exports__, "isLegacyPlugin", { enumerable: true, configurable: true, get(){ return isLegacyPlugin }});
function callWithNuxt(nuxt, setup, args) {
  const fn = () => args ? setup(...args) : setup();
  if (true) {
    return nuxtAppCtx.callAsync(nuxt, fn);
  } else {
    nuxtAppCtx.set(nuxt);
    return fn();
  }
}
Object.defineProperty(__vite_ssr_exports__, "callWithNuxt", { enumerable: true, configurable: true, get(){ return callWithNuxt }});
function useNuxtApp() {
  const vm = __vite_ssr_import_0__.getCurrentInstance();
  if (!vm) {
    const nuxtAppInstance = nuxtAppCtx.use();
    if (!nuxtAppInstance) {
      throw new Error("nuxt instance unavailable");
    }
    return nuxtAppInstance;
  }
  return vm.appContext.app.$nuxt;
}
Object.defineProperty(__vite_ssr_exports__, "useNuxtApp", { enumerable: true, configurable: true, get(){ return useNuxtApp }});
function useRuntimeConfig() {
  return useNuxtApp().$config;
}
Object.defineProperty(__vite_ssr_exports__, "useRuntimeConfig", { enumerable: true, configurable: true, get(){ return useRuntimeConfig }});
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
;
}


// --------------------
// Request: /node_modules/hookable/dist/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_e069d411)
// Dependencies: 

// --------------------
const $id_a2c811c4 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/overtrue/www/laravel.xyz/node_modules/hookable/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/overtrue/www/laravel.xyz/node_modules/hookable/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/unctx/dist/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_e069d411)
// Dependencies: 

// --------------------
const $id_a569ca2d = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/overtrue/www/laravel.xyz/node_modules/unctx/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/overtrue/www/laravel.xyz/node_modules/unctx/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/compat/legacy-app.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_e069d411)
// Dependencies: 
// - /node_modules/unenv/runtime/mock/proxy.mjs ($id_39e12da7)
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_e069d411)
// --------------------
const $id_a48341bc = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/unenv/runtime/mock/proxy.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/nuxt.mjs");

function mock(warning) {
  console.warn(warning);
  return __vite_ssr_import_0__.default;
}
const unsupported = new Set([
  "store",
  "spa",
  "fetchCounters"
]);
const todo = new Set([
  "isHMR",
  "base",
  "payload",
  "from",
  "next",
  "error",
  "redirect",
  "redirected",
  "enablePreview",
  "$preview",
  "beforeNuxtRender",
  "beforeSerialize"
]);
const serverProperties = new Set([
  "req",
  "res",
  "ssrContext"
]);
const routerKeys = ["route", "params", "query"];
const staticFlags = {
  isClient: false,
  isServer: true,
  isDev: true,
  isStatic: void 0,
  target: "server",
  modern: false
};
const legacyPlugin = (nuxtApp) => {
  nuxtApp._legacyContext = new Proxy(nuxtApp, {
    get(nuxt, p) {
      if (unsupported.has(p)) {
        return mock(`Accessing ${p} is not supported in Nuxt 3.`);
      }
      if (todo.has(p)) {
        return mock(`Accessing ${p} is not yet supported in Nuxt 3.`);
      }
      if (routerKeys.includes(p)) {
        if (!("$router" in nuxtApp)) {
          return mock("vue-router is not being used in this project.");
        }
        switch (p) {
          case "route":
            return nuxt.$router.currentRoute.value;
          case "params":
          case "query":
            return nuxt.$router.currentRoute.value[p];
        }
      }
      if (p === "$config" || p === "env") {
        return __vite_ssr_import_1__.useRuntimeConfig();
      }
      if (p in staticFlags) {
        return staticFlags[p];
      }
      if (false && serverProperties.has(p)) {
        return void 0;
      }
      if (p === "ssrContext") {
        return nuxt._legacyContext;
      }
      if (nuxt.ssrContext && p in nuxt.ssrContext) {
        return nuxt.ssrContext[p];
      }
      if (p === "nuxt") {
        return nuxt.payload;
      }
      if (p === "nuxtState") {
        return nuxt.payload.data;
      }
      if (p in nuxtApp.vueApp) {
        return nuxtApp.vueApp[p];
      }
      if (p in nuxtApp) {
        return nuxtApp[p];
      }
      return mock(`Accessing ${p} is not supported in Nuxt3.`);
    }
  });
  if (false) {
    nuxtApp.hook("app:created", () => {
      const legacyApp = new Proxy(nuxtApp.vueApp, {
        get(source, p) {
          if (["$root", "constructor"].includes(p)) {
            return legacyApp;
          }
          return source[p] || nuxtApp[p];
        }
      });
      window[`$${nuxtApp.globalName}`] = legacyApp;
    });
  }
};
Object.defineProperty(__vite_ssr_exports__, "legacyPlugin", { enumerable: true, configurable: true, get(){ return legacyPlugin }});
;
}


// --------------------
// Request: /node_modules/unenv/runtime/mock/proxy.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/compat/legacy-app.mjs ($id_a48341bc)
// Dependencies: 

// --------------------
const $id_39e12da7 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/overtrue/www/laravel.xyz/node_modules/unenv/runtime/mock/proxy.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/overtrue/www/laravel.xyz/node_modules/unenv/runtime/mock/proxy.mjs\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// Dependencies: 
// - /node_modules/nuxt/dist/app/composables/component.mjs ($id_53345950)
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_d5b6a221)
// - /node_modules/nuxt/dist/app/composables/hydrate.mjs ($id_0063df1b)
// - /node_modules/nuxt/dist/app/composables/state.mjs ($id_7d872108)
// - /node_modules/nuxt/dist/app/composables/error.mjs ($id_6fe050f1)
// - /node_modules/nuxt/dist/app/composables/fetch.mjs ($id_41f5ae4e)
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_511b441d)
// - /node_modules/nuxt/dist/app/composables/ssr.mjs ($id_c4866ba7)
// - /node_modules/nuxt/dist/app/composables/router.mjs ($id_db4d90a8)
// --------------------
const $id_b067a79a = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/component.mjs");

Object.defineProperty(__vite_ssr_exports__, "defineNuxtComponent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.defineNuxtComponent }});
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/asyncData.mjs");

Object.defineProperty(__vite_ssr_exports__, "useAsyncData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_1__.useAsyncData }});
Object.defineProperty(__vite_ssr_exports__, "useLazyAsyncData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_1__.useLazyAsyncData }});
Object.defineProperty(__vite_ssr_exports__, "refreshNuxtData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_1__.refreshNuxtData }});
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/hydrate.mjs");

Object.defineProperty(__vite_ssr_exports__, "useHydration", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.useHydration }});
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/state.mjs");

Object.defineProperty(__vite_ssr_exports__, "useState", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.useState }});
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/error.mjs");

Object.defineProperty(__vite_ssr_exports__, "clearError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.clearError }});
Object.defineProperty(__vite_ssr_exports__, "throwError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.throwError }});
Object.defineProperty(__vite_ssr_exports__, "useError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.useError }});
const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/fetch.mjs");

Object.defineProperty(__vite_ssr_exports__, "useFetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_5__.useFetch }});
Object.defineProperty(__vite_ssr_exports__, "useLazyFetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_5__.useLazyFetch }});
const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/cookie.mjs");

Object.defineProperty(__vite_ssr_exports__, "useCookie", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_6__.useCookie }});
const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/ssr.mjs");

Object.defineProperty(__vite_ssr_exports__, "useRequestHeaders", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useRequestHeaders }});
Object.defineProperty(__vite_ssr_exports__, "useRequestEvent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useRequestEvent }});
const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/router.mjs");

Object.defineProperty(__vite_ssr_exports__, "abortNavigation", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.abortNavigation }});
Object.defineProperty(__vite_ssr_exports__, "addRouteMiddleware", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.addRouteMiddleware }});
Object.defineProperty(__vite_ssr_exports__, "defineNuxtRouteMiddleware", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.defineNuxtRouteMiddleware }});
Object.defineProperty(__vite_ssr_exports__, "navigateTo", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.navigateTo }});
Object.defineProperty(__vite_ssr_exports__, "useRoute", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useRoute }});
Object.defineProperty(__vite_ssr_exports__, "useActiveRoute", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useActiveRoute }});
Object.defineProperty(__vite_ssr_exports__, "useRouter", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useRouter }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/component.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue-router/dist/vue-router.cjs.js ($id_f9a4a698)
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_e069d411)
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_d5b6a221)
// --------------------
const $id_53345950 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue-router/dist/vue-router.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/nuxt.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/asyncData.mjs");

const NuxtComponentIndicator = "__nuxt_component";
Object.defineProperty(__vite_ssr_exports__, "NuxtComponentIndicator", { enumerable: true, configurable: true, get(){ return NuxtComponentIndicator }});
async function runLegacyAsyncData(res, fn) {
  const nuxt = __vite_ssr_import_2__.useNuxtApp();
  const route = __vite_ssr_import_1__.useRoute();
  const vm = __vite_ssr_import_0__.getCurrentInstance();
  const { fetchKey } = vm.proxy.$options;
  const key = typeof fetchKey === "function" ? fetchKey(() => "") : fetchKey || route.fullPath;
  const { data } = await __vite_ssr_import_3__.useAsyncData(`options:asyncdata:${key}`, () => fn(nuxt._legacyContext));
  if (data.value && typeof data.value === "object") {
    Object.assign(await res, __vite_ssr_import_0__.toRefs(__vite_ssr_import_0__.reactive(data.value)));
  } else if (true) {
    console.warn("[nuxt] asyncData should return an object", data);
  }
}
const defineNuxtComponent = function defineNuxtComponent2(options) {
  const { setup } = options;
  if (!setup && !options.asyncData) {
    return {
      [NuxtComponentIndicator]: true,
      ...options
    };
  }
  return {
    [NuxtComponentIndicator]: true,
    ...options,
    setup(props, ctx) {
      const res = setup?.(props, ctx) || {};
      let promises = [];
      promises = promises || [];
      if (options.asyncData) {
        promises.push(runLegacyAsyncData(res, options.asyncData));
      }
      return Promise.resolve(res).then(() => Promise.all(promises)).then(() => res).finally(() => {
        promises.length = 0;
        promises = null;
      });
    }
  };
};
Object.defineProperty(__vite_ssr_exports__, "defineNuxtComponent", { enumerable: true, configurable: true, get(){ return defineNuxtComponent }});
;
}


// --------------------
// Request: /node_modules/vue-router/dist/vue-router.cjs.js
// Parents: 
// - /node_modules/nuxt/dist/app/composables/component.mjs ($id_53345950)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_5fc14cdc)
// Dependencies: 

// --------------------
const $id_f9a4a698 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/overtrue/www/laravel.xyz/node_modules/vue-router/dist/vue-router.cjs.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/overtrue/www/laravel.xyz/node_modules/vue-router/dist/vue-router.cjs.js\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/asyncData.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/component.mjs ($id_53345950)
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// - /node_modules/nuxt/dist/app/composables/fetch.mjs ($id_41f5ae4e)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/app/composables/utils.mjs ($id_df511336)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_d5b6a221 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/utils.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const getDefault = () => null;
function useAsyncData(key, handler, options = {}) {
  if (typeof key !== "string") {
    throw new TypeError("asyncData key must be a string");
  }
  if (typeof handler !== "function") {
    throw new TypeError("asyncData handler must be a function");
  }
  options = { server: true, default: getDefault, ...options };
  if (options.defer) {
    console.warn("[useAsyncData] `defer` has been renamed to `lazy`. Support for `defer` will be removed in RC.");
  }
  options.lazy = options.lazy ?? options.defer ?? false;
  options.initialCache = options.initialCache ?? true;
  const nuxt = __vite_ssr_import_2__.useNuxtApp();
  const instance = __vite_ssr_import_0__.getCurrentInstance();
  if (instance && !instance._nuxtOnBeforeMountCbs) {
    const cbs = instance._nuxtOnBeforeMountCbs = [];
    if (instance && false) {
      __vite_ssr_import_0__.onBeforeMount(() => {
        cbs.forEach((cb) => {
          cb();
        });
        cbs.splice(0, cbs.length);
      });
      __vite_ssr_import_0__.onUnmounted(() => cbs.splice(0, cbs.length));
    }
  }
  const useInitialCache = () => options.initialCache && nuxt.payload.data[key] !== void 0;
  const asyncData = {
    data: __vite_ssr_import_1__.wrapInRef(nuxt.payload.data[key] ?? options.default()),
    pending: __vite_ssr_import_0__.ref(!useInitialCache()),
    error: __vite_ssr_import_0__.ref(nuxt.payload._errors[key] ?? null)
  };
  asyncData.refresh = (opts = {}) => {
    if (nuxt._asyncDataPromises[key]) {
      return nuxt._asyncDataPromises[key];
    }
    if (opts._initial && useInitialCache()) {
      return nuxt.payload.data[key];
    }
    asyncData.pending.value = true;
    nuxt._asyncDataPromises[key] = Promise.resolve(handler(nuxt)).then((result) => {
      if (options.transform) {
        result = options.transform(result);
      }
      if (options.pick) {
        result = pick(result, options.pick);
      }
      asyncData.data.value = result;
      asyncData.error.value = null;
    }).catch((error) => {
      asyncData.error.value = error;
      asyncData.data.value = __vite_ssr_import_0__.unref(options.default());
    }).finally(() => {
      asyncData.pending.value = false;
      nuxt.payload.data[key] = asyncData.data.value;
      if (asyncData.error.value) {
        nuxt.payload._errors[key] = true;
      }
      delete nuxt._asyncDataPromises[key];
    });
    return nuxt._asyncDataPromises[key];
  };
  const initialFetch = () => asyncData.refresh({ _initial: true });
  const fetchOnServer = options.server !== false && nuxt.payload.serverRendered;
  if (true && fetchOnServer) {
    const promise = initialFetch();
    __vite_ssr_import_0__.onServerPrefetch(() => promise);
  }
  if (false) {
    if (fetchOnServer && nuxt.isHydrating && key in nuxt.payload.data) {
      asyncData.pending.value = false;
    } else if (instance && nuxt.payload.serverRendered && (nuxt.isHydrating || options.lazy)) {
      instance._nuxtOnBeforeMountCbs.push(initialFetch);
    } else {
      initialFetch();
    }
    if (options.watch) {
      __vite_ssr_import_0__.watch(options.watch, () => asyncData.refresh());
    }
    const off = nuxt.hook("app:data:refresh", (keys) => {
      if (!keys || keys.includes(key)) {
        return asyncData.refresh();
      }
    });
    if (instance) {
      __vite_ssr_import_0__.onUnmounted(off);
    }
  }
  const asyncDataPromise = Promise.resolve(nuxt._asyncDataPromises[key]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
Object.defineProperty(__vite_ssr_exports__, "useAsyncData", { enumerable: true, configurable: true, get(){ return useAsyncData }});
function useLazyAsyncData(key, handler, options = {}) {
  return useAsyncData(key, handler, { ...options, lazy: true });
}
Object.defineProperty(__vite_ssr_exports__, "useLazyAsyncData", { enumerable: true, configurable: true, get(){ return useLazyAsyncData }});
function refreshNuxtData(keys) {
  if (true) {
    return Promise.resolve();
  }
  const _keys = keys ? Array.isArray(keys) ? keys : [keys] : void 0;
  return __vite_ssr_import_2__.useNuxtApp().callHook("app:data:refresh", _keys);
}
Object.defineProperty(__vite_ssr_exports__, "refreshNuxtData", { enumerable: true, configurable: true, get(){ return refreshNuxtData }});
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/utils.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_d5b6a221)
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_511b441d)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_df511336 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const wrapInRef = (value) => __vite_ssr_import_0__.isRef(value) ? value : __vite_ssr_import_0__.ref(value);
Object.defineProperty(__vite_ssr_exports__, "wrapInRef", { enumerable: true, configurable: true, get(){ return wrapInRef }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/hydrate.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_0063df1b = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const useHydration = (key, get, set) => {
  const nuxt = __vite_ssr_import_0__.useNuxtApp();
  if (true) {
    nuxt.hooks.hook("app:rendered", () => {
      nuxt.payload[key] = get();
    });
  }
  if (false) {
    nuxt.hooks.hook("app:created", () => {
      set(nuxt.payload[key]);
    });
  }
};
Object.defineProperty(__vite_ssr_exports__, "useHydration", { enumerable: true, configurable: true, get(){ return useHydration }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/state.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_7d872108 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const useState = (key, init) => {
  const nuxt = __vite_ssr_import_1__.useNuxtApp();
  const state = __vite_ssr_import_0__.toRef(nuxt.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (__vite_ssr_import_0__.isRef(initialValue)) {
      nuxt.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
};
Object.defineProperty(__vite_ssr_exports__, "useState", { enumerable: true, configurable: true, get(){ return useState }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/error.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_6fe050f1 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const useError = () => {
  const nuxtApp = __vite_ssr_import_0__.useNuxtApp();
  return __vite_ssr_import_0__.useState("error", () => true ? nuxtApp.ssrContext.error : nuxtApp.payload.error);
};
Object.defineProperty(__vite_ssr_exports__, "useError", { enumerable: true, configurable: true, get(){ return useError }});
const throwError = (_err) => {
  const nuxtApp = __vite_ssr_import_0__.useNuxtApp();
  const error = useError();
  const err = typeof _err === "string" ? new Error(_err) : _err;
  nuxtApp.callHook("app:error", err);
  if (true) {
    nuxtApp.ssrContext.error = nuxtApp.ssrContext.error || err;
  } else {
    error.value = error.value || err;
  }
  return err;
};
Object.defineProperty(__vite_ssr_exports__, "throwError", { enumerable: true, configurable: true, get(){ return throwError }});
const clearError = async (options = {}) => {
  const nuxtApp = __vite_ssr_import_0__.useNuxtApp();
  const error = useError();
  nuxtApp.callHook("app:error:cleared", options);
  if (options.redirect) {
    await nuxtApp.$router.replace(options.redirect);
  }
  error.value = null;
};
Object.defineProperty(__vite_ssr_exports__, "clearError", { enumerable: true, configurable: true, get(){ return clearError }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/fetch.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// Dependencies: 
// - /node_modules/ohash/dist/index.mjs ($id_b1b82cf3)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_d5b6a221)
// --------------------
const $id_41f5ae4e = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/ohash/dist/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/asyncData.mjs");

function useFetch(request, opts = {}) {
  if (true && opts.transform && !opts.key) {
    console.warn("[nuxt] You should provide a key for `useFetch` when using a custom transform function.");
  }
  const key = "$f_" + (opts.key || __vite_ssr_import_0__.hash([request, { ...opts, transform: null }]));
  const _request = __vite_ssr_import_1__.computed(() => {
    let r = request;
    if (typeof r === "function") {
      r = r();
    }
    return __vite_ssr_import_1__.isRef(r) ? r.value : r;
  });
  const _fetchOptions = {
    ...opts,
    cache: typeof opts.cache === "boolean" ? void 0 : opts.cache
  };
  const _asyncDataOptions = {
    ...opts,
    watch: [
      _request,
      ...opts.watch || []
    ]
  };
  const asyncData = __vite_ssr_import_2__.useAsyncData(key, () => {
    return $fetch(_request.value, _fetchOptions);
  }, _asyncDataOptions);
  return asyncData;
}
Object.defineProperty(__vite_ssr_exports__, "useFetch", { enumerable: true, configurable: true, get(){ return useFetch }});
function useLazyFetch(request, opts = {}) {
  return useFetch(request, {
    ...opts,
    lazy: true
  });
}
Object.defineProperty(__vite_ssr_exports__, "useLazyFetch", { enumerable: true, configurable: true, get(){ return useLazyFetch }});
;
}


// --------------------
// Request: /node_modules/ohash/dist/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/fetch.mjs ($id_41f5ae4e)
// - /node_modules/@nuxt/content/dist/runtime/composables/query.mjs ($id_47535763)
// - /node_modules/@nuxt/content/dist/runtime/composables/navigation.mjs ($id_e209d000)
// - /node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.mjs ($id_d2da4ccd)
// Dependencies: 

// --------------------
const $id_b1b82cf3 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/overtrue/www/laravel.xyz/node_modules/ohash/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/overtrue/www/laravel.xyz/node_modules/ohash/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/cookie.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/cookie-es/dist/index.mjs ($id_f4975261)
// - /node_modules/h3/dist/index.mjs ($id_57d7ded6)
// - /node_modules/destr/dist/index.mjs ($id_03d15ecd)
// - /node_modules/nuxt/dist/app/composables/ssr.mjs ($id_c4866ba7)
// - /node_modules/nuxt/dist/app/composables/utils.mjs ($id_df511336)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_511b441d = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/cookie-es/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/h3/dist/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/destr/dist/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/ssr.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/utils.mjs");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const CookieDefaults = {
  path: "/",
  decode: (val) => __vite_ssr_import_3__.default(decodeURIComponent(val)),
  encode: (val) => encodeURIComponent(typeof val === "string" ? val : JSON.stringify(val))
};
function useCookie(name, _opts) {
  const opts = { ...CookieDefaults, ..._opts };
  const cookies = readRawCookies(opts);
  const cookie = __vite_ssr_import_5__.wrapInRef(cookies[name] ?? opts.default?.());
  if (false) {
    __vite_ssr_import_0__.watch(cookie, () => {
      writeClientCookie(name, cookie.value, opts);
    });
  } else if (true) {
    const nuxtApp = __vite_ssr_import_6__.useNuxtApp();
    const writeFinalCookieValue = () => {
      if (cookie.value !== cookies[name]) {
        writeServerCookie(__vite_ssr_import_4__.useRequestEvent(nuxtApp), name, cookie.value, opts);
      }
    };
    nuxtApp.hooks.hookOnce("app:rendered", writeFinalCookieValue);
    nuxtApp.hooks.hookOnce("app:redirected", writeFinalCookieValue);
  }
  return cookie;
}
Object.defineProperty(__vite_ssr_exports__, "useCookie", { enumerable: true, configurable: true, get(){ return useCookie }});
function readRawCookies(opts = {}) {
  if (true) {
    return __vite_ssr_import_1__.parse(__vite_ssr_import_4__.useRequestEvent()?.req.headers.cookie || "", opts);
  } else if (false) {
    return __vite_ssr_import_1__.parse(document.cookie, opts);
  }
}
function serializeCookie(name, value, opts = {}) {
  if (value === null || value === void 0) {
    return __vite_ssr_import_1__.serialize(name, value, { ...opts, maxAge: -1 });
  }
  return __vite_ssr_import_1__.serialize(name, value, opts);
}
function writeClientCookie(name, value, opts = {}) {
  if (false) {
    document.cookie = serializeCookie(name, value, opts);
  }
}
function writeServerCookie(event, name, value, opts = {}) {
  if (event) {
    __vite_ssr_import_2__.appendHeader(event, "Set-Cookie", serializeCookie(name, value, opts));
  }
}
;
}


// --------------------
// Request: /node_modules/cookie-es/dist/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_511b441d)
// Dependencies: 

// --------------------
const $id_f4975261 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/overtrue/www/laravel.xyz/node_modules/cookie-es/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/overtrue/www/laravel.xyz/node_modules/cookie-es/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/h3/dist/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_511b441d)
// - /node_modules/nuxt/dist/app/composables/router.mjs ($id_db4d90a8)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// Dependencies: 

// --------------------
const $id_57d7ded6 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/overtrue/www/laravel.xyz/node_modules/h3/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/overtrue/www/laravel.xyz/node_modules/h3/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/destr/dist/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_511b441d)
// - /node_modules/@nuxt/content/dist/runtime/components/MarkdownRenderer.mjs ($id_4c793316)
// Dependencies: 

// --------------------
const $id_03d15ecd = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/overtrue/www/laravel.xyz/node_modules/destr/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/overtrue/www/laravel.xyz/node_modules/destr/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/ssr.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_511b441d)
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_c4866ba7 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

function useRequestHeaders(include) {
  if (false) {
    return {};
  }
  const headers = __vite_ssr_import_0__.useNuxtApp().ssrContext?.event.req.headers ?? {};
  if (!include) {
    return headers;
  }
  return Object.fromEntries(include.filter((key) => headers[key]).map((key) => [key, headers[key]]));
}
Object.defineProperty(__vite_ssr_exports__, "useRequestHeaders", { enumerable: true, configurable: true, get(){ return useRequestHeaders }});
function useRequestEvent(nuxtApp = __vite_ssr_import_0__.useNuxtApp()) {
  return nuxtApp.ssrContext?.event;
}
Object.defineProperty(__vite_ssr_exports__, "useRequestEvent", { enumerable: true, configurable: true, get(){ return useRequestEvent }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/router.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// Dependencies: 
// - /node_modules/h3/dist/index.mjs ($id_57d7ded6)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_db4d90a8 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/h3/dist/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const useRouter = () => {
  return __vite_ssr_import_1__.useNuxtApp()?.$router;
};
Object.defineProperty(__vite_ssr_exports__, "useRouter", { enumerable: true, configurable: true, get(){ return useRouter }});
const useRoute = () => {
  return __vite_ssr_import_1__.useNuxtApp()._route;
};
Object.defineProperty(__vite_ssr_exports__, "useRoute", { enumerable: true, configurable: true, get(){ return useRoute }});
const useActiveRoute = () => {
  return __vite_ssr_import_1__.useNuxtApp()._activeRoute;
};
Object.defineProperty(__vite_ssr_exports__, "useActiveRoute", { enumerable: true, configurable: true, get(){ return useActiveRoute }});
const defineNuxtRouteMiddleware = (middleware) => middleware;
Object.defineProperty(__vite_ssr_exports__, "defineNuxtRouteMiddleware", { enumerable: true, configurable: true, get(){ return defineNuxtRouteMiddleware }});
const addRouteMiddleware = (name, middleware, options = {}) => {
  const nuxtApp = __vite_ssr_import_1__.useNuxtApp();
  if (options.global || typeof name === "function") {
    nuxtApp._middleware.global.push(typeof name === "function" ? name : middleware);
  } else {
    nuxtApp._middleware.named[name] = middleware;
  }
};
Object.defineProperty(__vite_ssr_exports__, "addRouteMiddleware", { enumerable: true, configurable: true, get(){ return addRouteMiddleware }});
const isProcessingMiddleware = () => {
  try {
    if (__vite_ssr_import_1__.useNuxtApp()._processingMiddleware) {
      return true;
    }
  } catch {
    return true;
  }
  return false;
};
const navigateTo = (to, options = {}) => {
  if (!to) {
    to = "/";
  }
  if (isProcessingMiddleware()) {
    return to;
  }
  const router = useRouter();
  if (true) {
    const nuxtApp = __vite_ssr_import_1__.useNuxtApp();
    if (nuxtApp.ssrContext && nuxtApp.ssrContext.event) {
      const redirectLocation = router.resolve(to).fullPath || "/";
      return nuxtApp.callHook("app:redirected").then(() => __vite_ssr_import_0__.sendRedirect(nuxtApp.ssrContext.event, redirectLocation, options.redirectCode || 301));
    }
  }
  return options.replace ? router.replace(to) : router.push(to);
};
Object.defineProperty(__vite_ssr_exports__, "navigateTo", { enumerable: true, configurable: true, get(){ return navigateTo }});
const abortNavigation = (err) => {
  if (true && !isProcessingMiddleware()) {
    throw new Error("abortNavigation() is only usable inside a route middleware handler.");
  }
  if (err) {
    throw err instanceof Error ? err : new Error(err);
  }
  return false;
};
Object.defineProperty(__vite_ssr_exports__, "abortNavigation", { enumerable: true, configurable: true, get(){ return abortNavigation }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// --------------------
const $id_161bfe9f = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

Object.defineProperty(__vite_ssr_exports__, "defineNuxtLink", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.defineNuxtLink }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/nuxt-link.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/components/index.mjs ($id_161bfe9f)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseA.vue ($id_558bf79f)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH2.vue ($id_9c1df7ff)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH3.vue ($id_f86082f5)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH4.vue ($id_7f627a67)
// - /components/PackageCard.vue ($id_bc4dc7c7)
// - /components/StarCard.vue ($id_ce2fb5c2)
// - /pages/tips/:id.vue?macro=true ($id_b2d27d81)
// - /pages/tips/:id.vue ($id_d4dd6cfe)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_b90d4d0f)
// - /components/TheNavbar.vue ($id_1e19b72c)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/ufo/dist/index.mjs ($id_614de060)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_ffac87b5 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/ufo/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const firstNonUndefined = (...args) => args.find((arg) => arg !== void 0);
const DEFAULT_EXTERNAL_REL_ATTRIBUTE = "noopener noreferrer";
function defineNuxtLink(options) {
  const componentName = options.componentName || "NuxtLink";
  const checkPropConflicts = (props, main, sub) => {
    if (true && props[main] !== void 0 && props[sub] !== void 0) {
      console.warn(`[${componentName}] \`${main}\` and \`${sub}\` cannot be used together. \`${sub}\` will be ignored.`);
    }
  };
  return __vite_ssr_import_0__.defineComponent({
    name: componentName,
    props: {
      to: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      href: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      target: {
        type: String,
        default: void 0,
        required: false
      },
      rel: {
        type: String,
        default: void 0,
        required: false
      },
      noRel: {
        type: Boolean,
        default: void 0,
        required: false
      },
      activeClass: {
        type: String,
        default: void 0,
        required: false
      },
      exactActiveClass: {
        type: String,
        default: void 0,
        required: false
      },
      replace: {
        type: Boolean,
        default: void 0,
        required: false
      },
      ariaCurrentValue: {
        type: String,
        default: void 0,
        required: false
      },
      external: {
        type: Boolean,
        default: void 0,
        required: false
      },
      custom: {
        type: Boolean,
        default: void 0,
        required: false
      }
    },
    setup(props, { slots }) {
      const router = __vite_ssr_import_2__.useRouter();
      const to = __vite_ssr_import_0__.computed(() => {
        checkPropConflicts(props, "to", "href");
        return props.to || props.href || "";
      });
      const isExternal = __vite_ssr_import_0__.computed(() => {
        if (props.external) {
          return true;
        }
        if (props.target && props.target !== "_self") {
          return true;
        }
        if (typeof to.value === "object") {
          return false;
        }
        return to.value === "" || __vite_ssr_import_1__.hasProtocol(to.value, true);
      });
      return () => {
        if (!isExternal.value) {
          return __vite_ssr_import_0__.h(__vite_ssr_import_0__.resolveComponent("RouterLink"), {
            to: to.value,
            activeClass: props.activeClass || options.activeClass,
            exactActiveClass: props.exactActiveClass || options.exactActiveClass,
            replace: props.replace,
            ariaCurrentValue: props.ariaCurrentValue
          }, slots.default);
        }
        const href = typeof to.value === "object" ? router.resolve(to.value)?.href ?? null : to.value || null;
        const target = props.target || null;
        checkPropConflicts(props, "noRel", "rel");
        const rel = props.noRel ? null : firstNonUndefined(props.rel, options.externalRelAttribute, href ? DEFAULT_EXTERNAL_REL_ATTRIBUTE : "") || null;
        return __vite_ssr_import_0__.h("a", { href, rel, target }, slots.default?.());
      };
    }
  });
}
Object.defineProperty(__vite_ssr_exports__, "defineNuxtLink", { enumerable: true, configurable: true, get(){ return defineNuxtLink }});
__vite_ssr_exports__.default = defineNuxtLink({ componentName: "NuxtLink" });
;
}


// --------------------
// Request: /node_modules/nuxt/dist/head/runtime/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/imports.mjs ($id_3d849a97)
// Dependencies: 
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_04ea9504)
// --------------------
const $id_b7351483 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/composables.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_0__);
;
}


// --------------------
// Request: /node_modules/nuxt/dist/head/runtime/composables.mjs
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_b7351483)
// - /node_modules/nuxt/dist/head/runtime/components.mjs ($id_b2a29d6f)
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_a2650341)
// Dependencies: 
// - /node_modules/@vue/shared/dist/shared.cjs.js ($id_852b06a2)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_04ea9504 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@vue/shared/dist/shared.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

function useHead(meta) {
  const resolvedMeta = __vite_ssr_import_0__.isFunction(meta) ? __vite_ssr_import_1__.computed(meta) : meta;
  __vite_ssr_import_2__.useNuxtApp()._useHead(resolvedMeta);
}
Object.defineProperty(__vite_ssr_exports__, "useHead", { enumerable: true, configurable: true, get(){ return useHead }});
function useMeta(meta) {
  return useHead(meta);
}
Object.defineProperty(__vite_ssr_exports__, "useMeta", { enumerable: true, configurable: true, get(){ return useMeta }});
;
}


// --------------------
// Request: /node_modules/@vue/shared/dist/shared.cjs.js
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_04ea9504)
// Dependencies: 

// --------------------
const $id_852b06a2 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/overtrue/www/laravel.xyz/node_modules/@vue/shared/dist/shared.cjs.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/overtrue/www/laravel.xyz/node_modules/@vue/shared/dist/shared.cjs.js\".")
  })


// --------------------
// Request: /@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/css.mjs
// Parents: 
// - /Users/overtrue/www/laravel.xyz/node_modules/nuxt/dist/app/entry ($id_24e0160c)
// Dependencies: 
// - /assets/styles/styles.css ($id_b69da117)
// --------------------
const $id_20c0354f = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/assets/styles/styles.css");
;
}


// --------------------
// Request: /assets/styles/styles.css
// Parents: 
// - /@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/css.mjs ($id_20c0354f)
// Dependencies: 

// --------------------
const $id_b69da117 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "/*! tailwindcss v3.0.24 | MIT License | https://tailwindcss.com*/*,:after,:before{border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:\"\"}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{color:inherit;font-family:inherit;font-size:100%;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:#9ca3af;opacity:1}input:-ms-input-placeholder,textarea:-ms-input-placeholder{color:#9ca3af;opacity:1}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}[multiple],[type=date],[type=datetime-local],[type=email],[type=month],[type=number],[type=password],[type=search],[type=tel],[type=text],[type=time],[type=url],[type=week],select,textarea{--tw-shadow:0 0 #0000;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;border-color:#6b7280;border-radius:0;border-width:1px;font-size:1rem;line-height:1.5rem;padding:.5rem .75rem}[multiple]:focus,[type=date]:focus,[type=datetime-local]:focus,[type=email]:focus,[type=month]:focus,[type=number]:focus,[type=password]:focus,[type=search]:focus,[type=tel]:focus,[type=text]:focus,[type=time]:focus,[type=url]:focus,[type=week]:focus,select:focus,textarea:focus{--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:#2563eb;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);border-color:#2563eb;box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);outline:2px solid transparent;outline-offset:2px}input::-moz-placeholder,textarea::-moz-placeholder{color:#6b7280;opacity:1}input:-ms-input-placeholder,textarea:-ms-input-placeholder{color:#6b7280;opacity:1}input::placeholder,textarea::placeholder{color:#6b7280;opacity:1}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-date-and-time-value{min-height:1.5em}::-webkit-datetime-edit,::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-hour-field,::-webkit-datetime-edit-meridiem-field,::-webkit-datetime-edit-millisecond-field,::-webkit-datetime-edit-minute-field,::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-second-field,::-webkit-datetime-edit-year-field{padding-bottom:0;padding-top:0}select{color-adjust:exact;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3E%3C/svg%3E\");background-position:right .5rem center;background-repeat:no-repeat;background-size:1.5em 1.5em;padding-right:2.5rem;-webkit-print-color-adjust:exact;print-color-adjust:exact}[multiple]{color-adjust:unset;background-image:none;background-position:0 0;background-repeat:unset;background-size:initial;padding-right:.75rem;-webkit-print-color-adjust:unset;print-color-adjust:unset}[type=checkbox],[type=radio]{color-adjust:exact;--tw-shadow:0 0 #0000;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;background-origin:border-box;border-color:#6b7280;border-width:1px;color:#2563eb;display:inline-block;flex-shrink:0;height:1rem;padding:0;-webkit-print-color-adjust:exact;print-color-adjust:exact;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:middle;width:1rem}[type=checkbox]{border-radius:0}[type=radio]{border-radius:100%}[type=checkbox]:focus,[type=radio]:focus{--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:2px;--tw-ring-offset-color:#fff;--tw-ring-color:#2563eb;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);outline:2px solid transparent;outline-offset:2px}[type=checkbox]:checked,[type=radio]:checked{background-color:currentColor;background-position:50%;background-repeat:no-repeat;background-size:100% 100%;border-color:transparent}[type=checkbox]:checked{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 16 16' fill='%23fff' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.207 4.793a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L6.5 9.086l4.293-4.293a1 1 0 0 1 1.414 0z'/%3E%3C/svg%3E\")}[type=radio]:checked{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 16 16' fill='%23fff' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='8' cy='8' r='3'/%3E%3C/svg%3E\")}[type=checkbox]:checked:focus,[type=checkbox]:checked:hover,[type=radio]:checked:focus,[type=radio]:checked:hover{background-color:currentColor;border-color:transparent}[type=checkbox]:indeterminate{background-color:currentColor;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3E%3Cpath stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3E%3C/svg%3E\");background-position:50%;background-repeat:no-repeat;background-size:100% 100%;border-color:transparent}[type=checkbox]:indeterminate:focus,[type=checkbox]:indeterminate:hover{background-color:currentColor;border-color:transparent}[type=file]{background:unset;border-color:inherit;border-radius:0;border-width:0;font-size:unset;line-height:inherit;padding:0}[type=file]:focus{outline:1px solid ButtonText;outline:1px auto -webkit-focus-ring-color}*,:after,:before{--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.container{width:100%}@media (min-width:640px){.container{max-width:640px}}@media (min-width:768px){.container{max-width:768px}}@media (min-width:1024px){.container{max-width:1024px}}@media (min-width:1280px){.container{max-width:1280px}}@media (min-width:1536px){.container{max-width:1536px}}.form-checkbox,.form-radio{color-adjust:exact;--tw-shadow:0 0 #0000;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;background-origin:border-box;border-color:#6b7280;border-width:1px;color:#2563eb;display:inline-block;flex-shrink:0;height:1rem;padding:0;-webkit-print-color-adjust:exact;print-color-adjust:exact;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:middle;width:1rem}.form-checkbox{border-radius:0}.form-checkbox:focus,.form-radio:focus{--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:2px;--tw-ring-offset-color:#fff;--tw-ring-color:#2563eb;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);outline:2px solid transparent;outline-offset:2px}.form-checkbox:checked,.form-radio:checked{background-color:currentColor;background-position:50%;background-repeat:no-repeat;background-size:100% 100%;border-color:transparent}.form-checkbox:checked{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 16 16' fill='%23fff' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.207 4.793a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L6.5 9.086l4.293-4.293a1 1 0 0 1 1.414 0z'/%3E%3C/svg%3E\")}.form-checkbox:checked:focus,.form-checkbox:checked:hover,.form-radio:checked:focus,.form-radio:checked:hover{background-color:currentColor;border-color:transparent}.form-checkbox:indeterminate{background-color:currentColor;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3E%3Cpath stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3E%3C/svg%3E\");background-position:50%;background-repeat:no-repeat;background-size:100% 100%;border-color:transparent}.form-checkbox:indeterminate:focus,.form-checkbox:indeterminate:hover{background-color:currentColor;border-color:transparent}.absolute{position:absolute}.relative{position:relative}.right-2{right:.5rem}.top-2{top:.5rem}.m-0{margin:0}.m-2{margin:.5rem}.mx-auto{margin-left:auto;margin-right:auto}.my-4{margin-bottom:1rem;margin-top:1rem}.-mx-2{margin-left:-.5rem;margin-right:-.5rem}.mx-2{margin-left:.5rem;margin-right:.5rem}.-mx-4{margin-left:-1rem;margin-right:-1rem}.mx-8{margin-left:2rem;margin-right:2rem}.my-6{margin-bottom:1.5rem;margin-top:1.5rem}.my-0{margin-bottom:0;margin-top:0}.mt-8{margin-top:2rem}.mt-3{margin-top:.75rem}.mt-2{margin-top:.5rem}.mt-4{margin-top:1rem}.mb-0{margin-bottom:0}.mt-6{margin-top:1.5rem}.block{display:block}.flex{display:flex}.inline-flex{display:inline-flex}.table{display:table}.grid{display:grid}.hidden{display:none}.h-full{height:100%}.h-4{height:1rem}.h-6{height:1.5rem}.h-52{height:13rem}.h-32{height:8rem}.h-8{height:2rem}.h-16{height:4rem}.h-screen{height:100vh}.w-4{width:1rem}.w-6{width:1.5rem}.w-64{width:16rem}.w-32{width:8rem}.w-8{width:2rem}.w-full{width:100%}.min-w-0{min-width:0}.max-w-3xl{max-width:48rem}.flex-1{flex:1 1 0%}.border-collapse{border-collapse:collapse}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.cursor-pointer{cursor:pointer}.list-disc{list-style-type:disc}.auto-rows-auto{grid-auto-rows:auto}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.justify-evenly{justify-content:space-evenly}.gap-6{gap:1.5rem}.space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1rem*var(--tw-space-y-reverse));margin-top:calc(1rem*(1 - var(--tw-space-y-reverse)))}.space-y-2>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.5rem*var(--tw-space-y-reverse));margin-top:calc(.5rem*(1 - var(--tw-space-y-reverse)))}.space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(.5rem*(1 - var(--tw-space-x-reverse)));margin-right:calc(.5rem*var(--tw-space-x-reverse))}.space-x-1>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(.25rem*(1 - var(--tw-space-x-reverse)));margin-right:calc(.25rem*var(--tw-space-x-reverse))}.space-y-6>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1.5rem*var(--tw-space-y-reverse));margin-top:calc(1.5rem*(1 - var(--tw-space-y-reverse)))}.space-x-4>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(1rem*(1 - var(--tw-space-x-reverse)));margin-right:calc(1rem*var(--tw-space-x-reverse))}.justify-self-end{justify-self:end}.overflow-hidden,.truncate{overflow:hidden}.truncate{text-overflow:ellipsis}.truncate,.whitespace-nowrap{white-space:nowrap}.rounded-lg{border-radius:.5rem}.rounded-full{border-radius:9999px}.rounded-md{border-radius:.375rem}.rounded{border-radius:.25rem}.rounded-bl-none{border-bottom-left-radius:0}.border{border-width:1px}.border-transparent{border-color:transparent}.border-gray-400{--tw-border-opacity:1;border-color:rgb(156 163 175/var(--tw-border-opacity))}.bg-gray-200{--tw-bg-opacity:1;background-color:rgb(229 231 235/var(--tw-bg-opacity))}.bg-gray-600{--tw-bg-opacity:1;background-color:rgb(75 85 99/var(--tw-bg-opacity))}.bg-gray-100{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity))}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.bg-indigo-800{--tw-bg-opacity:1;background-color:rgb(55 48 163/var(--tw-bg-opacity))}.bg-blue-500{--tw-bg-opacity:1;background-color:rgb(59 130 246/var(--tw-bg-opacity))}.fill-current{fill:currentColor}.object-cover{-o-object-fit:cover;object-fit:cover}.p-6{padding:1.5rem}.p-2{padding:.5rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.px-4{padding-left:1rem;padding-right:1rem}.py-2{padding-bottom:.5rem;padding-top:.5rem}.py-8{padding-bottom:2rem;padding-top:2rem}.py-4{padding-bottom:1rem;padding-top:1rem}.px-2{padding-left:.5rem;padding-right:.5rem}.py-1{padding-bottom:.25rem;padding-top:.25rem}.px-5{padding-left:1.25rem;padding-right:1.25rem}.text-center{text-align:center}.align-bottom{vertical-align:bottom}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-xs{font-size:.75rem;line-height:1rem}.text-2xl{font-size:1.5rem;line-height:2rem}.text-3xl{font-size:1.875rem;line-height:2.25rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.font-semibold{font-weight:600}.font-bold{font-weight:700}.font-medium{font-weight:500}.uppercase{text-transform:uppercase}.leading-none{line-height:1}.leading-relaxed{line-height:1.625}.tracking-widest{letter-spacing:.1em}.text-gray-200{--tw-text-opacity:1;color:rgb(229 231 235/var(--tw-text-opacity))}.text-gray-700{--tw-text-opacity:1;color:rgb(55 65 81/var(--tw-text-opacity))}.text-white{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.text-gray-800{--tw-text-opacity:1;color:rgb(31 41 55/var(--tw-text-opacity))}.text-gray-600{--tw-text-opacity:1;color:rgb(75 85 99/var(--tw-text-opacity))}.text-gray-500{--tw-text-opacity:1;color:rgb(107 114 128/var(--tw-text-opacity))}.text-gray-400{--tw-text-opacity:1;color:rgb(156 163 175/var(--tw-text-opacity))}.opacity-25{opacity:.25}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color)}.shadow,.shadow-sm{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 2px 0 rgba(0,0,0,.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color)}.outline-none{outline:2px solid transparent;outline-offset:2px}.transition{transition-duration:.15s;transition-property:color,background-color,border-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-text-decoration-color,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-text-decoration-color,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1)}.transition-colors{transition-duration:.15s;transition-property:color,background-color,border-color,fill,stroke,-webkit-text-decoration-color;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,-webkit-text-decoration-color;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-200{transition-duration:.2s}.line-clamp-2{-webkit-line-clamp:2}.line-clamp-2,.line-clamp-3{-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}.line-clamp-3{-webkit-line-clamp:3}.line-clamp-5{-webkit-box-orient:vertical;-webkit-line-clamp:5;display:-webkit-box;overflow:hidden}article h1,article h2,article h3,article h4,article h5,article h6{font-weight:500;margin-bottom:.75em}article h2,article h3{margin-top:2em}article h4{margin-top:1.5em}article h1{font-size:2em;letter-spacing:-1px;line-height:1.125em;margin-bottom:.65em}@media (min-width:768px){article h1{font-size:2.2em}}@media (min-width:1024px){article h1{font-size:2.6em}}@media (min-width:1280px){article h1{font-size:3em}}@media (min-width:1536px){article h1{font-size:3.5em}}article h2{font-weight:400;letter-spacing:-.5px;line-height:1.125em}@media (min-width:768px){article h2{font-size:2.25em}}@media (min-width:1024px){article h2{font-size:3em}}article h3{letter-spacing:-.33px;line-height:1.25em}@media (min-width:640px){article h3{font-size:1.75em}}@media (min-width:768px){article h3{font-size:2em}}article h4{font-weight:400;letter-spacing:-.25px}@media (min-width:640px){article h4{font-size:1.5em}}article h5{color:#374151;font-size:.95em;font-weight:700;line-height:1.666em}@media (min-width:640px){article h5{font-size:1.125em}}article h6{color:#4b5563;font-size:.875em;font-weight:500}article a{position:relative;text-decoration:none;transition:all .3s ease}article a.learn_more{color:#dc2626;font-weight:500}article a.learn_more span{display:inline-block;transition:transform .3s ease}article a.learn_more:hover span{transform:translateX(.5em)}article p{font-size:1em;line-height:1.666em}article p strong{font-weight:500}article p.small{font-size:.75em;line-height:1.714em}@media (min-width:768px){article p{font-size:1.125em}article p.small{font-size:.875em}}article p{--tw-text-opacity:1;color:rgb(55 65 81/var(--tw-text-opacity))}@media (prefers-color-scheme:dark){article p{--tw-text-opacity:1;color:rgb(156 163 175/var(--tw-text-opacity))}}article p+pre{margin-top:0}article ol,article p,article pre,article ul{margin-bottom:1.5em}article ol a,article p a,article pre a,article ul a{color:#dc2626;text-decoration:underline;word-break:break-word}article ol a:hover,article p a:hover,article pre a:hover,article ul a:hover{color:darken(#dc2626,10%)}article blockquote p,article q{quotes:\"“\" \"”\" \"‘\" \"’\"}@media (min-width:640px){article blockquote{margin-left:0;margin-right:0}}article span.small_text{color:#374151;display:block;font-size:.625em;line-height:1.4em}article label,article span.label{display:block;font-size:.625em;letter-spacing:2.5px;line-height:1.4em;margin-bottom:.875em;opacity:.4;text-transform:uppercase}article code{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;font-size:.875em;line-height:1.714em}article :not(pre)>code{background:#f9fafb;color:#991b1b;padding:0 .25em}:not(pre)>code{word-wrap:normal;background:none;border-radius:.125rem;color:#111827;display:inline-flex;-webkit-hyphens:none;-ms-hyphens:none;hyphens:none;max-width:100%;overflow-x:auto;padding:0 .125rem;-moz-tab-size:4;-o-tab-size:4;tab-size:4;text-align:left;vertical-align:middle;white-space:pre;word-break:normal;word-spacing:normal}@media (prefers-color-scheme:dark){:not(pre)>code{--tw-bg-opacity:1;--tw-text-opacity:1;background-color:rgb(75 85 99/var(--tw-bg-opacity));color:rgb(220 38 38/var(--tw-text-opacity))}}pre{word-wrap:normal;--tw-bg-opacity:1;background-color:rgb(75 85 99/var(--tw-bg-opacity));border-radius:.5rem;box-shadow:0 1px 1px rgb(0 0 0/8%);margin-bottom:1rem;margin-top:1rem;overflow-x:auto;padding-right:1rem;padding:1rem;position:relative;-moz-tab-size:4;-o-tab-size:4;tab-size:4;white-space:pre;word-break:normal;word-spacing:normal}.code-block-wrapper .copyBtn{--tw-text-opacity:1;color:rgb(229 231 235/var(--tw-text-opacity));opacity:.25;outline:2px solid transparent;outline-offset:2px;position:absolute;right:.5rem;top:.5rem}.code-block-wrapper .copyBtn:hover{--tw-text-opacity:1;color:rgb(107 114 128/var(--tw-text-opacity));opacity:1}pre .copyBtn:active,pre .copyBtn:focus,pre .copyBtn:hover{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity));outline:2px solid transparent;outline-offset:2px}pre code.torchlight{--tw-bg-opacity:1!important;background-color:rgb(75 85 99/var(--tw-bg-opacity))!important;display:block;min-width:-webkit-max-content;min-width:-moz-max-content;min-width:max-content;padding-bottom:1rem;padding-top:1rem}pre code.torchlight .line{padding-left:1rem;padding-right:1rem}.callout p{margin-bottom:0}article a[name]{display:block;position:relative;top:-45px;visibility:hidden}article table{border-collapse:collapse;font-size:13px;margin-bottom:2em;width:100%}article table td,article table th{border:1px solid #d1d5db;padding:10px;text-align:left}article table th{font-size:16px}@media (min-width:640px){article a[name]{display:block;position:relative;top:-30px;visibility:hidden}}article .page_title{display:none}article h1{font-size:2.5em;letter-spacing:0}article h2{font-size:1.75em;letter-spacing:0}article h3{font-size:1.25em}article h3,article h4{font-weight:500;letter-spacing:0}article h4{font-size:1em}article h2 a,article h3 a,article h4 a{color:#111827}article h2 a:before,article h3 a:before,article h4 a:before{color:#dc2626;content:\"#\";font-weight:400;opacity:.6;position:absolute}article h2 a:before,article h3 a:before{font-size:28px;margin-left:-25px}article h4 a:before{font-size:17px;margin-left:-18px}article code{color:#111827;font-size:.8rem;font-weight:500;line-height:1.9}article p{font-size:1rem;line-height:1.8em}article p code{font-size:.8rem}article .content-list ul,article ul:not(:first-of-type){list-style-type:none;margin:0 0 2.5em;padding:0}article .content-list ul li,article ul:not(:first-of-type) li{color:#374151;display:block;font-size:.89em;line-height:1.714em;margin-bottom:1rem;padding-left:1.25em;position:relative}article .content-list ul li a,article ul:not(:first-of-type) li a{text-decoration:none}article .content-list ul li code,article ul:not(:first-of-type) li code{font-size:.875em}article .content-list ul li:before,article ul:not(:first-of-type) li:before{background:url(/img/icons/ul_marker.min.svg) no-repeat 50%;background-size:contain;content:\"\";height:10px;left:0;position:absolute;top:.4em;width:9px}article h1+ul{list-style-type:none;margin:0;padding:0}article h1+ul li{display:block;margin-bottom:.5em}article h1+ul li a{color:#111827;font-size:.89em;font-weight:500;position:relative;text-decoration:none}article h1+ul li a:before{color:#dc2626;content:\"# \"}article h1+ul ul{margin-bottom:0;margin-top:.5em;padding:0}article h1+ul ul li{padding-left:1.5em}article h1+ul ul li a{font-weight:400}#__nuxt,body,html{height:100%}body{--tw-bg-opacity:1;--tw-text-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity));color:rgb(229 231 235/var(--tw-text-opacity))}@media (prefers-color-scheme:dark){body{--tw-bg-opacity:1;background-color:rgb(17 24 39/var(--tw-bg-opacity))}}.hover\\:bg-gray-300:hover{--tw-bg-opacity:1;background-color:rgb(209 213 219/var(--tw-bg-opacity))}.hover\\:bg-gray-800:hover{--tw-bg-opacity:1;background-color:rgb(31 41 55/var(--tw-bg-opacity))}.hover\\:bg-indigo-700:hover{--tw-bg-opacity:1;background-color:rgb(67 56 202/var(--tw-bg-opacity))}.hover\\:bg-gray-100:hover{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity))}.hover\\:text-gray-500:hover{--tw-text-opacity:1;color:rgb(107 114 128/var(--tw-text-opacity))}.hover\\:text-gray-700:hover{--tw-text-opacity:1;color:rgb(55 65 81/var(--tw-text-opacity))}.hover\\:text-gray-600:hover{--tw-text-opacity:1;color:rgb(75 85 99/var(--tw-text-opacity))}.hover\\:shadow-lg:hover{--tw-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color),0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.focus\\:border-indigo-900:focus{--tw-border-opacity:1;border-color:rgb(49 46 129/var(--tw-border-opacity))}.focus\\:text-gray-600:focus{--tw-text-opacity:1;color:rgb(75 85 99/var(--tw-text-opacity))}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus\\:ring:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)}.focus\\:ring-indigo-300:focus{--tw-ring-opacity:1;--tw-ring-color:rgb(165 180 252/var(--tw-ring-opacity))}.active\\:bg-indigo-900:active{--tw-bg-opacity:1;background-color:rgb(49 46 129/var(--tw-bg-opacity))}.disabled\\:opacity-25:disabled{opacity:.25}@media (prefers-color-scheme:dark){.dark\\:bg-gray-700{--tw-bg-opacity:1;background-color:rgb(55 65 81/var(--tw-bg-opacity))}.dark\\:bg-gray-600{--tw-bg-opacity:1;background-color:rgb(75 85 99/var(--tw-bg-opacity))}.dark\\:bg-gray-900{--tw-bg-opacity:1;background-color:rgb(17 24 39/var(--tw-bg-opacity))}.dark\\:bg-gray-800{--tw-bg-opacity:1;background-color:rgb(31 41 55/var(--tw-bg-opacity))}.dark\\:text-gray-400{--tw-text-opacity:1;color:rgb(156 163 175/var(--tw-text-opacity))}.dark\\:text-gray-300{--tw-text-opacity:1;color:rgb(209 213 219/var(--tw-text-opacity))}.dark\\:text-gray-600{--tw-text-opacity:1;color:rgb(75 85 99/var(--tw-text-opacity))}.dark\\:text-white{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.dark\\:text-gray-200{--tw-text-opacity:1;color:rgb(229 231 235/var(--tw-text-opacity))}.dark\\:text-gray-500{--tw-text-opacity:1;color:rgb(107 114 128/var(--tw-text-opacity))}.dark\\:hover\\:bg-black:hover{--tw-bg-opacity:1;background-color:rgb(0 0 0/var(--tw-bg-opacity))}.dark\\:hover\\:bg-gray-800:hover{--tw-bg-opacity:1;background-color:rgb(31 41 55/var(--tw-bg-opacity))}.dark\\:hover\\:bg-gray-700:hover{--tw-bg-opacity:1;background-color:rgb(55 65 81/var(--tw-bg-opacity))}.dark\\:hover\\:text-gray-300:hover,.hover\\:dark\\:text-gray-300:hover{--tw-text-opacity:1;color:rgb(209 213 219/var(--tw-text-opacity))}.dark\\:hover\\:text-gray-400:hover{--tw-text-opacity:1;color:rgb(156 163 175/var(--tw-text-opacity))}.dark\\:hover\\:text-gray-200:hover{--tw-text-opacity:1;color:rgb(229 231 235/var(--tw-text-opacity))}.dark\\:focus\\:text-gray-400:focus{--tw-text-opacity:1;color:rgb(156 163 175/var(--tw-text-opacity))}}@media (min-width:640px){.sm\\:mt-0{margin-top:0}.sm\\:flex-row{flex-direction:row}.sm\\:justify-between{justify-content:space-between}}@media (min-width:768px){.md\\:mx-8{margin-left:2rem;margin-right:2rem}.md\\:mt-0{margin-top:0}.md\\:block{display:block}.md\\:flex{display:flex}.md\\:hidden{display:none}.md\\:w-64{width:16rem}.md\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.md\\:flex-row{flex-direction:row}.md\\:items-center{align-items:center}.md\\:justify-between{justify-content:space-between}}@media (min-width:1024px){.lg\\:text-3xl{font-size:1.875rem;line-height:2.25rem}}@media (min-width:1280px){.xl\\:w-80{width:20rem}.xl\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.xl\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}}";
}


// --------------------
// Request: /@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/plugins/server.mjs
// Parents: 
// - /Users/overtrue/www/laravel.xyz/node_modules/nuxt/dist/app/entry ($id_24e0160c)
// Dependencies: 
// - /node_modules/nuxt/dist/app/plugins/preload.server.mjs ($id_9871bba0)
// - /@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/components.plugin.mjs ($id_759f3471)
// - /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_e6f12003)
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_a2650341)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// - /node_modules/@nuxt/content/dist/runtime/plugin.mjs ($id_a4132d07)
// - /plugins/dayjs.js ($id_e4088396)
// - /plugins/emoji.js ($id_5ce230b0)
// - /plugins/markdown-it.js ($id_254393a2)
// --------------------
const $id_cd2348f9 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/plugins/preload.server.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/components.plugin.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/plugin.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/router.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/@nuxt/content/dist/runtime/plugin.mjs");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/plugins/dayjs.js");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/plugins/emoji.js");

const __vite_ssr_import_8__ = await __vite_ssr_import__("/plugins/markdown-it.js");

__vite_ssr_exports__.default = [
  __vite_ssr_import_0__.default,
  __vite_ssr_import_1__.default,
  __vite_ssr_import_2__.default,
  __vite_ssr_import_3__.default,
  __vite_ssr_import_4__.default,
  __vite_ssr_import_5__.default,
  __vite_ssr_import_6__.default,
  __vite_ssr_import_7__.default,
  __vite_ssr_import_8__.default
];
}


// --------------------
// Request: /node_modules/nuxt/dist/app/plugins/preload.server.mjs
// Parents: 
// - /@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/plugins/server.mjs ($id_cd2348f9)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_9871bba0 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.mixin({
    beforeCreate() {
      const { _registeredComponents } = this.$nuxt.ssrContext;
      const { __moduleIdentifier } = this.$options;
      _registeredComponents.add(__moduleIdentifier);
    }
  });
});
;
}


// --------------------
// Request: /@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/components.plugin.mjs
// Parents: 
// - /@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/plugins/server.mjs ($id_cd2348f9)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/@nuxt/content/dist/runtime/components/ContentDoc.mjs ($id_12ce52f3)
// - /node_modules/@nuxt/content/dist/runtime/components/ContentList.mjs ($id_9fab5abb)
// - /node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.mjs ($id_d2da4ccd)
// - /node_modules/@nuxt/content/dist/runtime/components/ContentQuery.mjs ($id_3f801a38)
// - /node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.mjs ($id_8f3d0953)
// - /node_modules/@nuxt/content/dist/runtime/components/Markdown.mjs ($id_f4cbbc2c)
// - /node_modules/@nuxt/content/dist/runtime/components/MarkdownRenderer.mjs ($id_4c793316)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseA.vue ($id_558bf79f)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseBlockquote.vue ($id_01e2b479)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCode.vue ($id_19429b58)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCodeInline.vue ($id_fab9e310)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseEm.vue ($id_840411f2)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH1.vue ($id_b479ada6)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH2.vue ($id_9c1df7ff)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH3.vue ($id_f86082f5)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH4.vue ($id_7f627a67)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH5.vue ($id_caec80eb)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH6.vue ($id_26303ae9)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseHr.vue ($id_6f4fac0c)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseImg.vue ($id_f72b4351)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseLi.vue ($id_1b78ec5d)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseOl.vue ($id_2e24a6f5)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseP.vue ($id_0990778f)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseStrong.vue ($id_6d4c23c7)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTable.vue ($id_10f5aef2)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTbody.vue ($id_faffa2d8)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTd.vue ($id_b51a8b09)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTh.vue ($id_07608f57)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseThead.vue ($id_17b6f147)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTr.vue ($id_16f58501)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseUl.vue ($id_7728c86d)
// --------------------
const $id_759f3471 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


const components = {
  ContentDoc: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/ContentDoc.mjs' /* webpackChunkName: "components/content-doc" */).then(c => c.default || c)),
  ContentList: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/ContentList.mjs' /* webpackChunkName: "components/content-list" */).then(c => c.default || c)),
  ContentNavigation: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.mjs' /* webpackChunkName: "components/content-navigation" */).then(c => c.default || c)),
  ContentQuery: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.mjs' /* webpackChunkName: "components/content-query" */).then(c => c.default || c)),
  ContentRenderer: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.mjs' /* webpackChunkName: "components/content-renderer" */).then(c => c.default || c)),
  Markdown: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/Markdown.mjs' /* webpackChunkName: "components/markdown" */).then(c => c.default || c)),
  MarkdownRenderer: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/MarkdownRenderer.mjs' /* webpackChunkName: "components/markdown-renderer" */).then(c => c.default || c)),
  ProseA: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseA.vue' /* webpackChunkName: "components/prose-a" */).then(c => c.default || c)),
  ProseBlockquote: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseBlockquote.vue' /* webpackChunkName: "components/prose-blockquote" */).then(c => c.default || c)),
  ProseCode: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCode.vue' /* webpackChunkName: "components/prose-code" */).then(c => c.default || c)),
  ProseCodeInline: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCodeInline.vue' /* webpackChunkName: "components/prose-code-inline" */).then(c => c.default || c)),
  ProseEm: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseEm.vue' /* webpackChunkName: "components/prose-em" */).then(c => c.default || c)),
  ProseH1: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH1.vue' /* webpackChunkName: "components/prose-h1" */).then(c => c.default || c)),
  ProseH2: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH2.vue' /* webpackChunkName: "components/prose-h2" */).then(c => c.default || c)),
  ProseH3: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH3.vue' /* webpackChunkName: "components/prose-h3" */).then(c => c.default || c)),
  ProseH4: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH4.vue' /* webpackChunkName: "components/prose-h4" */).then(c => c.default || c)),
  ProseH5: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH5.vue' /* webpackChunkName: "components/prose-h5" */).then(c => c.default || c)),
  ProseH6: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH6.vue' /* webpackChunkName: "components/prose-h6" */).then(c => c.default || c)),
  ProseHr: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseHr.vue' /* webpackChunkName: "components/prose-hr" */).then(c => c.default || c)),
  ProseImg: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseImg.vue' /* webpackChunkName: "components/prose-img" */).then(c => c.default || c)),
  ProseLi: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseLi.vue' /* webpackChunkName: "components/prose-li" */).then(c => c.default || c)),
  ProseOl: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseOl.vue' /* webpackChunkName: "components/prose-ol" */).then(c => c.default || c)),
  ProseP: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseP.vue' /* webpackChunkName: "components/prose-p" */).then(c => c.default || c)),
  ProseStrong: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseStrong.vue' /* webpackChunkName: "components/prose-strong" */).then(c => c.default || c)),
  ProseTable: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTable.vue' /* webpackChunkName: "components/prose-table" */).then(c => c.default || c)),
  ProseTbody: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTbody.vue' /* webpackChunkName: "components/prose-tbody" */).then(c => c.default || c)),
  ProseTd: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTd.vue' /* webpackChunkName: "components/prose-td" */).then(c => c.default || c)),
  ProseTh: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTh.vue' /* webpackChunkName: "components/prose-th" */).then(c => c.default || c)),
  ProseThead: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseThead.vue' /* webpackChunkName: "components/prose-thead" */).then(c => c.default || c)),
  ProseTr: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTr.vue' /* webpackChunkName: "components/prose-tr" */).then(c => c.default || c)),
  ProseUl: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseUl.vue' /* webpackChunkName: "components/prose-ul" */).then(c => c.default || c))
}

__vite_ssr_exports__.default = function (nuxtApp) {
  for (const name in components) {
    nuxtApp.vueApp.component(name, components[name])
    nuxtApp.vueApp.component('Lazy' + name, components[name])
  }
}
;
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/ContentDoc.mjs
// Parents: 
// - /@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/components.plugin.mjs ($id_759f3471)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.mjs ($id_8f3d0953)
// - /node_modules/@nuxt/content/dist/runtime/components/ContentQuery.mjs ($id_3f801a38)
// - /@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/imports.mjs ($id_3d849a97)
// --------------------
const $id_12ce52f3 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/imports.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineComponent({
  props: {
    tag: {
      type: String,
      required: false,
      default: "div"
    },
    excerpt: {
      type: Boolean,
      default: false
    },
    path: {
      type: String,
      required: false,
      default: () => __vite_ssr_import_3__.useRoute().path
    },
    query: {
      type: Object,
      required: false,
      default: void 0
    }
  },
  render(ctx) {
    const slots = __vite_ssr_import_0__.useSlots();
    const { tag, excerpt, path, query } = ctx;
    const contentQueryProps = Object.assign(query || {}, { path, find: "one" });
    const emptyNode = (slot, data) => __vite_ssr_import_0__.h("pre", null, JSON.stringify({ message: "You should use slots with <ContentDoc>", slot, data }, null, 2));
    const addHead = (doc) => {
      if (path !== __vite_ssr_import_3__.useRoute().path) {
        return;
      }
      const head = Object.assign({}, doc.head);
      head.title = head.title || doc.title;
      head.meta = head.meta || [];
      const description = head.description || doc.description;
      if (description && head.meta.filter((m) => m.name === "description").length === 0) {
        head.meta.push({
          name: "description",
          content: description
        });
      }
      if (head.image && head.meta.filter((m) => m.property === "og:image").length === 0) {
        head.meta.push({
          property: "og:image",
          content: head.image
        });
      }
      if (false) {
        __vite_ssr_import_0__.nextTick(() => __vite_ssr_import_3__.useHead(head));
      } else {
        __vite_ssr_import_3__.useHead(head);
      }
    };
    return __vite_ssr_import_0__.h(__vite_ssr_import_2__.default, contentQueryProps, {
      default: slots?.default ? ({ data, refresh, isPartial }) => {
        addHead(data);
        return slots.default({ doc: data, refresh, isPartial, excerpt, ...this.$attrs });
      } : ({ data }) => {
        addHead(data);
        return __vite_ssr_import_0__.h(__vite_ssr_import_1__.default, { value: data, excerpt, tag, ...this.$attrs }, { empty: (bindings) => slots?.empty ? slots.empty(bindings) : emptyNode("default", data) });
      },
      empty: (bindings) => slots?.empty?.(bindings) || __vite_ssr_import_0__.h("p", null, "Document is empty, overwrite this content with #empty slot in <ContentDoc>."),
      "not-found": (bindings) => slots?.["not-found"]?.(bindings) || __vite_ssr_import_0__.h("p", null, "Document not found, overwrite this content with #not-found slot in <ContentDoc>.")
    });
  }
});
;
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.mjs
// Parents: 
// - /node_modules/@nuxt/content/dist/runtime/components/ContentDoc.mjs ($id_12ce52f3)
// - /@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/components.plugin.mjs ($id_759f3471)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/@nuxt/content/dist/runtime/components/MarkdownRenderer.mjs ($id_4c793316)
// --------------------
const $id_8f3d0953 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/@nuxt/content/dist/runtime/components/MarkdownRenderer.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineComponent({
  props: {
    value: {
      type: Object,
      required: false,
      default: () => ({})
    },
    excerpt: {
      type: Boolean,
      default: false
    },
    tag: {
      type: String,
      default: "div"
    }
  },
  setup(props) {
    __vite_ssr_import_0__.watch(() => props.excerpt, (newExcerpt) => {
      if (newExcerpt && !props.value?.excerpt) {
        console.warn(`No excerpt found for document content/${props?.value?._path}.${props?.value?._extension}!`);
        console.warn("Make sure to use <!--more--> in your content if you want to use excerpt feature.");
      }
    }, {
      immediate: true
    });
  },
  render(ctx) {
    const slots = __vite_ssr_import_0__.useSlots();
    const { value, excerpt, tag } = ctx;
    if (value && value?._type === "markdown" && value?.body?.children?.length) {
      return __vite_ssr_import_0__.h(__vite_ssr_import_1__.default, {
        value,
        excerpt,
        tag,
        ...this.$attrs
      });
    }
    if (value && slots?.default) {
      return slots.default({ value, excerpt, tag, ...this.$attrs });
    } else if (slots?.empty) {
      return slots.empty({ value, excerpt, tag, ...this.$attrs });
    } else if (slots?.default) {
      return slots.default({ value, excerpt, tag, ...this.$attrs });
    }
    return __vite_ssr_import_0__.h("pre", null, JSON.stringify({ message: "You should use slots with <ContentRenderer>", value, excerpt, tag }, null, 2));
  }
});
;
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/MarkdownRenderer.mjs
// Parents: 
// - /node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.mjs ($id_8f3d0953)
// - /@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/components.plugin.mjs ($id_759f3471)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/destr/dist/index.mjs ($id_03d15ecd)
// - /node_modules/scule/dist/index.mjs ($id_ff332d11)
// - /node_modules/property-information/index.js ($id_882dd793)
// - /node_modules/html-tags/index.js ($id_4503b399)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_4c793316 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/destr/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/scule/dist/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/property-information/index.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/html-tags/index.js");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const DEFAULT_SLOT = "default";
const rxOn = /^@|^v-on:/;
const rxBind = /^:|^v-bind:/;
const rxModel = /^v-model/;
const nativeInputs = ["select", "textarea", "input"];
__vite_ssr_exports__.default = __vite_ssr_import_0__.defineComponent({
  name: "ContentRendererMarkdown",
  props: {
    value: {
      type: Object,
      required: true
    },
    excerpt: {
      type: Boolean,
      default: false
    },
    tag: {
      type: String,
      default: "div"
    }
  },
  setup(props) {
    const { content: { tags = {} } } = __vite_ssr_import_5__.useRuntimeConfig().public;
    const { tag: _t, value: _d, ...contentProps } = __vite_ssr_import_0__.toRefs(props);
    return {
      tags,
      contentProps
    };
  },
  render(ctx) {
    const { tags, tag, value, contentProps } = ctx;
    if (!value) {
      return null;
    }
    let body = value.body || value;
    if (this.excerpt && value.excerpt) {
      body = value.excerpt;
    }
    const meta = {
      ...value,
      tags: {
        ...tags,
        ...value?.tags || {}
      }
    };
    let component = meta.component || tag;
    if (typeof meta.component === "object") {
      component = meta.component.name;
    }
    component = resolveVueComponent(component);
    const children = (body.children || []).map((child) => renderNode(child, __vite_ssr_import_0__.h, meta));
    return __vite_ssr_import_0__.h(component, {
      ...contentProps,
      ...meta.component?.props,
      ...this.$attrs
    }, {
      default: createSlotFunction(children)
    });
  }
});
function renderNode(node, h2, documentMeta) {
  const originalTag = node.tag;
  const renderTag = typeof node.props?.__ignoreMap === "undefined" && documentMeta.tags[node.tag] || node.tag;
  if (node.type === "text") {
    return h2(__vite_ssr_import_0__.Text, node.value);
  }
  const component = resolveVueComponent(renderTag);
  if (typeof component === "object") {
    component.tag = originalTag;
  }
  return h2(component, propsToData(node, documentMeta), renderSlots(node, h2, documentMeta));
}
function renderSlots(node, h2, documentMeta) {
  const children = node.children || [];
  const slots = children.reduce((data, node2) => {
    if (!isTemplate(node2)) {
      data[DEFAULT_SLOT].push(renderNode(node2, h2, documentMeta));
      return data;
    }
    if (isDefaultTemplate(node2)) {
      data[DEFAULT_SLOT].push(...node2.children.map((child) => renderNode(child, h2, documentMeta)));
      return data;
    }
    const slotName = getSlotName(node2);
    data[slotName] = node2.children.map((child) => renderNode(child, h2, documentMeta));
    return data;
  }, {
    [DEFAULT_SLOT]: []
  });
  return Object.fromEntries(Object.entries(slots).map(([name, vDom]) => [name, createSlotFunction(vDom)]));
}
function propsToData(node, documentMeta) {
  const { tag = "", props = {} } = node;
  return Object.keys(props).reduce(function(data, key) {
    if (key === "__ignoreMap") {
      return data;
    }
    const value = props[key];
    if (rxModel.test(key) && !nativeInputs.includes(tag)) {
      return propsToDataRxModel(key, value, data, documentMeta);
    }
    if (key === "v-bind") {
      return propsToDataVBind(key, value, data, documentMeta);
    }
    if (rxOn.test(key)) {
      return propsToDataRxOn(key, value, data, documentMeta);
    }
    if (rxBind.test(key)) {
      return propsToDataRxBind(key, value, data, documentMeta);
    }
    const { attribute } = __vite_ssr_import_3__.find(__vite_ssr_import_3__.html, key);
    if (Array.isArray(value) && value.every((v) => typeof v === "string")) {
      data[attribute] = value.join(" ");
      return data;
    }
    data[attribute] = value;
    return data;
  }, {});
}
function propsToDataRxModel(key, value, data, documentMeta) {
  const number = (d) => +d;
  const trim = (d) => d.trim();
  const noop = (d) => d;
  const mods = key.replace(rxModel, "").split(".").filter((d) => d).reduce((d, k) => {
    d[k] = true;
    return d;
  }, {});
  const field = "value";
  const event = mods.lazy ? "change" : "input";
  const processor = mods.number ? number : mods.trim ? trim : noop;
  data[field] = evalInContext(value, documentMeta);
  data.on = data.on || {};
  data.on[event] = (e) => documentMeta[value] = processor(e);
  return data;
}
function propsToDataVBind(_key, value, data, documentMeta) {
  const val = evalInContext(value, documentMeta);
  data = Object.assign(data, val);
  return data;
}
function propsToDataRxOn(key, value, data, documentMeta) {
  key = key.replace(rxOn, "");
  data.on = data.on || {};
  data.on[key] = () => evalInContext(value, documentMeta);
  return data;
}
function propsToDataRxBind(key, value, data, documentMeta) {
  key = key.replace(rxBind, "");
  data[key] = evalInContext(value, documentMeta);
  return data;
}
const resolveVueComponent = (component) => {
  if (!__vite_ssr_import_4__.default.includes(component)) {
    const componentFn = __vite_ssr_import_0__.resolveComponent(__vite_ssr_import_2__.pascalCase(component), false);
    if (typeof componentFn === "object") {
      return componentFn;
    }
  }
  return component;
};
function evalInContext(code, context) {
  const result = code.split(".").reduce((o, k) => typeof o === "object" ? o[k] : void 0, context);
  return typeof result === "undefined" ? __vite_ssr_import_1__.default(code) : result;
}
function getSlotName(node) {
  let name = "";
  for (const propName of Object.keys(node.props || {})) {
    if (!propName.startsWith("#") && !propName.startsWith("v-slot:")) {
      continue;
    }
    name = propName.split(/[:#]/, 2)[1];
    break;
  }
  return name || DEFAULT_SLOT;
}
function createSlotFunction(nodes) {
  return nodes.length ? () => nodes : void 0;
}
function isDefaultTemplate(node) {
  return isTemplate(node) && getSlotName(node) === DEFAULT_SLOT;
}
function isTemplate(node) {
  return node.tag === "template";
}
;
}


// --------------------
// Request: /node_modules/scule/dist/index.mjs
// Parents: 
// - /node_modules/@nuxt/content/dist/runtime/components/MarkdownRenderer.mjs ($id_4c793316)
// Dependencies: 

// --------------------
const $id_ff332d11 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/overtrue/www/laravel.xyz/node_modules/scule/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/overtrue/www/laravel.xyz/node_modules/scule/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/property-information/index.js
// Parents: 
// - /node_modules/@nuxt/content/dist/runtime/components/MarkdownRenderer.mjs ($id_4c793316)
// Dependencies: 

// --------------------
const $id_882dd793 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/overtrue/www/laravel.xyz/node_modules/property-information/index.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/overtrue/www/laravel.xyz/node_modules/property-information/index.js\".")
  })


// --------------------
// Request: /node_modules/html-tags/index.js
// Parents: 
// - /node_modules/@nuxt/content/dist/runtime/components/MarkdownRenderer.mjs ($id_4c793316)
// Dependencies: 

// --------------------
const $id_4503b399 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/overtrue/www/laravel.xyz/node_modules/html-tags/index.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/overtrue/www/laravel.xyz/node_modules/html-tags/index.js\".")
  })


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/ContentQuery.mjs
// Parents: 
// - /node_modules/@nuxt/content/dist/runtime/components/ContentDoc.mjs ($id_12ce52f3)
// - /node_modules/@nuxt/content/dist/runtime/components/ContentList.mjs ($id_9fab5abb)
// - /@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/components.plugin.mjs ($id_759f3471)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/ufo/dist/index.mjs ($id_614de060)
// - /@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/imports.mjs ($id_3d849a97)
// --------------------
const $id_3f801a38 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/ufo/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/imports.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineComponent({
  props: {
    path: {
      type: String,
      required: false,
      default: void 0
    },
    only: {
      type: Array,
      required: false,
      default: void 0
    },
    without: {
      type: Array,
      required: false,
      default: void 0
    },
    where: {
      type: Object,
      required: false,
      default: void 0
    },
    sort: {
      type: Object,
      required: false,
      default: void 0
    },
    limit: {
      type: Number,
      required: false,
      default: void 0
    },
    skip: {
      type: Number,
      required: false,
      default: void 0
    },
    locale: {
      type: String,
      required: false,
      default: void 0
    },
    find: {
      type: String,
      required: false,
      default: void 0
    }
  },
  async setup(props) {
    const {
      path,
      only,
      without,
      where,
      sort,
      limit,
      skip,
      locale,
      find
    } = __vite_ssr_import_0__.toRefs(props);
    const isPartial = __vite_ssr_import_2__.computed(() => path.value.includes("/_"));
    const { data, refresh } = await __vite_ssr_import_2__.useAsyncData(`content-doc-${path.value}`, () => {
      let queryBuilder = __vite_ssr_import_2__.queryContent();
      if (path.value) {
        const _path = __vite_ssr_import_1__.withLeadingSlash(__vite_ssr_import_1__.withoutTrailingSlash(path.value));
        queryBuilder = queryBuilder.where({ _path });
      }
      if (only.value) {
        queryBuilder = queryBuilder.only(only.value);
      }
      if (without.value) {
        queryBuilder = queryBuilder.without(without.value);
      }
      if (where.value) {
        queryBuilder = queryBuilder.where(where.value);
      }
      if (sort.value) {
        queryBuilder = queryBuilder.sort(sort.value);
      }
      if (limit.value) {
        queryBuilder = queryBuilder.limit(limit.value);
      }
      if (skip.value) {
        queryBuilder = queryBuilder.skip(skip.value);
      }
      if (locale.value) {
        queryBuilder = queryBuilder.where({ _locale: locale.value });
      }
      if (find.value === "one") {
        return queryBuilder.findOne();
      }
      if (find.value === "surround") {
        if (!path.value) {
          console.warn("[Content] Surround queries requires `path` prop to be set.");
          console.warn("[Content] Query without `path` will return regular `find()` results.");
          return queryBuilder.find();
        }
        return queryBuilder.findSurround(path);
      }
      return queryBuilder.find();
    });
    return {
      isPartial,
      data,
      refresh
    };
  },
  render(ctx) {
    const slots = __vite_ssr_import_0__.useSlots();
    const {
      data,
      refresh,
      isPartial,
      path,
      only,
      without,
      where,
      sort,
      limit,
      skip,
      locale,
      find
    } = ctx;
    const props = {
      path,
      only,
      without,
      where,
      sort,
      limit,
      skip,
      locale,
      find
    };
    if (props.find === "one") {
      if (!data && slots?.["not-found"]) {
        return slots["not-found"]({ props, ...this.$attrs });
      }
      if (data._type && data._type === "markdown" && !data?.body?.children.length) {
        return slots.empty({ props, ...this.$attrs });
      }
    } else if (!data || !data.length) {
      if (slots?.["not-found"]) {
        return slots["not-found"]({ props, ...this.$attrs });
      }
    }
    if (slots?.default) {
      return slots.default({ data, refresh, isPartial, props, ...this.$attrs });
    }
    const emptyNode = (slot, data2) => __vite_ssr_import_0__.h("pre", null, JSON.stringify({ message: "You should use slots with <ContentQuery>!", slot, data: data2 }, null, 2));
    return emptyNode("default", { data, props, isPartial });
  }
});
;
}


// --------------------
// Request: /@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/imports.mjs
// Parents: 
// - /node_modules/@nuxt/content/dist/runtime/components/ContentQuery.mjs ($id_3f801a38)
// - /node_modules/@nuxt/content/dist/runtime/components/ContentDoc.mjs ($id_12ce52f3)
// - /node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.mjs ($id_d2da4ccd)
// - /node_modules/@nuxt/content/dist/runtime/components/Markdown.mjs ($id_f4cbbc2c)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCode.vue ($id_19429b58)
// - /node_modules/@nuxt/content/dist/runtime/plugin.mjs ($id_a4132d07)
// - /node_modules/@nuxt/content/dist/runtime/composables/web-socket.mjs ($id_575fe152)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_b90d4d0f)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_14c8b574)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_bc2d74a1)
// Dependencies: 
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_b7351483)
// - /node_modules/nuxt/dist/app/compat/vue-demi.mjs ($id_a8110be7)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/@nuxt/content/dist/runtime/composables/utils.mjs ($id_3db3e041)
// - /node_modules/@nuxt/content/dist/runtime/composables/query.mjs ($id_47535763)
// - /node_modules/@nuxt/content/dist/runtime/composables/navigation.mjs ($id_e209d000)
// - /node_modules/nuxt/dist/pages/runtime/composables.mjs ($id_ff6ed455)
// --------------------
const $id_3d849a97 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/compat/vue-demi.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/@nuxt/content/dist/runtime/composables/utils.mjs");
const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

Object.defineProperty(__vite_ssr_exports__, "useHead", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_5__.useHead }});
Object.defineProperty(__vite_ssr_exports__, "useMeta", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_5__.useMeta }});
const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/compat/vue-demi.mjs");

Object.defineProperty(__vite_ssr_exports__, "isVue2", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_6__.isVue2 }});
Object.defineProperty(__vite_ssr_exports__, "isVue3", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_6__.isVue3 }});
const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

Object.defineProperty(__vite_ssr_exports__, "useAsyncData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useAsyncData }});
Object.defineProperty(__vite_ssr_exports__, "useLazyAsyncData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useLazyAsyncData }});
Object.defineProperty(__vite_ssr_exports__, "refreshNuxtData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.refreshNuxtData }});
Object.defineProperty(__vite_ssr_exports__, "defineNuxtComponent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.defineNuxtComponent }});
Object.defineProperty(__vite_ssr_exports__, "useNuxtApp", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useNuxtApp }});
Object.defineProperty(__vite_ssr_exports__, "defineNuxtPlugin", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.defineNuxtPlugin }});
Object.defineProperty(__vite_ssr_exports__, "useRuntimeConfig", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useRuntimeConfig }});
Object.defineProperty(__vite_ssr_exports__, "useState", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useState }});
Object.defineProperty(__vite_ssr_exports__, "useFetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useFetch }});
Object.defineProperty(__vite_ssr_exports__, "useLazyFetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useLazyFetch }});
Object.defineProperty(__vite_ssr_exports__, "useCookie", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useCookie }});
Object.defineProperty(__vite_ssr_exports__, "useRequestHeaders", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useRequestHeaders }});
Object.defineProperty(__vite_ssr_exports__, "useRequestEvent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useRequestEvent }});
Object.defineProperty(__vite_ssr_exports__, "useRouter", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useRouter }});
Object.defineProperty(__vite_ssr_exports__, "useRoute", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useRoute }});
Object.defineProperty(__vite_ssr_exports__, "useActiveRoute", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useActiveRoute }});
Object.defineProperty(__vite_ssr_exports__, "defineNuxtRouteMiddleware", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.defineNuxtRouteMiddleware }});
Object.defineProperty(__vite_ssr_exports__, "navigateTo", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.navigateTo }});
Object.defineProperty(__vite_ssr_exports__, "abortNavigation", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.abortNavigation }});
Object.defineProperty(__vite_ssr_exports__, "addRouteMiddleware", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.addRouteMiddleware }});
Object.defineProperty(__vite_ssr_exports__, "throwError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.throwError }});
Object.defineProperty(__vite_ssr_exports__, "clearError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.clearError }});
Object.defineProperty(__vite_ssr_exports__, "useError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useError }});
Object.defineProperty(__vite_ssr_exports__, "defineNuxtLink", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.defineNuxtLink }});
const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

Object.defineProperty(__vite_ssr_exports__, "withCtx", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.withCtx }});
Object.defineProperty(__vite_ssr_exports__, "withDirectives", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.withDirectives }});
Object.defineProperty(__vite_ssr_exports__, "withKeys", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.withKeys }});
Object.defineProperty(__vite_ssr_exports__, "withMemo", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.withMemo }});
Object.defineProperty(__vite_ssr_exports__, "withModifiers", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.withModifiers }});
Object.defineProperty(__vite_ssr_exports__, "withScopeId", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.withScopeId }});
Object.defineProperty(__vite_ssr_exports__, "onActivated", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.onActivated }});
Object.defineProperty(__vite_ssr_exports__, "onBeforeMount", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.onBeforeMount }});
Object.defineProperty(__vite_ssr_exports__, "onBeforeUnmount", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.onBeforeUnmount }});
Object.defineProperty(__vite_ssr_exports__, "onBeforeUpdate", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.onBeforeUpdate }});
Object.defineProperty(__vite_ssr_exports__, "onDeactivated", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.onDeactivated }});
Object.defineProperty(__vite_ssr_exports__, "onErrorCaptured", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.onErrorCaptured }});
Object.defineProperty(__vite_ssr_exports__, "onMounted", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.onMounted }});
Object.defineProperty(__vite_ssr_exports__, "onRenderTracked", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.onRenderTracked }});
Object.defineProperty(__vite_ssr_exports__, "onRenderTriggered", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.onRenderTriggered }});
Object.defineProperty(__vite_ssr_exports__, "onServerPrefetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.onServerPrefetch }});
Object.defineProperty(__vite_ssr_exports__, "onUnmounted", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.onUnmounted }});
Object.defineProperty(__vite_ssr_exports__, "onUpdated", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.onUpdated }});
Object.defineProperty(__vite_ssr_exports__, "computed", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.computed }});
Object.defineProperty(__vite_ssr_exports__, "customRef", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.customRef }});
Object.defineProperty(__vite_ssr_exports__, "isProxy", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.isProxy }});
Object.defineProperty(__vite_ssr_exports__, "isReactive", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.isReactive }});
Object.defineProperty(__vite_ssr_exports__, "isReadonly", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.isReadonly }});
Object.defineProperty(__vite_ssr_exports__, "isRef", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.isRef }});
Object.defineProperty(__vite_ssr_exports__, "markRaw", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.markRaw }});
Object.defineProperty(__vite_ssr_exports__, "proxyRefs", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.proxyRefs }});
Object.defineProperty(__vite_ssr_exports__, "reactive", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.reactive }});
Object.defineProperty(__vite_ssr_exports__, "readonly", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.readonly }});
Object.defineProperty(__vite_ssr_exports__, "ref", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.ref }});
Object.defineProperty(__vite_ssr_exports__, "shallowReactive", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.shallowReactive }});
Object.defineProperty(__vite_ssr_exports__, "shallowReadonly", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.shallowReadonly }});
Object.defineProperty(__vite_ssr_exports__, "shallowRef", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.shallowRef }});
Object.defineProperty(__vite_ssr_exports__, "toRaw", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.toRaw }});
Object.defineProperty(__vite_ssr_exports__, "toRef", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.toRef }});
Object.defineProperty(__vite_ssr_exports__, "toRefs", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.toRefs }});
Object.defineProperty(__vite_ssr_exports__, "triggerRef", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.triggerRef }});
Object.defineProperty(__vite_ssr_exports__, "unref", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.unref }});
Object.defineProperty(__vite_ssr_exports__, "watch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.watch }});
Object.defineProperty(__vite_ssr_exports__, "watchEffect", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.watchEffect }});
Object.defineProperty(__vite_ssr_exports__, "isShallow", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.isShallow }});
Object.defineProperty(__vite_ssr_exports__, "effect", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.effect }});
Object.defineProperty(__vite_ssr_exports__, "effectScope", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.effectScope }});
Object.defineProperty(__vite_ssr_exports__, "getCurrentScope", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.getCurrentScope }});
Object.defineProperty(__vite_ssr_exports__, "onScopeDispose", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.onScopeDispose }});
Object.defineProperty(__vite_ssr_exports__, "defineComponent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.defineComponent }});
Object.defineProperty(__vite_ssr_exports__, "defineAsyncComponent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.defineAsyncComponent }});
Object.defineProperty(__vite_ssr_exports__, "resolveComponent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.resolveComponent }});
Object.defineProperty(__vite_ssr_exports__, "getCurrentInstance", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.getCurrentInstance }});
Object.defineProperty(__vite_ssr_exports__, "h", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.h }});
Object.defineProperty(__vite_ssr_exports__, "inject", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.inject }});
Object.defineProperty(__vite_ssr_exports__, "nextTick", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.nextTick }});
Object.defineProperty(__vite_ssr_exports__, "provide", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.provide }});
Object.defineProperty(__vite_ssr_exports__, "useAttrs", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useAttrs }});
Object.defineProperty(__vite_ssr_exports__, "useCssModule", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useCssModule }});
Object.defineProperty(__vite_ssr_exports__, "useCssVars", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useCssVars }});
Object.defineProperty(__vite_ssr_exports__, "useSlots", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useSlots }});
Object.defineProperty(__vite_ssr_exports__, "useTransitionState", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useTransitionState }});
const __vite_ssr_import_9__ = await __vite_ssr_import__("/node_modules/@nuxt/content/dist/runtime/composables/query.mjs");

Object.defineProperty(__vite_ssr_exports__, "queryContent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.queryContent }});
const __vite_ssr_import_10__ = await __vite_ssr_import__("/node_modules/@nuxt/content/dist/runtime/composables/utils.mjs");

Object.defineProperty(__vite_ssr_exports__, "withContentBase", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_10__.withContentBase }});
Object.defineProperty(__vite_ssr_exports__, "useUnwrap", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_10__.useUnwrap }});
const __vite_ssr_import_11__ = await __vite_ssr_import__("/node_modules/@nuxt/content/dist/runtime/composables/navigation.mjs");

Object.defineProperty(__vite_ssr_exports__, "fetchContentNavigation", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_11__.fetchContentNavigation }});
const __vite_ssr_import_12__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/composables.mjs");

Object.defineProperty(__vite_ssr_exports__, "definePageMeta", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_12__.definePageMeta }});;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/compat/vue-demi.mjs
// Parents: 
// - /@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/imports.mjs ($id_3d849a97)
// Dependencies: 
// - /node_modules/nuxt/dist/app/compat/capi.mjs ($id_0c5717a4)
// --------------------
const $id_a8110be7 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/compat/capi.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_0__);
const Vue2 = void 0;
Object.defineProperty(__vite_ssr_exports__, "Vue2", { enumerable: true, configurable: true, get(){ return Vue2 }});
const isVue2 = false;
Object.defineProperty(__vite_ssr_exports__, "isVue2", { enumerable: true, configurable: true, get(){ return isVue2 }});
const isVue3 = true;
Object.defineProperty(__vite_ssr_exports__, "isVue3", { enumerable: true, configurable: true, get(){ return isVue3 }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/compat/capi.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/compat/vue-demi.mjs ($id_a8110be7)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_0c5717a4 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");
__vite_ssr_exportAll__(__vite_ssr_import_0__);
const install = () => {
};
Object.defineProperty(__vite_ssr_exports__, "install", { enumerable: true, configurable: true, get(){ return install }});
function set(target, key, val) {
  if (Array.isArray(target)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val;
  }
  target[key] = val;
  return val;
}
Object.defineProperty(__vite_ssr_exports__, "set", { enumerable: true, configurable: true, get(){ return set }});
function del(target, key) {
  if (Array.isArray(target)) {
    target.splice(key, 1);
    return;
  }
  delete target[key];
}
Object.defineProperty(__vite_ssr_exports__, "del", { enumerable: true, configurable: true, get(){ return del }});
;
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/composables/utils.mjs
// Parents: 
// - /@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/imports.mjs ($id_3d849a97)
// - /node_modules/@nuxt/content/dist/runtime/composables/query.mjs ($id_47535763)
// - /node_modules/@nuxt/content/dist/runtime/composables/navigation.mjs ($id_e209d000)
// Dependencies: 
// - /node_modules/ufo/dist/index.mjs ($id_614de060)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/@nuxt/content/dist/runtime/markdown-parser/utils/node.mjs ($id_eacbabc5)
// --------------------
const $id_3db3e041 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/ufo/dist/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/@nuxt/content/dist/runtime/markdown-parser/utils/node.mjs");

const withContentBase = (url) => __vite_ssr_import_0__.withBase(url, "/api/" + __vite_ssr_import_1__.useRuntimeConfig().public.content.base);
Object.defineProperty(__vite_ssr_exports__, "withContentBase", { enumerable: true, configurable: true, get(){ return withContentBase }});
const useUnwrap = () => ({
  unwrap: __vite_ssr_import_2__.unwrap,
  flatUnwrap: __vite_ssr_import_2__.flatUnwrap
});
Object.defineProperty(__vite_ssr_exports__, "useUnwrap", { enumerable: true, configurable: true, get(){ return useUnwrap }});
;
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/markdown-parser/utils/node.mjs
// Parents: 
// - /node_modules/@nuxt/content/dist/runtime/composables/utils.mjs ($id_3db3e041)
// Dependencies: 

// --------------------
const $id_eacbabc5 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const TEXT_TAGS = ["p", "h1", "h2", "h3", "h4", "h5", "h6", "li"];
Object.defineProperty(__vite_ssr_exports__, "TEXT_TAGS", { enumerable: true, configurable: true, get(){ return TEXT_TAGS }});
function isTag(vnode, tag) {
  if (vnode.type === tag) {
    return true;
  }
  if (typeof vnode.type === "object" && vnode.type.tag === tag) {
    return true;
  }
  if (vnode.tag === tag) {
    return true;
  }
  return false;
}
Object.defineProperty(__vite_ssr_exports__, "isTag", { enumerable: true, configurable: true, get(){ return isTag }});
function isText(vnode) {
  return isTag(vnode, "text") || typeof vnode.children === "string";
}
Object.defineProperty(__vite_ssr_exports__, "isText", { enumerable: true, configurable: true, get(){ return isText }});
function nodeChildren(node) {
  if (Array.isArray(node.children) || typeof node.children === "string") {
    return node.children;
  }
  if (typeof node.children.default === "function") {
    return node.children.default();
  }
  return [];
}
Object.defineProperty(__vite_ssr_exports__, "nodeChildren", { enumerable: true, configurable: true, get(){ return nodeChildren }});
function nodeTextContent(node) {
  if (!node) {
    return "";
  }
  if (Array.isArray(node)) {
    return node.map(nodeTextContent).join("");
  }
  if (isText(node)) {
    return node.children || node.value;
  }
  const children = nodeChildren(node);
  if (Array.isArray(children)) {
    return children.map(nodeTextContent).join("");
  }
  return "";
}
Object.defineProperty(__vite_ssr_exports__, "nodeTextContent", { enumerable: true, configurable: true, get(){ return nodeTextContent }});
function unwrap(vnode, tags = ["p"]) {
  if (Array.isArray(vnode)) {
    return vnode.flatMap((node) => unwrap(node, tags));
  }
  let result = vnode;
  if (tags.some((tag) => tag === "*" || isTag(vnode, tag))) {
    result = nodeChildren(vnode) || vnode;
    if (!Array.isArray(result) && TEXT_TAGS.some((tag) => isTag(vnode, tag))) {
      result = [result];
    }
  }
  return result;
}
Object.defineProperty(__vite_ssr_exports__, "unwrap", { enumerable: true, configurable: true, get(){ return unwrap }});
function flatUnwrap(vnodes, tags = ["p"]) {
  vnodes = Array.isArray(vnodes) ? vnodes : [vnodes];
  if (!tags.length) {
    return vnodes;
  }
  return vnodes.flatMap((vnode) => flatUnwrap(unwrap(vnode, [tags[0]]), tags.slice(1))).filter((vnode) => !(isText(vnode) && nodeTextContent(vnode).trim() === ""));
}
Object.defineProperty(__vite_ssr_exports__, "flatUnwrap", { enumerable: true, configurable: true, get(){ return flatUnwrap }});
;
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/composables/query.mjs
// Parents: 
// - /@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/imports.mjs ($id_3d849a97)
// - /pages/packages.vue?macro=true ($id_84d7e9a6)
// - /pages/stars.vue?macro=true ($id_de6eeb3d)
// - /pages/packages.vue ($id_d713bde7)
// - /pages/stars.vue ($id_765c962d)
// Dependencies: 
// - /node_modules/ufo/dist/index.mjs ($id_614de060)
// - /node_modules/ohash/dist/index.mjs ($id_b1b82cf3)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/@nuxt/content/dist/runtime/query/query.mjs ($id_7961d5dc)
// - /node_modules/@nuxt/content/dist/runtime/utils/json.mjs ($id_45454526)
// - /node_modules/@nuxt/content/dist/runtime/composables/utils.mjs ($id_3db3e041)
// --------------------
const $id_47535763 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/ufo/dist/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/ohash/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/@nuxt/content/dist/runtime/query/query.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/@nuxt/content/dist/runtime/utils/json.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/@nuxt/content/dist/runtime/composables/utils.mjs");

const queryFetch = (params) => {
  const apiPath = __vite_ssr_import_5__.withContentBase(true ? "/query" : `/query/${__vite_ssr_import_1__.hash(params)}`);
  if (!true && true) {
    __vite_ssr_import_2__.useHead({
      link: [
        { rel: "prefetch", href: apiPath }
      ]
    });
  }
  return $fetch(apiPath, {
    method: "GET",
    responseType: "json",
    params: {
      _params: __vite_ssr_import_4__.jsonStringify(params),
      previewToken: __vite_ssr_import_2__.useCookie("previewToken").value
    }
  });
};
Object.defineProperty(__vite_ssr_exports__, "queryFetch", { enumerable: true, configurable: true, get(){ return queryFetch }});
function queryContent(query, ...pathParts) {
  if (typeof query === "string") {
    const path = __vite_ssr_import_0__.withLeadingSlash(__vite_ssr_import_0__.withoutTrailingSlash(__vite_ssr_import_0__.joinURL(query, ...pathParts)));
    return __vite_ssr_import_3__.createQuery(queryFetch).where({ _path: new RegExp(`^${path}`) });
  }
  return __vite_ssr_import_3__.createQuery(queryFetch, query);
}
Object.defineProperty(__vite_ssr_exports__, "queryContent", { enumerable: true, configurable: true, get(){ return queryContent }});
;
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/query/query.mjs
// Parents: 
// - /node_modules/@nuxt/content/dist/runtime/composables/query.mjs ($id_47535763)
// Dependencies: 
// - /node_modules/@nuxt/content/dist/runtime/query/match/utils.mjs ($id_e943acfb)
// --------------------
const $id_7961d5dc = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@nuxt/content/dist/runtime/query/match/utils.mjs");

const arrayParams = ["sort", "where", "only", "without"];
const createQuery = (fetcher, queryParams) => {
  const params = {
    ...queryParams
  };
  for (const key of arrayParams) {
    if (params[key]) {
      params[key] = __vite_ssr_import_0__.ensureArray(params[key]);
    }
  }
  const $set = (key, fn = (v) => v) => {
    return (...values) => {
      params[key] = fn(...values);
      return query;
    };
  };
  const query = {
    params: () => Object.freeze(params),
    only: $set("only", __vite_ssr_import_0__.ensureArray),
    without: $set("without", __vite_ssr_import_0__.ensureArray),
    where: $set("where", (q) => [...__vite_ssr_import_0__.ensureArray(params.where), q]),
    sort: $set("sort", (sort) => [...__vite_ssr_import_0__.ensureArray(params.sort), ...__vite_ssr_import_0__.ensureArray(sort)]),
    limit: $set("limit", (v) => parseInt(String(v), 10)),
    skip: $set("skip", (v) => parseInt(String(v), 10)),
    findOne: () => fetcher({ ...params, first: true }),
    find: () => fetcher(params),
    findSurround: (query2, options) => fetcher({ ...params, surround: { query: query2, ...options } }),
    locale: (_locale) => query.where({ _locale })
  };
  return query;
};
Object.defineProperty(__vite_ssr_exports__, "createQuery", { enumerable: true, configurable: true, get(){ return createQuery }});
;
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/query/match/utils.mjs
// Parents: 
// - /node_modules/@nuxt/content/dist/runtime/query/query.mjs ($id_7961d5dc)
// Dependencies: 

// --------------------
const $id_e943acfb = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const get = (obj, path) => path.split(".").reduce((acc, part) => acc && acc[part], obj);
Object.defineProperty(__vite_ssr_exports__, "get", { enumerable: true, configurable: true, get(){ return get }});
const _pick = (obj, condition) => Object.keys(obj).filter(condition).reduce((newObj, key) => Object.assign(newObj, { [key]: obj[key] }), {});
const pick = (keys) => (obj) => keys && keys.length ? _pick(obj, (key) => keys.includes(key)) : obj;
Object.defineProperty(__vite_ssr_exports__, "pick", { enumerable: true, configurable: true, get(){ return pick }});
const omit = (keys) => (obj) => keys && keys.length ? _pick(obj, (key) => !keys.includes(key)) : obj;
Object.defineProperty(__vite_ssr_exports__, "omit", { enumerable: true, configurable: true, get(){ return omit }});
const apply = (fn) => (data) => Array.isArray(data) ? data.map((item) => fn(item)) : fn(data);
Object.defineProperty(__vite_ssr_exports__, "apply", { enumerable: true, configurable: true, get(){ return apply }});
const detectProperties = (keys) => {
  const prefixes = [];
  const properties = [];
  for (const key of keys) {
    if (["$", "_"].includes(key)) {
      prefixes.push(key);
    } else {
      properties.push(key);
    }
  }
  return { prefixes, properties };
};
Object.defineProperty(__vite_ssr_exports__, "detectProperties", { enumerable: true, configurable: true, get(){ return detectProperties }});
const withoutKeys = (keys = []) => (obj) => {
  if (keys.length === 0) {
    return obj;
  }
  const { prefixes, properties } = detectProperties(keys);
  return _pick(obj, (key) => !properties.includes(key) && !prefixes.includes(key[0]));
};
Object.defineProperty(__vite_ssr_exports__, "withoutKeys", { enumerable: true, configurable: true, get(){ return withoutKeys }});
const withKeys = (keys = []) => (obj) => {
  if (keys.length === 0) {
    return obj;
  }
  const { prefixes, properties } = detectProperties(keys);
  return _pick(obj, (key) => properties.includes(key) || prefixes.includes(key[0]));
};
Object.defineProperty(__vite_ssr_exports__, "withKeys", { enumerable: true, configurable: true, get(){ return withKeys }});
const sortList = (data, params) => {
  const comperable = new Intl.Collator(params.$locale, {
    numeric: params.$numeric,
    caseFirst: params.$caseFirst,
    sensitivity: params.$sensitivity
  });
  const keys = Object.keys(params).filter((key) => !key.startsWith("$"));
  for (const key of keys) {
    data = data.sort((a, b) => {
      const values = [get(a, key), get(b, key)].map((value) => value === null ? void 0 : value);
      if (params[key] === 0) {
        values.reverse();
      }
      return comperable.compare(values[0], values[1]);
    });
  }
  return data;
};
Object.defineProperty(__vite_ssr_exports__, "sortList", { enumerable: true, configurable: true, get(){ return sortList }});
const assertArray = (value, message = "Expected an array") => {
  if (!Array.isArray(value)) {
    throw new TypeError(message);
  }
};
Object.defineProperty(__vite_ssr_exports__, "assertArray", { enumerable: true, configurable: true, get(){ return assertArray }});
const ensureArray = (value) => Array.isArray(value) ? value : value ? [value] : [];
Object.defineProperty(__vite_ssr_exports__, "ensureArray", { enumerable: true, configurable: true, get(){ return ensureArray }});
;
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/utils/json.mjs
// Parents: 
// - /node_modules/@nuxt/content/dist/runtime/composables/query.mjs ($id_47535763)
// - /node_modules/@nuxt/content/dist/runtime/composables/navigation.mjs ($id_e209d000)
// Dependencies: 

// --------------------
const $id_45454526 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
function jsonStringify(value) {
  return JSON.stringify(value, regExpReplacer);
}
Object.defineProperty(__vite_ssr_exports__, "jsonStringify", { enumerable: true, configurable: true, get(){ return jsonStringify }});
function jsonParse(value) {
  return JSON.parse(value, regExpReviver);
}
Object.defineProperty(__vite_ssr_exports__, "jsonParse", { enumerable: true, configurable: true, get(){ return jsonParse }});
function regExpReplacer(_key, value) {
  if (value instanceof RegExp) {
    return `--REGEX ${value.toString()}`;
  }
  return value;
}
function regExpReviver(_key, value) {
  const withOperator = typeof value === "string" && value.match(/^--([A-Z]+) (.+)$/) || [];
  if (withOperator[1] === "REGEX") {
    const regex = withOperator[2].match(/\/(.*)\/([dgimsuy]*)$/);
    return regex ? new RegExp(regex[1], regex[2] || "") : value;
  }
  return value;
}
;
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/composables/navigation.mjs
// Parents: 
// - /@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/imports.mjs ($id_3d849a97)
// Dependencies: 
// - /node_modules/ohash/dist/index.mjs ($id_b1b82cf3)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/@nuxt/content/dist/runtime/utils/json.mjs ($id_45454526)
// - /node_modules/@nuxt/content/dist/runtime/composables/utils.mjs ($id_3db3e041)
// --------------------
const $id_e209d000 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/ohash/dist/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/@nuxt/content/dist/runtime/utils/json.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/@nuxt/content/dist/runtime/composables/utils.mjs");

const fetchContentNavigation = (queryBuilder) => {
  const params = queryBuilder?.params();
  const apiPath = __vite_ssr_import_3__.withContentBase(params ? `/navigation/${__vite_ssr_import_0__.hash(params)}` : "/navigation");
  if (!true && true) {
    __vite_ssr_import_1__.useHead({
      link: [
        { rel: "prefetch", href: apiPath }
      ]
    });
  }
  return $fetch(apiPath, {
    method: "GET",
    responseType: "json",
    params: {
      _params: __vite_ssr_import_2__.jsonStringify(params || {}),
      previewToken: __vite_ssr_import_1__.useCookie("previewToken").value
    }
  });
};
Object.defineProperty(__vite_ssr_exports__, "fetchContentNavigation", { enumerable: true, configurable: true, get(){ return fetchContentNavigation }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/pages/runtime/composables.mjs
// Parents: 
// - /@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/imports.mjs ($id_3d849a97)
// Dependencies: 

// --------------------
const $id_ff6ed455 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const warnRuntimeUsage = (method) => console.warn(`${method}() is a compiler-hint helper that is only usable inside the script block of a single file component. Its arguments should be compiled away and passing it at runtime has no effect.`);
const definePageMeta = (meta) => {
  if (true) {
    warnRuntimeUsage("definePageMeta");
  }
};
Object.defineProperty(__vite_ssr_exports__, "definePageMeta", { enumerable: true, configurable: true, get(){ return definePageMeta }});
;
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/ContentList.mjs
// Parents: 
// - /@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/components.plugin.mjs ($id_759f3471)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/@nuxt/content/dist/runtime/components/ContentQuery.mjs ($id_3f801a38)
// --------------------
const $id_9fab5abb = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineComponent({
  props: {
    path: {
      type: String,
      required: false,
      default: "/"
    },
    query: {
      type: Object,
      required: false,
      default: void 0
    }
  },
  render(ctx) {
    const slots = __vite_ssr_import_0__.useSlots();
    const { path, query } = ctx;
    const contentQueryProps = Object.assign(query || {}, { path });
    const emptyNode = (slot, data) => __vite_ssr_import_0__.h("pre", null, JSON.stringify({ message: "You should use slots with <ContentList>", slot, data }, null, 2));
    return __vite_ssr_import_0__.h(__vite_ssr_import_1__.default, contentQueryProps, {
      default: slots?.default ? ({ data, refresh, isPartial }) => slots?.default({ list: data, refresh, isPartial, ...this.$attrs }) : ({ data }) => emptyNode("default", data),
      empty: (bindings) => slots?.empty ? slots.empty(bindings) : ({ data }) => emptyNode("default", data),
      "not-found": (bindings) => slots?.["not-found"] ? slots?.["not-found"]?.(bindings) : ({ data }) => emptyNode("not-found", data)
    });
  }
});
;
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.mjs
// Parents: 
// - /@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/components.plugin.mjs ($id_759f3471)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/ohash/dist/index.mjs ($id_b1b82cf3)
// - /@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/imports.mjs ($id_3d849a97)
// --------------------
const $id_d2da4ccd = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/ohash/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/imports.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineComponent({
  props: {
    query: {
      type: Object,
      required: false,
      default: void 0
    }
  },
  async setup(props) {
    const {
      query
    } = __vite_ssr_import_0__.toRefs(props);
    const { data, refresh } = await __vite_ssr_import_2__.useAsyncData(`content-navigation-${__vite_ssr_import_1__.hash(query.value)}`, () => __vite_ssr_import_2__.fetchContentNavigation(query.value));
    return {
      data,
      refresh
    };
  },
  render(ctx) {
    const slots = __vite_ssr_import_0__.useSlots();
    const {
      query,
      data,
      refresh
    } = ctx;
    const emptyNode = (slot, data2) => __vite_ssr_import_0__.h("pre", null, JSON.stringify({ message: "You should use slots with <ContentNavigation>", slot, data: data2 }, null, 2));
    if (slots?.empty && (!data || !data?.length)) {
      return slots?.empty?.({ query, ...this.$attrs }) || emptyNode("empty", { query, data });
    }
    return slots?.default ? slots.default({ navigation: data, refresh, ...this.$attrs }) : emptyNode("default", data);
  }
});
;
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Markdown.mjs
// Parents: 
// - /@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/components.plugin.mjs ($id_759f3471)
// Dependencies: 
// - /@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/imports.mjs ($id_3d849a97)
// --------------------
const $id_f4cbbc2c = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/imports.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineComponent({
  name: "Markdown",
  functional: true,
  props: {
    use: {
      type: [String, Function],
      default: "default"
    },
    unwrap: {
      type: [Boolean, String],
      default: false
    }
  },
  setup(props) {
    const { parent } = __vite_ssr_import_0__.getCurrentInstance();
    const { between } = __vite_ssr_import_0__.useSlots();
    const tags = __vite_ssr_import_0__.computed(() => {
      if (typeof props.unwrap === "string") {
        return props.unwrap.split(" ");
      }
      return ["*"];
    });
    return {
      tags,
      between,
      parent
    };
  },
  render({ use, unwrap, between, tags, parent }) {
    try {
      const slot = typeof use === "string" ? parent?.slots[use] || parent?.parent?.slots[use] : use;
      if (!slot) {
        return __vite_ssr_import_0__.h("div");
      }
      if (!unwrap) {
        return [slot()];
      }
      const { flatUnwrap } = __vite_ssr_import_0__.useUnwrap();
      const unwrapped = flatUnwrap(slot(), tags);
      if (between) {
        return unwrapped.flatMap((vnode, index) => index === 0 ? [vnode] : [between(), vnode]);
      }
      return unwrapped.reduce((acc, item) => {
        if (typeof item.children === "string") {
          if (typeof acc[acc.length - 1] === "string") {
            acc[acc.length - 1] += item.children;
          } else {
            acc.push(item.children);
          }
        } else {
          acc.push(item);
        }
        return acc;
      }, []);
    } catch (e) {
      return __vite_ssr_import_0__.h("div");
    }
  }
});
;
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseA.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/components.plugin.mjs ($id_759f3471)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_558bf79f = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_1__.defineComponent({
  props: {
    href: {
      type: String,
      default: ""
    },
    blank: {
      type: Boolean,
      default: false
    }
  },
  setup(__props, { expose }) {
    expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __vite_ssr_import_0__.default;
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_NuxtLink, __vite_ssr_import_2__.mergeProps({ href: $props.href }, _attrs), {
    default: __vite_ssr_import_2__.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        __vite_ssr_import_3__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          __vite_ssr_import_2__.renderSlot(_ctx.$slots, "default")
        ];
      }
    }),
    _: 3
  }, _parent));
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseA.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_5__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/Users/overtrue/www/laravel.xyz/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseA.vue"]]);
;
}


// --------------------
// Request: /node_modules/vue/server-renderer/index.js
// Parents: 
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseA.vue ($id_558bf79f)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseBlockquote.vue ($id_01e2b479)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCode.vue ($id_19429b58)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCodeInline.vue ($id_fab9e310)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseEm.vue ($id_840411f2)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH1.vue ($id_b479ada6)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH2.vue ($id_9c1df7ff)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH3.vue ($id_f86082f5)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH4.vue ($id_7f627a67)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH5.vue ($id_caec80eb)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH6.vue ($id_26303ae9)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseHr.vue ($id_6f4fac0c)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseImg.vue ($id_f72b4351)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseLi.vue ($id_1b78ec5d)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseOl.vue ($id_2e24a6f5)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseP.vue ($id_0990778f)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseStrong.vue ($id_6d4c23c7)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTable.vue ($id_10f5aef2)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTbody.vue ($id_faffa2d8)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTd.vue ($id_b51a8b09)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTh.vue ($id_07608f57)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseThead.vue ($id_17b6f147)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTr.vue ($id_16f58501)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseUl.vue ($id_7728c86d)
// - /pages/about.vue?macro=true ($id_9ddc318c)
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /pages/jobs.vue?macro=true ($id_da245256)
// - /components/TheLinkButton.vue ($id_67823286)
// - /components/Card.vue ($id_243aaff2)
// - /components/PackageCard.vue ($id_bc4dc7c7)
// - /pages/packages.vue?macro=true ($id_84d7e9a6)
// - /components/StarCard.vue ($id_ce2fb5c2)
// - /pages/stars.vue?macro=true ($id_de6eeb3d)
// - /pages/tips/:id.vue?macro=true ($id_b2d27d81)
// - /components/TheTag.vue ($id_83290242)
// - /components/TheTags.vue ($id_a54c4874)
// - /components/TipCard.vue ($id_f4d8b7fe)
// - /pages/tips/index.vue?macro=true ($id_7b998549)
// - /pages/about.vue ($id_a93ccd0b)
// - /pages/index.vue ($id_cca58e97)
// - /pages/jobs.vue ($id_1eaf0ed3)
// - /pages/packages.vue ($id_d713bde7)
// - /pages/stars.vue ($id_765c962d)
// - /pages/tips/:id.vue ($id_d4dd6cfe)
// - /pages/tips/index.vue ($id_2a5fe106)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_b90d4d0f)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_14c8b574)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_bc2d74a1)
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_8cc6d73f)
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_e9bfada3)
// - /components/TheNavbar.vue ($id_1e19b72c)
// - /components/TheFooter.vue ($id_cdfd5170)
// - /app.vue ($id_2b46e842)
// Dependencies: 

// --------------------
const $id_b215fa1c = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/overtrue/www/laravel.xyz/node_modules/vue/server-renderer/index.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/overtrue/www/laravel.xyz/node_modules/vue/server-renderer/index.js\".")
  })


// --------------------
// Request: /@id/plugin-vue:export-helper
// Parents: 
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseA.vue ($id_558bf79f)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseBlockquote.vue ($id_01e2b479)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCode.vue ($id_19429b58)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCodeInline.vue ($id_fab9e310)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseEm.vue ($id_840411f2)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH1.vue ($id_b479ada6)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH2.vue ($id_9c1df7ff)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH3.vue ($id_f86082f5)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH4.vue ($id_7f627a67)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH5.vue ($id_caec80eb)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH6.vue ($id_26303ae9)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseHr.vue ($id_6f4fac0c)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseImg.vue ($id_f72b4351)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseLi.vue ($id_1b78ec5d)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseOl.vue ($id_2e24a6f5)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseP.vue ($id_0990778f)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseStrong.vue ($id_6d4c23c7)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTable.vue ($id_10f5aef2)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTbody.vue ($id_faffa2d8)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTd.vue ($id_b51a8b09)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTh.vue ($id_07608f57)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseThead.vue ($id_17b6f147)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTr.vue ($id_16f58501)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseUl.vue ($id_7728c86d)
// - /pages/about.vue?macro=true ($id_9ddc318c)
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /pages/jobs.vue?macro=true ($id_da245256)
// - /components/TheLinkButton.vue ($id_67823286)
// - /components/Card.vue ($id_243aaff2)
// - /components/PackageCard.vue ($id_bc4dc7c7)
// - /pages/packages.vue?macro=true ($id_84d7e9a6)
// - /components/StarCard.vue ($id_ce2fb5c2)
// - /pages/stars.vue?macro=true ($id_de6eeb3d)
// - /pages/tips/:id.vue?macro=true ($id_b2d27d81)
// - /components/TheTag.vue ($id_83290242)
// - /components/TheTags.vue ($id_a54c4874)
// - /components/TipCard.vue ($id_f4d8b7fe)
// - /pages/tips/index.vue?macro=true ($id_7b998549)
// - /pages/about.vue ($id_a93ccd0b)
// - /pages/index.vue ($id_cca58e97)
// - /pages/jobs.vue ($id_1eaf0ed3)
// - /pages/packages.vue ($id_d713bde7)
// - /pages/stars.vue ($id_765c962d)
// - /pages/tips/:id.vue ($id_d4dd6cfe)
// - /pages/tips/index.vue ($id_2a5fe106)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_b90d4d0f)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_14c8b574)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_bc2d74a1)
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_8cc6d73f)
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_e9bfada3)
// - /components/TheNavbar.vue ($id_1e19b72c)
// - /components/TheFooter.vue ($id_cdfd5170)
// - /app.vue ($id_2b46e842)
// Dependencies: 

// --------------------
const $id_bbb863c1 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

__vite_ssr_exports__.default = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
}
;
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseBlockquote.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/components.plugin.mjs ($id_759f3471)
// Dependencies: 
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_01e2b479 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<blockquote${__vite_ssr_import_0__.ssrRenderAttrs(_attrs)}>`)
  __vite_ssr_import_0__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</blockquote>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseBlockquote.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/overtrue/www/laravel.xyz/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseBlockquote.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCode.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/components.plugin.mjs ($id_759f3471)
// Dependencies: 
// - /@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/imports.mjs ($id_3d849a97)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCode.vue?vue&type=style&index=0&lang.css ($id_d7e7fe44)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_19429b58 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

const __vite_ssr_import_0__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/imports.mjs");

const _sfc_main = __vite_ssr_import_0__.defineComponent({
  props: {
    code: {
      type: String,
      default: ""
    },
    language: {
      type: String,
      default: null
    },
    filename: {
      type: String,
      default: null
    },
    highlights: {
      type: Array,
      default: () => []
    }
  }
});

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  __vite_ssr_import_1__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
}

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCode.vue?vue&type=style&index=0&lang.css");


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCode.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/overtrue/www/laravel.xyz/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCode.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCode.vue?vue&type=style&index=0&lang.css
// Parents: 
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCode.vue ($id_19429b58)
// Dependencies: 

// --------------------
const $id_d7e7fe44 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "pre code .line{display:block;min-height:1rem}";
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCodeInline.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/components.plugin.mjs ($id_759f3471)
// Dependencies: 
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_fab9e310 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<code${__vite_ssr_import_0__.ssrRenderAttrs(_attrs)}>`)
  __vite_ssr_import_0__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</code>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCodeInline.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/overtrue/www/laravel.xyz/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCodeInline.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseEm.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/components.plugin.mjs ($id_759f3471)
// Dependencies: 
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_840411f2 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<em${__vite_ssr_import_0__.ssrRenderAttrs(_attrs)}>`)
  __vite_ssr_import_0__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</em>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseEm.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/overtrue/www/laravel.xyz/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseEm.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH1.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/components.plugin.mjs ($id_759f3471)
// Dependencies: 
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_b479ada6 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<h1${__vite_ssr_import_0__.ssrRenderAttrs(_attrs)}>`)
  __vite_ssr_import_0__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</h1>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH1.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/overtrue/www/laravel.xyz/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH1.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH2.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/components.plugin.mjs ($id_759f3471)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_9c1df7ff = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_1__.defineComponent({
  props: {
    id: { type: String, required: true }
  },
  setup(__props, { expose }) {
    expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __vite_ssr_import_0__.default;
  _push(`<h2${__vite_ssr_import_3__.ssrRenderAttrs(__vite_ssr_import_2__.mergeProps({ id: $props.id }, _attrs))}>`);
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_NuxtLink, {
    href: `#${$props.id}`
  }, {
    default: __vite_ssr_import_2__.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        __vite_ssr_import_3__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          __vite_ssr_import_2__.renderSlot(_ctx.$slots, "default")
        ];
      }
    }),
    _: 3
  }, _parent));
  _push(`</h2>`);
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_5__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/Users/overtrue/www/laravel.xyz/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH2.vue"]]);
;
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH3.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/components.plugin.mjs ($id_759f3471)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_f86082f5 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_1__.defineComponent({
  props: {
    id: { type: String, required: true }
  },
  setup(__props, { expose }) {
    expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __vite_ssr_import_0__.default;
  _push(`<h3${__vite_ssr_import_3__.ssrRenderAttrs(__vite_ssr_import_2__.mergeProps({ id: $props.id }, _attrs))}>`);
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_NuxtLink, {
    href: `#${$props.id}`
  }, {
    default: __vite_ssr_import_2__.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        __vite_ssr_import_3__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          __vite_ssr_import_2__.renderSlot(_ctx.$slots, "default")
        ];
      }
    }),
    _: 3
  }, _parent));
  _push(`</h3>`);
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH3.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_5__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/Users/overtrue/www/laravel.xyz/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH3.vue"]]);
;
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH4.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/components.plugin.mjs ($id_759f3471)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_7f627a67 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_1__.defineComponent({
  props: {
    id: { type: String, required: true }
  },
  setup(__props, { expose }) {
    expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __vite_ssr_import_0__.default;
  _push(`<h4${__vite_ssr_import_3__.ssrRenderAttrs(__vite_ssr_import_2__.mergeProps({ id: $props.id }, _attrs))}>`);
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_NuxtLink, {
    href: `#${$props.id}`
  }, {
    default: __vite_ssr_import_2__.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        __vite_ssr_import_3__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          __vite_ssr_import_2__.renderSlot(_ctx.$slots, "default")
        ];
      }
    }),
    _: 3
  }, _parent));
  _push(`</h4>`);
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH4.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_5__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/Users/overtrue/www/laravel.xyz/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH4.vue"]]);
;
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH5.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/components.plugin.mjs ($id_759f3471)
// Dependencies: 
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_caec80eb = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<h5${__vite_ssr_import_0__.ssrRenderAttrs(_attrs)}>`)
  __vite_ssr_import_0__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</h5>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH5.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/overtrue/www/laravel.xyz/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH5.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH6.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/components.plugin.mjs ($id_759f3471)
// Dependencies: 
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_26303ae9 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<h6${__vite_ssr_import_0__.ssrRenderAttrs(_attrs)}>`)
  __vite_ssr_import_0__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</h6>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH6.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/overtrue/www/laravel.xyz/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH6.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseHr.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/components.plugin.mjs ($id_759f3471)
// Dependencies: 
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_6f4fac0c = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<hr${__vite_ssr_import_0__.ssrRenderAttrs(_attrs)}>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseHr.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/overtrue/www/laravel.xyz/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseHr.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseImg.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/components.plugin.mjs ($id_759f3471)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_f72b4351 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_0__.defineComponent({
  props: {
    src: {
      type: String,
      default: ""
    },
    alt: {
      type: String,
      default: ""
    },
    width: {
      type: [String, Number],
      default: void 0
    },
    height: {
      type: [String, Number],
      default: void 0
    }
  },
  setup(__props, { expose }) {
    expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<img${__vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({
    src: $props.src,
    alt: $props.alt,
    width: $props.width,
    height: $props.height
  }, _attrs))}>`);
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseImg.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_4__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/Users/overtrue/www/laravel.xyz/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseImg.vue"]]);
;
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseLi.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/components.plugin.mjs ($id_759f3471)
// Dependencies: 
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_1b78ec5d = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<li${__vite_ssr_import_0__.ssrRenderAttrs(_attrs)}>`)
  __vite_ssr_import_0__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</li>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseLi.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/overtrue/www/laravel.xyz/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseLi.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseOl.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/components.plugin.mjs ($id_759f3471)
// Dependencies: 
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_2e24a6f5 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<ol${__vite_ssr_import_0__.ssrRenderAttrs(_attrs)}>`)
  __vite_ssr_import_0__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</ol>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseOl.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/overtrue/www/laravel.xyz/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseOl.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseP.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/components.plugin.mjs ($id_759f3471)
// Dependencies: 
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_0990778f = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<p${__vite_ssr_import_0__.ssrRenderAttrs(_attrs)}>`)
  __vite_ssr_import_0__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</p>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseP.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/overtrue/www/laravel.xyz/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseP.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseStrong.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/components.plugin.mjs ($id_759f3471)
// Dependencies: 
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_6d4c23c7 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<strong${__vite_ssr_import_0__.ssrRenderAttrs(_attrs)}>`)
  __vite_ssr_import_0__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</strong>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseStrong.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/overtrue/www/laravel.xyz/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseStrong.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTable.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/components.plugin.mjs ($id_759f3471)
// Dependencies: 
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_10f5aef2 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<table${__vite_ssr_import_0__.ssrRenderAttrs(_attrs)}>`)
  __vite_ssr_import_0__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</table>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTable.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/overtrue/www/laravel.xyz/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTable.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTbody.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/components.plugin.mjs ($id_759f3471)
// Dependencies: 
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_faffa2d8 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<tbody${__vite_ssr_import_0__.ssrRenderAttrs(_attrs)}>`)
  __vite_ssr_import_0__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</tbody>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTbody.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/overtrue/www/laravel.xyz/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTbody.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTd.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/components.plugin.mjs ($id_759f3471)
// Dependencies: 
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_b51a8b09 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<td${__vite_ssr_import_0__.ssrRenderAttrs(_attrs)}>`)
  __vite_ssr_import_0__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</td>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTd.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/overtrue/www/laravel.xyz/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTd.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTh.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/components.plugin.mjs ($id_759f3471)
// Dependencies: 
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_07608f57 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<th${__vite_ssr_import_0__.ssrRenderAttrs(_attrs)}>`)
  __vite_ssr_import_0__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</th>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTh.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/overtrue/www/laravel.xyz/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTh.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseThead.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/components.plugin.mjs ($id_759f3471)
// Dependencies: 
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_17b6f147 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<thead${__vite_ssr_import_0__.ssrRenderAttrs(_attrs)}>`)
  __vite_ssr_import_0__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</thead>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseThead.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/overtrue/www/laravel.xyz/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseThead.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTr.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/components.plugin.mjs ($id_759f3471)
// Dependencies: 
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_16f58501 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<tr${__vite_ssr_import_0__.ssrRenderAttrs(_attrs)}>`)
  __vite_ssr_import_0__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</tr>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTr.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/overtrue/www/laravel.xyz/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTr.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseUl.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/components.plugin.mjs ($id_759f3471)
// Dependencies: 
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_7728c86d = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<ul${__vite_ssr_import_0__.ssrRenderAttrs(_attrs)}>`)
  __vite_ssr_import_0__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</ul>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseUl.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/overtrue/www/laravel.xyz/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseUl.vue"]]);
}


// --------------------
// Request: /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs
// Parents: 
// - /@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/plugins/server.mjs ($id_cd2348f9)
// Dependencies: 
// - /node_modules/@vueuse/head/dist/index.mjs ($id_c032264e)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/defu/dist/defu.mjs ($id_d7afab65)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_e6f12003 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@vueuse/head/dist/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/defu/dist/defu.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_3__.defineNuxtPlugin((nuxtApp) => {
  const head = __vite_ssr_import_0__.createHead();
  nuxtApp.vueApp.use(head);
  let headReady = false;
  nuxtApp.hooks.hookOnce("app:mounted", () => {
    __vite_ssr_import_1__.watchEffect(() => {
      head.updateDOM();
    });
    headReady = true;
  });
  const titleTemplate = __vite_ssr_import_1__.ref();
  nuxtApp._useHead = (_meta) => {
    const meta = __vite_ssr_import_1__.ref(_meta);
    if ("titleTemplate" in meta.value) {
      titleTemplate.value = meta.value.titleTemplate;
    }
    const headObj = __vite_ssr_import_1__.computed(() => {
      const overrides = { meta: [] };
      if (titleTemplate.value && "title" in meta.value) {
        overrides.title = typeof titleTemplate.value === "function" ? titleTemplate.value(meta.value.title) : titleTemplate.value.replace(/%s/g, meta.value.title);
      }
      if (meta.value.charset) {
        overrides.meta.push({ key: "charset", charset: meta.value.charset });
      }
      if (meta.value.viewport) {
        overrides.meta.push({ name: "viewport", content: meta.value.viewport });
      }
      return __vite_ssr_import_2__.default(overrides, meta.value);
    });
    head.addHeadObjs(headObj);
    if (true) {
      return;
    }
    if (headReady) {
      __vite_ssr_import_1__.watchEffect(() => {
        head.updateDOM();
      });
    }
    const vm = __vite_ssr_import_1__.getCurrentInstance();
    if (!vm) {
      return;
    }
    __vite_ssr_import_1__.onBeforeUnmount(() => {
      head.removeHeadObjs(headObj);
      head.updateDOM();
    });
  };
  if (true) {
    nuxtApp.ssrContext.renderMeta = () => __vite_ssr_import_0__.renderHeadToString(head);
  }
});
;
}


// --------------------
// Request: /node_modules/@vueuse/head/dist/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_e6f12003)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_c032264e = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));

// src/index.ts
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


// src/constants.ts
var PROVIDE_KEY = `usehead`;
var HEAD_COUNT_KEY = `head:count`;
var HEAD_ATTRS_KEY = `data-head-attrs`;
var SELF_CLOSING_TAGS = ["meta", "link", "base"];

// src/create-element.ts
var createElement = (tag, attrs, document) => {
  const el = document.createElement(tag);
  for (const key of Object.keys(attrs)) {
    let value = attrs[key];
    if (key === "key" || value === false) {
      continue;
    }
    if (key === "children") {
      el.textContent = value;
    } else {
      el.setAttribute(key, value);
    }
  }
  return el;
};

// src/stringify-attrs.ts
var htmlEscape = (str) => str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
var stringifyAttrs = (attributes) => {
  const handledAttributes = [];
  for (let [key, value] of Object.entries(attributes)) {
    if (key === "children" || key === "key") {
      continue;
    }
    if (value === false || value == null) {
      continue;
    }
    let attribute = htmlEscape(key);
    if (value !== true) {
      attribute += `="${htmlEscape(String(value))}"`;
    }
    handledAttributes.push(attribute);
  }
  return handledAttributes.length > 0 ? " " + handledAttributes.join(" ") : "";
};

// src/utils.ts
function isEqualNode(oldTag, newTag) {
  if (oldTag instanceof HTMLElement && newTag instanceof HTMLElement) {
    const nonce = newTag.getAttribute("nonce");
    if (nonce && !oldTag.getAttribute("nonce")) {
      const cloneTag = newTag.cloneNode(true);
      cloneTag.setAttribute("nonce", "");
      cloneTag.nonce = nonce;
      return nonce === oldTag.nonce && oldTag.isEqualNode(cloneTag);
    }
  }
  return oldTag.isEqualNode(newTag);
}

// src/index.ts
var getTagKey = (props) => {
  const names = ["key", "id", "name", "property"];
  for (const n of names) {
    const value = typeof props.getAttribute === "function" ? props.hasAttribute(n) ? props.getAttribute(n) : void 0 : props[n];
    if (value !== void 0) {
      return { name: n, value };
    }
  }
};
var injectHead = () => {
  const head = __vite_ssr_import_0__.inject(PROVIDE_KEY);
  if (!head) {
    throw new Error(`You may forget to apply app.use(head)`);
  }
  return head;
};
var acceptFields = [
  "title",
  "meta",
  "link",
  "base",
  "style",
  "script",
  "htmlAttrs",
  "bodyAttrs"
];
var headObjToTags = (obj) => {
  const tags = [];
  for (const key of Object.keys(obj)) {
    if (obj[key] == null)
      continue;
    if (key === "title") {
      tags.push({ tag: key, props: { children: obj[key] } });
    } else if (key === "base") {
      tags.push({ tag: key, props: __spreadValues({ key: "default" }, obj[key]) });
    } else if (acceptFields.includes(key)) {
      const value = obj[key];
      if (Array.isArray(value)) {
        value.forEach((item) => {
          tags.push({ tag: key, props: item });
        });
      } else if (value) {
        tags.push({ tag: key, props: value });
      }
    }
  }
  return tags;
};
var setAttrs = (el, attrs) => {
  const existingAttrs = el.getAttribute(HEAD_ATTRS_KEY);
  if (existingAttrs) {
    for (const key of existingAttrs.split(",")) {
      if (!(key in attrs)) {
        el.removeAttribute(key);
      }
    }
  }
  const keys = [];
  for (const key in attrs) {
    const value = attrs[key];
    if (value == null)
      continue;
    if (value === false) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, value);
    }
    keys.push(key);
  }
  if (keys.length) {
    el.setAttribute(HEAD_ATTRS_KEY, keys.join(","));
  } else {
    el.removeAttribute(HEAD_ATTRS_KEY);
  }
};
var updateElements = (document = window.document, type, tags) => {
  var _a;
  const head = document.head;
  let headCountEl = head.querySelector(`meta[name="${HEAD_COUNT_KEY}"]`);
  const headCount = headCountEl ? Number(headCountEl.getAttribute("content")) : 0;
  const oldElements = [];
  if (headCountEl) {
    for (let i = 0, j = headCountEl.previousElementSibling; i < headCount; i++, j = (j == null ? void 0 : j.previousElementSibling) || null) {
      if (((_a = j == null ? void 0 : j.tagName) == null ? void 0 : _a.toLowerCase()) === type) {
        oldElements.push(j);
      }
    }
  } else {
    headCountEl = document.createElement("meta");
    headCountEl.setAttribute("name", HEAD_COUNT_KEY);
    headCountEl.setAttribute("content", "0");
    head.append(headCountEl);
  }
  let newElements = tags.map((tag) => createElement(tag.tag, tag.props, document));
  newElements = newElements.filter((newEl) => {
    for (let i = 0; i < oldElements.length; i++) {
      const oldEl = oldElements[i];
      if (isEqualNode(oldEl, newEl)) {
        oldElements.splice(i, 1);
        return false;
      }
    }
    return true;
  });
  oldElements.forEach((t) => {
    var _a2;
    return (_a2 = t.parentNode) == null ? void 0 : _a2.removeChild(t);
  });
  newElements.forEach((t) => {
    head.insertBefore(t, headCountEl);
  });
  headCountEl.setAttribute("content", "" + (headCount - oldElements.length + newElements.length));
};
var createHead = () => {
  let allHeadObjs = [];
  let previousTags = /* @__PURE__ */ new Set();
  const head = {
    install(app) {
      app.config.globalProperties.$head = head;
      app.provide(PROVIDE_KEY, head);
    },
    get headTags() {
      const deduped = [];
      allHeadObjs.forEach((objs) => {
        const tags = headObjToTags(objs.value);
        tags.forEach((tag) => {
          if (tag.tag === "meta" || tag.tag === "base" || tag.tag === "script") {
            const key = getTagKey(tag.props);
            if (key) {
              let index = -1;
              for (let i = 0; i < deduped.length; i++) {
                const prev = deduped[i];
                const prevValue = prev.props[key.name];
                const nextValue = tag.props[key.name];
                if (prev.tag === tag.tag && prevValue === nextValue) {
                  index = i;
                  break;
                }
              }
              if (index !== -1) {
                deduped.splice(index, 1);
              }
            }
          }
          deduped.push(tag);
        });
      });
      return deduped;
    },
    addHeadObjs(objs) {
      allHeadObjs.push(objs);
    },
    removeHeadObjs(objs) {
      allHeadObjs = allHeadObjs.filter((_objs) => _objs !== objs);
    },
    updateDOM(document = window.document) {
      let title;
      let htmlAttrs = {};
      let bodyAttrs = {};
      const actualTags = {};
      for (const tag of head.headTags) {
        if (tag.tag === "title") {
          title = tag.props.children;
          continue;
        }
        if (tag.tag === "htmlAttrs") {
          Object.assign(htmlAttrs, tag.props);
          continue;
        }
        if (tag.tag === "bodyAttrs") {
          Object.assign(bodyAttrs, tag.props);
          continue;
        }
        actualTags[tag.tag] = actualTags[tag.tag] || [];
        actualTags[tag.tag].push(tag);
      }
      if (title !== void 0) {
        document.title = title;
      }
      setAttrs(document.documentElement, htmlAttrs);
      setAttrs(document.body, bodyAttrs);
      const tags = /* @__PURE__ */ new Set([...Object.keys(actualTags), ...previousTags]);
      for (const tag of tags) {
        updateElements(document, tag, actualTags[tag] || []);
      }
      previousTags.clear();
      Object.keys(actualTags).forEach((i) => previousTags.add(i));
    }
  };
  return head;
};
var IS_BROWSER = "undefined" !== "undefined";
var useHead = (obj) => {
  const headObj = __vite_ssr_import_0__.ref(obj);
  const head = injectHead();
  head.addHeadObjs(headObj);
  if (IS_BROWSER) {
    __vite_ssr_import_0__.watchEffect(() => {
      head.updateDOM();
    });
    __vite_ssr_import_0__.onBeforeUnmount(() => {
      head.removeHeadObjs(headObj);
      head.updateDOM();
    });
  }
};
var tagToString = (tag) => {
  let attrs = stringifyAttrs(tag.props);
  if (SELF_CLOSING_TAGS.includes(tag.tag)) {
    return `<${tag.tag}${attrs}>`;
  }
  return `<${tag.tag}${attrs}>${tag.props.children || ""}</${tag.tag}>`;
};
var renderHeadToString = (head) => {
  const tags = [];
  let titleTag = "";
  let htmlAttrs = {};
  let bodyAttrs = {};
  for (const tag of head.headTags) {
    if (tag.tag === "title") {
      titleTag = tagToString(tag);
    } else if (tag.tag === "htmlAttrs") {
      Object.assign(htmlAttrs, tag.props);
    } else if (tag.tag === "bodyAttrs") {
      Object.assign(bodyAttrs, tag.props);
    } else {
      tags.push(tagToString(tag));
    }
  }
  tags.push(`<meta name="${HEAD_COUNT_KEY}" content="${tags.length}">`);
  return {
    get headTags() {
      return titleTag + tags.join("");
    },
    get htmlAttrs() {
      return stringifyAttrs(__spreadProps(__spreadValues({}, htmlAttrs), {
        [HEAD_ATTRS_KEY]: Object.keys(htmlAttrs).join(",")
      }));
    },
    get bodyAttrs() {
      return stringifyAttrs(__spreadProps(__spreadValues({}, bodyAttrs), {
        [HEAD_ATTRS_KEY]: Object.keys(bodyAttrs).join(",")
      }));
    }
  };
};
var vnodesToHeadObj = (nodes) => {
  const obj = {
    title: void 0,
    htmlAttrs: void 0,
    bodyAttrs: void 0,
    base: void 0,
    meta: [],
    link: [],
    style: [],
    script: []
  };
  for (const node of nodes) {
    const type = node.type === "html" ? "htmlAttrs" : node.type === "body" ? "bodyAttrs" : node.type;
    if (typeof type !== "string" || !(type in obj))
      continue;
    const props = __spreadProps(__spreadValues({}, node.props), {
      children: Array.isArray(node.children) ? node.children[0].children : node.children
    });
    if (Array.isArray(obj[type])) {
      ;
      obj[type].push(props);
    } else if (type === "title") {
      obj.title = props.children;
    } else {
      ;
      obj[type] = props;
    }
  }
  return obj;
};
var Head = /* @__PURE__ */ __vite_ssr_import_0__.defineComponent({
  name: "Head",
  setup(_, { slots }) {
    const head = injectHead();
    let obj;
    __vite_ssr_import_0__.onBeforeUnmount(() => {
      if (obj) {
        head.removeHeadObjs(obj);
        head.updateDOM();
      }
    });
    return () => {
      __vite_ssr_import_0__.watchEffect(() => {
        if (!slots.default)
          return;
        if (obj) {
          head.removeHeadObjs(obj);
        }
        obj = __vite_ssr_import_0__.ref(vnodesToHeadObj(slots.default()));
        head.addHeadObjs(obj);
        if (IS_BROWSER) {
          head.updateDOM();
        }
      });
      return null;
    };
  }
});

Object.defineProperty(__vite_ssr_exports__, "Head", { enumerable: true, configurable: true, get(){ return Head }});
Object.defineProperty(__vite_ssr_exports__, "createHead", { enumerable: true, configurable: true, get(){ return createHead }});
Object.defineProperty(__vite_ssr_exports__, "injectHead", { enumerable: true, configurable: true, get(){ return injectHead }});
Object.defineProperty(__vite_ssr_exports__, "renderHeadToString", { enumerable: true, configurable: true, get(){ return renderHeadToString }});
Object.defineProperty(__vite_ssr_exports__, "useHead", { enumerable: true, configurable: true, get(){ return useHead }});
;
}


// --------------------
// Request: /node_modules/defu/dist/defu.mjs
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_e6f12003)
// Dependencies: 

// --------------------
const $id_d7afab65 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/overtrue/www/laravel.xyz/node_modules/defu/dist/defu.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/overtrue/www/laravel.xyz/node_modules/defu/dist/defu.mjs\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/head/runtime/plugin.mjs
// Parents: 
// - /@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/plugins/server.mjs ($id_cd2348f9)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/head/runtime/components.mjs ($id_b2a29d6f)
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_04ea9504)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/meta.config.mjs ($id_8776a886)
// --------------------
const $id_a2650341 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/components.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/composables.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/meta.config.mjs");

const metaMixin = {
  created() {
    const instance = __vite_ssr_import_0__.getCurrentInstance();
    if (!instance) {
      return;
    }
    const options = instance.type;
    if (!options || !("head" in options)) {
      return;
    }
    const nuxtApp = __vite_ssr_import_3__.useNuxtApp();
    const source = typeof options.head === "function" ? __vite_ssr_import_0__.computed(() => options.head(nuxtApp)) : options.head;
    __vite_ssr_import_2__.useHead(source);
  }
};
__vite_ssr_exports__.default = __vite_ssr_import_3__.defineNuxtPlugin((nuxtApp) => {
  __vite_ssr_import_2__.useHead(__vite_ssr_import_0__.markRaw(__vite_ssr_import_4__.default.globalMeta));
  nuxtApp.vueApp.mixin(metaMixin);
  for (const name in __vite_ssr_import_1__) {
    nuxtApp.vueApp.component(name, __vite_ssr_import_1__[name]);
  }
});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/head/runtime/components.mjs
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_a2650341)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_04ea9504)
// --------------------
const $id_b2a29d6f = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/composables.mjs");

const removeUndefinedProps = (props) => Object.fromEntries(Object.entries(props).filter(([, value]) => value !== void 0));
const setupForUseMeta = (metaFactory, renderChild) => (props, ctx) => {
  __vite_ssr_import_1__.useHead(() => metaFactory({ ...removeUndefinedProps(props), ...ctx.attrs }, ctx));
  return () => renderChild ? ctx.slots.default?.() : null;
};
const globalProps = {
  accesskey: String,
  autocapitalize: String,
  autofocus: {
    type: Boolean,
    default: void 0
  },
  class: String,
  contenteditable: {
    type: Boolean,
    default: void 0
  },
  contextmenu: String,
  dir: String,
  draggable: {
    type: Boolean,
    default: void 0
  },
  enterkeyhint: String,
  exportparts: String,
  hidden: {
    type: Boolean,
    default: void 0
  },
  id: String,
  inputmode: String,
  is: String,
  itemid: String,
  itemprop: String,
  itemref: String,
  itemscope: String,
  itemtype: String,
  lang: String,
  nonce: String,
  part: String,
  slot: String,
  spellcheck: {
    type: Boolean,
    default: void 0
  },
  style: String,
  tabindex: String,
  title: String,
  translate: String
};
const Script = __vite_ssr_import_0__.defineComponent({
  name: "Script",
  props: {
    ...globalProps,
    async: Boolean,
    crossorigin: {
      type: [Boolean, String],
      default: void 0
    },
    defer: Boolean,
    integrity: String,
    nomodule: Boolean,
    nonce: String,
    referrerpolicy: String,
    src: String,
    type: String,
    charset: String,
    language: String
  },
  setup: setupForUseMeta((script) => ({
    script: [script]
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Script", { enumerable: true, configurable: true, get(){ return Script }});
const Link = __vite_ssr_import_0__.defineComponent({
  name: "Link",
  props: {
    ...globalProps,
    as: String,
    crossorigin: String,
    disabled: Boolean,
    href: String,
    hreflang: String,
    imagesizes: String,
    imagesrcset: String,
    integrity: String,
    media: String,
    prefetch: {
      type: Boolean,
      default: void 0
    },
    referrerpolicy: String,
    rel: String,
    sizes: String,
    title: String,
    type: String,
    methods: String,
    target: String
  },
  setup: setupForUseMeta((link) => ({
    link: [link]
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Link", { enumerable: true, configurable: true, get(){ return Link }});
const Base = __vite_ssr_import_0__.defineComponent({
  name: "Base",
  props: {
    ...globalProps,
    href: String,
    target: String
  },
  setup: setupForUseMeta((base) => ({
    base
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Base", { enumerable: true, configurable: true, get(){ return Base }});
const Title = __vite_ssr_import_0__.defineComponent({
  name: "Title",
  setup: setupForUseMeta((_, { slots }) => {
    const title = slots.default?.()?.[0]?.children || null;
    if (true && title && typeof title !== "string") {
      console.error("<Title> can only take a string in its default slot.");
    }
    return {
      title
    };
  })
});
Object.defineProperty(__vite_ssr_exports__, "Title", { enumerable: true, configurable: true, get(){ return Title }});
const Meta = __vite_ssr_import_0__.defineComponent({
  name: "Meta",
  props: {
    ...globalProps,
    charset: String,
    content: String,
    httpEquiv: String,
    name: String
  },
  setup: setupForUseMeta((meta) => ({
    meta: [meta]
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Meta", { enumerable: true, configurable: true, get(){ return Meta }});
const Style = __vite_ssr_import_0__.defineComponent({
  name: "Style",
  props: {
    ...globalProps,
    type: String,
    media: String,
    nonce: String,
    title: String,
    scoped: {
      type: Boolean,
      default: void 0
    }
  },
  setup: setupForUseMeta((props, { slots }) => {
    const style = { ...props };
    const textContent = slots.default?.()?.[0]?.children;
    if (textContent) {
      if (true && typeof textContent !== "string") {
        console.error("<Style> can only take a string in its default slot.");
      }
      style.children = textContent;
    }
    return {
      style: [style]
    };
  })
});
Object.defineProperty(__vite_ssr_exports__, "Style", { enumerable: true, configurable: true, get(){ return Style }});
const Head = __vite_ssr_import_0__.defineComponent({
  name: "Head",
  setup: (_props, ctx) => () => ctx.slots.default?.()
});
Object.defineProperty(__vite_ssr_exports__, "Head", { enumerable: true, configurable: true, get(){ return Head }});
const Html = __vite_ssr_import_0__.defineComponent({
  name: "Html",
  props: {
    ...globalProps,
    manifest: String,
    version: String,
    xmlns: String
  },
  setup: setupForUseMeta((htmlAttrs) => ({ htmlAttrs }), true)
});
Object.defineProperty(__vite_ssr_exports__, "Html", { enumerable: true, configurable: true, get(){ return Html }});
const Body = __vite_ssr_import_0__.defineComponent({
  name: "Body",
  props: globalProps,
  setup: setupForUseMeta((bodyAttrs) => ({ bodyAttrs }), true)
});
Object.defineProperty(__vite_ssr_exports__, "Body", { enumerable: true, configurable: true, get(){ return Body }});
;
}


// --------------------
// Request: /@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/meta.config.mjs
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_a2650341)
// Dependencies: 

// --------------------
const $id_8776a886 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = {"globalMeta":{"charset":"utf-8","viewport":"width=device-width, initial-scale=1","meta":[],"link":[],"style":[],"script":[]}};
}


// --------------------
// Request: /node_modules/nuxt/dist/pages/runtime/router.mjs
// Parents: 
// - /@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/plugins/server.mjs ($id_cd2348f9)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue-router/dist/vue-router.cjs.js ($id_f9a4a698)
// - /node_modules/h3/dist/index.mjs ($id_57d7ded6)
// - /node_modules/ufo/dist/index.mjs ($id_614de060)
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_5fc14cdc)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/routes.mjs ($id_f1f16d9d)
// - /@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/router.options.mjs ($id_79723d14)
// - /@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/middleware.mjs ($id_26232596)
// --------------------
const $id_a090977b = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue-router/dist/vue-router.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/h3/dist/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/ufo/dist/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/page.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/routes.mjs");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/router.options.mjs");

const __vite_ssr_import_8__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/middleware.mjs");

function createCurrentLocation(base, location) {
  const { pathname, search, hash } = location;
  const hashPos = base.indexOf("#");
  if (hashPos > -1) {
    const slicePos = hash.includes(base.slice(hashPos)) ? base.slice(hashPos).length : 1;
    let pathFromHash = hash.slice(slicePos);
    if (pathFromHash[0] !== "/") {
      pathFromHash = "/" + pathFromHash;
    }
    return __vite_ssr_import_3__.withoutBase(pathFromHash, "");
  }
  const path = __vite_ssr_import_3__.withoutBase(pathname, base);
  return path + search + hash;
}
__vite_ssr_exports__.default = __vite_ssr_import_5__.defineNuxtPlugin(async (nuxtApp) => {
  nuxtApp.vueApp.component("NuxtPage", __vite_ssr_import_4__.default);
  nuxtApp.vueApp.component("NuxtNestedPage", __vite_ssr_import_4__.default);
  nuxtApp.vueApp.component("NuxtChild", __vite_ssr_import_4__.default);
  const baseURL = __vite_ssr_import_5__.useRuntimeConfig().app.baseURL;
  const routerHistory = false ? __vite_ssr_import_1__.createWebHistory(baseURL) : __vite_ssr_import_1__.createMemoryHistory(baseURL);
  const initialURL = true ? nuxtApp.ssrContext.url : createCurrentLocation(baseURL, window.location);
  const router = __vite_ssr_import_1__.createRouter({
    ...__vite_ssr_import_7__.default,
    history: routerHistory,
    routes: __vite_ssr_import_6__.default
  });
  nuxtApp.vueApp.use(router);
  const previousRoute = __vite_ssr_import_0__.shallowRef(router.currentRoute.value);
  router.afterEach((_to, from) => {
    previousRoute.value = from;
  });
  Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
    get: () => previousRoute.value
  });
  const route = {};
  for (const key in router.currentRoute.value) {
    route[key] = __vite_ssr_import_0__.computed(() => router.currentRoute.value[key]);
  }
  const _activeRoute = __vite_ssr_import_0__.shallowRef(router.resolve(initialURL));
  const syncCurrentRoute = () => {
    _activeRoute.value = router.currentRoute.value;
  };
  nuxtApp.hook("page:finish", syncCurrentRoute);
  router.afterEach((to, from) => {
    if (to.matched[0]?.components?.default === from.matched[0]?.components?.default) {
      syncCurrentRoute();
    }
  });
  const activeRoute = {};
  for (const key in _activeRoute.value) {
    activeRoute[key] = __vite_ssr_import_0__.computed(() => _activeRoute.value[key]);
  }
  nuxtApp._route = __vite_ssr_import_0__.reactive(route);
  nuxtApp._activeRoute = __vite_ssr_import_0__.reactive(activeRoute);
  nuxtApp._middleware = nuxtApp._middleware || {
    global: [],
    named: {}
  };
  const error = __vite_ssr_import_5__.useError();
  router.afterEach(async (to) => {
    if (false && !nuxtApp.isHydrating && error.value) {
      await __vite_ssr_import_5__.callWithNuxt(nuxtApp, __vite_ssr_import_5__.clearError);
    }
    if (to.matched.length === 0) {
      __vite_ssr_import_5__.callWithNuxt(nuxtApp, __vite_ssr_import_5__.throwError, [__vite_ssr_import_2__.createError({
        statusCode: 404,
        statusMessage: `Page not found: ${to.fullPath}`
      })]);
    } else if (true && to.matched[0].name === "404" && nuxtApp.ssrContext) {
      nuxtApp.ssrContext.res.statusCode = 404;
    }
  });
  try {
    if (true) {
      await router.push(initialURL);
    }
    await router.isReady();
  } catch (error2) {
    __vite_ssr_import_5__.callWithNuxt(nuxtApp, __vite_ssr_import_5__.throwError, [error2]);
  }
  router.beforeEach(async (to, from) => {
    to.meta = __vite_ssr_import_0__.reactive(to.meta);
    nuxtApp._processingMiddleware = true;
    const middlewareEntries = new Set([...__vite_ssr_import_8__.globalMiddleware, ...nuxtApp._middleware.global]);
    for (const component of to.matched) {
      const componentMiddleware = component.meta.middleware;
      if (!componentMiddleware) {
        continue;
      }
      if (Array.isArray(componentMiddleware)) {
        for (const entry of componentMiddleware) {
          middlewareEntries.add(entry);
        }
      } else {
        middlewareEntries.add(componentMiddleware);
      }
    }
    for (const entry of middlewareEntries) {
      const middleware = typeof entry === "string" ? nuxtApp._middleware.named[entry] || await __vite_ssr_import_8__.namedMiddleware[entry]?.().then((r) => r.default || r) : entry;
      if (true && !middleware) {
        console.warn(`Unknown middleware: ${entry}. Valid options are ${Object.keys(__vite_ssr_import_8__.namedMiddleware).join(", ")}.`);
      }
      const result = await __vite_ssr_import_5__.callWithNuxt(nuxtApp, middleware, [to, from]);
      if (true) {
        if (result === false || result instanceof Error) {
          const error2 = result || __vite_ssr_import_2__.createError({
            statusMessage: `Route navigation aborted: ${initialURL}`
          });
          return __vite_ssr_import_5__.callWithNuxt(nuxtApp, __vite_ssr_import_5__.throwError, [error2]);
        }
      }
      if (result || result === false) {
        return result;
      }
    }
  });
  router.afterEach(async (to) => {
    delete nuxtApp._processingMiddleware;
    if (true) {
      const currentURL = to.fullPath || "/";
      if (!__vite_ssr_import_3__.isEqual(currentURL, initialURL)) {
        await __vite_ssr_import_5__.callWithNuxt(nuxtApp, __vite_ssr_import_5__.navigateTo, [currentURL]);
      }
    }
  });
  nuxtApp.hooks.hookOnce("app:created", async () => {
    try {
      await router.replace({
        ...router.resolve(initialURL),
        force: true
      });
    } catch (error2) {
      __vite_ssr_import_5__.callWithNuxt(nuxtApp, __vite_ssr_import_5__.throwError, [error2]);
    }
  });
  return { provide: { router } };
});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/pages/runtime/page.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue-router/dist/vue-router.cjs.js ($id_f9a4a698)
// - /node_modules/nuxt/dist/pages/runtime/utils.mjs ($id_80f433aa)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/nuxt/dist/app/components/utils.mjs ($id_69c52686)
// --------------------
const $id_5fc14cdc = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue-router/dist/vue-router.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/utils.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/utils.mjs");

const isNestedKey = Symbol("isNested");
__vite_ssr_exports__.default = __vite_ssr_import_0__.defineComponent({
  name: "NuxtPage",
  props: {
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props) {
    const nuxtApp = __vite_ssr_import_3__.useNuxtApp();
    const isNested = __vite_ssr_import_0__.inject(isNestedKey, false);
    __vite_ssr_import_0__.provide(isNestedKey, true);
    return () => {
      return __vite_ssr_import_0__.h(__vite_ssr_import_1__.RouterView, {}, {
        default: (routeProps) => routeProps.Component && __vite_ssr_import_4__._wrapIf(__vite_ssr_import_0__.Transition, routeProps.route.meta.pageTransition ?? defaultPageTransition, __vite_ssr_import_2__.wrapInKeepAlive(routeProps.route.meta.keepalive, isNested && nuxtApp.isHydrating ? __vite_ssr_import_0__.h(routeProps.Component, { key: __vite_ssr_import_2__.generateRouteKey(props.pageKey, routeProps) }) : __vite_ssr_import_0__.h(__vite_ssr_import_0__.Suspense, {
          onPending: () => nuxtApp.callHook("page:start", routeProps.Component),
          onResolve: () => nuxtApp.callHook("page:finish", routeProps.Component)
        }, { default: () => __vite_ssr_import_0__.h(routeProps.Component, { key: __vite_ssr_import_2__.generateRouteKey(props.pageKey, routeProps) }) }))).default()
      });
    };
  }
});
const defaultPageTransition = { name: "page", mode: "out-in" };
;
}


// --------------------
// Request: /node_modules/nuxt/dist/pages/runtime/utils.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_5fc14cdc)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_80f433aa = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const interpolatePath = (route, match) => {
  return match.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => route.params[r.slice(1)]?.toString() || "");
};
const generateRouteKey = (override, routeProps) => {
  const matchedRoute = routeProps.route.matched.find((m) => m.components.default === routeProps.Component.type);
  const source = override ?? matchedRoute?.meta.key ?? interpolatePath(routeProps.route, matchedRoute);
  return typeof source === "function" ? source(routeProps.route) : source;
};
Object.defineProperty(__vite_ssr_exports__, "generateRouteKey", { enumerable: true, configurable: true, get(){ return generateRouteKey }});
const wrapInKeepAlive = (props, children) => {
  return { default: () => false && props ? __vite_ssr_import_0__.h(__vite_ssr_import_0__.KeepAlive, props === true ? {} : props, children) : children };
};
Object.defineProperty(__vite_ssr_exports__, "wrapInKeepAlive", { enumerable: true, configurable: true, get(){ return wrapInKeepAlive }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/utils.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_5fc14cdc)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_69c52686 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const Fragment = {
  setup(_props, { slots }) {
    return () => slots.default?.();
  }
};
const _wrapIf = (component, props, slots) => {
  return { default: () => props ? __vite_ssr_import_0__.h(component, props === true ? {} : props, slots) : __vite_ssr_import_0__.h(Fragment, {}, slots) };
};
Object.defineProperty(__vite_ssr_exports__, "_wrapIf", { enumerable: true, configurable: true, get(){ return _wrapIf }});
;
}


// --------------------
// Request: /@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/routes.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// Dependencies: 
// - /pages/about.vue?macro=true ($id_9ddc318c)
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /pages/jobs.vue?macro=true ($id_da245256)
// - /pages/packages.vue?macro=true ($id_84d7e9a6)
// - /pages/stars.vue?macro=true ($id_de6eeb3d)
// - /pages/tips/:id.vue?macro=true ($id_b2d27d81)
// - /pages/tips/index.vue?macro=true ($id_7b998549)
// - /pages/about.vue ($id_a93ccd0b)
// - /pages/index.vue ($id_cca58e97)
// - /pages/jobs.vue ($id_1eaf0ed3)
// - /pages/packages.vue ($id_d713bde7)
// - /pages/stars.vue ($id_765c962d)
// - /pages/tips/:id.vue ($id_d4dd6cfe)
// - /pages/tips/index.vue ($id_2a5fe106)
// --------------------
const $id_f1f16d9d = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/pages/about.vue?macro=true");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/pages/index.vue?macro=true");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/pages/jobs.vue?macro=true");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/pages/packages.vue?macro=true");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/pages/stars.vue?macro=true");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/pages/tips/:id.vue?macro=true");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/pages/tips/index.vue?macro=true");

__vite_ssr_exports__.default = [
  {
    name: "about",
    path: "/about",
    file: "/Users/overtrue/www/laravel.xyz/pages/about.vue",
    children: [],
    meta: __vite_ssr_import_0__.meta,
    alias: __vite_ssr_import_0__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__('/pages/about.vue')
  },
  {
    name: "index",
    path: "/",
    file: "/Users/overtrue/www/laravel.xyz/pages/index.vue",
    children: [],
    meta: __vite_ssr_import_1__.meta,
    alias: __vite_ssr_import_1__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__('/pages/index.vue')
  },
  {
    name: "jobs",
    path: "/jobs",
    file: "/Users/overtrue/www/laravel.xyz/pages/jobs.vue",
    children: [],
    meta: __vite_ssr_import_2__.meta,
    alias: __vite_ssr_import_2__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__('/pages/jobs.vue')
  },
  {
    name: "packages",
    path: "/packages",
    file: "/Users/overtrue/www/laravel.xyz/pages/packages.vue",
    children: [],
    meta: __vite_ssr_import_3__.meta,
    alias: __vite_ssr_import_3__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__('/pages/packages.vue')
  },
  {
    name: "stars",
    path: "/stars",
    file: "/Users/overtrue/www/laravel.xyz/pages/stars.vue",
    children: [],
    meta: __vite_ssr_import_4__.meta,
    alias: __vite_ssr_import_4__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__('/pages/stars.vue')
  },
  {
    name: "tips-:id",
    path: "/tips/:id",
    file: "/Users/overtrue/www/laravel.xyz/pages/tips/:id.vue",
    children: [],
    meta: __vite_ssr_import_5__.meta,
    alias: __vite_ssr_import_5__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__('/pages/tips/:id.vue')
  },
  {
    name: "tips",
    path: "/tips",
    file: "/Users/overtrue/www/laravel.xyz/pages/tips/index.vue",
    children: [],
    meta: __vite_ssr_import_6__.meta,
    alias: __vite_ssr_import_6__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__('/pages/tips/index.vue')
  }
];
}


// --------------------
// Request: /pages/about.vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/routes.mjs ($id_f1f16d9d)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_9ddc318c = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({ class: "flex flex-col justify-center w-full h-screen max-w-3xl mx-auto space-y-2" }, _attrs))}><div><h1 class="text-2xl">About</h1><p class="text-lg">I&#39;m learning about Nuxt 3! Here&#39;s what I&#39;ve achieved so far:</p></div><ul class="mx-8 list-disc"><li>Created a new Nuxt 3 project</li><li>Added Tailwind</li><li>Created a new page</li></ul></div>`)
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/about.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/overtrue/www/laravel.xyz/pages/about.vue"]])
const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /pages/index.vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/routes.mjs ($id_f1f16d9d)
// Dependencies: 
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_5dd70240 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<h1${__vite_ssr_import_0__.ssrRenderAttrs(_attrs)}>it works!</h1>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/index.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/overtrue/www/laravel.xyz/pages/index.vue"]])
const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /pages/jobs.vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/routes.mjs ($id_f1f16d9d)
// Dependencies: 
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_da245256 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<h1${__vite_ssr_import_0__.ssrRenderAttrs(_attrs)}>it works!</h1>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/jobs.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/overtrue/www/laravel.xyz/pages/jobs.vue"]])
const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /pages/packages.vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/routes.mjs ($id_f1f16d9d)
// Dependencies: 
// - /components/TheLinkButton.vue ($id_67823286)
// - /components/Card.vue ($id_243aaff2)
// - /components/PackageCard.vue ($id_bc4dc7c7)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/@nuxt/content/dist/runtime/composables/query.mjs ($id_47535763)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_84d7e9a6 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/TheLinkButton.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/Card.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/PackageCard.vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/@nuxt/content/dist/runtime/composables/query.mjs");
const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


const _sfc_main = {
  async setup(__props, { expose }) {
  expose();

let __temp, __restore

const { data: repos } = (
  ([__temp,__restore] = __vite_ssr_import_5__.withAsyncContext(() => __vite_ssr_import_3__.useAsyncData('packages', () => __vite_ssr_import_4__.queryContent('/compiled/packages').findOne()))),
  __temp = await __temp,
  __restore(),
  __temp
)
const { data: topics } = (
  ([__temp,__restore] = __vite_ssr_import_5__.withAsyncContext(() => __vite_ssr_import_3__.useAsyncData('topics', () => __vite_ssr_import_4__.queryContent('/compiled/topics').findOne()))),
  __temp = await __temp,
  __restore(),
  __temp
)

const __returned__ = { repos, topics }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_the_link_button = __vite_ssr_import_0__.default
  const _component_card = __vite_ssr_import_1__.default
  const _component_package_card = __vite_ssr_import_2__.default

  _push(`<div${__vite_ssr_import_7__.ssrRenderAttrs(__vite_ssr_import_6__.mergeProps({ class: "mt-8 space-y-6" }, _attrs))}><header class="space-y-4"><div class="flex justify-between items-center"><h1 class="text-3xl mb-0 text-gray-700 dark:text-gray-300">扩展包</h1>`)
  _push(__vite_ssr_import_7__.ssrRenderComponent(_component_the_link_button, {
    href: "https://github.com/overtrue/laravel.xyz/edit/master/content/packages.json",
    class: "flex items-center space-x-2"
  }, {
    default: __vite_ssr_import_6__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"${
          _scopeId
        }><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6"${
          _scopeId
        }></path></svg><span${
          _scopeId
        }>提议更多扩展包</span>`)
      } else {
        return [
          (__vite_ssr_import_6__.openBlock(), __vite_ssr_import_6__.createBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: "h-4 w-4",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            "stroke-width": "2"
          }, [
            __vite_ssr_import_6__.createVNode("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              d: "M12 6v6m0 0v6m0-6h6m-6 0H6"
            })
          ])),
          __vite_ssr_import_6__.createVNode("span", null, "提议更多扩展包")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div><p class="text-gray-500 dark:text-gray-500">一些开源的让你更方便创建Laravel应用的库或者组件。</p></header><div class="flex gap-6">`)
  _push(__vite_ssr_import_7__.ssrRenderComponent(_component_card, { class: "rounded-lg p-6 shadow w-64" }, {
    default: __vite_ssr_import_6__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<h2 class="text-xl font-semibold text-gray-700"${
          _scopeId
        }>标签</h2><div class="mt-6"${
          _scopeId
        }><!--[-->`)
        __vite_ssr_import_7__.ssrRenderList($setup.topics.body, (topic) => {
          _push(`<label class="flex items-center space-x-2 w-full"${
            _scopeId
          }><input type="checkbox" class="form-checkbox rounded"${
            _scopeId
          }><div class="flex-1 truncate min-w-0 whitespace-nowrap"${
            _scopeId
          }>${
            __vite_ssr_import_7__.ssrInterpolate(topic.name)
          }</div><span class="justify-self-end text-gray-400 text-sm rounded bg-gray-200 px-2"${
            _scopeId
          }>${
            __vite_ssr_import_7__.ssrInterpolate(topic.packages_count)
          }</span></label>`)
        })
        _push(`<!--]--></div>`)
      } else {
        return [
          __vite_ssr_import_6__.createVNode("h2", { class: "text-xl font-semibold text-gray-700" }, "标签"),
          __vite_ssr_import_6__.createVNode("div", { class: "mt-6" }, [
            (__vite_ssr_import_6__.openBlock(true), __vite_ssr_import_6__.createBlock(__vite_ssr_import_6__.Fragment, null, __vite_ssr_import_6__.renderList($setup.topics.body, (topic) => {
              return (__vite_ssr_import_6__.openBlock(), __vite_ssr_import_6__.createBlock("label", {
                class: "flex items-center space-x-2 w-full",
                key: topic
              }, [
                __vite_ssr_import_6__.createVNode("input", {
                  type: "checkbox",
                  class: "form-checkbox rounded"
                }),
                __vite_ssr_import_6__.createVNode("div", { class: "flex-1 truncate min-w-0 whitespace-nowrap" }, __vite_ssr_import_6__.toDisplayString(topic.name), 1 /* TEXT */),
                __vite_ssr_import_6__.createVNode("span", { class: "justify-self-end text-gray-400 text-sm rounded bg-gray-200 px-2" }, __vite_ssr_import_6__.toDisplayString(topic.packages_count), 1 /* TEXT */)
              ]))
            }), 128 /* KEYED_FRAGMENT */))
          ])
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`<div class="gap-6 flex-1 grid grid-cols-1 xl:grid-cols-2"><!--[-->`)
  __vite_ssr_import_7__.ssrRenderList($setup.repos.body, (repo) => {
    _push(__vite_ssr_import_7__.ssrRenderComponent(_component_package_card, {
      repo: repo,
      key: repo.name
    }, null, _parent))
  })
  _push(`<!--]--></div></div></div>`)
}


const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_8__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/packages.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_9__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_9__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/overtrue/www/laravel.xyz/pages/packages.vue"]])
const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /components/TheLinkButton.vue
// Parents: 
// - /pages/packages.vue?macro=true ($id_84d7e9a6)
// - /pages/stars.vue?macro=true ($id_de6eeb3d)
// - /pages/packages.vue ($id_d713bde7)
// - /pages/stars.vue ($id_765c962d)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_67823286 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {
  props: {
    type: {
      type: String,
      default: "button"
    },
    href: {
      type: String,
      default: "#"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    pending: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      return {
        "inline-flex": true,
        "items-center": true,
        "px-4": true,
        "py-2": true,
        "bg-indigo-800": true,
        "border": true,
        "border-transparent": true,
        "rounded-md": true,
        "font-semibold": true,
        "text-xs": true,
        "text-white": true,
        "uppercase": true,
        "tracking-widest": true,
        "hover:bg-indigo-700": true,
        "active:bg-indigo-900": true,
        "focus:outline-none": true,
        "focus:border-indigo-900": true,
        "focus:ring": true,
        "focus:ring-indigo-300": true,
        "disabled:opacity-25": true,
        "transition": true
      };
    }
  }
};
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<a${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({
    href: $props.href,
    class: $options.classes,
    type: $props.type,
    disabled: $props.disabled
  }, _attrs))}>`);
  __vite_ssr_import_1__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</a>`);
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheLinkButton.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_3__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/Users/overtrue/www/laravel.xyz/components/TheLinkButton.vue"]]);
;
}


// --------------------
// Request: /components/Card.vue
// Parents: 
// - /pages/packages.vue?macro=true ($id_84d7e9a6)
// - /pages/tips/:id.vue?macro=true ($id_b2d27d81)
// - /pages/packages.vue ($id_d713bde7)
// - /pages/tips/:id.vue ($id_d4dd6cfe)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_243aaff2 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({ class: "bg-white dark:bg-gray-800" }, _attrs))}>`)
  __vite_ssr_import_1__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</div>`)
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Card.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/overtrue/www/laravel.xyz/components/Card.vue"]]);
}


// --------------------
// Request: /components/PackageCard.vue
// Parents: 
// - /pages/packages.vue?macro=true ($id_84d7e9a6)
// - /pages/packages.vue ($id_d713bde7)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_bc4dc7c7 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const _sfc_main = {
  props: {
    repo: {
      type: Object,
      required: true
    }
  }
};
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __vite_ssr_import_0__.default;
  _push(`<div${__vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "rounded-lg shadow bg-white dark:bg-gray-800 p-6 hover:shadow-lg dark:hover:bg-black space-y-4" }, _attrs))}><div class="space-y-2"><div class="flex items-center justify-between">`);
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_NuxtLink, {
    class: "font-semibold text-gray-800 flex-1",
    to: $props.repo.html_url
  }, {
    default: __vite_ssr_import_1__.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${__vite_ssr_import_2__.ssrInterpolate($props.repo.full_name)}`);
      } else {
        return [
          __vite_ssr_import_1__.createTextVNode(__vite_ssr_import_1__.toDisplayString($props.repo.full_name), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="flex items-center justify-evenly"><div class="flex items-center space-x-2 text-sm"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg><span>${__vite_ssr_import_2__.ssrInterpolate($props.repo.stargazers_count)}</span></div></div></div>`);
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_NuxtLink, {
    class: "block text-gray-600 dark:text-gray-400",
    to: $props.repo.html_url
  }, {
    default: __vite_ssr_import_1__.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${__vite_ssr_import_2__.ssrInterpolate(_ctx.$emoji.replace_colons($props.repo.description))}`);
      } else {
        return [
          __vite_ssr_import_1__.createTextVNode(__vite_ssr_import_1__.toDisplayString(_ctx.$emoji.replace_colons($props.repo.description)), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_NuxtLink, {
    class: "text-center cursor-pointer inline-flex items-center space-x-2",
    to: $props.repo.owner.html_url
  }, {
    default: __vite_ssr_import_1__.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${__vite_ssr_import_2__.ssrRenderAttr("src", $props.repo.owner.avatar_url)} alt="" class="rounded-full h-6 w-6"${_scopeId}><h5 class="text-gray-700 dark:text-gray-300"${_scopeId}>${__vite_ssr_import_2__.ssrInterpolate($props.repo.owner.login)}</h5>`);
      } else {
        return [
          __vite_ssr_import_1__.createVNode("img", {
            src: $props.repo.owner.avatar_url,
            alt: "",
            class: "rounded-full h-6 w-6"
          }, null, 8, ["src"]),
          __vite_ssr_import_1__.createVNode("h5", { class: "text-gray-700 dark:text-gray-300" }, __vite_ssr_import_1__.toDisplayString($props.repo.owner.login), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PackageCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_4__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/Users/overtrue/www/laravel.xyz/components/PackageCard.vue"]]);
;
}


// --------------------
// Request: /pages/stars.vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/routes.mjs ($id_f1f16d9d)
// Dependencies: 
// - /components/TheLinkButton.vue ($id_67823286)
// - /components/StarCard.vue ($id_ce2fb5c2)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/@nuxt/content/dist/runtime/composables/query.mjs ($id_47535763)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_de6eeb3d = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/TheLinkButton.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/StarCard.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/@nuxt/content/dist/runtime/composables/query.mjs");
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


const _sfc_main = {
  async setup(__props, { expose }) {
  expose();

let __temp, __restore

const { data: stars } = (
  ([__temp,__restore] = __vite_ssr_import_4__.withAsyncContext(() => __vite_ssr_import_2__.useAsyncData('stars', () => __vite_ssr_import_3__.queryContent('/compiled/stars').findOne()))),
  __temp = await __temp,
  __restore(),
  __temp
)

const __returned__ = { stars }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_the_link_button = __vite_ssr_import_0__.default
  const _component_star_card = __vite_ssr_import_1__.default

  _push(`<div${__vite_ssr_import_6__.ssrRenderAttrs(__vite_ssr_import_5__.mergeProps({ class: "mt-8 space-y-6" }, _attrs))}><header class="space-y-4"><div class="flex justify-between items-center"><h1 class="text-3xl mb-0 text-gray-700 dark:text-gray-300">人物</h1>`)
  _push(__vite_ssr_import_6__.ssrRenderComponent(_component_the_link_button, {
    href: "https://github.com/overtrue/laravel.xyz/edit/master/content/packages.json",
    class: "flex items-center space-x-2"
  }, {
    default: __vite_ssr_import_5__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"${
          _scopeId
        }><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6"${
          _scopeId
        }></path></svg><span${
          _scopeId
        }>提议更多人选</span>`)
      } else {
        return [
          (__vite_ssr_import_5__.openBlock(), __vite_ssr_import_5__.createBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: "h-4 w-4",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            "stroke-width": "2"
          }, [
            __vite_ssr_import_5__.createVNode("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              d: "M12 6v6m0 0v6m0-6h6m-6 0H6"
            })
          ])),
          __vite_ssr_import_5__.createVNode("span", null, "提议更多人选")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div><div class="text-gray-500 dark:text-gray-500">因为这些大佬的无私奉献，才有了 Laravel 的今天。</div></header><div class="flex flex-wrap gap-6 w-full"><!--[-->`)
  __vite_ssr_import_6__.ssrRenderList($setup.stars.body, (star) => {
    _push(__vite_ssr_import_6__.ssrRenderComponent(_component_star_card, {
      star: star,
      key: star.name
    }, null, _parent))
  })
  _push(`<!--]--></div></div>`)
}


const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_7__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/stars.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_8__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_8__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/overtrue/www/laravel.xyz/pages/stars.vue"]])
const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /components/StarCard.vue
// Parents: 
// - /pages/stars.vue?macro=true ($id_de6eeb3d)
// - /pages/stars.vue ($id_765c962d)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_ce2fb5c2 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const _sfc_main = {
  props: {
    star: {
      type: Object,
      required: true
    }
  }
};
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __vite_ssr_import_0__.default;
  _push(`<div${__vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "rounded-lg shadow bg-white dark:bg-gray-800 p-6 w-64 hover:shadow-lg dark:hover:bg-black relative" }, _attrs))}>`);
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_NuxtLink, {
    class: "block text-center h-52 cursor-pointer",
    to: $props.star.html_url
  }, {
    default: __vite_ssr_import_1__.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${__vite_ssr_import_2__.ssrRenderAttr("src", $props.star.avatar_url)} alt="" class="rounded-full h-32 w-32 my-4 mx-auto"${_scopeId}><h3 class="text-xl text-gray-700 dark:text-gray-300 m-0"${_scopeId}>${__vite_ssr_import_2__.ssrInterpolate($props.star.name)}</h3><p class="text-gray-500 line-clamp-3 text-sm overflow-hidden"${_scopeId}>${__vite_ssr_import_2__.ssrInterpolate($props.star.introduction || $props.star.bio || "")}</p>`);
      } else {
        return [
          __vite_ssr_import_1__.createVNode("img", {
            src: $props.star.avatar_url,
            alt: "",
            class: "rounded-full h-32 w-32 my-4 mx-auto"
          }, null, 8, ["src"]),
          __vite_ssr_import_1__.createVNode("h3", { class: "text-xl text-gray-700 dark:text-gray-300 m-0" }, __vite_ssr_import_1__.toDisplayString($props.star.name), 1),
          __vite_ssr_import_1__.createVNode("p", { class: "text-gray-500 line-clamp-3 text-sm overflow-hidden" }, __vite_ssr_import_1__.toDisplayString($props.star.introduction || $props.star.bio || ""), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="flex justify-center mt-8"><div class="text-gray-600 flex space-x-1"><a${__vite_ssr_import_2__.ssrRenderAttr("href", `https://twitter.com/${$props.star.twitter_id}`)} class="hover:bg-gray-300 hover:text-gray-700 hover:bg-gray-800 text-gray-400 dark:text-gray-600 hover:dark:text-gray-300 rounded-full p-2 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" class="icon h-6 w-6" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z"></path></svg></a><a${__vite_ssr_import_2__.ssrRenderAttr("href", $props.star.html_url)} class="hover:bg-gray-300 hover:text-gray-700 dark:hover:bg-gray-800 text-gray-400 dark:text-gray-600 hover:dark:text-gray-300 rounded-full p-2 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" class="icon h-6 w-6" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg></a></div></div></div>`);
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/StarCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_4__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/Users/overtrue/www/laravel.xyz/components/StarCard.vue"]]);
;
}


// --------------------
// Request: /pages/tips/:id.vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/routes.mjs ($id_f1f16d9d)
// Dependencies: 
// - /components/Card.vue ($id_243aaff2)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_b2d27d81 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/Card.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


const _sfc_main = {
  async setup(__props, { expose }) {
  expose();

let __temp, __restore

const $supabase = useSupabaseClient()
const $markdown = __vite_ssr_import_2__.useNuxtApp().$markdown
const $dayjs = __vite_ssr_import_2__.useNuxtApp().$dayjs
const $route = __vite_ssr_import_2__.useRoute()

const { pending, data: tip } = (
  ([__temp,__restore] = __vite_ssr_import_4__.withAsyncContext(() => $supabase.from('tips').select().eq('id', $route.params.id).single())),
  __temp = await __temp,
  __restore(),
  __temp
)

const markdownContents = __vite_ssr_import_3__.computed(() => {
  return $markdown.render(tip.body)
})
const createdAt = __vite_ssr_import_3__.computed(() => {
  return $dayjs(tip.created_at).format('YYYY-MM-DD')
})

const __returned__ = { $supabase, $markdown, $dayjs, $route, pending, tip, markdownContents, createdAt }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_card = __vite_ssr_import_0__.default
  const _component_NuxtLink = __vite_ssr_import_1__.default

  _push(`<div${__vite_ssr_import_6__.ssrRenderAttrs(__vite_ssr_import_5__.mergeProps({ class: "flex space-x-4 mt-8" }, _attrs))}>`)
  _push(__vite_ssr_import_6__.ssrRenderComponent(_component_card, { class: "rounded-lg shadow p-6 flex-1" }, {
    default: __vite_ssr_import_5__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<h1 class="font-semibold text-2xl line-clamp-2 text-gray-700 dark:text-gray-300"${
          _scopeId
        }>${
          __vite_ssr_import_6__.ssrInterpolate($setup.tip.title)
        }</h1><div class="my-6 flex items-center space-x-2"${
          _scopeId
        }><div class="w-8 h-8 overflow-hidden border-gray-400 rounded-full"${
          _scopeId
        }><img src="https://avatars.githubusercontent.com/u/463230?v=4" class="object-cover w-full h-full" alt="avatar"${
          _scopeId
        }></div><div class="dark:text-gray-300"${
          _scopeId
        }>Taylor Otwell</div><span class="text-gray-500"${
          _scopeId
        }>${
          __vite_ssr_import_6__.ssrInterpolate($setup.createdAt)
        }</span></div><article class="text-gray-200 line-clamp-5 overflow-hidden h-52 mt-6"${
          _scopeId
        }>${
          $setup.markdownContents
        }</article>`)
      } else {
        return [
          __vite_ssr_import_5__.createVNode("h1", { class: "font-semibold text-2xl line-clamp-2 text-gray-700 dark:text-gray-300" }, __vite_ssr_import_5__.toDisplayString($setup.tip.title), 1 /* TEXT */),
          __vite_ssr_import_5__.createVNode("div", { class: "my-6 flex items-center space-x-2" }, [
            __vite_ssr_import_5__.createVNode("div", { class: "w-8 h-8 overflow-hidden border-gray-400 rounded-full" }, [
              __vite_ssr_import_5__.createVNode("img", {
                src: "https://avatars.githubusercontent.com/u/463230?v=4",
                class: "object-cover w-full h-full",
                alt: "avatar"
              })
            ]),
            __vite_ssr_import_5__.createVNode("div", { class: "dark:text-gray-300" }, "Taylor Otwell"),
            __vite_ssr_import_5__.createVNode("span", { class: "text-gray-500" }, __vite_ssr_import_5__.toDisplayString($setup.createdAt), 1 /* TEXT */)
          ]),
          __vite_ssr_import_5__.createVNode("article", {
            class: "text-gray-200 line-clamp-5 overflow-hidden h-52 mt-6",
            innerHTML: $setup.markdownContents
          }, null, 8 /* PROPS */, ["innerHTML"])
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(__vite_ssr_import_6__.ssrRenderComponent(_component_card, { class: "hidden md:block md:w-64 xl:w-80 rounded-lg shadow p-6" }, {
    default: __vite_ssr_import_5__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(__vite_ssr_import_6__.ssrRenderComponent(_component_NuxtLink, {
          class: "block text-center h-52 cursor-pointer",
          to: `/user/123`
        }, {
          default: __vite_ssr_import_5__.withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`<img src="https://avatars.githubusercontent.com/u/463230?v=4" alt="" class="rounded-full h-32 w-32 my-4 mx-auto"${
                _scopeId
              }><h3 class="text-xl text-gray-700 dark:text-gray-300 m-0"${
                _scopeId
              }>Taylor Otwell</h3><p class="text-gray-500 line-clamp-3 text-sm overflow-hidden"${
                _scopeId
              }>The creator of Laravel.</p>`)
            } else {
              return [
                __vite_ssr_import_5__.createVNode("img", {
                  src: "https://avatars.githubusercontent.com/u/463230?v=4",
                  alt: "",
                  class: "rounded-full h-32 w-32 my-4 mx-auto"
                }),
                __vite_ssr_import_5__.createVNode("h3", { class: "text-xl text-gray-700 dark:text-gray-300 m-0" }, "Taylor Otwell"),
                __vite_ssr_import_5__.createVNode("p", { class: "text-gray-500 line-clamp-3 text-sm overflow-hidden" }, "The creator of Laravel.")
              ]
            }
          }),
          _: 1 /* STABLE */
        }, _parent, _scopeId))
      } else {
        return [
          __vite_ssr_import_5__.createVNode(_component_NuxtLink, {
            class: "block text-center h-52 cursor-pointer",
            to: `/user/123`
          }, {
            default: __vite_ssr_import_5__.withCtx(() => [
              __vite_ssr_import_5__.createVNode("img", {
                src: "https://avatars.githubusercontent.com/u/463230?v=4",
                alt: "",
                class: "rounded-full h-32 w-32 my-4 mx-auto"
              }),
              __vite_ssr_import_5__.createVNode("h3", { class: "text-xl text-gray-700 dark:text-gray-300 m-0" }, "Taylor Otwell"),
              __vite_ssr_import_5__.createVNode("p", { class: "text-gray-500 line-clamp-3 text-sm overflow-hidden" }, "The creator of Laravel.")
            ]),
            _: 1 /* STABLE */
          })
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div>`)
}


const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_7__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/tips/:id.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_8__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_8__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/overtrue/www/laravel.xyz/pages/tips/:id.vue"]])
const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /pages/tips/index.vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/routes.mjs ($id_f1f16d9d)
// Dependencies: 
// - /components/TheTags.vue ($id_a54c4874)
// - /components/TipCard.vue ($id_f4d8b7fe)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_7b998549 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/TheTags.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/TipCard.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


const _sfc_main = {
  async setup(__props, { expose }) {
  expose();

let __temp, __restore

const supabase = useSupabaseClient()

const { data: tips } = (
  ([__temp,__restore] = __vite_ssr_import_2__.withAsyncContext(() => supabase.from('tips').select())),
  __temp = await __temp,
  __restore(),
  __temp
)
const { data: tags } = (
  ([__temp,__restore] = __vite_ssr_import_2__.withAsyncContext(() => supabase.from('tags').select())),
  __temp = await __temp,
  __restore(),
  __temp
)

const __returned__ = { supabase, tips, tags }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_the_tags = __vite_ssr_import_0__.default
  const _component_tip_card = __vite_ssr_import_1__.default

  _push(`<div${__vite_ssr_import_4__.ssrRenderAttrs(__vite_ssr_import_3__.mergeProps({ class: "mt-8 space-y-6" }, _attrs))}><header><h1 class="text-3xl mb-0 text-gray-700 dark:text-gray-300 leading-relaxed">Tips</h1><p class="text-gray-600 my-0 dark:text-gray-500">Awesome tips for Laravel.</p></header><div class="flex flex-wrap -mx-2">`)
  _push(__vite_ssr_import_4__.ssrRenderComponent(_component_the_tags, {
    tags: $setup.tags,
    href: "/tips?tag="
  }, null, _parent))
  _push(`</div><div class="w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-auto"><!--[-->`)
  __vite_ssr_import_4__.ssrRenderList($setup.tips, (tip) => {
    _push(__vite_ssr_import_4__.ssrRenderComponent(_component_tip_card, {
      tip: tip,
      key: tip.id
    }, null, _parent))
  })
  _push(`<!--]--></div></div>`)
}


const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/tips/index.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/overtrue/www/laravel.xyz/pages/tips/index.vue"]])
const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /components/TheTags.vue
// Parents: 
// - /pages/tips/index.vue?macro=true ($id_7b998549)
// - /pages/tips/index.vue ($id_2a5fe106)
// Dependencies: 
// - /components/TheTag.vue ($id_83290242)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_a54c4874 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/TheTag.vue");

const _sfc_main = {
  props: {
    href: {
      type: String,
      required: true
    },
    tags: {
      type: Array,
      required: true
    }
  }
};
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_the_tag = __vite_ssr_import_0__.default;
  _push(`<div${__vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "flex flex-wrap" }, _attrs))}><!--[-->`);
  __vite_ssr_import_2__.ssrRenderList($props.tags, (tag) => {
    _push(__vite_ssr_import_2__.ssrRenderComponent(_component_the_tag, {
      href: $props.href + tag.id,
      key: tag.id,
      name: tag.name,
      class: "m-2"
    }, null, _parent));
  });
  _push(`<!--]--></div>`);
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheTags.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_4__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/Users/overtrue/www/laravel.xyz/components/TheTags.vue"]]);
;
}


// --------------------
// Request: /components/TheTag.vue
// Parents: 
// - /components/TheTags.vue ($id_a54c4874)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_83290242 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {
  props: {
    href: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  }
};
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<a${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({
    href: $props.href,
    class: "py-2 px-5 bg-white shadow-sm hover:bg-gray-100 rounded"
  }, _attrs))}>${__vite_ssr_import_1__.ssrInterpolate($props.name)}</a>`);
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheTag.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_3__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/Users/overtrue/www/laravel.xyz/components/TheTag.vue"]]);
;
}


// --------------------
// Request: /components/TipCard.vue
// Parents: 
// - /pages/tips/index.vue?macro=true ($id_7b998549)
// - /pages/tips/index.vue ($id_2a5fe106)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_f4d8b7fe = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {
  props: {
    tip: {
      type: Object,
      required: true
    }
  },
  computed: {
    markdownContents() {
      return this.tip.body;
    },
    createdAt() {
      return this.$dayjs(this.tip.created_at).format("YYYY-MM-DD");
    }
  }
};
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({ class: "rounded-lg shadow bg-white dark:bg-gray-800 p-6 hover:shadow-lg dark:hover:bg-black relative" }, _attrs))}><a class="h-full cursor-pointer flex flex-col justify-between space-y-2"${__vite_ssr_import_1__.ssrRenderAttr("href", `/tips/${$props.tip.id}`)}><h2 class="text-2xl line-clamp-2 h-16 text-gray-700 dark:text-gray-300">${__vite_ssr_import_1__.ssrInterpolate($props.tip.title)}</h2><article class="flex-1 text-gray-400 line-clamp-3 overflow-hidden">${$options.markdownContents}</article><div class="flex items-center justify-between align-bottom"><div class="flex items-center space-x-2"><div class="w-8 h-8 overflow-hidden border-gray-400 rounded-full"><img src="https://avatars.githubusercontent.com/u/463230?v=4" class="object-cover w-full h-full" alt="avatar"></div><div class="dark:text-gray-300">Taylor Otwell</div></div><div><span class="text-gray-500">${__vite_ssr_import_1__.ssrInterpolate($options.createdAt)}</span></div></div></a></div>`);
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TipCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_3__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/Users/overtrue/www/laravel.xyz/components/TipCard.vue"]]);
;
}


// --------------------
// Request: /pages/about.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/routes.mjs ($id_f1f16d9d)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_a93ccd0b = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({ class: "flex flex-col justify-center w-full h-screen max-w-3xl mx-auto space-y-2" }, _attrs))}><div><h1 class="text-2xl">About</h1><p class="text-lg">I&#39;m learning about Nuxt 3! Here&#39;s what I&#39;ve achieved so far:</p></div><ul class="mx-8 list-disc"><li>Created a new Nuxt 3 project</li><li>Added Tailwind</li><li>Created a new page</li></ul></div>`)
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/about.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/overtrue/www/laravel.xyz/pages/about.vue"]]);
}


// --------------------
// Request: /pages/index.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/routes.mjs ($id_f1f16d9d)
// Dependencies: 
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_cca58e97 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<h1${__vite_ssr_import_0__.ssrRenderAttrs(_attrs)}>it works!</h1>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/index.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/overtrue/www/laravel.xyz/pages/index.vue"]]);
}


// --------------------
// Request: /pages/jobs.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/routes.mjs ($id_f1f16d9d)
// Dependencies: 
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_1eaf0ed3 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<h1${__vite_ssr_import_0__.ssrRenderAttrs(_attrs)}>it works!</h1>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/jobs.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/overtrue/www/laravel.xyz/pages/jobs.vue"]]);
}


// --------------------
// Request: /pages/packages.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/routes.mjs ($id_f1f16d9d)
// Dependencies: 
// - /components/TheLinkButton.vue ($id_67823286)
// - /components/Card.vue ($id_243aaff2)
// - /components/PackageCard.vue ($id_bc4dc7c7)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/@nuxt/content/dist/runtime/composables/query.mjs ($id_47535763)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_d713bde7 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/TheLinkButton.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/Card.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/PackageCard.vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/@nuxt/content/dist/runtime/composables/query.mjs");
const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


const _sfc_main = {
  async setup(__props, { expose }) {
  expose();

let __temp, __restore

const { data: repos } = (
  ([__temp,__restore] = __vite_ssr_import_5__.withAsyncContext(() => __vite_ssr_import_3__.useAsyncData('packages', () => __vite_ssr_import_4__.queryContent('/compiled/packages').findOne()))),
  __temp = await __temp,
  __restore(),
  __temp
)
const { data: topics } = (
  ([__temp,__restore] = __vite_ssr_import_5__.withAsyncContext(() => __vite_ssr_import_3__.useAsyncData('topics', () => __vite_ssr_import_4__.queryContent('/compiled/topics').findOne()))),
  __temp = await __temp,
  __restore(),
  __temp
)

const __returned__ = { repos, topics }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_the_link_button = __vite_ssr_import_0__.default
  const _component_card = __vite_ssr_import_1__.default
  const _component_package_card = __vite_ssr_import_2__.default

  _push(`<div${__vite_ssr_import_7__.ssrRenderAttrs(__vite_ssr_import_6__.mergeProps({ class: "mt-8 space-y-6" }, _attrs))}><header class="space-y-4"><div class="flex justify-between items-center"><h1 class="text-3xl mb-0 text-gray-700 dark:text-gray-300">扩展包</h1>`)
  _push(__vite_ssr_import_7__.ssrRenderComponent(_component_the_link_button, {
    href: "https://github.com/overtrue/laravel.xyz/edit/master/content/packages.json",
    class: "flex items-center space-x-2"
  }, {
    default: __vite_ssr_import_6__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"${
          _scopeId
        }><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6"${
          _scopeId
        }></path></svg><span${
          _scopeId
        }>提议更多扩展包</span>`)
      } else {
        return [
          (__vite_ssr_import_6__.openBlock(), __vite_ssr_import_6__.createBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: "h-4 w-4",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            "stroke-width": "2"
          }, [
            __vite_ssr_import_6__.createVNode("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              d: "M12 6v6m0 0v6m0-6h6m-6 0H6"
            })
          ])),
          __vite_ssr_import_6__.createVNode("span", null, "提议更多扩展包")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div><p class="text-gray-500 dark:text-gray-500">一些开源的让你更方便创建Laravel应用的库或者组件。</p></header><div class="flex gap-6">`)
  _push(__vite_ssr_import_7__.ssrRenderComponent(_component_card, { class: "rounded-lg p-6 shadow w-64" }, {
    default: __vite_ssr_import_6__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<h2 class="text-xl font-semibold text-gray-700"${
          _scopeId
        }>标签</h2><div class="mt-6"${
          _scopeId
        }><!--[-->`)
        __vite_ssr_import_7__.ssrRenderList($setup.topics.body, (topic) => {
          _push(`<label class="flex items-center space-x-2 w-full"${
            _scopeId
          }><input type="checkbox" class="form-checkbox rounded"${
            _scopeId
          }><div class="flex-1 truncate min-w-0 whitespace-nowrap"${
            _scopeId
          }>${
            __vite_ssr_import_7__.ssrInterpolate(topic.name)
          }</div><span class="justify-self-end text-gray-400 text-sm rounded bg-gray-200 px-2"${
            _scopeId
          }>${
            __vite_ssr_import_7__.ssrInterpolate(topic.packages_count)
          }</span></label>`)
        })
        _push(`<!--]--></div>`)
      } else {
        return [
          __vite_ssr_import_6__.createVNode("h2", { class: "text-xl font-semibold text-gray-700" }, "标签"),
          __vite_ssr_import_6__.createVNode("div", { class: "mt-6" }, [
            (__vite_ssr_import_6__.openBlock(true), __vite_ssr_import_6__.createBlock(__vite_ssr_import_6__.Fragment, null, __vite_ssr_import_6__.renderList($setup.topics.body, (topic) => {
              return (__vite_ssr_import_6__.openBlock(), __vite_ssr_import_6__.createBlock("label", {
                class: "flex items-center space-x-2 w-full",
                key: topic
              }, [
                __vite_ssr_import_6__.createVNode("input", {
                  type: "checkbox",
                  class: "form-checkbox rounded"
                }),
                __vite_ssr_import_6__.createVNode("div", { class: "flex-1 truncate min-w-0 whitespace-nowrap" }, __vite_ssr_import_6__.toDisplayString(topic.name), 1 /* TEXT */),
                __vite_ssr_import_6__.createVNode("span", { class: "justify-self-end text-gray-400 text-sm rounded bg-gray-200 px-2" }, __vite_ssr_import_6__.toDisplayString(topic.packages_count), 1 /* TEXT */)
              ]))
            }), 128 /* KEYED_FRAGMENT */))
          ])
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`<div class="gap-6 flex-1 grid grid-cols-1 xl:grid-cols-2"><!--[-->`)
  __vite_ssr_import_7__.ssrRenderList($setup.repos.body, (repo) => {
    _push(__vite_ssr_import_7__.ssrRenderComponent(_component_package_card, {
      repo: repo,
      key: repo.name
    }, null, _parent))
  })
  _push(`<!--]--></div></div></div>`)
}


const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_8__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/packages.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_9__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_9__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/overtrue/www/laravel.xyz/pages/packages.vue"]]);
}


// --------------------
// Request: /pages/stars.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/routes.mjs ($id_f1f16d9d)
// Dependencies: 
// - /components/TheLinkButton.vue ($id_67823286)
// - /components/StarCard.vue ($id_ce2fb5c2)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/@nuxt/content/dist/runtime/composables/query.mjs ($id_47535763)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_765c962d = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/TheLinkButton.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/StarCard.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/@nuxt/content/dist/runtime/composables/query.mjs");
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


const _sfc_main = {
  async setup(__props, { expose }) {
  expose();

let __temp, __restore

const { data: stars } = (
  ([__temp,__restore] = __vite_ssr_import_4__.withAsyncContext(() => __vite_ssr_import_2__.useAsyncData('stars', () => __vite_ssr_import_3__.queryContent('/compiled/stars').findOne()))),
  __temp = await __temp,
  __restore(),
  __temp
)

const __returned__ = { stars }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_the_link_button = __vite_ssr_import_0__.default
  const _component_star_card = __vite_ssr_import_1__.default

  _push(`<div${__vite_ssr_import_6__.ssrRenderAttrs(__vite_ssr_import_5__.mergeProps({ class: "mt-8 space-y-6" }, _attrs))}><header class="space-y-4"><div class="flex justify-between items-center"><h1 class="text-3xl mb-0 text-gray-700 dark:text-gray-300">人物</h1>`)
  _push(__vite_ssr_import_6__.ssrRenderComponent(_component_the_link_button, {
    href: "https://github.com/overtrue/laravel.xyz/edit/master/content/packages.json",
    class: "flex items-center space-x-2"
  }, {
    default: __vite_ssr_import_5__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"${
          _scopeId
        }><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6"${
          _scopeId
        }></path></svg><span${
          _scopeId
        }>提议更多人选</span>`)
      } else {
        return [
          (__vite_ssr_import_5__.openBlock(), __vite_ssr_import_5__.createBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: "h-4 w-4",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            "stroke-width": "2"
          }, [
            __vite_ssr_import_5__.createVNode("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              d: "M12 6v6m0 0v6m0-6h6m-6 0H6"
            })
          ])),
          __vite_ssr_import_5__.createVNode("span", null, "提议更多人选")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div><div class="text-gray-500 dark:text-gray-500">因为这些大佬的无私奉献，才有了 Laravel 的今天。</div></header><div class="flex flex-wrap gap-6 w-full"><!--[-->`)
  __vite_ssr_import_6__.ssrRenderList($setup.stars.body, (star) => {
    _push(__vite_ssr_import_6__.ssrRenderComponent(_component_star_card, {
      star: star,
      key: star.name
    }, null, _parent))
  })
  _push(`<!--]--></div></div>`)
}


const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_7__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/stars.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_8__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_8__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/overtrue/www/laravel.xyz/pages/stars.vue"]]);
}


// --------------------
// Request: /pages/tips/:id.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/routes.mjs ($id_f1f16d9d)
// Dependencies: 
// - /components/Card.vue ($id_243aaff2)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_d4dd6cfe = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/Card.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


const _sfc_main = {
  async setup(__props, { expose }) {
  expose();

let __temp, __restore

const $supabase = useSupabaseClient()
const $markdown = __vite_ssr_import_2__.useNuxtApp().$markdown
const $dayjs = __vite_ssr_import_2__.useNuxtApp().$dayjs
const $route = __vite_ssr_import_2__.useRoute()

const { pending, data: tip } = (
  ([__temp,__restore] = __vite_ssr_import_4__.withAsyncContext(() => $supabase.from('tips').select().eq('id', $route.params.id).single())),
  __temp = await __temp,
  __restore(),
  __temp
)

const markdownContents = __vite_ssr_import_3__.computed(() => {
  return $markdown.render(tip.body)
})
const createdAt = __vite_ssr_import_3__.computed(() => {
  return $dayjs(tip.created_at).format('YYYY-MM-DD')
})

const __returned__ = { $supabase, $markdown, $dayjs, $route, pending, tip, markdownContents, createdAt }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_card = __vite_ssr_import_0__.default
  const _component_NuxtLink = __vite_ssr_import_1__.default

  _push(`<div${__vite_ssr_import_6__.ssrRenderAttrs(__vite_ssr_import_5__.mergeProps({ class: "flex space-x-4 mt-8" }, _attrs))}>`)
  _push(__vite_ssr_import_6__.ssrRenderComponent(_component_card, { class: "rounded-lg shadow p-6 flex-1" }, {
    default: __vite_ssr_import_5__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<h1 class="font-semibold text-2xl line-clamp-2 text-gray-700 dark:text-gray-300"${
          _scopeId
        }>${
          __vite_ssr_import_6__.ssrInterpolate($setup.tip.title)
        }</h1><div class="my-6 flex items-center space-x-2"${
          _scopeId
        }><div class="w-8 h-8 overflow-hidden border-gray-400 rounded-full"${
          _scopeId
        }><img src="https://avatars.githubusercontent.com/u/463230?v=4" class="object-cover w-full h-full" alt="avatar"${
          _scopeId
        }></div><div class="dark:text-gray-300"${
          _scopeId
        }>Taylor Otwell</div><span class="text-gray-500"${
          _scopeId
        }>${
          __vite_ssr_import_6__.ssrInterpolate($setup.createdAt)
        }</span></div><article class="text-gray-200 line-clamp-5 overflow-hidden h-52 mt-6"${
          _scopeId
        }>${
          $setup.markdownContents
        }</article>`)
      } else {
        return [
          __vite_ssr_import_5__.createVNode("h1", { class: "font-semibold text-2xl line-clamp-2 text-gray-700 dark:text-gray-300" }, __vite_ssr_import_5__.toDisplayString($setup.tip.title), 1 /* TEXT */),
          __vite_ssr_import_5__.createVNode("div", { class: "my-6 flex items-center space-x-2" }, [
            __vite_ssr_import_5__.createVNode("div", { class: "w-8 h-8 overflow-hidden border-gray-400 rounded-full" }, [
              __vite_ssr_import_5__.createVNode("img", {
                src: "https://avatars.githubusercontent.com/u/463230?v=4",
                class: "object-cover w-full h-full",
                alt: "avatar"
              })
            ]),
            __vite_ssr_import_5__.createVNode("div", { class: "dark:text-gray-300" }, "Taylor Otwell"),
            __vite_ssr_import_5__.createVNode("span", { class: "text-gray-500" }, __vite_ssr_import_5__.toDisplayString($setup.createdAt), 1 /* TEXT */)
          ]),
          __vite_ssr_import_5__.createVNode("article", {
            class: "text-gray-200 line-clamp-5 overflow-hidden h-52 mt-6",
            innerHTML: $setup.markdownContents
          }, null, 8 /* PROPS */, ["innerHTML"])
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(__vite_ssr_import_6__.ssrRenderComponent(_component_card, { class: "hidden md:block md:w-64 xl:w-80 rounded-lg shadow p-6" }, {
    default: __vite_ssr_import_5__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(__vite_ssr_import_6__.ssrRenderComponent(_component_NuxtLink, {
          class: "block text-center h-52 cursor-pointer",
          to: `/user/123`
        }, {
          default: __vite_ssr_import_5__.withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`<img src="https://avatars.githubusercontent.com/u/463230?v=4" alt="" class="rounded-full h-32 w-32 my-4 mx-auto"${
                _scopeId
              }><h3 class="text-xl text-gray-700 dark:text-gray-300 m-0"${
                _scopeId
              }>Taylor Otwell</h3><p class="text-gray-500 line-clamp-3 text-sm overflow-hidden"${
                _scopeId
              }>The creator of Laravel.</p>`)
            } else {
              return [
                __vite_ssr_import_5__.createVNode("img", {
                  src: "https://avatars.githubusercontent.com/u/463230?v=4",
                  alt: "",
                  class: "rounded-full h-32 w-32 my-4 mx-auto"
                }),
                __vite_ssr_import_5__.createVNode("h3", { class: "text-xl text-gray-700 dark:text-gray-300 m-0" }, "Taylor Otwell"),
                __vite_ssr_import_5__.createVNode("p", { class: "text-gray-500 line-clamp-3 text-sm overflow-hidden" }, "The creator of Laravel.")
              ]
            }
          }),
          _: 1 /* STABLE */
        }, _parent, _scopeId))
      } else {
        return [
          __vite_ssr_import_5__.createVNode(_component_NuxtLink, {
            class: "block text-center h-52 cursor-pointer",
            to: `/user/123`
          }, {
            default: __vite_ssr_import_5__.withCtx(() => [
              __vite_ssr_import_5__.createVNode("img", {
                src: "https://avatars.githubusercontent.com/u/463230?v=4",
                alt: "",
                class: "rounded-full h-32 w-32 my-4 mx-auto"
              }),
              __vite_ssr_import_5__.createVNode("h3", { class: "text-xl text-gray-700 dark:text-gray-300 m-0" }, "Taylor Otwell"),
              __vite_ssr_import_5__.createVNode("p", { class: "text-gray-500 line-clamp-3 text-sm overflow-hidden" }, "The creator of Laravel.")
            ]),
            _: 1 /* STABLE */
          })
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div>`)
}


const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_7__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/tips/:id.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_8__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_8__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/overtrue/www/laravel.xyz/pages/tips/:id.vue"]]);
}


// --------------------
// Request: /pages/tips/index.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/routes.mjs ($id_f1f16d9d)
// Dependencies: 
// - /components/TheTags.vue ($id_a54c4874)
// - /components/TipCard.vue ($id_f4d8b7fe)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_2a5fe106 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/TheTags.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/TipCard.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


const _sfc_main = {
  async setup(__props, { expose }) {
  expose();

let __temp, __restore

const supabase = useSupabaseClient()

const { data: tips } = (
  ([__temp,__restore] = __vite_ssr_import_2__.withAsyncContext(() => supabase.from('tips').select())),
  __temp = await __temp,
  __restore(),
  __temp
)
const { data: tags } = (
  ([__temp,__restore] = __vite_ssr_import_2__.withAsyncContext(() => supabase.from('tags').select())),
  __temp = await __temp,
  __restore(),
  __temp
)

const __returned__ = { supabase, tips, tags }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_the_tags = __vite_ssr_import_0__.default
  const _component_tip_card = __vite_ssr_import_1__.default

  _push(`<div${__vite_ssr_import_4__.ssrRenderAttrs(__vite_ssr_import_3__.mergeProps({ class: "mt-8 space-y-6" }, _attrs))}><header><h1 class="text-3xl mb-0 text-gray-700 dark:text-gray-300 leading-relaxed">Tips</h1><p class="text-gray-600 my-0 dark:text-gray-500">Awesome tips for Laravel.</p></header><div class="flex flex-wrap -mx-2">`)
  _push(__vite_ssr_import_4__.ssrRenderComponent(_component_the_tags, {
    tags: $setup.tags,
    href: "/tips?tag="
  }, null, _parent))
  _push(`</div><div class="w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-auto"><!--[-->`)
  __vite_ssr_import_4__.ssrRenderList($setup.tips, (tip) => {
    _push(__vite_ssr_import_4__.ssrRenderComponent(_component_tip_card, {
      tip: tip,
      key: tip.id
    }, null, _parent))
  })
  _push(`<!--]--></div></div>`)
}


const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/tips/index.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/overtrue/www/laravel.xyz/pages/tips/index.vue"]]);
}


// --------------------
// Request: /@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/router.options.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// Dependencies: 

// --------------------
const $id_79723d14 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const configRouterOptions = {
  linkActiveClass: "text-gray-800 dark:text-gray-200",
  linkExactActiveClass: "text-gray-800 dark:text-gray-200"
}
__vite_ssr_exports__.default = {
...configRouterOptions,
};
}


// --------------------
// Request: /@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/middleware.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// Dependencies: 

// --------------------
const $id_26232596 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const globalMiddleware = []
Object.defineProperty(__vite_ssr_exports__, "globalMiddleware", { enumerable: true, configurable: true, get(){ return globalMiddleware }});
const namedMiddleware = {}
Object.defineProperty(__vite_ssr_exports__, "namedMiddleware", { enumerable: true, configurable: true, get(){ return namedMiddleware }});;
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/plugin.mjs
// Parents: 
// - /@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/plugins/server.mjs ($id_cd2348f9)
// Dependencies: 
// - /@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/imports.mjs ($id_3d849a97)
// - /node_modules/@nuxt/content/dist/runtime/composables/web-socket.mjs ($id_575fe152)
// --------------------
const $id_a4132d07 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/imports.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineNuxtPlugin(() => {
  const publicConfig = __vite_ssr_import_0__.useRuntimeConfig().public;
  if (false && publicConfig.content.wsUrl) {
    __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/composables/web-socket.mjs').then(({ useContentWebSocket }) => useContentWebSocket());
  }
});
;
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/composables/web-socket.mjs
// Parents: 
// - /node_modules/@nuxt/content/dist/runtime/plugin.mjs ($id_a4132d07)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/imports.mjs ($id_3d849a97)
// --------------------
const $id_575fe152 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/imports.mjs");

const logger = {
  log: (...args) => console.log("[Content]", ...args),
  warn: (...args) => console.warn("[Content]", ...args)
};
let ws;
function useContentWebSocket() {
  if (!window.WebSocket) {
    logger.warn("Could not enable hot reload, your browser does not support WebSocket.");
    return;
  }
  const onMessage = (message) => {
    try {
      const data = JSON.parse(message.data);
      if (!data) {
        return;
      }
      __vite_ssr_import_1__.refreshNuxtData();
    } catch (err) {
    }
  };
  const onOpen = () => logger.log("WS connected!");
  const onError = (e) => {
    switch (e.code) {
      case "ECONNREFUSED":
        connect(true);
        break;
      default:
        logger.warn("WS Error:", e);
        break;
    }
  };
  const onClose = (e) => {
    if (e.code === 1e3 || e.code === 1005) {
      logger.log("WS closed!");
    } else {
      connect(true);
    }
  };
  const connect = (retry = false) => {
    if (retry) {
      logger.log("WS reconnecting..");
      setTimeout(connect, 1e3);
      return;
    }
    if (ws) {
      try {
        ws.close();
      } catch (err) {
      }
      ws = void 0;
    }
    const wsURL = `${__vite_ssr_import_0__.useRuntimeConfig().public.content.wsUrl}ws`;
    logger.log(`WS connect to ${wsURL}`);
    ws = new WebSocket(wsURL);
    ws.onopen = onOpen;
    ws.onmessage = onMessage;
    ws.onerror = onError;
    ws.onclose = onClose;
  };
  connect();
  return {
    connect
  };
}
Object.defineProperty(__vite_ssr_exports__, "useContentWebSocket", { enumerable: true, configurable: true, get(){ return useContentWebSocket }});
;
}


// --------------------
// Request: /plugins/dayjs.js
// Parents: 
// - /@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/plugins/server.mjs ($id_cd2348f9)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/dayjs/dayjs.min.js ($id_0bbcdaab)
// - /node_modules/dayjs/plugin/relativeTime.js ($id_574d0a3a)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_e4088396 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/dayjs/dayjs.min.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/dayjs/plugin/relativeTime.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");


__vite_ssr_exports__.default = __vite_ssr_import_3__.defineNuxtPlugin((nuxtApp) => {
    __vite_ssr_import_1__.default.extend(__vite_ssr_import_2__.default)
    nuxtApp.provide('dayjs', __vite_ssr_import_1__.default)
})
;
}


// --------------------
// Request: /node_modules/dayjs/dayjs.min.js
// Parents: 
// - /plugins/dayjs.js ($id_e4088396)
// Dependencies: 

// --------------------
const $id_0bbcdaab = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/overtrue/www/laravel.xyz/node_modules/dayjs/dayjs.min.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/overtrue/www/laravel.xyz/node_modules/dayjs/dayjs.min.js\".")
  })


// --------------------
// Request: /node_modules/dayjs/plugin/relativeTime.js
// Parents: 
// - /plugins/dayjs.js ($id_e4088396)
// Dependencies: 

// --------------------
const $id_574d0a3a = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/overtrue/www/laravel.xyz/node_modules/dayjs/plugin/relativeTime.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/overtrue/www/laravel.xyz/node_modules/dayjs/plugin/relativeTime.js\".")
  })


// --------------------
// Request: /plugins/emoji.js
// Parents: 
// - /@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/plugins/server.mjs ($id_cd2348f9)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/emoji-js/lib/emoji.js ($id_4ba0fe93)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_5ce230b0 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/emoji-js/lib/emoji.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");


__vite_ssr_exports__.default = __vite_ssr_import_2__.defineNuxtPlugin((nuxtApp) => {
    nuxtApp.provide('emoji', new __vite_ssr_import_1__.default())
})
;
}


// --------------------
// Request: /node_modules/emoji-js/lib/emoji.js
// Parents: 
// - /plugins/emoji.js ($id_5ce230b0)
// Dependencies: 

// --------------------
const $id_4ba0fe93 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/overtrue/www/laravel.xyz/node_modules/emoji-js/lib/emoji.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/overtrue/www/laravel.xyz/node_modules/emoji-js/lib/emoji.js\".")
  })


// --------------------
// Request: /plugins/markdown-it.js
// Parents: 
// - /@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/plugins/server.mjs ($id_cd2348f9)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/highlight.js/es/index.js ($id_250a78f8)
// - /node_modules/markdown-it/index.js ($id_59e52662)
// - /node_modules/markdown-it-sub/index.js ($id_b5d39429)
// - /node_modules/markdown-it-sup/index.js ($id_82c7613c)
// - /node_modules/markdown-it-footnote/index.js ($id_50303d40)
// - /node_modules/markdown-it-emoji/index.js ($id_a6f7af16)
// - /node_modules/markdown-it-deflist/index.js ($id_40a2bbce)
// - /node_modules/markdown-it-ins/index.js ($id_58ae3e3b)
// - /node_modules/markdown-it-container/index.js ($id_0133ff55)
// --------------------
const $id_254393a2 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");



const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/highlight.js/es/index.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/markdown-it/index.js");


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/markdown-it-sub/index.js");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/markdown-it-sup/index.js");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/markdown-it-footnote/index.js");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/markdown-it-emoji/index.js");

const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/markdown-it-deflist/index.js");

const __vite_ssr_import_9__ = await __vite_ssr_import__("/node_modules/markdown-it-ins/index.js");

const __vite_ssr_import_10__ = await __vite_ssr_import__("/node_modules/markdown-it-container/index.js");



const markdownit = new __vite_ssr_import_3__.default({
  html: true,
  xhtmlOut: false,
  breaks: false,
  langPrefix: 'language-',
  linkify: true,
  typographer: true,
  quotes: '“”‘’',
  highlight: function (str, lang) {
    if (lang && __vite_ssr_import_2__.default.getLanguage(lang)) {
      try {
        return '<pre class="hljs"><code>' +
          __vite_ssr_import_2__.default.highlight(str, { language: lang, ignoreIllegals: true }).value +
          '</code></pre>'
      } catch (error) { console.log(error) }
    }

    return '<pre class="hljs"><code>' + __vite_ssr_import_3__.default.utils.escapeHtml(str) + '</code></pre>'
  }
})
  .use(__vite_ssr_import_4__.default)
  .use(__vite_ssr_import_5__.default)
  .use(__vite_ssr_import_6__.default)
  .use(__vite_ssr_import_7__.default)
  .use(__vite_ssr_import_8__.default)
  .use(__vite_ssr_import_9__.default)
  .use(__vite_ssr_import_10__.default, 'codeblock', { marker: '@' })

markdownit.linkify.set({ fuzzyEmail: false })

__vite_ssr_exports__.default = __vite_ssr_import_1__.defineNuxtPlugin(nuxtApp => {
  nuxtApp.provide('markdown', markdownit)
});
}


// --------------------
// Request: /node_modules/highlight.js/es/index.js
// Parents: 
// - /plugins/markdown-it.js ($id_254393a2)
// Dependencies: 

// --------------------
const $id_250a78f8 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/overtrue/www/laravel.xyz/node_modules/highlight.js/es/index.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/overtrue/www/laravel.xyz/node_modules/highlight.js/es/index.js\".")
  })


// --------------------
// Request: /node_modules/markdown-it/index.js
// Parents: 
// - /plugins/markdown-it.js ($id_254393a2)
// Dependencies: 

// --------------------
const $id_59e52662 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/overtrue/www/laravel.xyz/node_modules/markdown-it/index.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/overtrue/www/laravel.xyz/node_modules/markdown-it/index.js\".")
  })


// --------------------
// Request: /node_modules/markdown-it-sub/index.js
// Parents: 
// - /plugins/markdown-it.js ($id_254393a2)
// Dependencies: 

// --------------------
const $id_b5d39429 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/overtrue/www/laravel.xyz/node_modules/markdown-it-sub/index.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/overtrue/www/laravel.xyz/node_modules/markdown-it-sub/index.js\".")
  })


// --------------------
// Request: /node_modules/markdown-it-sup/index.js
// Parents: 
// - /plugins/markdown-it.js ($id_254393a2)
// Dependencies: 

// --------------------
const $id_82c7613c = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/overtrue/www/laravel.xyz/node_modules/markdown-it-sup/index.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/overtrue/www/laravel.xyz/node_modules/markdown-it-sup/index.js\".")
  })


// --------------------
// Request: /node_modules/markdown-it-footnote/index.js
// Parents: 
// - /plugins/markdown-it.js ($id_254393a2)
// Dependencies: 

// --------------------
const $id_50303d40 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/overtrue/www/laravel.xyz/node_modules/markdown-it-footnote/index.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/overtrue/www/laravel.xyz/node_modules/markdown-it-footnote/index.js\".")
  })


// --------------------
// Request: /node_modules/markdown-it-emoji/index.js
// Parents: 
// - /plugins/markdown-it.js ($id_254393a2)
// Dependencies: 

// --------------------
const $id_a6f7af16 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/overtrue/www/laravel.xyz/node_modules/markdown-it-emoji/index.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/overtrue/www/laravel.xyz/node_modules/markdown-it-emoji/index.js\".")
  })


// --------------------
// Request: /node_modules/markdown-it-deflist/index.js
// Parents: 
// - /plugins/markdown-it.js ($id_254393a2)
// Dependencies: 

// --------------------
const $id_40a2bbce = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/overtrue/www/laravel.xyz/node_modules/markdown-it-deflist/index.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/overtrue/www/laravel.xyz/node_modules/markdown-it-deflist/index.js\".")
  })


// --------------------
// Request: /node_modules/markdown-it-ins/index.js
// Parents: 
// - /plugins/markdown-it.js ($id_254393a2)
// Dependencies: 

// --------------------
const $id_58ae3e3b = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/overtrue/www/laravel.xyz/node_modules/markdown-it-ins/index.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/overtrue/www/laravel.xyz/node_modules/markdown-it-ins/index.js\".")
  })


// --------------------
// Request: /node_modules/markdown-it-container/index.js
// Parents: 
// - /plugins/markdown-it.js ($id_254393a2)
// Dependencies: 

// --------------------
const $id_0133ff55 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/overtrue/www/laravel.xyz/node_modules/markdown-it-container/index.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/overtrue/www/laravel.xyz/node_modules/markdown-it-container/index.js\".")
  })


// --------------------
// Request: /@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/root-component.mjs
// Parents: 
// - /Users/overtrue/www/laravel.xyz/node_modules/nuxt/dist/app/entry ($id_24e0160c)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_e9bfada3)
// --------------------
const $id_6e69f58f = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-root.vue");

Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.default }});;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/nuxt-root.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/root-component.mjs ($id_6e69f58f)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/error-component.mjs ($id_328456ef)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_e9bfada3 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

// @ts-ignore
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/error-component.mjs");



const _sfc_main = {
  setup(__props, { expose }) {
  expose();

const nuxtApp = __vite_ssr_import_1__.useNuxtApp()
const onResolve = () => nuxtApp.callHook('app:suspense:resolve')

// vue:setup hook
const results = nuxtApp.hooks.callHookWith(hooks => hooks.map(hook => hook()), 'vue:setup')
if (true && results && results.some(i => i && 'then' in i)) {
  console.error('[nuxt] Error in `vue:setup`. Callbacks must be synchronous.')
}

// error handling
const error = __vite_ssr_import_1__.useError()
__vite_ssr_import_0__.onErrorCaptured((err, target, info) => {
  nuxtApp.hooks.callHook('vue:error', err, target, info).catch(hookError => console.error('[nuxt] Error in `vue:error` hook', hookError))
  if (true) {
    __vite_ssr_import_1__.callWithNuxt(nuxtApp, __vite_ssr_import_1__.throwError, [err])
  }
})

const __returned__ = { nuxtApp, onResolve, results, error, onErrorCaptured: __vite_ssr_import_0__.onErrorCaptured, callWithNuxt: __vite_ssr_import_1__.callWithNuxt, throwError: __vite_ssr_import_1__.throwError, useError: __vite_ssr_import_1__.useError, useNuxtApp: __vite_ssr_import_1__.useNuxtApp, ErrorComponent: __vite_ssr_import_2__.default }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_App = __vite_ssr_import_3__.resolveComponent("App")

  __vite_ssr_import_4__.ssrRenderSuspense(_push, {
    default: () => {
      if ($setup.error) {
        _push(__vite_ssr_import_4__.ssrRenderComponent($setup["ErrorComponent"], { error: $setup.error }, null, _parent))
      } else {
        _push(__vite_ssr_import_4__.ssrRenderComponent(_component_App, null, null, _parent))
      }
    },
    _: 1 /* STABLE */
  })
}


const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/nuxt/dist/app/components/nuxt-root.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/overtrue/www/laravel.xyz/node_modules/nuxt/dist/app/components/nuxt-root.vue"]]);
}


// --------------------
// Request: /@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/error-component.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_e9bfada3)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_8cc6d73f)
// --------------------
const $id_328456ef = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-error-page.vue");

Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.default }});;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/nuxt-error-page.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/error-component.mjs ($id_328456ef)
// Dependencies: 
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_b90d4d0f)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_14c8b574)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_bc2d74a1)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_8cc6d73f = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue");



const _sfc_main = {
  props: {
  error: Object
},
  setup(__props, { expose }) {
  expose();

const props = __props



const error = props.error

// TODO: extract to a separate utility
const stacktrace = (error.stack || '')
  .split('\n')
  .splice(1)
  .map((line) => {
    const text = line
      .replace('webpack:/', '')
      .replace('.vue', '.js') // TODO: Support sourcemap
      .trim()
    return {
      text,
      internal: (line.includes('node_modules') && !line.includes('.cache')) ||
          line.includes('internal') ||
          line.includes('new Promise')
    }
  }).map(i => `<span class="stack${i.internal ? ' internal' : ''}">${i.text}</span>`).join('\n')

// Error page props
const statusCode = String(error.statusCode || 500)
const is404 = statusCode === '404'

const statusMessage = error.statusMessage ?? (is404 ? 'Page Not Found' : 'Internal Server Error')
const description = error.message || error.toString()
const stack = true && !is404 ? error.description || `<pre>${stacktrace}</pre>` : undefined

const ErrorTemplate = is404 ? __vite_ssr_import_0__.default : true ? __vite_ssr_import_2__.default : __vite_ssr_import_1__.default

const __returned__ = { props, error, stacktrace, statusCode, is404, statusMessage, description, stack, ErrorTemplate, Error404: __vite_ssr_import_0__.default, Error500: __vite_ssr_import_1__.default, ErrorDev: __vite_ssr_import_2__.default }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(__vite_ssr_import_4__.ssrRenderComponent($setup["ErrorTemplate"], __vite_ssr_import_3__.mergeProps({ statusCode: $setup.statusCode, statusMessage: $setup.statusMessage, description: $setup.description, stack: $setup.stack }, _attrs), null, _parent))
}


const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/nuxt/dist/app/components/nuxt-error-page.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/overtrue/www/laravel.xyz/node_modules/nuxt/dist/app/components/nuxt-error-page.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue
// Parents: 
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_8cc6d73f)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/imports.mjs ($id_3d849a97)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue?vue&type=style&index=0&scoped=true&lang.css ($id_e68b6b38)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_b90d4d0f = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/imports.mjs");


const _sfc_main = {
  props: {
  appName: {
    type: String,
    default: "Nuxt"
  },
  version: {
    type: String,
    default: ""
  },
  statusCode: {
    type: String,
    default: "404"
  },
  statusMessage: {
    type: String,
    default: "Not Found"
  },
  description: {
    type: String,
    default: "Sorry, the page you are looking for could not be found."
  },
  backHome: {
    type: String,
    default: "Go back home"
  }
},
  setup(__props, { expose }) {
  expose();

const props = __props


__vite_ssr_import_1__.useHead({
  title: `${ props.statusCode } - ${ props.statusMessage } | ${ props.appName }`,
  script: [],
  style: [
    {
      children: `*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}a{color:inherit;text-decoration:inherit}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p{margin:0}h1{font-size:inherit;font-weight:inherit}`
    }
  ]
})

const __returned__ = { props, useHead: __vite_ssr_import_1__.useHead }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __vite_ssr_import_0__.default

  _push(`<div${
    __vite_ssr_import_3__.ssrRenderAttrs(__vite_ssr_import_2__.mergeProps({ class: "font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden" }, _attrs))
  } data-v-573335c0><div class="fixed left-0 right-0 spotlight z-10" data-v-573335c0></div><div class="max-w-520px text-center z-20" data-v-573335c0><h1 class="text-8xl sm:text-10xl font-medium mb-8" data-v-573335c0>${
    __vite_ssr_import_3__.ssrInterpolate($props.statusCode)
  }</h1><p class="text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight" data-v-573335c0>${
    __vite_ssr_import_3__.ssrInterpolate($props.description)
  }</p><div class="w-full flex items-center justify-center" data-v-573335c0>`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "gradient-border text-md sm:text-xl py-2 px-4 sm:py-3 sm:px-6 cursor-pointer"
  }, {
    default: __vite_ssr_import_2__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`${__vite_ssr_import_3__.ssrInterpolate($props.backHome)}`)
      } else {
        return [
          __vite_ssr_import_2__.createTextVNode(__vite_ssr_import_2__.toDisplayString($props.backHome), 1 /* TEXT */)
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div></div></div>`)
}

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue?vue&type=style&index=0&scoped=true&lang.css");


const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/ui-templates/dist/templates/error-404.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-573335c0"],['__file',"/Users/overtrue/www/laravel.xyz/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue?vue&type=style&index=0&scoped=true&lang.css
// Parents: 
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_b90d4d0f)
// Dependencies: 

// --------------------
const $id_e68b6b38 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".bg-white[data-v-573335c0]{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.cursor-pointer[data-v-573335c0]{cursor:pointer}.flex[data-v-573335c0]{display:flex}.grid[data-v-573335c0]{display:-ms-grid;display:grid}.place-content-center[data-v-573335c0]{place-content:center}.items-center[data-v-573335c0]{align-items:center}.justify-center[data-v-573335c0]{justify-content:center}.font-sans[data-v-573335c0]{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",Segoe UI Symbol,\"Noto Color Emoji\"}.font-medium[data-v-573335c0]{font-weight:500}.font-light[data-v-573335c0]{font-weight:300}.text-8xl[data-v-573335c0]{font-size:6rem;line-height:1}.text-xl[data-v-573335c0]{font-size:1.25rem;line-height:1.75rem}.leading-tight[data-v-573335c0]{line-height:1.25}.mb-8[data-v-573335c0]{margin-bottom:2rem}.mb-16[data-v-573335c0]{margin-bottom:4rem}.max-w-520px[data-v-573335c0]{max-width:520px}.min-h-screen[data-v-573335c0]{min-height:100vh}.overflow-hidden[data-v-573335c0]{overflow:hidden}.px-8[data-v-573335c0]{padding-left:2rem;padding-right:2rem}.py-2[data-v-573335c0]{padding-bottom:.5rem;padding-top:.5rem}.px-4[data-v-573335c0]{padding-left:1rem;padding-right:1rem}.fixed[data-v-573335c0]{position:fixed}.left-0[data-v-573335c0]{left:0}.right-0[data-v-573335c0]{right:0}.text-center[data-v-573335c0]{text-align:center}.text-black[data-v-573335c0]{--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity))}.antialiased[data-v-573335c0]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.w-full[data-v-573335c0]{width:100%}.z-10[data-v-573335c0]{z-index:10}.z-20[data-v-573335c0]{z-index:20}@media (min-width:640px){.sm\\:text-4xl[data-v-573335c0]{font-size:2.25rem;line-height:2.5rem}.sm\\:text-xl[data-v-573335c0]{font-size:1.25rem;line-height:1.75rem}.sm\\:text-10xl[data-v-573335c0]{font-size:10rem;line-height:1}.sm\\:px-0[data-v-573335c0]{padding-left:0;padding-right:0}.sm\\:py-3[data-v-573335c0]{padding-bottom:.75rem;padding-top:.75rem}.sm\\:px-6[data-v-573335c0]{padding-left:1.5rem;padding-right:1.5rem}}@media (prefers-color-scheme:dark){.dark\\:bg-black[data-v-573335c0]{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.dark\\:text-white[data-v-573335c0]{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}}.spotlight[data-v-573335c0]{background:linear-gradient(45deg,#00dc82,#36e4da 50%,#0047e1);bottom:-30vh;filter:blur(20vh);height:40vh}.gradient-border[data-v-573335c0]{-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);border-radius:.5rem;position:relative}@media (prefers-color-scheme:light){.gradient-border[data-v-573335c0]{background-color:#ffffff4d}.gradient-border[data-v-573335c0]:before{background:linear-gradient(90deg,#e2e2e2,#e2e2e2 25%,#00dc82 50%,#36e4da 75%,#0047e1)}}@media (prefers-color-scheme:dark){.gradient-border[data-v-573335c0]{background-color:#1414144d}.gradient-border[data-v-573335c0]:before{background:linear-gradient(90deg,#303030,#303030 25%,#00dc82 50%,#36e4da 75%,#0047e1)}}.gradient-border[data-v-573335c0]:before{background-size:400% auto;border-radius:.5rem;bottom:0;content:\"\";left:0;-webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask-composite:exclude;opacity:.5;padding:2px;position:absolute;right:0;top:0;transition:background-position .3s ease-in-out,opacity .2s ease-in-out;width:100%}.gradient-border[data-v-573335c0]:hover:before{background-position:-50% 0;opacity:1}";
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue
// Parents: 
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_8cc6d73f)
// Dependencies: 
// - /@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/imports.mjs ($id_3d849a97)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue?vue&type=style&index=0&scoped=true&lang.css ($id_a2b3b709)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_14c8b574 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/imports.mjs");


const _sfc_main = {
  props: {
  appName: {
    type: String,
    default: "Nuxt"
  },
  version: {
    type: String,
    default: ""
  },
  statusCode: {
    type: String,
    default: "500"
  },
  statusMessage: {
    type: String,
    default: "Server error"
  },
  description: {
    type: String,
    default: "This page is temporarily unavailable."
  }
},
  setup(__props, { expose }) {
  expose();

const props = __props


__vite_ssr_import_0__.useHead({
  title: `${ props.statusCode } - ${ props.statusMessage } | ${ props.appName }`,
  script: [],
  style: [
    {
      children: `*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p{margin:0}h1{font-size:inherit;font-weight:inherit}`
    }
  ]
})

const __returned__ = { props, useHead: __vite_ssr_import_0__.useHead }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    __vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden" }, _attrs))
  } data-v-0914425d><div class="fixed -bottom-1/2 left-0 right-0 h-1/2 spotlight" data-v-0914425d></div><div class="max-w-520px text-center" data-v-0914425d><h1 class="text-8xl sm:text-10xl font-medium mb-8" data-v-0914425d>${
    __vite_ssr_import_2__.ssrInterpolate($props.statusCode)
  }</h1><p class="text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight" data-v-0914425d>${
    __vite_ssr_import_2__.ssrInterpolate($props.description)
  }</p></div></div>`)
}

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue?vue&type=style&index=0&scoped=true&lang.css");


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/ui-templates/dist/templates/error-500.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-0914425d"],['__file',"/Users/overtrue/www/laravel.xyz/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue?vue&type=style&index=0&scoped=true&lang.css
// Parents: 
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_14c8b574)
// Dependencies: 

// --------------------
const $id_a2b3b709 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".bg-white[data-v-0914425d]{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.grid[data-v-0914425d]{display:-ms-grid;display:grid}.place-content-center[data-v-0914425d]{place-content:center}.font-sans[data-v-0914425d]{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",Segoe UI Symbol,\"Noto Color Emoji\"}.font-medium[data-v-0914425d]{font-weight:500}.font-light[data-v-0914425d]{font-weight:300}.h-1\\/2[data-v-0914425d]{height:50%}.text-8xl[data-v-0914425d]{font-size:6rem;line-height:1}.text-xl[data-v-0914425d]{font-size:1.25rem;line-height:1.75rem}.leading-tight[data-v-0914425d]{line-height:1.25}.mb-8[data-v-0914425d]{margin-bottom:2rem}.mb-16[data-v-0914425d]{margin-bottom:4rem}.max-w-520px[data-v-0914425d]{max-width:520px}.min-h-screen[data-v-0914425d]{min-height:100vh}.overflow-hidden[data-v-0914425d]{overflow:hidden}.px-8[data-v-0914425d]{padding-left:2rem;padding-right:2rem}.fixed[data-v-0914425d]{position:fixed}.left-0[data-v-0914425d]{left:0}.right-0[data-v-0914425d]{right:0}.-bottom-1\\/2[data-v-0914425d]{bottom:-50%}.text-center[data-v-0914425d]{text-align:center}.text-black[data-v-0914425d]{--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity))}.antialiased[data-v-0914425d]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media (min-width:640px){.sm\\:text-4xl[data-v-0914425d]{font-size:2.25rem;line-height:2.5rem}.sm\\:text-10xl[data-v-0914425d]{font-size:10rem;line-height:1}.sm\\:px-0[data-v-0914425d]{padding-left:0;padding-right:0}}@media (prefers-color-scheme:dark){.dark\\:bg-black[data-v-0914425d]{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.dark\\:text-white[data-v-0914425d]{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}}.spotlight[data-v-0914425d]{background:linear-gradient(45deg,#00dc82,#36e4da 50%,#0047e1);filter:blur(20vh)}";
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue
// Parents: 
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_8cc6d73f)
// Dependencies: 
// - /@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/imports.mjs ($id_3d849a97)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue?vue&type=style&index=0&scoped=true&lang.css ($id_2691164c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_bc2d74a1 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/imports.mjs");


const _sfc_main = {
  props: {
  appName: {
    type: String,
    default: "Nuxt"
  },
  version: {
    type: String,
    default: ""
  },
  statusCode: {
    type: String,
    default: "500"
  },
  statusMessage: {
    type: String,
    default: "Server error"
  },
  description: {
    type: String,
    default: "An error occurred in the application and the page could not be served. If you are the application owner, check your server logs for details."
  },
  stack: {
    type: String,
    default: ""
  }
},
  setup(__props, { expose }) {
  expose();

const props = __props


__vite_ssr_import_0__.useHead({
  title: `${ props.statusCode } - ${ props.statusMessage } | ${ props.appName }`,
  script: [],
  style: [
    {
      children: `*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p,pre{margin:0}h1{font-size:inherit;font-weight:inherit}pre{font-size:1em;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}`
    }
  ]
})

const __returned__ = { props, useHead: __vite_ssr_import_0__.useHead }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    __vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "font-sans antialiased bg-white px-10 pt-14 dark:bg-black text-black dark:text-white min-h-screen flex flex-col" }, _attrs))
  } data-v-1da4697d><div class="fixed left-0 right-0 spotlight" data-v-1da4697d></div><h1 class="text-6xl sm:text-8xl font-medium mb-6" data-v-1da4697d>${
    __vite_ssr_import_2__.ssrInterpolate($props.statusCode)
  }</h1><p class="text-xl sm:text-2xl font-light mb-8 leading-tight" data-v-1da4697d>${
    __vite_ssr_import_2__.ssrInterpolate($props.description)
  }</p><div class="bg-white rounded-t-md bg-black/5 dark:bg-white/10 flex-1 overflow-y-auto h-auto" data-v-1da4697d><pre class="text-xl font-light leading-tight z-10 p-8" data-v-1da4697d>${
    $props.stack
  }</pre></div></div>`)
}

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue?vue&type=style&index=0&scoped=true&lang.css");


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-1da4697d"],['__file',"/Users/overtrue/www/laravel.xyz/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue?vue&type=style&index=0&scoped=true&lang.css
// Parents: 
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_bc2d74a1)
// Dependencies: 

// --------------------
const $id_2691164c = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".bg-white[data-v-1da4697d]{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.bg-black\\/5[data-v-1da4697d]{--tw-bg-opacity:.05;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.rounded-t-md[data-v-1da4697d]{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.flex[data-v-1da4697d]{display:flex}.flex-col[data-v-1da4697d]{flex-direction:column}.flex-1[data-v-1da4697d]{flex:1 1 0%}.font-sans[data-v-1da4697d]{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",Segoe UI Symbol,\"Noto Color Emoji\"}.font-medium[data-v-1da4697d]{font-weight:500}.font-light[data-v-1da4697d]{font-weight:300}.h-auto[data-v-1da4697d]{height:auto}.text-xl[data-v-1da4697d]{font-size:1.25rem;line-height:1.75rem}.text-6xl[data-v-1da4697d]{font-size:3.75rem;line-height:1}.leading-tight[data-v-1da4697d]{line-height:1.25}.mb-8[data-v-1da4697d]{margin-bottom:2rem}.mb-6[data-v-1da4697d]{margin-bottom:1.5rem}.min-h-screen[data-v-1da4697d]{min-height:100vh}.overflow-y-auto[data-v-1da4697d]{overflow-y:auto}.p-8[data-v-1da4697d]{padding:2rem}.px-10[data-v-1da4697d]{padding-left:2.5rem;padding-right:2.5rem}.pt-14[data-v-1da4697d]{padding-top:3.5rem}.fixed[data-v-1da4697d]{position:fixed}.left-0[data-v-1da4697d]{left:0}.right-0[data-v-1da4697d]{right:0}.text-black[data-v-1da4697d]{--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity))}.antialiased[data-v-1da4697d]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.z-10[data-v-1da4697d]{z-index:10}@media (min-width:640px){.sm\\:text-8xl[data-v-1da4697d]{font-size:6rem;line-height:1}.sm\\:text-2xl[data-v-1da4697d]{font-size:1.5rem;line-height:2rem}}@media (prefers-color-scheme:dark){.dark\\:bg-black[data-v-1da4697d]{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.dark\\:bg-white\\/10[data-v-1da4697d]{--tw-bg-opacity:.1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.dark\\:text-white[data-v-1da4697d]{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}}.spotlight[data-v-1da4697d]{background:linear-gradient(45deg,#00dc82,#36e4da 50%,#0047e1);bottom:-40vh;filter:blur(30vh);height:60vh;opacity:.8}";
}


// --------------------
// Request: /@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/app-component.mjs
// Parents: 
// - /Users/overtrue/www/laravel.xyz/node_modules/nuxt/dist/app/entry ($id_24e0160c)
// Dependencies: 
// - /app.vue ($id_2b46e842)
// --------------------
const $id_91404192 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/app.vue");

Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.default }});;
}


// --------------------
// Request: /app.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/app-component.mjs ($id_91404192)
// Dependencies: 
// - /components/TheNavbar.vue ($id_1e19b72c)
// - /components/TheFooter.vue ($id_cdfd5170)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_2b46e842 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/TheNavbar.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/TheFooter.vue");

const _sfc_main = {}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_TheNavbar = __vite_ssr_import_0__.default
  const _component_NuxtPage = __vite_ssr_import_2__.resolveComponent("NuxtPage")
  const _component_TheFooter = __vite_ssr_import_1__.default

  _push(`<div${__vite_ssr_import_3__.ssrRenderAttrs(__vite_ssr_import_2__.mergeProps({ class: "flex flex-col h-full text-gray-700 dark:text-gray-400" }, _attrs))}>`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_TheNavbar, null, null, _parent))
  _push(`<div class="container mx-auto px-6 flex-1">`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_NuxtPage, null, null, _parent))
  _push(`</div>`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_TheFooter, null, null, _parent))
  _push(`</div>`)
}


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("app.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/overtrue/www/laravel.xyz/app.vue"]]);
}


// --------------------
// Request: /components/TheNavbar.vue
// Parents: 
// - /app.vue ($id_2b46e842)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_1e19b72c = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const _sfc_main = {}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __vite_ssr_import_0__.default

  _push(`<nav${__vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "bg-white shadow dark:bg-gray-800" }, _attrs))}><div class="container px-6 py-4 mx-auto"><div class="md:flex md:items-center md:justify-between"><div class="flex items-center justify-between"><div class="text-xl font-semibold text-gray-700"><a href="/" class="flex items-center space-x-2 text-2xl font-bold text-gray-800 transition-colors duration-200 transform dark:text-white lg:text-3xl hover:text-gray-600 dark:hover:text-gray-300"><h1 class="text-3xl leading-none m-0">Laravel</h1><span class="bg-blue-500 text-white text-sm px-2 py-1 rounded rounded-bl-none">小宇宙</span></a></div><!-- Mobile menu button --><div class="flex md:hidden"><button type="button" class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu"><svg viewBox="0 0 24 24" class="w-6 h-6 fill-current"><path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path></svg></button></div></div><!-- Mobile Menu open: "block", Menu closed: "hidden" --><div class="flex-1 md:flex md:items-center md:justify-between"><div class="flex flex-col -mx-4 md:flex-row md:items-center md:mx-8"><!-- <NuxtLink
              to="/articles"
              class="flex items-center space-x-2 px-2 py-1 mx-2 mt-2 text-sm font-medium transition-colors duration-200 transform rounded-md md:mt-0 text-gray-600 hover:text-gray-700 dark:hover:text-gray-200 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700"
            >
              Articles
            </NuxtLink> --><!-- <NuxtLink
              to="/tips"
              class="flex items-center space-x-2 px-2 py-1 mx-2 mt-2 text-sm font-medium transition-colors duration-200 transform rounded-md md:mt-0 text-gray-600 hover:text-gray-700 dark:hover:text-gray-200 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700"
            >
              Tips
            </NuxtLink> -->`)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_NuxtLink, {
    to: "/stars",
    class: "flex items-center space-x-2 px-2 py-1 mx-2 mt-2 text-sm font-medium transition-colors duration-200 transform rounded-md md:mt-0 text-gray-600 hover:text-gray-700 dark:hover:text-gray-200 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700"
  }, {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"${
          _scopeId
        }><path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"${
          _scopeId
        }></path></svg><span${
          _scopeId
        }>人物</span>`)
      } else {
        return [
          (__vite_ssr_import_1__.openBlock(), __vite_ssr_import_1__.createBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: "h-4 w-4",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            "stroke-width": "2"
          }, [
            __vite_ssr_import_1__.createVNode("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              d: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            })
          ])),
          __vite_ssr_import_1__.createVNode("span", null, "人物")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_NuxtLink, {
    to: "/packages",
    class: "flex items-center space-x-2 px-2 py-1 mx-2 mt-2 text-sm font-medium transition-colors duration-200 transform rounded-md md:mt-0 text-gray-600 hover:text-gray-700 dark:hover:text-gray-200 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700"
  }, {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"${
          _scopeId
        }><path stroke-linecap="round" stroke-linejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"${
          _scopeId
        }></path></svg><span${
          _scopeId
        }>扩展包</span>`)
      } else {
        return [
          (__vite_ssr_import_1__.openBlock(), __vite_ssr_import_1__.createBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: "h-4 w-4",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            "stroke-width": "2"
          }, [
            __vite_ssr_import_1__.createVNode("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              d: "M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
            })
          ])),
          __vite_ssr_import_1__.createVNode("span", null, "扩展包")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_NuxtLink, {
    to: "/jobs",
    class: "flex items-center space-x-2 px-2 py-1 mx-2 mt-2 text-sm font-medium transition-colors duration-200 transform rounded-md md:mt-0 text-gray-600 hover:text-gray-700 dark:hover:text-gray-200 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700"
  }, {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"${
          _scopeId
        }><path stroke-linecap="round" stroke-linejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"${
          _scopeId
        }></path></svg><span${
          _scopeId
        }>工作</span>`)
      } else {
        return [
          (__vite_ssr_import_1__.openBlock(), __vite_ssr_import_1__.createBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: "h-4 w-4",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            "stroke-width": "2"
          }, [
            __vite_ssr_import_1__.createVNode("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              d: "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
            })
          ])),
          __vite_ssr_import_1__.createVNode("span", null, "工作")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div><!-- <div class="flex items-center mt-4 md:mt-0">
            <button type="button" class="flex items-center focus:outline-none" aria-label="toggle profile dropdown">
              <div class="w-8 h-8 overflow-hidden border-gray-400 rounded-full">
                <img
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                  class="object-cover w-full h-full"
                  alt="avatar"
                />
              </div>

              <h3 class="mx-2 text-sm font-medium text-gray-600 dark:text-gray-200 md:hidden">Khatab wedaa</h3>
            </button>
          </div> --></div></div></div></nav>`)
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/TheNavbar.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/overtrue/www/laravel.xyz/components/TheNavbar.vue"]]);
}


// --------------------
// Request: /components/TheFooter.vue
// Parents: 
// - /app.vue ($id_2b46e842)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_cdfd5170 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<footer${
    __vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({ class: "bg-white dark:bg-gray-800 mt-8" }, _attrs))
  }><div class="container px-6 py-8 mx-auto"><div class="flex flex-col items-center sm:flex-row sm:justify-between"><p class="text-sm text-gray-400">© COPYRIGHT ${
    __vite_ssr_import_1__.ssrInterpolate(new Date().getFullYear())
  }. Made with 💖 by <a href="https://github.com/overtrue" class="text-gray-600">@overtrue</a></p><div class="flex mt-3 -mx-2 sm:mt-0"><a href="#" class="mx-2 text-sm text-gray-400 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit"> Teams </a><a href="#" class="mx-2 text-sm text-gray-400 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit"> Privacy </a><a href="#" class="mx-2 text-sm text-gray-400 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit"> Cookies </a></div></div></div></footer>`)
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/TheFooter.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/overtrue/www/laravel.xyz/components/TheFooter.vue"]]);
}


const __modules__ = {
  "/Users/overtrue/www/laravel.xyz/node_modules/nuxt/dist/app/entry": $id_24e0160c,
  "/node_modules/vue/dist/vue.cjs.js": $id_60f0615f,
  "/node_modules/ohmyfetch/dist/index.mjs": $id_780217c4,
  "/@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/paths.mjs": $id_946a6a82,
  "/node_modules/ufo/dist/index.mjs": $id_614de060,
  "/node_modules/nuxt/dist/app/index.mjs": $id_36927477,
  "/node_modules/nuxt/dist/app/nuxt.mjs": $id_e069d411,
  "/node_modules/hookable/dist/index.mjs": $id_a2c811c4,
  "/node_modules/unctx/dist/index.mjs": $id_a569ca2d,
  "/node_modules/nuxt/dist/app/compat/legacy-app.mjs": $id_a48341bc,
  "/node_modules/unenv/runtime/mock/proxy.mjs": $id_39e12da7,
  "/node_modules/nuxt/dist/app/composables/index.mjs": $id_b067a79a,
  "/node_modules/nuxt/dist/app/composables/component.mjs": $id_53345950,
  "/node_modules/vue-router/dist/vue-router.cjs.js": $id_f9a4a698,
  "/node_modules/nuxt/dist/app/composables/asyncData.mjs": $id_d5b6a221,
  "/node_modules/nuxt/dist/app/composables/utils.mjs": $id_df511336,
  "/node_modules/nuxt/dist/app/composables/hydrate.mjs": $id_0063df1b,
  "/node_modules/nuxt/dist/app/composables/state.mjs": $id_7d872108,
  "/node_modules/nuxt/dist/app/composables/error.mjs": $id_6fe050f1,
  "/node_modules/nuxt/dist/app/composables/fetch.mjs": $id_41f5ae4e,
  "/node_modules/ohash/dist/index.mjs": $id_b1b82cf3,
  "/node_modules/nuxt/dist/app/composables/cookie.mjs": $id_511b441d,
  "/node_modules/cookie-es/dist/index.mjs": $id_f4975261,
  "/node_modules/h3/dist/index.mjs": $id_57d7ded6,
  "/node_modules/destr/dist/index.mjs": $id_03d15ecd,
  "/node_modules/nuxt/dist/app/composables/ssr.mjs": $id_c4866ba7,
  "/node_modules/nuxt/dist/app/composables/router.mjs": $id_db4d90a8,
  "/node_modules/nuxt/dist/app/components/index.mjs": $id_161bfe9f,
  "/node_modules/nuxt/dist/app/components/nuxt-link.mjs": $id_ffac87b5,
  "/node_modules/nuxt/dist/head/runtime/index.mjs": $id_b7351483,
  "/node_modules/nuxt/dist/head/runtime/composables.mjs": $id_04ea9504,
  "/node_modules/@vue/shared/dist/shared.cjs.js": $id_852b06a2,
  "/@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/css.mjs": $id_20c0354f,
  "/assets/styles/styles.css": $id_b69da117,
  "/@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/plugins/server.mjs": $id_cd2348f9,
  "/node_modules/nuxt/dist/app/plugins/preload.server.mjs": $id_9871bba0,
  "/@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/components.plugin.mjs": $id_759f3471,
  "/node_modules/@nuxt/content/dist/runtime/components/ContentDoc.mjs": $id_12ce52f3,
  "/node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.mjs": $id_8f3d0953,
  "/node_modules/@nuxt/content/dist/runtime/components/MarkdownRenderer.mjs": $id_4c793316,
  "/node_modules/scule/dist/index.mjs": $id_ff332d11,
  "/node_modules/property-information/index.js": $id_882dd793,
  "/node_modules/html-tags/index.js": $id_4503b399,
  "/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.mjs": $id_3f801a38,
  "/@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/imports.mjs": $id_3d849a97,
  "/node_modules/nuxt/dist/app/compat/vue-demi.mjs": $id_a8110be7,
  "/node_modules/nuxt/dist/app/compat/capi.mjs": $id_0c5717a4,
  "/node_modules/@nuxt/content/dist/runtime/composables/utils.mjs": $id_3db3e041,
  "/node_modules/@nuxt/content/dist/runtime/markdown-parser/utils/node.mjs": $id_eacbabc5,
  "/node_modules/@nuxt/content/dist/runtime/composables/query.mjs": $id_47535763,
  "/node_modules/@nuxt/content/dist/runtime/query/query.mjs": $id_7961d5dc,
  "/node_modules/@nuxt/content/dist/runtime/query/match/utils.mjs": $id_e943acfb,
  "/node_modules/@nuxt/content/dist/runtime/utils/json.mjs": $id_45454526,
  "/node_modules/@nuxt/content/dist/runtime/composables/navigation.mjs": $id_e209d000,
  "/node_modules/nuxt/dist/pages/runtime/composables.mjs": $id_ff6ed455,
  "/node_modules/@nuxt/content/dist/runtime/components/ContentList.mjs": $id_9fab5abb,
  "/node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.mjs": $id_d2da4ccd,
  "/node_modules/@nuxt/content/dist/runtime/components/Markdown.mjs": $id_f4cbbc2c,
  "/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseA.vue": $id_558bf79f,
  "/node_modules/vue/server-renderer/index.js": $id_b215fa1c,
  "/@id/plugin-vue:export-helper": $id_bbb863c1,
  "/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseBlockquote.vue": $id_01e2b479,
  "/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCode.vue": $id_19429b58,
  "/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCode.vue?vue&type=style&index=0&lang.css": $id_d7e7fe44,
  "/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCodeInline.vue": $id_fab9e310,
  "/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseEm.vue": $id_840411f2,
  "/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH1.vue": $id_b479ada6,
  "/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH2.vue": $id_9c1df7ff,
  "/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH3.vue": $id_f86082f5,
  "/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH4.vue": $id_7f627a67,
  "/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH5.vue": $id_caec80eb,
  "/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH6.vue": $id_26303ae9,
  "/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseHr.vue": $id_6f4fac0c,
  "/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseImg.vue": $id_f72b4351,
  "/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseLi.vue": $id_1b78ec5d,
  "/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseOl.vue": $id_2e24a6f5,
  "/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseP.vue": $id_0990778f,
  "/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseStrong.vue": $id_6d4c23c7,
  "/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTable.vue": $id_10f5aef2,
  "/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTbody.vue": $id_faffa2d8,
  "/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTd.vue": $id_b51a8b09,
  "/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTh.vue": $id_07608f57,
  "/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseThead.vue": $id_17b6f147,
  "/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTr.vue": $id_16f58501,
  "/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseUl.vue": $id_7728c86d,
  "/node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs": $id_e6f12003,
  "/node_modules/@vueuse/head/dist/index.mjs": $id_c032264e,
  "/node_modules/defu/dist/defu.mjs": $id_d7afab65,
  "/node_modules/nuxt/dist/head/runtime/plugin.mjs": $id_a2650341,
  "/node_modules/nuxt/dist/head/runtime/components.mjs": $id_b2a29d6f,
  "/@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/meta.config.mjs": $id_8776a886,
  "/node_modules/nuxt/dist/pages/runtime/router.mjs": $id_a090977b,
  "/node_modules/nuxt/dist/pages/runtime/page.mjs": $id_5fc14cdc,
  "/node_modules/nuxt/dist/pages/runtime/utils.mjs": $id_80f433aa,
  "/node_modules/nuxt/dist/app/components/utils.mjs": $id_69c52686,
  "/@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/routes.mjs": $id_f1f16d9d,
  "/pages/about.vue?macro=true": $id_9ddc318c,
  "/pages/index.vue?macro=true": $id_5dd70240,
  "/pages/jobs.vue?macro=true": $id_da245256,
  "/pages/packages.vue?macro=true": $id_84d7e9a6,
  "/components/TheLinkButton.vue": $id_67823286,
  "/components/Card.vue": $id_243aaff2,
  "/components/PackageCard.vue": $id_bc4dc7c7,
  "/pages/stars.vue?macro=true": $id_de6eeb3d,
  "/components/StarCard.vue": $id_ce2fb5c2,
  "/pages/tips/:id.vue?macro=true": $id_b2d27d81,
  "/pages/tips/index.vue?macro=true": $id_7b998549,
  "/components/TheTags.vue": $id_a54c4874,
  "/components/TheTag.vue": $id_83290242,
  "/components/TipCard.vue": $id_f4d8b7fe,
  "/pages/about.vue": $id_a93ccd0b,
  "/pages/index.vue": $id_cca58e97,
  "/pages/jobs.vue": $id_1eaf0ed3,
  "/pages/packages.vue": $id_d713bde7,
  "/pages/stars.vue": $id_765c962d,
  "/pages/tips/:id.vue": $id_d4dd6cfe,
  "/pages/tips/index.vue": $id_2a5fe106,
  "/@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/router.options.mjs": $id_79723d14,
  "/@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/middleware.mjs": $id_26232596,
  "/node_modules/@nuxt/content/dist/runtime/plugin.mjs": $id_a4132d07,
  "/node_modules/@nuxt/content/dist/runtime/composables/web-socket.mjs": $id_575fe152,
  "/plugins/dayjs.js": $id_e4088396,
  "/node_modules/dayjs/dayjs.min.js": $id_0bbcdaab,
  "/node_modules/dayjs/plugin/relativeTime.js": $id_574d0a3a,
  "/plugins/emoji.js": $id_5ce230b0,
  "/node_modules/emoji-js/lib/emoji.js": $id_4ba0fe93,
  "/plugins/markdown-it.js": $id_254393a2,
  "/node_modules/highlight.js/es/index.js": $id_250a78f8,
  "/node_modules/markdown-it/index.js": $id_59e52662,
  "/node_modules/markdown-it-sub/index.js": $id_b5d39429,
  "/node_modules/markdown-it-sup/index.js": $id_82c7613c,
  "/node_modules/markdown-it-footnote/index.js": $id_50303d40,
  "/node_modules/markdown-it-emoji/index.js": $id_a6f7af16,
  "/node_modules/markdown-it-deflist/index.js": $id_40a2bbce,
  "/node_modules/markdown-it-ins/index.js": $id_58ae3e3b,
  "/node_modules/markdown-it-container/index.js": $id_0133ff55,
  "/@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/root-component.mjs": $id_6e69f58f,
  "/node_modules/nuxt/dist/app/components/nuxt-root.vue": $id_e9bfada3,
  "/@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/error-component.mjs": $id_328456ef,
  "/node_modules/nuxt/dist/app/components/nuxt-error-page.vue": $id_8cc6d73f,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue": $id_b90d4d0f,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue?vue&type=style&index=0&scoped=true&lang.css": $id_e68b6b38,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue": $id_14c8b574,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue?vue&type=style&index=0&scoped=true&lang.css": $id_a2b3b709,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue": $id_bc2d74a1,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue?vue&type=style&index=0&scoped=true&lang.css": $id_2691164c,
  "/@id/virtual:nuxt:/Users/overtrue/www/laravel.xyz/.nuxt/app-component.mjs": $id_91404192,
  "/app.vue": $id_2b46e842,
  "/components/TheNavbar.vue": $id_1e19b72c,
  "/components/TheFooter.vue": $id_cdfd5170
}


const __pendingModules__ = new Map()
const __pendingImports__ = new Map()
const __ssrContext__ = { global: globalThis }

function __ssrLoadModule__(url, urlStack = []) {
  const pendingModule = __pendingModules__.get(url)
  if (pendingModule) { return pendingModule }
  const modulePromise = __instantiateModule__(url, urlStack)
  __pendingModules__.set(url, modulePromise)
  modulePromise.catch(() => { __pendingModules__.delete(url) })
         .finally(() => { __pendingModules__.delete(url) })
  return modulePromise
}

async function __instantiateModule__(url, urlStack) {
  const mod = __modules__[url]
  if (mod.stubModule) { return mod.stubModule }
  const stubModule = { [Symbol.toStringTag]: 'Module' }
  Object.defineProperty(stubModule, '__esModule', { value: true })
  mod.stubModule = stubModule
  // https://vitejs.dev/guide/api-hmr.html
  const importMeta = { url, hot: { accept() {}, prune() {}, dispose() {}, invalidate() {}, decline() {}, on() {} } }
  urlStack = urlStack.concat(url)
  const isCircular = url => urlStack.includes(url)
  const pendingDeps = []
  const ssrImport = async (dep) => {
    // TODO: Handle externals if dep[0] !== '.' | '/'
    if (!isCircular(dep) && !__pendingImports__.get(dep)?.some(isCircular)) {
      pendingDeps.push(dep)
      if (pendingDeps.length === 1) {
        __pendingImports__.set(url, pendingDeps)
      }
      await __ssrLoadModule__(dep, urlStack)
      if (pendingDeps.length === 1) {
        __pendingImports__.delete(url)
      } else {
        pendingDeps.splice(pendingDeps.indexOf(dep), 1)
      }
    }
    return __modules__[dep].stubModule
  }
  function ssrDynamicImport (dep) {
    // TODO: Handle dynamic import starting with . relative to url
    return ssrImport(dep)
  }

  function ssrExportAll(sourceModule) {
    for (const key in sourceModule) {
      if (key !== 'default') {
        try {
          Object.defineProperty(stubModule, key, {
            enumerable: true,
            configurable: true,
            get() { return sourceModule[key] }
          })
        } catch (_err) { }
      }
    }
  }

  const cjsModule = {
    get exports () {
      return stubModule.default
    },
    set exports (v) {
      stubModule.default = v
    },
  }

  await mod(
    __ssrContext__.global,
    cjsModule,
    stubModule.default,
    stubModule,
    importMeta,
    ssrImport,
    ssrDynamicImport,
    ssrExportAll
  )

  return stubModule
}


export default await __ssrLoadModule__("/Users/overtrue/www/laravel.xyz/node_modules/nuxt/dist/app/entry")