const DEFAULT_ITEMS = [
  {
    id: "builtin-forest",
    name: "Forest Mirror",
    type: "image",
    url: "public/assets/crystal-forest.png",
    builtin: true
  },
  {
    id: "builtin-video",
    name: "Crystal Motion",
    type: "video",
    url: "public/assets/sample-crystal.mp4",
    builtin: true
  }
];

const DEFAULT_BACKGROUND = {
  id: "builtin-background",
  name: "Forest Layer",
  type: "image",
  url: "public/assets/crystal-forest.png",
  builtin: true
};

const LANGUAGE_STATE_VERSION = 2;

const DEFAULT_STATE = {
  language: "ja",
  languageVersion: LANGUAGE_STATE_VERSION,
  eyebrow: "KanaWorks_AI",
  headline: "水晶玉ビジョン",
  caption: "",
  textSize: 100,
  activeIndex: 0,
  syncBackground: false,
  effects: {
    fisheye: 72,
    reflection: 82,
    zoom: 104,
    orbX: 0,
    orbY: 0,
    orbSize: 84
  }
};

const STORAGE_KEY = "crystal-ball-studio-state";
const DB_NAME = "crystal-ball-studio-media";
const STORE_NAME = "media";
const MAX_ITEMS = 8;
const FIXED_EYEBROW = "KanaWorks_AI";
const FOLLOW_URL = "https://x.com/KanaWorks_AI";
const EFFECT_LIMITS = {
  fisheye: [-100, 200],
  reflection: [0, 100],
  zoom: [86, 124],
  orbX: [-320, 320],
  orbY: [-460, 460],
  orbSize: [30, 200]
};
const LANGUAGE_ORDER = ["ja", "en", "zh"];
const LANGUAGES = {
  zh: {
    label: "中文",
    htmlLang: "zh-CN",
    scene: {
      headline: "水晶球影像"
    },
    ui: {
      tabMedia: "媒体",
      tabText: "文字",
      tabEffects: "效果",
      addCrystal: "添加水晶球素材",
      syncBackground: "同步底层展示",
      uploadBackground: "上传底层媒体",
      headlineLabel: "标题",
      textSizeLabel: "文字大小",
      fisheyeLabel: "鱼眼强度",
      reflectionLabel: "反射",
      zoomLabel: "球面缩放",
      orbYLabel: "Y 坐标",
      orbXLabel: "X 坐标",
      orbCoordinateLabel: "坐标系",
      orbSizeLabel: "水晶球大小",
      resetProject: "重置项目",
      languageButton: "切换语言",
      helpButton: "操作介绍",
      helpTitle: "操作介绍",
      helpBody: "上传最多 8 个图片或视频后，左右滑动切换水晶球素材。在“文字”里修改标题和大小，在“效果”里调鱼眼、反射、坐标和水晶球大小。点兔子按钮可收起或展开编辑界面。",
      helpGuide: "完整使用说明",
      helpGuideHref: "docs/usage.html#zh",
      collapsePanel: "收起编辑面板",
      expandPanel: "展开编辑面板",
      selectAsset: "选择素材",
      removeAsset: "移除素材",
      assetList: "水晶球素材列表",
      panelLabel: "编辑面板",
      stageLabel: "水晶球预览",
      follow: "want more? follow me"
    }
  },
  en: {
    label: "EN",
    htmlLang: "en",
    scene: {
      headline: "Crystal Ball Vision"
    },
    ui: {
      tabMedia: "Media",
      tabText: "Text",
      tabEffects: "Effects",
      addCrystal: "Add crystal media",
      syncBackground: "Sync lower layer",
      uploadBackground: "Upload lower media",
      headlineLabel: "Title",
      textSizeLabel: "Text size",
      fisheyeLabel: "Fisheye strength",
      reflectionLabel: "Reflection",
      zoomLabel: "Sphere zoom",
      orbYLabel: "Y position",
      orbXLabel: "X position",
      orbCoordinateLabel: "Coordinate",
      orbSizeLabel: "Orb size",
      resetProject: "Reset project",
      languageButton: "Switch language",
      helpButton: "How to use",
      helpTitle: "How to use",
      helpBody: "Upload up to 8 images or videos, then swipe left or right to switch crystal media. In Text, edit the title and size. In Effects, tune fisheye, reflection, coordinates, and orb size. Tap the rabbit button to hide or show the editor.",
      helpGuide: "Full user guide",
      helpGuideHref: "docs/usage.html#en",
      collapsePanel: "Hide editor",
      expandPanel: "Show editor",
      selectAsset: "Select asset",
      removeAsset: "Remove asset",
      assetList: "Crystal media list",
      panelLabel: "Editor panel",
      stageLabel: "Crystal ball preview",
      follow: "want more? follow me"
    }
  },
  ja: {
    label: "日本語",
    htmlLang: "ja",
    scene: {
      headline: "水晶玉ビジョン"
    },
    ui: {
      tabMedia: "メディア",
      tabText: "文字",
      tabEffects: "効果",
      addCrystal: "水晶玉素材を追加",
      syncBackground: "下層表示を同期",
      uploadBackground: "下層メディアをアップロード",
      headlineLabel: "タイトル",
      textSizeLabel: "文字サイズ",
      fisheyeLabel: "魚眼強度",
      reflectionLabel: "反射",
      zoomLabel: "球面ズーム",
      orbYLabel: "Y座標",
      orbXLabel: "X座標",
      orbCoordinateLabel: "座標系",
      orbSizeLabel: "水晶玉サイズ",
      resetProject: "リセット",
      languageButton: "言語を切り替え",
      helpButton: "使い方",
      helpTitle: "使い方",
      helpBody: "画像や動画を最大 8 個までアップロードできます。左右にスワイプして水晶玉の素材を切り替え、「文字」でタイトルとサイズ、「効果」で魚眼、反射、座標、水晶玉サイズを調整できます。ウサギボタンで編集画面を開閉できます。",
      helpGuide: "詳しい使い方",
      helpGuideHref: "docs/usage.html#ja",
      collapsePanel: "編集パネルを閉じる",
      expandPanel: "編集パネルを開く",
      selectAsset: "素材を選択",
      removeAsset: "素材を削除",
      assetList: "水晶玉素材リスト",
      panelLabel: "編集パネル",
      stageLabel: "水晶玉プレビュー",
      follow: "want more? follow me"
    }
  }
};

const elements = {
  app: document.querySelector("#appShell"),
  stage: document.querySelector("#stage"),
  orb: document.querySelector("#crystalOrb"),
  canvas: document.querySelector("#orbCanvas"),
  fallback: document.querySelector("#orbFallback"),
  backgroundImage: document.querySelector("#backgroundImage"),
  backgroundVideo: document.querySelector("#backgroundVideo"),
  followLink: document.querySelector("#followLink"),
  eyebrowText: document.querySelector("#eyebrowText"),
  headlineText: document.querySelector("#headlineText"),
  slideCounter: document.querySelector("#slideCounter"),
  activeAssetName: document.querySelector("#activeAssetName"),
  featherCursor: document.querySelector("#featherCursor"),
  panel: document.querySelector("#studioPanel"),
  panelToggle: document.querySelector("#panelToggle"),
  languageCycle: document.querySelector("#languageCycle"),
  helpButton: document.querySelector("#helpButton"),
  helpPopover: document.querySelector("#helpPopover"),
  helpGuideLink: document.querySelector("#helpGuideLink"),
  assetStrip: document.querySelector("#assetStrip"),
  orbUpload: document.querySelector("#orbUpload"),
  backgroundUpload: document.querySelector("#backgroundUpload"),
  syncBackground: document.querySelector("#syncBackground"),
  headlineInput: document.querySelector("#headlineInput"),
  textSizeRange: document.querySelector("#textSizeRange"),
  textSizeOutput: document.querySelector("#textSizeOutput"),
  fisheyeRange: document.querySelector("#fisheyeRange"),
  reflectionRange: document.querySelector("#reflectionRange"),
  zoomRange: document.querySelector("#zoomRange"),
  orbXRange: document.querySelector("#orbXRange"),
  orbYRange: document.querySelector("#orbYRange"),
  orbSizeRange: document.querySelector("#orbSizeRange"),
  orbCoordinatePad: document.querySelector("#orbCoordinatePad"),
  orbCoordinatePoint: document.querySelector("#orbCoordinatePoint"),
  orbCoordinateOutput: document.querySelector("#orbCoordinateOutput"),
  fisheyeOutput: document.querySelector("#fisheyeOutput"),
  reflectionOutput: document.querySelector("#reflectionOutput"),
  zoomOutput: document.querySelector("#zoomOutput"),
  orbXOutput: document.querySelector("#orbXOutput"),
  orbYOutput: document.querySelector("#orbYOutput"),
  orbSizeOutput: document.querySelector("#orbSizeOutput"),
  resetButton: document.querySelector("#resetButton")
};

const mediaUrls = new Map();
const db = createMediaDB();
const orbVideo = document.createElement("video");
const orbImage = document.createElement("img");
let state = structuredClone(DEFAULT_STATE);
let orbItems = structuredClone(DEFAULT_ITEMS);
let backgroundItem = structuredClone(DEFAULT_BACKGROUND);
let activeDrag = null;
let activeCoordinateDrag = false;
let saveTimer = 0;
let hasCustomOrbItems = false;

orbVideo.muted = true;
orbVideo.loop = true;
orbVideo.playsInline = true;
orbVideo.preload = "auto";
orbVideo.crossOrigin = "anonymous";
orbImage.decoding = "async";
orbImage.crossOrigin = "anonymous";

class CrystalRenderer {
  constructor(canvas) {
    this.canvas = canvas;
    this.gl = canvas.getContext("webgl", {
      alpha: true,
      antialias: true,
      premultipliedAlpha: false
    });
    this.source = null;
    this.ready = false;
    this.effects = { fisheye: 0.72, reflection: 0.82, zoom: 1.04 };

    if (!this.gl) {
      return;
    }

    this.program = this.createProgram();
    this.locations = {
      position: this.gl.getAttribLocation(this.program, "aPosition"),
      texture: this.gl.getUniformLocation(this.program, "uTexture"),
      fisheye: this.gl.getUniformLocation(this.program, "uFisheye"),
      zoom: this.gl.getUniformLocation(this.program, "uZoom"),
      time: this.gl.getUniformLocation(this.program, "uTime")
    };

    this.buffer = this.gl.createBuffer();
    this.texture = this.gl.createTexture();
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.buffer);
    this.gl.bufferData(
      this.gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      this.gl.STATIC_DRAW
    );
    this.gl.bindTexture(this.gl.TEXTURE_2D, this.texture);
    this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE);
    this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE);
    this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR);
    this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.LINEAR);
    this.gl.texImage2D(
      this.gl.TEXTURE_2D,
      0,
      this.gl.RGBA,
      1,
      1,
      0,
      this.gl.RGBA,
      this.gl.UNSIGNED_BYTE,
      new Uint8Array([16, 32, 24, 255])
    );
    this.ready = true;
    requestAnimationFrame((time) => this.draw(time));
  }

  createProgram() {
    const vertex = `
      attribute vec2 aPosition;
      varying vec2 vUv;

      void main() {
        vUv = aPosition * 0.5 + 0.5;
        gl_Position = vec4(aPosition, 0.0, 1.0);
      }
    `;
    const fragment = `
      precision mediump float;

      uniform sampler2D uTexture;
      uniform float uFisheye;
      uniform float uZoom;
      uniform float uTime;
      varying vec2 vUv;

      vec4 sampleTexture(vec2 uv) {
        return texture2D(uTexture, clamp(uv, vec2(0.0), vec2(1.0)));
      }

      void main() {
        vec2 p = vUv * 2.0 - 1.0;
        float radius = length(p);
        if (radius > 1.0) {
          discard;
        }

        vec2 dir = radius > 0.0001 ? p / radius : vec2(0.0, 1.0);
        float sphere = sqrt(max(0.0, 1.0 - radius * radius));
        float positiveFisheye = clamp(uFisheye, 0.0, 2.0);
        float negativeFisheye = clamp(-uFisheye, 0.0, 1.0);
        float fisheyePower = mix(1.0, 3.15, positiveFisheye / 2.0);
        float concavePower = mix(1.0, 0.42, negativeFisheye);
        float radial = uFisheye >= 0.0 ? pow(radius, fisheyePower) : pow(radius, concavePower);
        float distortionAmount = abs(uFisheye);
        vec2 uv = dir * radial * 0.5 / max(uZoom, 0.2) + 0.5;
        uv.x += sin((uv.y + uTime * 0.018) * 6.2831853) * 0.028 * distortionAmount;

        float chroma = 0.0065 * distortionAmount * smoothstep(0.18, 0.95, radius);
        vec2 offset = dir * chroma;
        vec4 color;
        color.r = sampleTexture(uv + offset).r;
        color.g = sampleTexture(uv).g;
        color.b = sampleTexture(uv - offset).b;
        color.a = 1.0;

        vec3 normal = normalize(vec3(p * 0.88, sphere));
        float highlight = pow(max(dot(normal, normalize(vec3(-0.42, -0.62, 1.0))), 0.0), 10.0);
        float rim = smoothstep(0.72, 1.0, radius);
        float innerGlow = smoothstep(1.0, 0.0, radius) * 0.08;

        color.rgb = mix(color.rgb, vec3(0.98, 1.0, 0.94), highlight * 0.38 + rim * 0.11);
        color.rgb += vec3(0.06, 0.1, 0.08) * innerGlow;
        color.rgb *= 1.06 - rim * 0.18;

        gl_FragColor = vec4(color.rgb, smoothstep(1.0, 0.965, radius));
      }
    `;

    const gl = this.gl;
    const vertexShader = this.compile(gl.VERTEX_SHADER, vertex);
    const fragmentShader = this.compile(gl.FRAGMENT_SHADER, fragment);
    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      throw new Error(gl.getProgramInfoLog(program) || "Unable to link WebGL program");
    }
    return program;
  }

  compile(type, source) {
    const shader = this.gl.createShader(type);
    this.gl.shaderSource(shader, source);
    this.gl.compileShader(shader);
    if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
      throw new Error(this.gl.getShaderInfoLog(shader) || "Unable to compile WebGL shader");
    }
    return shader;
  }

  setSource(source) {
    this.source = source;
  }

  setEffects(effects) {
    this.effects = effects;
  }

  draw(time) {
    requestAnimationFrame((nextTime) => this.draw(nextTime));
    if (!this.ready) {
      return;
    }

    const gl = this.gl;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = Math.max(1, Math.floor(this.canvas.clientWidth * dpr));
    const height = Math.max(1, Math.floor(this.canvas.clientHeight * dpr));
    if (this.canvas.width !== width || this.canvas.height !== height) {
      this.canvas.width = width;
      this.canvas.height = height;
      gl.viewport(0, 0, width, height);
    }

    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    if (this.source && isDrawable(this.source)) {
      gl.bindTexture(gl.TEXTURE_2D, this.texture);
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
      try {
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, this.source);
      } catch {
        return;
      }
    }

    gl.useProgram(this.program);
    gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
    gl.enableVertexAttribArray(this.locations.position);
    gl.vertexAttribPointer(this.locations.position, 2, gl.FLOAT, false, 0, 0);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, this.texture);
    gl.uniform1i(this.locations.texture, 0);
    gl.uniform1f(this.locations.fisheye, this.effects.fisheye);
    gl.uniform1f(this.locations.zoom, this.effects.zoom);
    gl.uniform1f(this.locations.time, time * 0.001);
    gl.drawArrays(gl.TRIANGLES, 0, 6);
  }
}

const renderer = safelyCreateRenderer();

init();

async function init() {
  await restoreState();
  bindControls();
  applyLanguage(false);
  applyStateToInputs();
  renderAll();
}

function safelyCreateRenderer() {
  try {
    const created = new CrystalRenderer(elements.canvas);
    if (!created.ready) {
      elements.orb.classList.add("is-webgl-fallback");
    }
    return created;
  } catch (error) {
    console.warn(error);
    elements.orb.classList.add("is-webgl-fallback");
    return null;
  }
}

async function restoreState() {
  const stored = readStoredState();
  if (!stored) {
    return;
  }

  const storedState = stored.state || {};
  const shouldMigrateLanguage = storedState.languageVersion !== LANGUAGE_STATE_VERSION;
  state = {
    ...structuredClone(DEFAULT_STATE),
    ...storedState,
    effects: {
      ...DEFAULT_STATE.effects,
      ...(storedState.effects || {})
    }
  };
  if (shouldMigrateLanguage) {
    state.language = DEFAULT_STATE.language;
    if (isKnownLocalizedHeadline(storedState.headline)) {
      state.headline = LANGUAGES[DEFAULT_STATE.language].scene.headline;
    }
  }
  state.languageVersion = LANGUAGE_STATE_VERSION;
  state.eyebrow = FIXED_EYEBROW;
  state.caption = "";
  state.textSize = clamp(Number(state.textSize) || DEFAULT_STATE.textSize, 50, 150);

  const restoredItems = await Promise.all((stored.orbItems || []).map(hydrateItem));
  orbItems = restoredItems.filter(Boolean);
  if (!orbItems.length) {
    orbItems = structuredClone(DEFAULT_ITEMS);
  }
  state.activeIndex = clamp(state.activeIndex, 0, orbItems.length - 1);
  hasCustomOrbItems = orbItems.some((item) => !item.builtin);

  const restoredBackground = await hydrateItem(stored.backgroundItem);
  backgroundItem = restoredBackground || structuredClone(DEFAULT_BACKGROUND);
}

function readStoredState() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY));
  } catch {
    return null;
  }
}

async function hydrateItem(item) {
  if (!item) {
    return null;
  }
  if (item.builtin) {
    return restoreBuiltinItem(item);
  }

  const record = await db.get(item.dbKey);
  if (!record?.blob) {
    return null;
  }
  const url = URL.createObjectURL(record.blob);
  mediaUrls.set(item.dbKey, url);
  return {
    ...item,
    url,
    name: item.name || "素材",
    type: item.type || fileType(record.blob)
  };
}

function bindControls() {
  document.querySelectorAll(".tab-button").forEach((button) => {
    button.addEventListener("click", () => activatePanel(button.dataset.tab));
  });

  elements.panelToggle.addEventListener("click", togglePanel);
  elements.languageCycle.addEventListener("click", cycleLanguage);
  elements.helpButton.addEventListener("click", toggleHelp);
  elements.followLink.addEventListener("click", (event) => {
    event.preventDefault();
    window.location.assign(FOLLOW_URL);
  });

  elements.orbUpload.addEventListener("change", async (event) => {
    await addOrbFiles([...event.target.files]);
    event.target.value = "";
  });

  elements.backgroundUpload.addEventListener("change", async (event) => {
    const file = event.target.files?.[0];
    if (file) {
      await setBackgroundFile(file);
    }
    event.target.value = "";
  });

  elements.assetStrip.addEventListener("click", (event) => {
    const removeButton = event.target.closest("[data-remove-index]");
    if (removeButton) {
      event.stopPropagation();
      removeOrbItem(Number(removeButton.dataset.removeIndex));
      return;
    }

    const tile = event.target.closest("[data-asset-index]");
    if (tile) {
      setActiveIndex(Number(tile.dataset.assetIndex));
    }
  });

  elements.syncBackground.addEventListener("change", () => {
    state.syncBackground = elements.syncBackground.checked;
    renderBackground();
    scheduleSave();
  });

  [["headline", elements.headlineInput]].forEach(([key, input]) => {
    input.addEventListener("input", () => {
      state[key] = input.value;
      renderText();
      scheduleSave();
    });
  });

  elements.textSizeRange.addEventListener("input", () => {
    state.textSize = Number(elements.textSizeRange.value);
    renderText();
    scheduleSave();
  });

  [
    ["fisheye", elements.fisheyeRange, elements.fisheyeOutput],
    ["reflection", elements.reflectionRange, elements.reflectionOutput],
    ["zoom", elements.zoomRange, elements.zoomOutput],
    ["orbX", elements.orbXRange, elements.orbXOutput],
    ["orbY", elements.orbYRange, elements.orbYOutput],
    ["orbSize", elements.orbSizeRange, elements.orbSizeOutput]
  ].forEach(([key, input, output]) => {
    input.addEventListener("input", () => {
      state.effects[key] = clampEffect(key, Number(input.value));
      output.value = formatEffectOutput(key, state.effects[key]);
      renderEffects();
      scheduleSave();
    });
  });

  elements.orbCoordinatePad.addEventListener("pointerdown", onCoordinatePointerDown);
  elements.orbCoordinatePad.addEventListener("pointermove", onCoordinatePointerMove);
  elements.orbCoordinatePad.addEventListener("pointerup", onCoordinatePointerUp);
  elements.orbCoordinatePad.addEventListener("pointercancel", onCoordinatePointerUp);
  elements.orbCoordinatePad.addEventListener("keydown", onCoordinateKeyDown);
  elements.resetButton.addEventListener("click", resetProject);
  elements.stage.addEventListener("pointerdown", onPointerDown);
  elements.stage.addEventListener("pointermove", onPointerMove);
  elements.stage.addEventListener("pointerup", onPointerUp);
  elements.stage.addEventListener("pointercancel", onPointerUp);
  elements.stage.addEventListener("pointerleave", onPointerLeave);
}

function activatePanel(tabName) {
  document.querySelectorAll(".tab-button").forEach((button) => {
    const isActive = button.dataset.tab === tabName;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });
  document.querySelectorAll(".panel-page").forEach((panel) => {
    panel.classList.toggle("is-active", panel.dataset.panel === tabName);
  });
}

function togglePanel() {
  setPanelCollapsed(!elements.app.classList.contains("is-panel-collapsed"));
}

function setPanelCollapsed(collapsed) {
  elements.app.classList.toggle("is-panel-collapsed", collapsed);
  elements.panel.hidden = collapsed;
  elements.panel.inert = collapsed;
  elements.panelToggle.style.bottom = collapsed ? "16px" : "";
  if (collapsed) {
    setHelpOpen(false);
  }
  elements.panelToggle.setAttribute("aria-expanded", String(!collapsed));
  elements.panelToggle.setAttribute("aria-label", t(collapsed ? "expandPanel" : "collapsePanel"));
}

function cycleLanguage() {
  const currentIndex = LANGUAGE_ORDER.indexOf(state.language);
  const nextLanguage = LANGUAGE_ORDER[(currentIndex + 1 + LANGUAGE_ORDER.length) % LANGUAGE_ORDER.length];
  setLanguage(nextLanguage);
}

function setLanguage(language) {
  if (!LANGUAGES[language]) {
    return;
  }
  state.language = language;
  state.languageVersion = LANGUAGE_STATE_VERSION;
  const scene = LANGUAGES[language].scene;
  state.eyebrow = FIXED_EYEBROW;
  state.headline = scene.headline;
  state.caption = "";
  applyLanguage(true);
  applyStateToInputs();
  renderAll();
  scheduleSave();
}

function toggleHelp() {
  setHelpOpen(elements.helpPopover.hidden);
}

function setHelpOpen(open) {
  elements.helpPopover.hidden = !open;
  elements.helpButton.setAttribute("aria-expanded", String(open));
}

async function addOrbFiles(files) {
  const validFiles = files.filter((file) => file.type.startsWith("image/") || file.type.startsWith("video/"));
  if (!validFiles.length) {
    return;
  }

  if (!hasCustomOrbItems && orbItems.every((item) => item.builtin)) {
    orbItems = [];
    state.activeIndex = 0;
  }

  const openSlots = Math.max(0, MAX_ITEMS - orbItems.length);
  const selectedFiles = validFiles.slice(0, openSlots);
  const additions = await Promise.all(selectedFiles.map(storeFileAsItem));
  orbItems = [...orbItems, ...additions].slice(0, MAX_ITEMS);
  hasCustomOrbItems = true;
  state.activeIndex = clamp(orbItems.length - additions.length, 0, orbItems.length - 1);
  renderAll();
  scheduleSave();
}

async function setBackgroundFile(file) {
  if (!file.type.startsWith("image/") && !file.type.startsWith("video/")) {
    return;
  }
  backgroundItem = await storeFileAsItem(file, "background");
  state.syncBackground = false;
  elements.syncBackground.checked = false;
  renderBackground();
  scheduleSave();
}

async function storeFileAsItem(file, prefix = "orb") {
  const id = `${prefix}-${crypto.randomUUID()}`;
  const dbKey = id;
  await db.put(dbKey, {
    name: file.name,
    type: file.type,
    blob: file,
    createdAt: Date.now()
  });
  const url = URL.createObjectURL(file);
  mediaUrls.set(dbKey, url);
  return {
    id,
    dbKey,
    name: prefix === "background" ? "底层素材" : "素材",
    type: fileType(file),
    url,
    builtin: false
  };
}

function removeOrbItem(index) {
  if (orbItems.length <= 1) {
    return;
  }
  const [removed] = orbItems.splice(index, 1);
  if (removed?.dbKey) {
    db.delete(removed.dbKey);
    revokeMediaUrl(removed.dbKey);
  }
  state.activeIndex = clamp(state.activeIndex, 0, orbItems.length - 1);
  renderAll();
  scheduleSave();
}

function setActiveIndex(index) {
  const normalized = wrapIndex(index, orbItems.length);
  if (normalized === state.activeIndex) {
    return;
  }
  state.activeIndex = normalized;
  renderAll();
  scheduleSave();
}

function renderAll() {
  applyLanguage(false);
  renderText();
  renderEffects();
  renderAssets();
  renderActiveOrb();
  renderBackground();
}

function renderText() {
  state.eyebrow = FIXED_EYEBROW;
  state.caption = "";
  const textSize = clamp(Number(state.textSize) || DEFAULT_STATE.textSize, 50, 150);
  state.textSize = textSize;
  elements.eyebrowText.textContent = FIXED_EYEBROW;
  elements.headlineText.textContent = state.headline || "";
  elements.textSizeRange.value = textSize;
  elements.textSizeOutput.value = `${textSize}%`;
  document.documentElement.style.setProperty("--text-scale", String(textSize / 100));
}

function renderEffects() {
  const fisheye = clampEffect("fisheye", state.effects.fisheye);
  const reflection = clampEffect("reflection", state.effects.reflection);
  const zoom = clampEffect("zoom", state.effects.zoom);
  const orbX = clampEffect("orbX", state.effects.orbX ?? DEFAULT_STATE.effects.orbX);
  const orbY = clampEffect("orbY", state.effects.orbY ?? DEFAULT_STATE.effects.orbY);
  const orbSize = clampEffect("orbSize", state.effects.orbSize ?? DEFAULT_STATE.effects.orbSize);
  state.effects.fisheye = fisheye;
  state.effects.reflection = reflection;
  state.effects.zoom = zoom;
  state.effects.orbX = orbX;
  state.effects.orbY = orbY;
  state.effects.orbSize = orbSize;

  elements.fisheyeRange.value = fisheye;
  elements.reflectionRange.value = reflection;
  elements.zoomRange.value = zoom;
  elements.orbXRange.value = orbX;
  elements.orbYRange.value = orbY;
  elements.orbSizeRange.value = orbSize;
  elements.fisheyeOutput.value = formatEffectOutput("fisheye", fisheye);
  elements.reflectionOutput.value = formatEffectOutput("reflection", reflection);
  elements.zoomOutput.value = formatEffectOutput("zoom", zoom);
  elements.orbXOutput.value = formatEffectOutput("orbX", orbX);
  elements.orbYOutput.value = formatEffectOutput("orbY", orbY);
  elements.orbSizeOutput.value = formatEffectOutput("orbSize", orbSize);
  elements.orbCoordinateOutput.value = `X ${formatSigned(orbX)} / Y ${formatSigned(orbY)}`;
  elements.orbCoordinatePoint.style.left = `${coordinateRatio("orbX", orbX) * 100}%`;
  elements.orbCoordinatePoint.style.top = `${coordinateRatio("orbY", orbY) * 100}%`;
  elements.orbCoordinatePad.setAttribute("aria-valuetext", elements.orbCoordinateOutput.value);

  document.documentElement.style.setProperty("--reflection-strength", String(reflection / 100));
  document.documentElement.style.setProperty("--orb-offset-y", `${orbY}px`);
  document.documentElement.style.setProperty("--orb-offset-x", `${orbX}px`);
  document.documentElement.style.setProperty("--orb-size", `${orbSize}%`);
  renderer?.setEffects({
    fisheye: fisheye / 100,
    reflection: reflection / 100,
    zoom: zoom / 100
  });
}

function renderAssets() {
  elements.assetStrip.replaceChildren(...orbItems.map(createAssetTile));
  const full = orbItems.length >= MAX_ITEMS;
  const uploadLabel = document.querySelector("label[for='orbUpload']");
  elements.orbUpload.disabled = full;
  uploadLabel.classList.toggle("is-disabled", full);
}

function createAssetTile(item, index) {
  const tile = document.createElement("div");
  tile.className = "asset-tile";

  const select = document.createElement("button");
  select.type = "button";
  select.className = `asset-select${index === state.activeIndex ? " is-active" : ""}`;
  select.dataset.assetIndex = String(index);
  select.setAttribute("aria-label", `${t("selectAsset")} ${index + 1}`);

  const thumb = document.createElement("span");
  thumb.className = "asset-thumb";
  const preview = createMediaElement(item, false);
  preview.muted = true;
  thumb.append(preview);

  const kind = document.createElement("span");
  kind.className = "asset-kind";
  kind.textContent = item.type === "video" ? "VIDEO" : "IMAGE";
  thumb.append(kind);

  const remove = document.createElement("button");
  remove.className = "asset-remove";
  remove.type = "button";
  remove.dataset.removeIndex = String(index);
  remove.disabled = orbItems.length <= 1;
  remove.setAttribute("aria-label", `${t("removeAsset")} ${index + 1}`);
  remove.innerHTML = `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 6l12 12" />
      <path d="M18 6 6 18" />
    </svg>
  `;

  select.append(thumb);
  tile.append(select, remove);
  return tile;
}

async function renderActiveOrb() {
  const item = orbItems[state.activeIndex];
  if (!item) {
    return;
  }

  elements.slideCounter.textContent = `${state.activeIndex + 1}/${orbItems.length}`;
  elements.activeAssetName.textContent = "";
  elements.fallback.replaceChildren(createMediaElement(item, true));

  if (item.type === "video") {
    orbVideo.src = item.url;
    if (item.poster) {
      orbVideo.poster = item.poster;
    } else {
      orbVideo.removeAttribute("poster");
    }
    renderer?.setSource(orbVideo);
    await playVideo(orbVideo);
  } else {
    orbVideo.pause();
    orbImage.src = item.url;
    renderer?.setSource(orbImage);
  }
}

async function renderBackground() {
  const item = state.syncBackground ? orbItems[state.activeIndex] : backgroundItem;
  if (!item) {
    return;
  }

  if (item.type === "video") {
    elements.backgroundImage.hidden = true;
    elements.backgroundVideo.hidden = false;
    if (elements.backgroundVideo.src !== absoluteUrl(item.url)) {
      elements.backgroundVideo.src = item.url;
    }
    await playVideo(elements.backgroundVideo);
  } else {
    elements.backgroundVideo.pause();
    elements.backgroundVideo.hidden = true;
    elements.backgroundImage.hidden = false;
    elements.backgroundImage.src = item.url;
  }
}

function createMediaElement(item, autoplay) {
  if (item.type === "video") {
    const video = document.createElement("video");
    video.src = item.url;
    if (item.poster) {
      video.poster = item.poster;
    }
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.preload = "metadata";
    if (autoplay) {
      video.autoplay = true;
      playVideo(video);
    }
    return video;
  }

  const image = document.createElement("img");
  image.src = item.url;
  image.alt = "";
  image.loading = "lazy";
  return image;
}

function applyStateToInputs() {
  state.eyebrow = FIXED_EYEBROW;
  state.caption = "";
  state.textSize = clamp(Number(state.textSize) || DEFAULT_STATE.textSize, 50, 150);
  elements.headlineInput.value = state.headline;
  elements.textSizeRange.value = state.textSize;
  elements.textSizeOutput.value = `${state.textSize}%`;
  elements.syncBackground.checked = state.syncBackground;
}

function applyLanguage(updateSceneText) {
  const language = LANGUAGES[state.language] ? state.language : "zh";
  const dictionary = LANGUAGES[language];
  document.documentElement.lang = dictionary.htmlLang;

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = dictionary.ui[node.dataset.i18n] || node.textContent;
  });

  elements.languageCycle.textContent = dictionary.label;
  elements.languageCycle.setAttribute("aria-label", dictionary.ui.languageButton);
  elements.helpButton.setAttribute("aria-label", dictionary.ui.helpButton);
  elements.helpGuideLink.href = dictionary.ui.helpGuideHref;
  elements.followLink.textContent = dictionary.ui.follow;
  elements.stage.setAttribute("aria-label", dictionary.ui.stageLabel);
  elements.panel.setAttribute("aria-label", dictionary.ui.panelLabel);
  elements.assetStrip.setAttribute("aria-label", dictionary.ui.assetList);
  elements.orbCoordinatePad.setAttribute("aria-label", dictionary.ui.orbCoordinateLabel);
  elements.panelToggle.setAttribute(
    "aria-label",
    t(elements.app.classList.contains("is-panel-collapsed") ? "expandPanel" : "collapsePanel")
  );

  if (updateSceneText) {
    renderText();
  }
}

function t(key) {
  const language = LANGUAGES[state.language] ? state.language : "zh";
  return LANGUAGES[language].ui[key] || LANGUAGES.zh.ui[key] || key;
}

function isKnownLocalizedHeadline(headline) {
  return Object.values(LANGUAGES).some((language) => language.scene.headline === headline);
}

function formatEffectOutput(key, value) {
  if (key === "orbSize") {
    return `${value}%`;
  }
  if (key === "orbX" || key === "orbY") {
    return `${formatSigned(value)}px`;
  }
  if (key === "fisheye") {
    return formatSigned(value);
  }
  return String(value);
}

function formatSigned(value) {
  return value > 0 ? `+${value}` : String(value);
}

function clampEffect(key, value) {
  const [min, max] = EFFECT_LIMITS[key];
  const fallback = DEFAULT_STATE.effects[key] ?? 0;
  const numericValue = Number.isFinite(Number(value)) ? Number(value) : fallback;
  return clamp(numericValue, min, max);
}

function coordinateRatio(key, value) {
  const [min, max] = EFFECT_LIMITS[key];
  return clamp((value - min) / (max - min), 0, 1);
}

function onPointerDown(event) {
  if (event.target.closest(".studio-panel") || event.target.closest(".rabbit-toggle") || event.target.closest(".follow-link")) {
    return;
  }
  activeDrag = {
    x: event.clientX,
    y: event.clientY,
    moved: false
  };
  elements.stage.setPointerCapture?.(event.pointerId);
  updatePointerVisual(event);
}

function onPointerMove(event) {
  updatePointerVisual(event);
  if (!activeDrag) {
    return;
  }

  const distanceX = event.clientX - activeDrag.x;
  const distanceY = event.clientY - activeDrag.y;
  if (Math.abs(distanceX) > 12 || Math.abs(distanceY) > 12) {
    activeDrag.moved = true;
  }
}

function onPointerUp(event) {
  if (!activeDrag) {
    return;
  }

  const distanceX = event.clientX - activeDrag.x;
  const distanceY = event.clientY - activeDrag.y;
  const isHorizontal = Math.abs(distanceX) > 52 && Math.abs(distanceX) > Math.abs(distanceY) * 1.35;
  if (isHorizontal) {
    setActiveIndex(state.activeIndex + (distanceX < 0 ? 1 : -1));
  }
  activeDrag = null;
}

function onPointerLeave() {
  elements.featherCursor.style.opacity = "0";
  elements.orb.style.setProperty("--orb-tilt-x", "0deg");
  elements.orb.style.setProperty("--orb-tilt-y", "0deg");
}

function updatePointerVisual(event) {
  const rect = elements.stage.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  const px = clamp(x / rect.width, 0, 1);
  const py = clamp(y / rect.height, 0, 1);

  elements.stage.style.setProperty("--cursor-x", `${x - 8}px`);
  elements.stage.style.setProperty("--cursor-y", `${y - 6}px`);
  elements.featherCursor.style.opacity = "1";
  elements.orb.style.setProperty("--orb-tilt-x", `${(0.5 - py) * 8}deg`);
  elements.orb.style.setProperty("--orb-tilt-y", `${(px - 0.5) * 8}deg`);
  document.documentElement.style.setProperty("--orb-shine-x", `${30 + px * 26}%`);
  document.documentElement.style.setProperty("--orb-shine-y", `${8 + py * 18}%`);
}

function onCoordinatePointerDown(event) {
  activeCoordinateDrag = true;
  elements.orbCoordinatePad.setPointerCapture?.(event.pointerId);
  updateCoordinateFromPointer(event);
}

function onCoordinatePointerMove(event) {
  if (!activeCoordinateDrag) {
    return;
  }
  updateCoordinateFromPointer(event);
}

function onCoordinatePointerUp(event) {
  activeCoordinateDrag = false;
  elements.orbCoordinatePad.releasePointerCapture?.(event.pointerId);
}

function updateCoordinateFromPointer(event) {
  event.preventDefault();
  const rect = elements.orbCoordinatePad.getBoundingClientRect();
  const px = clamp((event.clientX - rect.left) / rect.width, 0, 1);
  const py = clamp((event.clientY - rect.top) / rect.height, 0, 1);
  const [xMin, xMax] = EFFECT_LIMITS.orbX;
  const [yMin, yMax] = EFFECT_LIMITS.orbY;
  setOrbCoordinates(Math.round(xMin + px * (xMax - xMin)), Math.round(yMin + py * (yMax - yMin)));
}

function onCoordinateKeyDown(event) {
  const step = event.shiftKey ? 24 : 8;
  const keyMoves = {
    ArrowLeft: [-step, 0],
    ArrowRight: [step, 0],
    ArrowUp: [0, -step],
    ArrowDown: [0, step]
  };
  const move = keyMoves[event.key];
  if (!move) {
    return;
  }
  event.preventDefault();
  setOrbCoordinates((state.effects.orbX || 0) + move[0], (state.effects.orbY || 0) + move[1]);
}

function setOrbCoordinates(x, y) {
  state.effects.orbX = clampEffect("orbX", x);
  state.effects.orbY = clampEffect("orbY", y);
  renderEffects();
  scheduleSave();
}

function scheduleSave() {
  clearTimeout(saveTimer);
  saveTimer = window.setTimeout(saveProject, 160);
}

function saveProject() {
  const payload = {
    state: {
      ...state,
      languageVersion: LANGUAGE_STATE_VERSION,
      eyebrow: FIXED_EYEBROW,
      caption: "",
      textSize: clamp(Number(state.textSize) || DEFAULT_STATE.textSize, 50, 150),
      effects: serializeEffects(state.effects)
    },
    orbItems: orbItems.map(serializeItem),
    backgroundItem: serializeItem(backgroundItem)
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
}

function serializeItem(item) {
  if (!item) {
    return null;
  }
  if (item.builtin) {
    return { ...item };
  }
  const { url, ...rest } = item;
  return rest;
}

function serializeEffects(effects) {
  return Object.fromEntries(
    Object.keys(DEFAULT_STATE.effects).map((key) => [key, clampEffect(key, effects?.[key] ?? DEFAULT_STATE.effects[key])])
  );
}

function restoreBuiltinItem(item) {
  const builtin = [...DEFAULT_ITEMS, DEFAULT_BACKGROUND].find((candidate) => candidate.id === item.id);
  return {
    ...(builtin || {}),
    ...item,
    url: builtin?.url || item.url,
    poster: builtin?.poster || ""
  };
}

async function resetProject() {
  localStorage.removeItem(STORAGE_KEY);
  await db.clear();
  for (const key of mediaUrls.keys()) {
    revokeMediaUrl(key);
  }
  state = structuredClone(DEFAULT_STATE);
  orbItems = structuredClone(DEFAULT_ITEMS);
  backgroundItem = structuredClone(DEFAULT_BACKGROUND);
  hasCustomOrbItems = false;
  applyStateToInputs();
  renderAll();
}

function createMediaDB() {
  let databasePromise = null;

  function open() {
    if (databasePromise) {
      return databasePromise;
    }

    databasePromise = new Promise((resolve, reject) => {
      const request = indexedDB.open(DB_NAME, 1);
      request.onupgradeneeded = () => {
        request.result.createObjectStore(STORE_NAME);
      };
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
    return databasePromise;
  }

  async function withStore(mode, callback) {
    const database = await open();
    return new Promise((resolve, reject) => {
      const transaction = database.transaction(STORE_NAME, mode);
      const store = transaction.objectStore(STORE_NAME);
      const request = callback(store);
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

  return {
    get(key) {
      return withStore("readonly", (store) => store.get(key));
    },
    put(key, value) {
      return withStore("readwrite", (store) => store.put(value, key));
    },
    delete(key) {
      return withStore("readwrite", (store) => store.delete(key));
    },
    clear() {
      return withStore("readwrite", (store) => store.clear());
    }
  };
}

function isDrawable(source) {
  if (source instanceof HTMLVideoElement) {
    return source.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA;
  }
  if (source instanceof HTMLImageElement) {
    return source.complete && source.naturalWidth > 0;
  }
  return false;
}

function fileType(file) {
  return file.type.startsWith("video/") ? "video" : "image";
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function wrapIndex(index, length) {
  return ((index % length) + length) % length;
}

function playVideo(video) {
  return video.play().catch(() => undefined);
}

function revokeMediaUrl(key) {
  const url = mediaUrls.get(key);
  if (url) {
    URL.revokeObjectURL(url);
    mediaUrls.delete(key);
  }
}

function absoluteUrl(url) {
  return new URL(url, window.location.href).href;
}
