/* WESCAN NIGHT SHIFT v2 — verificación de órdenes, 100 % local y sin conexión. */
'use strict';

/* ---------------- i18n ---------------- */
const I18N = {
  es: {
    tOrder:'Orden', tScan:'Escanear', tReview:'Revisión', tLib:'Biblioteca', tSettings:'Ajustes',
    online:'En línea', offline:'Sin conexión', protectedData:'Datos protegidos', unprotectedData:'Datos sin proteger',
    orderTitle:'Orden / Pick Slip', orderNo:'Número de orden', totalPages:'Total de páginas',
    newOrder:'+ Nueva orden', savedOrders:'Órdenes guardadas',
    loadInvoice:'1 · Cargar invoice', loadInvoiceHint:'Foto recta, con buena luz y el papel plano. El texto se lee en el teléfono, sin internet. Revisa cada renglón antes de guardarlo.',
    invoicePage:'Página del invoice', takePhoto:'📷 Tomar foto', choosePhoto:'Elegir imagen',
    ocrRaw:'Texto leído (OCR)', reparse:'Volver a interpretar', draftTitle:'Renglones detectados', draftHint:'Corrige código, cantidad y descripción. Solo se guardan los renglones que dejes aquí.',
    addRow:'+ Renglón', saveLines:'Guardar renglones', discard:'Descartar', manualLine:'+ Agregar línea manual',
    linesTitle:'Líneas de la orden', noLines:'Todavía no hay líneas. Carga una foto del invoice o agrega líneas a mano.',
    page:'Pág.', code:'Código', desc:'Descripción', qty:'Cant.', expected:'Esperado', counted:'Contado',
    ocrLoading:'Cargando lector…', ocrReading:'Leyendo texto…', ocrDone:'Listo: {0} renglón(es) detectado(s). Revísalos.', ocrNone:'No detecté renglones con código. Revisa el texto leído o agrega líneas a mano.', ocrFail:'No se pudo leer la imagen: {0}',
    openCamera:'Abrir cámara', closeCamera:'Cerrar cámara', torch:'Linterna', search:'Buscar', codePh:'Escribe o pega el código',
    qtyPerScan:'Cantidad por escaneo', recentScans:'Escaneos recientes', undo:'Deshacer último', noScans:'Aún no hay escaneos en esta orden.',
    mOk:'Coincide con el invoice', mOver:'¡CANTIDAD EXCEDIDA!', mPossible:'Coincidencia POSIBLE — confirma', mNone:'NO está en el invoice',
    mPossibleHint:'El código se parece pero no es idéntico (puede ser error de lectura del invoice o un alias no confirmado). Compara la etiqueta con el papel.',
    mNoneHint:'Se registró como EXTRA. Revisa la etiqueta: puede ser otra orden o un código distinto en la caja.',
    yesThis:'Sí, es este', notThis:'No es ninguno', addToLib:'Guardar en biblioteca', fromLib:'De la biblioteca',
    noOrder:'Primero escribe el número de orden y agrega líneas.',
    reviewTitle:'Revisión final', fOpen:'Pendientes / con problema', fAll:'Todas', fOver:'Excedidas', fExtra:'Extras (no en invoice)',
    sOk:'Completas', sPend:'Pendientes', sOver:'Excedidas', sExtra:'Extras',
    stOk:'OK', stOver:'Excedida', stShort:'Incompleta', stPending:'Pendiente', stException:'Diferencia anotada', stExtra:'Extra',
    plus:'+1', minus:'−1', setQty:'Fijar cantidad', markException:'Anotar diferencia', clearException:'Quitar nota', edit:'Editar', del:'Borrar',
    pagesTitle:'Páginas', pageConfirmed:'Página {0} confirmada.', pageNotReady:'La página {0} tiene {1} línea(s) sin resolver.',
    finalize:'Finalizar orden', exportCsv:'Descargar CSV',
    cannotFinalize:'No se puede finalizar: {0} línea(s) sin resolver y {1} extra(s) sin revisar. Resuélvelas o anota la diferencia.',
    finalized:'Orden finalizada. Se descargaron el reporte CSV y el respaldo.', finalizedBadge:'FINALIZADA',
    newProduct:'+ Producto', libSearchPh:'Buscar código, alias o descripción', libCount:'{0} producto(s) · mostrando {1}', libEmpty:'La biblioteca está vacía. Importa el respaldo de la app anterior en Ajustes.',
    pName:'Nombre', pCode:'Código principal', pAliases:'Alias confirmados (separados por coma)', pPossible:'Alias POSIBLES, sin confirmar (coma)', pRef:'Referencia / página', pPhoto:'Foto', save:'Guardar', cancel:'Cancelar', close:'Cerrar',
    confirmDelete:'¿Borrar "{0}"? Esto no se puede deshacer (salvo con un respaldo).',
    backupTitle:'Respaldo', backupHint:'Todo vive solo en este teléfono. Descarga un respaldo al terminar cada orden (se hace solo al finalizar) y guárdalo en Drive o en la PC.',
    backupNow:'Descargar respaldo', importBackup:'Importar respaldo', backupInfoNever:'Nunca has descargado un respaldo.', backupInfo:'Último respaldo: {0} · cambios desde entonces: {1}',
    backupWarn:'⚠ Hace {0} sin respaldo ({1} cambio(s)). Descarga uno en Ajustes.', backupWarnNever:'⚠ Nunca has descargado un respaldo de la biblioteca. Ve a Ajustes.',
    imported:'Importados: {0} producto(s), {1} orden(es).', importFail:'No se pudo importar: {0}',
    offlineTitle:'Uso sin conexión', persistAsk:'Proteger datos del navegador', persistOk:'El navegador no borrará los datos automáticamente.', persistNo:'El navegador NO concedió protección. Respalda con frecuencia; instalar la app suele ayudar.',
    offlineReady:'Archivos listos sin conexión: {0}/{1}', offlineAllReady:'✔ La app, el OCR y el escáner funcionan en modo avión.', offlineNotReady:'Abre la app con internet una vez para terminar de descargar.',
    scannerEngine:'Escáner: {0}', engineNative:'nativo del teléfono', engineWasm:'ZXing (compatible con iPhone)',
    aboutTitle:'Acerca de', aboutText:'Herramienta personal de apoyo. No se conecta a Wesco ni a Oracle y no envía nada. Verifica siempre contra la etiqueta y el documento original.',
    camError:'No se pudo abrir la cámara: {0}', saved:'Guardado.', deleted:'Borrado.', undone:'Deshecho: {0}', nothingUndo:'Nada que deshacer.',
    exceptionPrompt:'Explica la diferencia (ej. "faltan 2, caja dañada"):', setQtyPrompt:'Cantidad contada:', lineEdit:'Editar línea', lineNew:'Nueva línea',
    orderSwitch:'Abrir', confirmNewOrder:'¿Empezar una orden nueva? La actual queda guardada.', lines:'líneas',
    extraRow:'Código {0} escaneado {1} vez/veces', reviewExtra:'Marcar revisado', reviewedExtra:'Revisado',
    dupLine:'Ese código ya está en la página {0}. ¿Agregarlo de todas formas?',
    draftFlagged:'⚠ {0} renglón(es) en amarillo: el lector no está seguro. Compara con la hoja; para el código toca 📷 y escanea el código de barras impreso junto al artículo.',
    tapZoom:'Toca la foto para ampliarla y compara cantidad por cantidad.',
    draftMissing:'⚠ Parece que {0} artículo(s) de esta página no se leyeron. Cuenta los renglones de la hoja y agrega los que falten con "+ Renglón".',
    draftNoPage:'⚠ No pude leer el número de página. Revisa la columna "Pág." de cada renglón.',
    scanPaper:'Escanear código de la hoja', scanPaperHint:'Apunta al código de barras del artículo en el pick list.',
    flaggedConfirm:'Quedan {0} renglón(es) en amarillo sin revisar. ¿Guardar de todas formas?', skippedDup:'{0} línea(s) ya estaban guardadas (mismo Pick ID) y no se duplicaron.',
  },
  en: {
    tOrder:'Order', tScan:'Scan', tReview:'Review', tLib:'Library', tSettings:'Settings',
    online:'Online', offline:'Offline', protectedData:'Data protected', unprotectedData:'Data not protected',
    orderTitle:'Order / Pick Slip', orderNo:'Order number', totalPages:'Total pages',
    newOrder:'+ New order', savedOrders:'Saved orders',
    loadInvoice:'1 · Load invoice', loadInvoiceHint:'Straight photo, good light, flat paper. Text is read on the phone, no internet. Review every row before saving.',
    invoicePage:'Invoice page', takePhoto:'📷 Take photo', choosePhoto:'Choose image',
    ocrRaw:'Recognized text (OCR)', reparse:'Re-parse', draftTitle:'Detected rows', draftHint:'Fix code, quantity and description. Only rows left here are saved.',
    addRow:'+ Row', saveLines:'Save rows', discard:'Discard', manualLine:'+ Add line manually',
    linesTitle:'Order lines', noLines:'No lines yet. Load an invoice photo or add lines manually.',
    page:'Pg.', code:'Code', desc:'Description', qty:'Qty', expected:'Expected', counted:'Counted',
    ocrLoading:'Loading reader…', ocrReading:'Reading text…', ocrDone:'Done: {0} row(s) detected. Review them.', ocrNone:'No rows with a code detected. Check the text or add lines manually.', ocrFail:'Could not read the image: {0}',
    openCamera:'Open camera', closeCamera:'Close camera', torch:'Torch', search:'Search', codePh:'Type or paste the code',
    qtyPerScan:'Quantity per scan', recentScans:'Recent scans', undo:'Undo last', noScans:'No scans in this order yet.',
    mOk:'Matches the invoice', mOver:'QUANTITY EXCEEDED!', mPossible:'POSSIBLE match — confirm', mNone:'NOT on the invoice',
    mPossibleHint:'The code is similar but not identical (OCR misread or unconfirmed alias). Compare the label with the paper.',
    mNoneHint:'Logged as EXTRA. Check the label: it may belong to another order or carry a different code.',
    yesThis:'Yes, this one', notThis:'None of these', addToLib:'Save to library', fromLib:'From library',
    noOrder:'Enter the order number and add lines first.',
    reviewTitle:'Final review', fOpen:'Pending / with issues', fAll:'All', fOver:'Over', fExtra:'Extras (not on invoice)',
    sOk:'Complete', sPend:'Pending', sOver:'Over', sExtra:'Extras',
    stOk:'OK', stOver:'Over', stShort:'Short', stPending:'Pending', stException:'Difference noted', stExtra:'Extra',
    plus:'+1', minus:'−1', setQty:'Set quantity', markException:'Note difference', clearException:'Clear note', edit:'Edit', del:'Delete',
    pagesTitle:'Pages', pageConfirmed:'Page {0} confirmed.', pageNotReady:'Page {0} has {1} unresolved line(s).',
    finalize:'Finalize order', exportCsv:'Download CSV',
    cannotFinalize:'Cannot finalize: {0} unresolved line(s) and {1} unreviewed extra(s). Resolve them or note the difference.',
    finalized:'Order finalized. CSV report and backup downloaded.', finalizedBadge:'FINALIZED',
    newProduct:'+ Product', libSearchPh:'Search code, alias or description', libCount:'{0} product(s) · showing {1}', libEmpty:'Library is empty. Import the backup from the old app in Settings.',
    pName:'Name', pCode:'Main code', pAliases:'Confirmed aliases (comma separated)', pPossible:'POSSIBLE aliases, unconfirmed (comma)', pRef:'Reference / page', pPhoto:'Photo', save:'Save', cancel:'Cancel', close:'Close',
    confirmDelete:'Delete "{0}"? This cannot be undone (except from a backup).',
    backupTitle:'Backup', backupHint:'Everything lives only on this phone. A backup downloads automatically when you finalize an order; keep it in Drive or on a PC.',
    backupNow:'Download backup', importBackup:'Import backup', backupInfoNever:'You have never downloaded a backup.', backupInfo:'Last backup: {0} · changes since: {1}',
    backupWarn:'⚠ {0} without a backup ({1} change(s)). Download one in Settings.', backupWarnNever:'⚠ You have never backed up the library. Go to Settings.',
    imported:'Imported: {0} product(s), {1} order(s).', importFail:'Import failed: {0}',
    offlineTitle:'Offline use', persistAsk:'Protect browser data', persistOk:'The browser will not clear the data automatically.', persistNo:'The browser did NOT grant protection. Back up often; installing the app usually helps.',
    offlineReady:'Files ready offline: {0}/{1}', offlineAllReady:'✔ App, OCR and scanner work in airplane mode.', offlineNotReady:'Open the app online once to finish downloading.',
    scannerEngine:'Scanner: {0}', engineNative:'phone native', engineWasm:'ZXing (iPhone compatible)',
    aboutTitle:'About', aboutText:'Personal helper tool. It does not connect to Wesco or Oracle and sends nothing. Always verify against the label and the original document.',
    camError:'Could not open the camera: {0}', saved:'Saved.', deleted:'Deleted.', undone:'Undone: {0}', nothingUndo:'Nothing to undo.',
    exceptionPrompt:'Explain the difference (e.g. "2 missing, damaged box"):', setQtyPrompt:'Counted quantity:', lineEdit:'Edit line', lineNew:'New line',
    orderSwitch:'Open', confirmNewOrder:'Start a new order? The current one stays saved.', lines:'lines',
    extraRow:'Code {0} scanned {1} time(s)', reviewExtra:'Mark reviewed', reviewedExtra:'Reviewed',
    dupLine:'That code is already on page {0}. Add it anyway?',
    draftFlagged:'⚠ {0} yellow row(s): the reader is unsure. Compare with the paper; for the code tap 📷 and scan the barcode printed next to the item.',
    tapZoom:'Tap the photo to enlarge it and compare quantity by quantity.',
    draftMissing:'⚠ It looks like {0} item(s) on this page were not read. Count the rows on the paper and add missing ones with "+ Row".',
    draftNoPage:'⚠ Could not read the page number. Check the "Pg." column of each row.',
    scanPaper:'Scan barcode on paper', scanPaperHint:'Point at the item barcode on the pick list.',
    flaggedConfirm:'{0} yellow row(s) not reviewed. Save anyway?', skippedDup:'{0} line(s) were already saved (same Pick ID) and were not duplicated.',
  }
};
let lang = 'es';
const t = (k, ...a) => (I18N[lang][k] ?? I18N.es[k] ?? k).replace(/\{(\d)\}/g, (_, i) => a[i] ?? '');

/* ---------------- utilidades ---------------- */
const $ = (s) => document.querySelector(s);
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c]));
const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
const norm = (s) => String(s ?? '').toUpperCase().replace(/[^A-Z0-9]/g, '');
// Normaliza caracteres que el OCR confunde (O/0, I/L/1, S/5, B/8, Z/2, G/6)
const conf = (s) => norm(s).replace(/O|Q|D/g, '0').replace(/[IL|]/g, '1').replace(/S/g, '5').replace(/B/g, '8').replace(/Z/g, '2').replace(/G/g, '6');
const splitList = (s) => (Array.isArray(s) ? s : String(s ?? '').split(/[,;\n]/)).map((x) => String(x).trim()).filter(Boolean);
const nowIso = () => new Date().toISOString();
const fmtDate = (iso) => { try { return new Date(iso).toLocaleString(lang === 'es' ? 'es' : 'en', { dateStyle: 'short', timeStyle: 'short' }); } catch { return iso; } };

function lev(a, b) {
  if (Math.abs(a.length - b.length) > 2) return 9;
  const d = Array.from({ length: a.length + 1 }, (_, i) => [i]);
  for (let j = 1; j <= b.length; j++) d[0][j] = j;
  for (let i = 1; i <= a.length; i++) for (let j = 1; j <= b.length; j++)
    d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
  return d[a.length][b.length];
}

let toastTimer;
function toast(msg, kind = '') {
  const el = $('#toast'); el.textContent = msg; el.className = 'toast ' + kind;
  clearTimeout(toastTimer); toastTimer = setTimeout(() => el.classList.add('hidden'), 3200);
}

let audioCtx;
function feedback(kind) {
  try {
    audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
    const o = audioCtx.createOscillator(), g = audioCtx.createGain();
    o.connect(g); g.connect(audioCtx.destination);
    const cfg = { ok: [1320, 0.12], possible: [660, 0.25], bad: [220, 0.5] }[kind] || [880, 0.1];
    o.frequency.value = cfg[0]; o.type = kind === 'bad' ? 'square' : 'sine'; g.gain.value = 0.15;
    o.start(); o.stop(audioCtx.currentTime + cfg[1]);
  } catch {}
  if (navigator.vibrate) navigator.vibrate({ ok: 60, possible: [80, 60, 80], bad: [300, 100, 300] }[kind] || 40);
}

function download(name, content, type) {
  const blob = content instanceof Blob ? content : new Blob([content], { type });
  const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = name;
  document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 5000);
}

/* ---------------- IndexedDB ---------------- */
const DB = {
  db: null,
  open() {
    return new Promise((res, rej) => {
      const q = indexedDB.open('WescanNightShift', 1);
      q.onupgradeneeded = () => {
        const d = q.result;
        d.createObjectStore('products', { keyPath: 'id' });
        d.createObjectStore('orders', { keyPath: 'id' });
        d.createObjectStore('meta', { keyPath: 'key' });
      };
      q.onsuccess = () => { this.db = q.result; res(); };
      q.onerror = () => rej(q.error);
    });
  },
  tx(store, mode, fn) {
    return new Promise((res, rej) => {
      const tr = this.db.transaction(store, mode); const st = tr.objectStore(store);
      let out; const r = fn(st); if (r) r.onsuccess = () => { out = r.result; };
      tr.oncomplete = () => res(out); tr.onerror = () => rej(tr.error); tr.onabort = () => rej(tr.error);
    });
  },
  all: (s) => DB.tx(s, 'readonly', (st) => st.getAll()),
  get: (s, k) => DB.tx(s, 'readonly', (st) => st.get(k)),
  put: (s, v) => DB.tx(s, 'readwrite', (st) => st.put(v)),
  del: (s, k) => DB.tx(s, 'readwrite', (st) => st.delete(k)),
  putMany: (s, arr) => DB.tx(s, 'readwrite', (st) => { arr.forEach((v) => st.put(v)); }),
  async meta(k, v) { if (v === undefined) return (await DB.get('meta', k))?.value; return DB.put('meta', { key: k, value: v }); }
};

/* ---------------- estado ---------------- */
let products = [];
let order = null;
let saveTimer;
const newOrder = () => ({ id: 'o-' + uid(), orderNo: '', totalPages: null, createdAt: nowIso(), updatedAt: nowIso(), status: 'open', lines: [], extras: [], scans: [], pagesConfirmed: [] });

function saveOrder() {
  order.updatedAt = nowIso();
  clearTimeout(saveTimer);
  saveTimer = setTimeout(() => DB.put('orders', order).catch((e) => toast(e.message, 'bad')), 250);
}
async function bumpChanges(n = 1) { await DB.meta('changes', ((await DB.meta('changes')) || 0) + n); renderBackupWarn(); }

/* ---------------- estado de líneas ---------------- */
function lineStatus(l) {
  if (l.resolution) return 'exception';
  if (l.counted > l.qty) return 'over';
  if (l.qty > 0 && l.counted === l.qty) return 'ok';
  if (l.counted > 0) return 'short';
  return 'pending';
}
const resolved = (l) => ['ok', 'exception'].includes(lineStatus(l));
const statusLabel = (s) => ({ ok: t('stOk'), over: t('stOver'), short: t('stShort'), pending: t('stPending'), exception: t('stException'), extra: t('stExtra') }[s]);

/* ---------------- productos ---------------- */
function findProductsByCode(code) {
  const c = norm(code); if (!c) return [];
  return products.filter((p) => norm(p.code) === c || (p.aliases || []).some((a) => norm(a) === c));
}
function productForLine(l) {
  const c = norm(l.code);
  return products.find((p) => norm(p.code) === c || (p.aliases || []).some((a) => norm(a) === c));
}

/* ---------------- coincidencias ---------------- */
function matchCode(raw) {
  const c = norm(raw);
  const libHits = findProductsByCode(c);
  const exactSet = new Set([c]);
  const possibleSet = new Set();
  libHits.forEach((p) => {
    exactSet.add(norm(p.code)); (p.aliases || []).forEach((a) => exactSet.add(norm(a)));
    (p.possibleAliases || []).forEach((a) => possibleSet.add(norm(a)));
  });
  // Alias posibles de otros productos que apuntan a este código
  products.forEach((p) => { if ((p.possibleAliases || []).some((a) => norm(a) === c)) { possibleSet.add(norm(p.code)); (p.aliases || []).forEach((a) => possibleSet.add(norm(a))); } });

  const exact = [], possible = [];
  for (const l of order.lines) {
    const L = norm(l.code); if (!L) continue;
    if (exactSet.has(L)) { exact.push(l); continue; }
    let why = null;
    if (possibleSet.has(L)) why = 'alias';
    else for (const x of exactSet) {
      if (x.length < 4) continue;
      if (conf(x) === conf(L)) { why = 'ocr'; break; }
      if (Math.min(x.length, L.length) >= 6 && lev(x, L) === 1) { why = 'ocr'; break; }
      if (Math.min(x.length, L.length) >= 5 && (x.includes(L) || L.includes(x)) && Math.abs(x.length - L.length) <= 6) { why = 'partial'; break; }
    }
    if (why) possible.push({ line: l, why });
  }
  return { code: c, raw: String(raw).trim(), exact, possible, libHits };
}

let lastScan = { code: '', at: 0 };
function handleCode(raw, source = 'manual') {
  if (!order || !order.lines.length) { toast(t('noOrder'), 'warn'); return; }
  const code = norm(raw); if (!code) return;
  if (source === 'camera' && code === lastScan.code && Date.now() - lastScan.at < 2500) return;
  lastScan = { code, at: Date.now() };
  const qty = Math.max(1, parseInt($('#qtyPerScan').value, 10) || 1);
  const m = matchCode(raw);

  if (m.exact.length) {
    const target = m.exact.find((l) => l.counted < l.qty) || m.exact[0];
    applyCount(target, qty, m.raw, 'exact');
    const over = target.counted > target.qty;
    feedback(over ? 'bad' : 'ok');
    showMatch(over ? 'over' : 'ok', m, [target]);
  } else if (m.possible.length) {
    feedback('possible');
    showMatch('possible', m, m.possible.map((p) => p.line), qty);
  } else {
    const ex = order.extras.find((e) => e.code === m.code);
    if (ex) { ex.count += qty; ex.reviewed = false; } else order.extras.push({ code: m.code, raw: m.raw, count: qty, reviewed: false, at: nowIso() });
    order.scans.unshift({ at: nowIso(), code: m.code, kind: 'extra', qty });
    saveOrder(); feedback('bad'); showMatch('none', m, []); renderAll();
  }
}

function applyCount(line, qty, raw, kind) {
  line.counted += qty;
  order.scans.unshift({ at: nowIso(), code: norm(raw), lineId: line.id, kind, qty });
  order.scans = order.scans.slice(0, 500);
  saveOrder(); renderAll();
}

function photoOf(p) { return p?.photo || (p?.images || [])[0] || ''; }

function showMatch(kind, m, lines, qty) {
  const card = $('#matchCard'); card.className = 'card match ' + (kind === 'none' ? 'bad' : kind);
  const title = { ok: '✅ ' + t('mOk'), over: '⛔ ' + t('mOver'), possible: '⚠️ ' + t('mPossible'), none: '❌ ' + t('mNone') }[kind];
  const prod = m.libHits[0] || (lines[0] && productForLine(lines[0]));
  let h = `<h2>${title}</h2><div class="s">${t('code')}: <b>${esc(m.raw)}</b></div>`;
  if (prod) {
    const ph = photoOf(prod);
    h += `<div class="item">${ph ? `<img class="bigphoto" src="${ph}" alt="">` : ''}<div class="t">${esc(prod.name)}</div><div class="s">${esc(prod.description || '')}</div><div class="s">${t('fromLib')} · ${esc(prod.code)}${prod.referencePage ? ' · ' + esc(prod.referencePage) : ''}</div></div>`;
  }
  if (kind === 'ok' || kind === 'over') {
    const l = lines[0];
    h += `<div class="item ${lineStatus(l)}"><div class="t">${t('page')} ${esc(l.page)} · ${esc(l.code)}</div><div class="s">${esc(l.desc)}</div>
      <div class="qty">${l.counted} / ${l.qty}</div></div>`;
  } else if (kind === 'possible') {
    h += `<p class="small">${t('mPossibleHint')}</p>`;
    h += lines.map((l) => `<div class="item"><div class="t">${t('page')} ${esc(l.page)} · ${esc(l.code)}</div><div class="s">${esc(l.desc)}</div><div class="qty">${l.counted} / ${l.qty}</div>
      <div class="r"><button class="btn ok small" data-confirm="${l.id}">${t('yesThis')}</button></div></div>`).join('');
    h += `<div class="row"><button class="btn bad small" data-reject="1">${t('notThis')}</button></div>`;
  } else {
    h += `<p class="small">${t('mNoneHint')}</p>`;
    if (!m.libHits.length) h += `<div class="row"><button class="btn small" data-addlib="${esc(m.raw)}">${t('addToLib')}</button></div>`;
  }
  card.innerHTML = h;
  card.onclick = (e) => {
    const b = e.target.closest('button'); if (!b) return;
    if (b.dataset.confirm) {
      const l = order.lines.find((x) => x.id === b.dataset.confirm);
      applyCount(l, qty || 1, m.raw, 'confirmed');
      feedback(l.counted > l.qty ? 'bad' : 'ok');
      showMatch(l.counted > l.qty ? 'over' : 'ok', m, [l]);
    } else if (b.dataset.reject) {
      handleRejected(m, qty || 1);
    } else if (b.dataset.addlib) {
      editProduct(null, b.dataset.addlib);
    }
  };
  card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}
function handleRejected(m, qty) {
  const ex = order.extras.find((e) => e.code === m.code);
  if (ex) { ex.count += qty; ex.reviewed = false; } else order.extras.push({ code: m.code, raw: m.raw, count: qty, reviewed: false, at: nowIso() });
  order.scans.unshift({ at: nowIso(), code: m.code, kind: 'extra', qty });
  saveOrder(); feedback('bad'); showMatch('none', m, []); renderAll();
}

function undoLast() {
  const s = order?.scans?.[0]; if (!s) { toast(t('nothingUndo')); return; }
  order.scans.shift();
  if (s.kind === 'extra') {
    const ex = order.extras.find((e) => e.code === s.code);
    if (ex) { ex.count -= s.qty; if (ex.count <= 0) order.extras = order.extras.filter((e) => e !== ex); }
  } else {
    const l = order.lines.find((x) => x.id === s.lineId); if (l) l.counted = Math.max(0, l.counted - s.qty);
  }
  saveOrder(); renderAll(); $('#matchCard').classList.add('hidden'); toast(t('undone', s.code), 'warn');
}

/* ---------------- cámara / escáner ---------------- */
const FORMATS = ['code_128', 'code_39', 'code_93', 'codabar', 'ean_13', 'ean_8', 'upc_a', 'upc_e', 'itf', 'qr_code', 'data_matrix', 'pdf417'];
let detector = null, detectorEngine = '', stream = null, scanning = false;
async function getDetector() {
  if (detector) return detector;
  if ('BarcodeDetector' in window) {
    try {
      const sup = await window.BarcodeDetector.getSupportedFormats();
      const f = FORMATS.filter((x) => sup.includes(x));
      if (f.length) { detector = new window.BarcodeDetector({ formats: f }); detectorEngine = 'native'; return detector; }
    } catch {}
  }
  detector = new BarcodeDetectionAPI.BarcodeDetector({ formats: FORMATS }); detectorEngine = 'wasm';
  return detector;
}

async function startCamera() {
  try {
    await getDetector();
    stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: { ideal: 'environment' }, width: { ideal: 1920 }, height: { ideal: 1080 } }, audio: false });
    const v = $('#video'); v.srcObject = stream; await v.play();
    $('#videoWrap').classList.remove('hidden'); $('#camBtn').textContent = t('closeCamera');
    const track = stream.getVideoTracks()[0];
    const caps = track.getCapabilities ? track.getCapabilities() : {};
    $('#torchBtn').classList.toggle('hidden', !caps.torch);
    scanning = true; scanLoop();
  } catch (e) { toast(t('camError', e.message || e.name), 'bad'); stopCamera(); }
}
function stopCamera() {
  scanning = false;
  if (stream) stream.getTracks().forEach((tr) => tr.stop()); stream = null;
  $('#videoWrap').classList.add('hidden'); $('#camBtn').textContent = t('openCamera');
}
let torchOn = false;
async function toggleTorch() {
  const track = stream?.getVideoTracks()[0]; if (!track) return;
  torchOn = !torchOn; try { await track.applyConstraints({ advanced: [{ torch: torchOn }] }); } catch {}
}
const cropCanvas = document.createElement('canvas');
async function scanLoop() {
  const v = $('#video');
  while (scanning) {
    if (v.readyState >= 2 && v.videoWidth) {
      // Solo se lee la zona del recuadro: evita contar la etiqueta equivocada cuando la caja tiene varias.
      const vw = v.videoWidth, vh = v.videoHeight;
      const sx = vw * 0.05, sw = vw * 0.9, sy = vh * 0.3, sh = vh * 0.4;
      cropCanvas.width = sw; cropCanvas.height = sh;
      cropCanvas.getContext('2d', { willReadFrequently: true }).drawImage(v, sx, sy, sw, sh, 0, 0, sw, sh);
      try {
        const codes = await detector.detect(cropCanvas);
        if (codes.length) {
          const cx = sw / 2, cy = sh / 2;
          codes.sort((a, b) => dist(a, cx, cy) - dist(b, cx, cy));
          const val = codes[0].rawValue;
          if (val) { handleCode(val, 'camera'); await sleep(900); }
        }
      } catch {}
    }
    await sleep(110);
  }
}
const dist = (c, x, y) => { const b = c.boundingBox || { x: 0, y: 0, width: 0, height: 0 }; return Math.hypot(b.x + b.width / 2 - x, b.y + b.height / 2 - y); };
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/* ---------------- OCR ---------------- */
let ocrWorker = null;
const abs = (p) => new URL(p, location.href).href;
async function getOcr() {
  if (ocrWorker) return ocrWorker;
  ocrWorker = await Tesseract.createWorker('eng', 1, {
    workerPath: abs('vendor/tesseract/worker.min.js'),
    corePath: abs('vendor/tesseract/core'),
    langPath: abs('vendor/tesseract/lang'),
    workerBlobURL: false,
    gzip: true,
    logger: (m) => ocrProgress(m)
  });
  await ocrWorker.setParameters({ tessedit_pageseg_mode: '6', preserve_interword_spaces: '1' });
  return ocrWorker;
}
function ocrProgress(m) {
  const box = $('#ocrProgress'); box.classList.remove('hidden');
  const pct = Math.round((m.progress || 0) * 100);
  box.querySelector('div').style.width = pct + '%';
  box.querySelector('span').textContent = (m.status === 'recognizing text' ? t('ocrReading') : t('ocrLoading')) + ' ' + pct + '%';
}

async function prepImage(file) {
  const bmp = await createImageBitmap(file, { imageOrientation: 'from-image' }).catch(() => createImageBitmap(file));
  // Tesseract lee mejor letras de ~30 px: llevar el lado largo a ~3200 px (agranda fotos comprimidas, achica las enormes)
  const k = Math.min(2.5, 3200 / Math.max(bmp.width, bmp.height));
  const w = Math.round(bmp.width * k), h = Math.round(bmp.height * k);
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  const ctx = c.getContext('2d', { willReadFrequently: true }); ctx.drawImage(bmp, 0, 0, w, h);
  const img = ctx.getImageData(0, 0, w, h), d = img.data, hist = new Uint32Array(256);
  for (let i = 0; i < d.length; i += 4) { const g = (d[i] * 0.299 + d[i + 1] * 0.587 + d[i + 2] * 0.114) | 0; d[i] = g; hist[g]++; }
  // Estirar contraste entre percentil 2 y 98
  const total = w * h; let acc = 0, lo = 0, hi = 255;
  for (let i = 0; i < 256; i++) { acc += hist[i]; if (acc > total * 0.02) { lo = i; break; } }
  acc = 0; for (let i = 255; i >= 0; i--) { acc += hist[i]; if (acc > total * 0.02) { hi = i; break; } }
  const span = Math.max(1, hi - lo);
  for (let i = 0; i < d.length; i += 4) { const v = Math.max(0, Math.min(255, ((d[i] - lo) * 255) / span)); d[i] = d[i + 1] = d[i + 2] = v; }
  ctx.putImageData(img, 0, 0);
  return c;
}

async function runOcr(file) {
  if (!file) return;
  try {
    ocrProgress({ status: 'loading', progress: 0 });
    const img = $('#draftImg'); if (img.src) URL.revokeObjectURL(img.src);
    img.src = URL.createObjectURL(file); img.classList.remove('hidden', 'zoom');
    const canvas = await prepImage(file);
    const w = await getOcr();
    const { data } = await w.recognize(canvas, {}, { text: true, blocks: true });
    $('#ocrRaw').value = data.text; $('#ocrRawBox').classList.remove('hidden');
    lastOcrLines = ocrLines(data);
    const rows = parseAny(data.text, lastOcrLines, parseInt($('#ocrPage').value, 10) || 1);
    draftNotes = { missing: rows.missing || 0, noPage: rows.pageFound === false };
    setDraft(rows);
    toast(rows.length ? t('ocrDone', rows.length) : t('ocrNone'), rows.length ? 'ok' : 'warn');
  } catch (e) {
    toast(t('ocrFail', e.message || e), 'bad');
  } finally {
    $('#ocrProgress').classList.add('hidden');
  }
}

/* ---- Oracle "Move Order Pick List" ---- */
let lastOcrLines = null;
function ocrLines(data) {
  const out = [];
  (data.blocks || []).forEach((b) => (b.paragraphs || []).forEach((p) => (p.lines || []).forEach((l) => {
    out.push({ text: (l.text || '').replace(/\n/g, ' ').trim(), words: (l.words || []).map((w) => ({ text: w.text, conf: w.confidence })) });
  })));
  return out.length ? out : null;
}
function parseAny(text, lines, page) {
  if (/pick\s*(list|slip)|move\s*order|IAD\d{3}/i.test(text)) {
    const rows = parseOracle(lines || text.split(/\r?\n/).map((t) => ({ text: t, words: [] })), page);
    if (rows.length) return rows;
  }
  return parseInvoice(text, page);
}
// Repara lecturas típicas de dígitos: el artículo Oracle es 7 dígitos y empieza con 8.
const DIGIT_FIX = { O: '0', o: '0', D: '0', Q: '0', U: '0', I: '1', l: '1', i: '1', '|': '1', '!': '1', Z: '2', z: '2', S: '5', s: '5', G: '6', b: '6', T: '7', B: '8', a: '8', g: '9', q: '9' };
function fixDigits(tok) { return [...tok].map((c) => (/\d/.test(c) ? c : DIGIT_FIX[c] ?? c)).join(''); }
function repairItem(tok) {
  let t = fixDigits(tok.replace(/[^A-Za-z0-9|!]/g, ''));
  let repaired = t !== tok;
  if (t.length === 7 && /^\d{7}$/.test(t) && t[0] !== '8' && /[53a&sS6]/.test(tok[0])) { t = '8' + t.slice(1); repaired = true; }
  return { code: t, valid: /^8\d{6}$/.test(t), repaired };
}
const LOCATOR = /^[|lI1]?AD\S*\d\.\d|^IAD|^[A-Z]{1,2}\d{2}-?$|^\d{2}$|^[A-Z]\d{2}$|packing/i;
function parseOracle(lines, fallbackPage) {
  const all = lines.map((l) => l.text).join('\n');
  // Página y totales del encabezado
  const pm = all.match(/page\s*(\d{1,2})\s*(?:of|0f|ot)\s*(\d{1,2})/i) || all.match(/slip\s*page\D{0,3}(\d{1,2})\s*[/\\l1|]\s*(\d{2})/i);
  const page = pm ? +pm[1] : fallbackPage;
  if (pm && order && !order.totalPages && +pm[2] < 100) { order.totalPages = +pm[2]; $('#totalPages').value = pm[2]; saveOrder(); }
  const sm = all.match(/pick\s*s\S{0,3}p\D{0,6}(\d{8})/i);
  if (sm && order && !order.orderNo) { order.orderNo = sm[1]; $('#orderNo').value = sm[1]; saveOrder(); }
  if (pm) $('#ocrPage').value = page;

  const rows = [];
  for (let i = 0; i < lines.length; i++) {
    const tk = lines[i].text.split(/\s+/).filter(Boolean);
    let ui = tk.findIndex((x, j) => j > 0 && /^[£E€F][AaN4]\.?$|^(EA|ea|Ea|eA|FA|EN|PC|FT|CS)\.?$/.test(x) && x.length <= 3);
    if (ui < 0) {
      // Sin "EA" legible: anclar en la subinventario (IAD501PROJ / IAD501STG) y tomar el número que sigue
      const si = tk.map((x) => /ST[GC6]|PRO[JY]/i.test(x)).lastIndexOf(true);
      if (si < 0) continue;
      ui = tk.findIndex((x, j) => j > si && /^\d/.test(x)) - 1;
      if (ui < si) continue;
    }
    // artículo: primer token de 6-8 caracteres "casi numérico" antes de la unidad
    let item = null, itemTok = null;
    for (let j = 0; j < ui; j++) {
      const raw = tk[j].replace(/[^A-Za-z0-9|!&]/g, '');
      if (raw.length >= 6 && raw.length <= 8 && (raw.match(/\d/g) || []).length >= 4) { item = repairItem(raw); itemTok = tk[j]; break; }
    }
    if (!item) continue;
    const qTok = tk[ui + 1] || '';
    const qm = qTok.replace(/[oO]/g, '0').match(/^(\d{1,3}(?:[,.]\d{3})+|\d+)$/);
    const qty = qm ? parseInt(qm[1].replace(/[,.]/g, ''), 10) : NaN;
    const confOf = (tok) => (lines[i].words.find((w) => w.text === tok) || {}).conf;
    const wordConf = confOf(itemTok), qtyConf = confOf(qTok);
    // siguientes renglones: Pick ID (9 dígitos) + descripción + ubicación
    let pickId = '', desc = [], locator = '';
    for (let k = i + 1; k < Math.min(lines.length, i + 7); k++) {
      const t = lines[k].text;
      if (/serial|numbers|^open\b/i.test(t) || (/ST[GC6]|PRO[JY]/i.test(t) && k > i + 1)) break;
      const ws = t.split(/\s+/).filter(Boolean);
      // La descripción empieza en el renglón del Pick ID; lo anterior es el código de barras leído como texto.
      let started = !!pickId;
      ws.forEach((w, idx) => {
        const d = fixDigits(w.replace(/[^A-Za-z0-9|]/g, ''));
        if (!pickId && /^\d{8,9}$/.test(d) && idx < 4) { pickId = d.length === 8 ? '1' + d : d; desc = []; started = true; return; }
        if (/AD\S*\.\d|IAD/i.test(w)) { locator = w.replace(/^[|l1]/, 'I'); return; }
        if (!started || LOCATOR.test(w) || /^[-—~=]+$/.test(w)) return;
        desc.push(w);
      });
    }
    // Sin Pick ID (descripción en la página siguiente): no inventar texto
    if (!pickId) desc = [];
    // Número partido ("4 80" en vez de 480) o cantidad poco legible → revisar
    const split = /^\d{1,3}$/.test(tk[ui + 2] || '');
    const qtyBad = !Number.isFinite(qty) || qty === 0 || split || (qtyConf !== undefined && qtyConf < 85);
    rows.push({
      page, code: item.code, qty: Number.isFinite(qty) ? qty : 0, desc: desc.join(' ').replace(/\s+,/g, ',').slice(0, 140),
      pickId, locator, guessQty: qtyBad,
      flag: !item.valid || item.repaired || (wordConf !== undefined && wordConf < 88)
    });
  }
  // Cada artículo empieza con "Open": si hay más "Open" que renglones leídos, se saltó alguno.
  const opens = lines.filter((l) => /^\W{0,3}(open|oen|opon|0pen|oren)\b/i.test(l.text.trim())).length;
  rows.missing = Math.max(0, opens - rows.length);
  rows.pageFound = !!pm;
  return rows;
}

const UOM = /^(EA|EACH|PC|PCS|PCE|FT|M|RL|ROLL|BX|BOX|CS|CASE|PK|PKG|LOT|SET|KIT|C|M)$/i;
function parseInvoice(text, page) {
  const rows = [];
  for (const raw of text.split(/\r?\n/)) {
    const line = raw.replace(/[|]/g, ' ').replace(/\s+/g, ' ').trim();
    if (line.length < 6) continue;
    // Encabezado: número de orden y total de páginas (se usan si están vacíos)
    const hdr = line.match(/pick\s*slip\D{0,6}([A-Z0-9-]{4,})/i) || line.match(/\border\s*(?:no|#|number)?\D{0,4}(\d{5,})/i);
    const pgs = line.match(/\bpage\s*\d+\s*(?:of|de)\s*(\d+)/i) || line.match(/\bp[áa]gina\s*\d+\s*de\s*(\d+)/i);
    if (hdr || pgs) {
      if (hdr && order && !order.orderNo) { order.orderNo = hdr[1]; $('#orderNo').value = hdr[1]; saveOrder(); }
      if (pgs && order && !order.totalPages) { order.totalPages = +pgs[1]; $('#totalPages').value = pgs[1]; saveOrder(); }
      continue;
    }
    if (/^(page|pagina|página|total|subtotal|ship to|bill to|sold to|invoice|date|terms|freight|tax)\b/i.test(line)) continue;
    const tk = line.split(' ');
    // código: token con >=2 dígitos, largo >=5, que no sea precio, fecha ni el número de renglón
    let ci = -1;
    for (let i = 0; i < tk.length; i++) {
      const x = tk[i].replace(/[,;:]+$/, '');
      if (i === 0 && /^\d{1,3}$/.test(x)) continue;
      if (/^\$|^\d+[.,]\d{2}$|\d{1,2}\/\d{1,2}\/\d{2,4}/.test(x)) continue;
      if (x.length >= 5 && (x.match(/\d/g) || []).length >= 2 && /^[A-Z0-9][A-Z0-9\-./#]*$/i.test(x)) { ci = i; break; }
    }
    if (ci < 0) continue;
    const code = tk[ci].replace(/[,;:.]+$/, '');
    // cantidad: entero seguido de unidad; si no, el último entero sin decimales después del código
    let qi = -1;
    for (let i = ci + 1; i < tk.length - 1; i++) if (/^\d{1,5}$/.test(tk[i]) && UOM.test(tk[i + 1])) { qi = i; break; }
    if (qi < 0) for (let i = tk.length - 1; i > ci; i--) if (/^\d{1,4}$/.test(tk[i])) { qi = i; break; }
    const qty = qi > 0 ? parseInt(tk[qi], 10) : 1;
    const descTokens = tk.slice(ci + 1, qi > 0 ? qi : tk.length).filter((x) => !/^\$?\d+[.,]\d{2}$/.test(x) && !UOM.test(x));
    rows.push({ page, code, qty: qty > 0 ? qty : 1, desc: descTokens.join(' '), guessQty: qi < 0 });
  }
  return rows;
}

let draft = [], draftNotes = {};
function setDraft(rows) { draft = [...rows]; if (!rows.length) draftNotes = {}; renderDraft(); }
function renderDraft() {
  $('#draftBox').classList.toggle('hidden', !draft.length);
  const flagged = draft.filter((r) => r.flag || r.guessQty).length;
  const notes = (draftNotes.missing ? `<p class="warn">${t('draftMissing', draftNotes.missing)}</p>` : '') +
    (draftNotes.noPage ? `<p class="warn">${t('draftNoPage')}</p>` : '') +
    (flagged ? `<p class="warn">${t('draftFlagged', flagged)}</p>` : '');
  $('#draftRows').innerHTML = notes + draft.map((r, i) => `
    <div class="draft ${r.flag || r.guessQty ? 'flag' : ''}" data-i="${i}">
      <input data-f="page" type="number" min="1" value="${esc(r.page)}" aria-label="${t('page')}">
      <input data-f="code" value="${esc(r.code)}" aria-label="${t('code')}" autocapitalize="characters" ${r.flag ? 'class="warnf"' : ''}>
      <input data-f="qty" type="number" min="0" value="${esc(r.qty)}" aria-label="${t('qty')}" ${r.guessQty ? 'class="warnf"' : ''}>
      <button class="btn bad x" data-del="${i}" aria-label="${t('del')}">✕</button>
      <button class="btn x" data-scanrow="${i}" aria-label="${t('scanPaper')}" title="${t('scanPaper')}">📷</button>
      <input class="desc" data-f="desc" value="${esc(r.desc)}" aria-label="${t('desc')}">
      ${r.pickId || r.locator ? `<span class="s small muted desc">ID ${esc(r.pickId || '—')} · ${esc(r.locator || '')}</span>` : ''}
    </div>`).join('');
}

/* Escanear un solo código (para corregir renglones leyendo el código de barras de la hoja) */
async function scanOnce() {
  stopCamera();
  const d = document.createElement('dialog');
  d.innerHTML = `<div class="video-wrap"><video playsinline muted></video><div class="aim"></div></div><p class="small muted">${t('scanPaperHint')}</p><button class="btn ghost" value="x">${t('cancel')}</button>`;
  document.body.appendChild(d); d.showModal();
  const v = d.querySelector('video'); let s, done = false, result = null;
  d.querySelector('button').onclick = () => { done = true; };
  d.addEventListener('close', () => { done = true; });
  try {
    await getDetector();
    s = await navigator.mediaDevices.getUserMedia({ video: { facingMode: { ideal: 'environment' }, width: { ideal: 1920 }, height: { ideal: 1080 } } });
    v.srcObject = s; await v.play();
    const cv = document.createElement('canvas');
    while (!done) {
      if (v.videoWidth) {
        const vw = v.videoWidth, vh = v.videoHeight; cv.width = vw * 0.9; cv.height = vh * 0.4;
        cv.getContext('2d').drawImage(v, vw * 0.05, vh * 0.3, cv.width, cv.height, 0, 0, cv.width, cv.height);
        const codes = await detector.detect(cv).catch(() => []);
        if (codes.length && codes[0].rawValue) { result = codes[0].rawValue.trim(); feedback('ok'); break; }
      }
      await sleep(120);
    }
  } catch (e) { toast(t('camError', e.message || e.name), 'bad'); }
  if (s) s.getTracks().forEach((tr) => tr.stop());
  if (d.open) d.close(); d.remove();
  return result;
}

/* ---------------- render ---------------- */
function renderAll() { renderHeader(); renderLines(); renderReview(); renderScanLog(); }

function renderHeader() {
  const done = order.lines.filter(resolved).length;
  $('#orderBadge').textContent = order.orderNo ? `#${order.orderNo} · ${done}/${order.lines.length}${order.status === 'final' ? ' · ' + t('finalizedBadge') : ''}` : '';
  const net = $('#netPill'); net.textContent = navigator.onLine ? t('online') : t('offline'); net.className = 'pill ' + (navigator.onLine ? 'ok' : 'warn');
}

async function renderStorePill() {
  const p = navigator.storage?.persisted ? await navigator.storage.persisted() : false;
  const el = $('#storePill'); el.textContent = p ? t('protectedData') : t('unprotectedData'); el.className = 'pill ' + (p ? 'ok' : 'warn');
}

function lineItem(l, mode) {
  const st = lineStatus(l);
  const p = productForLine(l), ph = photoOf(p);
  let actions = '';
  if (mode === 'review') {
    actions = `<button class="btn small" data-act="minus" data-id="${l.id}">${t('minus')}</button>
      <button class="btn small" data-act="plus" data-id="${l.id}">${t('plus')}</button>
      <button class="btn small" data-act="set" data-id="${l.id}">${t('setQty')}</button>
      ${l.resolution ? `<button class="btn small ghost" data-act="unexc" data-id="${l.id}">${t('clearException')}</button>` : `<button class="btn small ghost" data-act="exc" data-id="${l.id}">${t('markException')}</button>`}`;
  } else {
    actions = `<button class="btn small ghost" data-act="edit" data-id="${l.id}">${t('edit')}</button>`;
  }
  return `<div class="item ${st}">${ph ? `<img class="thumb" loading="lazy" src="${ph}" alt="">` : ''}
    <div class="t"><span class="tag ${st}">${statusLabel(st)}</span>${esc(l.code)}</div>
    <div class="s">${t('page')} ${esc(l.page)} · ${esc(l.desc || p?.name || '')}</div>
    ${l.pickId || l.locator ? `<div class="s">ID ${esc(l.pickId || '—')}${l.locator ? ' · 📍 ' + esc(l.locator) : ''}</div>` : ''}
    <div class="qty">${l.counted} / ${l.qty}</div>
    ${l.resolution ? `<div class="s">📝 ${esc(l.resolution.note)}</div>` : ''}
    <div class="r">${actions}</div></div>`;
}

function renderLines() {
  const ls = [...order.lines].sort((a, b) => a.page - b.page);
  $('#linesSummary').textContent = ls.length ? `${ls.length} ${t('lines')}` : '';
  $('#linesList').innerHTML = ls.length ? ls.map((l) => lineItem(l, 'order')).join('') : `<p class="muted small">${t('noLines')}</p>`;
}

function renderReview() {
  const ls = order.lines;
  const c = { ok: 0, pend: 0, over: 0 };
  ls.forEach((l) => { const s = lineStatus(l); if (s === 'over') c.over++; else if (resolved(l)) c.ok++; else c.pend++; });
  const extras = order.extras.filter((e) => !e.reviewed).length;
  $('#reviewStats').innerHTML = `<div><b>${c.ok}</b><span>${t('sOk')}</span></div><div><b>${c.pend}</b><span>${t('sPend')}</span></div><div><b style="color:var(--bad)">${c.over}</b><span>${t('sOver')}</span></div><div><b style="color:var(--bad)">${extras}</b><span>${t('sExtra')}</span></div>`;

  const maxPage = Math.max(order.totalPages || 0, ...ls.map((l) => +l.page || 0));
  let pg = '';
  for (let p = 1; p <= maxPage; p++) {
    const done = order.pagesConfirmed.includes(p);
    pg += `<button class="btn small ${done ? 'done' : ''}" data-page="${p}">${p}${done ? ' ✓' : ''}</button>`;
  }
  $('#pagesBox').innerHTML = maxPage ? `<h3 style="margin-top:0">${t('pagesTitle')}</h3><div class="pages">${pg}</div>` : '';

  const f = $('#reviewFilter').value;
  let html = '';
  if (f === 'extra' || f === 'open' || f === 'all') {
    html += order.extras.filter((e) => f !== 'open' || !e.reviewed).map((e) => `<div class="item extra"><div class="t"><span class="tag extra">${t('stExtra')}</span>${esc(e.raw || e.code)}</div>
      <div class="s">${t('extraRow', esc(e.code), e.count)}</div><div class="r">${e.reviewed ? `<span class="tag ok">${t('reviewedExtra')}</span>` : `<button class="btn small" data-act="exrev" data-code="${esc(e.code)}">${t('reviewExtra')}</button>`}</div></div>`).join('');
  }
  if (f !== 'extra') {
    const sel = ls.filter((l) => f === 'all' || (f === 'over' ? lineStatus(l) === 'over' : !resolved(l))).sort((a, b) => a.page - b.page);
    html += sel.map((l) => lineItem(l, 'review')).join('');
  }
  $('#reviewList').innerHTML = html || `<p class="muted small" style="text-align:center">✔</p>`;
  $('#finalizeBtn').disabled = order.status === 'final' || !ls.length;
}

function renderScanLog() {
  const s = order.scans.slice(0, 25);
  $('#scanLog').innerHTML = s.length ? s.map((x) => {
    const l = order.lines.find((y) => y.id === x.lineId);
    const k = x.kind === 'extra' ? 'extra' : (l ? lineStatus(l) : 'ok');
    return `<div class="item ${k}"><div class="t">${esc(x.code)} <span class="muted small">+${x.qty}</span></div><div class="s">${new Date(x.at).toLocaleTimeString()} · ${x.kind === 'extra' ? t('stExtra') : `${t('page')} ${esc(l?.page)} · ${l ? l.counted + '/' + l.qty : ''}`}${x.kind === 'confirmed' ? ' · ' + t('yesThis') : ''}</div></div>`;
  }).join('') : `<p class="muted small">${t('noScans')}</p>`;
}

function renderLib() {
  const q = $('#libSearch').value.trim(); const qn = norm(q), ql = q.toLowerCase();
  const list = !q ? products : products.filter((p) =>
    norm(p.code).includes(qn) || (p.aliases || []).some((a) => norm(a).includes(qn)) || (p.possibleAliases || []).some((a) => norm(a).includes(qn)) ||
    (p.name || '').toLowerCase().includes(ql) || (p.description || '').toLowerCase().includes(ql));
  $('#libCount').textContent = products.length ? t('libCount', products.length, list.length) : t('libEmpty');
  $('#libList').innerHTML = list.slice(0, 200).map((p) => {
    const ph = photoOf(p);
    return `<div class="item">${ph ? `<img class="thumb" loading="lazy" src="${ph}" alt="">` : ''}
      <div class="t">${esc(p.name || p.code)}</div><div class="s"><b>${esc(p.code)}</b>${(p.aliases || []).length ? ' · ' + esc(p.aliases.join(', ')) : ''}</div>
      ${(p.possibleAliases || []).length ? `<div class="s"><span class="tag possible">?</span>${esc(p.possibleAliases.join(', '))}</div>` : ''}
      <div class="s">${esc((p.description || '').slice(0, 220))}</div>
      ${p.referencePage ? `<div class="s">📄 ${esc(p.referencePage)}</div>` : ''}
      <div class="r"><button class="btn small ghost" data-pid="${esc(p.id)}">${t('edit')}</button></div></div>`;
  }).join('');
}

async function renderBackupWarn() {
  const last = await DB.meta('lastBackup'), changes = (await DB.meta('changes')) || 0;
  const el = $('#backupWarn');
  let msg = '';
  if (!last && products.length) msg = t('backupWarnNever');
  else if (last) {
    const days = (Date.now() - new Date(last)) / 864e5;
    if ((days > 3 && changes > 0) || changes >= 20) msg = t('backupWarn', days >= 1 ? Math.floor(days) + (lang === 'es' ? ' día(s)' : ' day(s)') : '<1d', changes);
  }
  el.textContent = msg; el.classList.toggle('hidden', !msg);
  $('#backupInfo').textContent = last ? t('backupInfo', fmtDate(last), changes) : t('backupInfoNever');
}

const PRECACHE = ['./', 'index.html', 'styles.css', 'app.js', 'manifest.webmanifest', 'icons/icon-192.png', 'icons/icon-512.png',
  'vendor/tesseract/tesseract.min.js', 'vendor/tesseract/worker.min.js', 'vendor/tesseract/core/tesseract-core-lstm.wasm.js',
  'vendor/tesseract/core/tesseract-core-simd-lstm.wasm.js', 'vendor/tesseract/lang/eng.traineddata.gz', 'vendor/barcode/barcode-ponyfill.js', 'vendor/barcode/zxing_reader.wasm'];
async function renderOffline() {
  let n = 0;
  if ('caches' in window) for (const f of PRECACHE) if (await caches.match(abs(f), { ignoreSearch: true })) n++;
  const p = navigator.storage?.persisted ? await navigator.storage.persisted() : false;
  await getDetector().catch(() => {});
  $('#offlineInfo').innerHTML = `<p>${t('offlineReady', n, PRECACHE.length)}</p><p>${n === PRECACHE.length ? t('offlineAllReady') : t('offlineNotReady')}</p>
    <p>${p ? t('persistOk') : t('persistNo')}</p><p>${t('scannerEngine', detectorEngine === 'native' ? t('engineNative') : t('engineWasm'))}</p>`;
}

function applyI18n() {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach((el) => { el.textContent = t(el.dataset.i18n); });
  $('#codeInput').placeholder = t('codePh'); $('#libSearch').placeholder = t('libSearchPh');
  if (stream) $('#camBtn').textContent = t('closeCamera');
}

/* ---------------- diálogos ---------------- */
function dialog(title, fieldsHtml, onSave, extraButtons = '') {
  const d = $('#dlg'), f = $('#dlgForm');
  f.innerHTML = `<h2>${esc(title)}</h2>${fieldsHtml}<div class="row">${extraButtons}<span style="flex:1"></span><button value="cancel" class="btn ghost">${t('cancel')}</button><button value="save" class="btn primary">${t('save')}</button></div>`;
  d.returnValue = ''; d.showModal();
  return new Promise((res) => {
    d.onclose = async () => { if (d.returnValue === 'save') res(await onSave(f)); else res(d.returnValue); };
  });
}

function editLine(l) {
  const isNew = !l;
  l = l || { id: 'l-' + uid(), page: parseInt($('#ocrPage').value, 10) || 1, code: '', desc: '', qty: 1, counted: 0, resolution: null };
  dialog(isNew ? t('lineNew') : t('lineEdit'), `
    <div class="grid2"><label>${t('page')}<input name="page" type="number" min="1" value="${esc(l.page)}"></label><label>${t('qty')}<input name="qty" type="number" min="0" value="${esc(l.qty)}"></label></div>
    <label>${t('code')}<input name="code" value="${esc(l.code)}" autocapitalize="characters" required></label>
    <label>${t('desc')}<input name="desc" value="${esc(l.desc)}"></label>`,
  (f) => {
    const code = f.code.value.trim(); if (!code) return;
    Object.assign(l, { page: parseInt(f.page.value, 10) || 1, qty: Math.max(0, parseInt(f.qty.value, 10) || 0), code, desc: f.desc.value.trim() });
    if (isNew) order.lines.push(l);
    saveOrder(); renderAll();
  }, isNew ? '' : `<button value="delete" class="btn bad small">${t('del')}</button>`).then((r) => {
    if (r === 'delete' && confirm(t('confirmDelete', l.code))) { order.lines = order.lines.filter((x) => x !== l); saveOrder(); renderAll(); }
  });
}

async function compressPhoto(file) {
  const bmp = await createImageBitmap(file, { imageOrientation: 'from-image' }).catch(() => createImageBitmap(file));
  const s = Math.min(1, 900 / Math.max(bmp.width, bmp.height));
  const c = document.createElement('canvas'); c.width = Math.round(bmp.width * s); c.height = Math.round(bmp.height * s);
  c.getContext('2d').drawImage(bmp, 0, 0, c.width, c.height);
  return c.toDataURL('image/jpeg', 0.75);
}

function editProduct(p, presetCode = '') {
  const isNew = !p;
  p = p ? { ...p } : { id: 'p-' + uid(), code: presetCode, name: '', description: '', aliases: [], possibleAliases: [], referencePage: '', photo: '' };
  let photo = photoOf(p);
  dialog(isNew ? t('newProduct') : t('edit'), `
    <label>${t('pCode')}<input name="code" value="${esc(p.code)}" autocapitalize="characters" required></label>
    <label>${t('pName')}<input name="name" value="${esc(p.name)}"></label>
    <label>${t('desc')}<textarea name="description" rows="3">${esc(p.description)}</textarea></label>
    <label>${t('pAliases')}<input name="aliases" value="${esc((p.aliases || []).join(', '))}"></label>
    <label>${t('pPossible')}<input name="possibleAliases" value="${esc((p.possibleAliases || []).join(', '))}"></label>
    <label>${t('pRef')}<input name="referencePage" value="${esc(p.referencePage || '')}"></label>
    <label>${t('pPhoto')}</label><img id="pPhotoPrev" class="bigphoto ${photo ? '' : 'hidden'}" src="${photo}" alt="">
    <div class="row"><label class="btn small file">📷<input id="pPhotoCam" type="file" accept="image/*" capture="environment" hidden></label>
    <label class="btn small file">🖼<input id="pPhotoFile" type="file" accept="image/*" hidden></label></div>`,
  async (f) => {
    const code = f.code.value.trim(); if (!code) return;
    Object.assign(p, { code, name: f.name.value.trim(), description: f.description.value.trim(), aliases: splitList(f.aliases.value),
      possibleAliases: splitList(f.possibleAliases.value), referencePage: f.referencePage.value.trim(), photo, updatedAt: nowIso() });
    if (photo) p.images = [photo];
    await DB.put('products', p);
    const i = products.findIndex((x) => x.id === p.id); if (i >= 0) products[i] = p; else products.unshift(p);
    await bumpChanges(); renderLib(); renderAll(); toast(t('saved'), 'ok');
  }, isNew ? '' : `<button value="delete" class="btn bad small">${t('del')}</button>`).then(async (r) => {
    if (r === 'delete' && confirm(t('confirmDelete', p.name || p.code))) {
      await DB.del('products', p.id); products = products.filter((x) => x.id !== p.id); await bumpChanges(); renderLib(); toast(t('deleted'));
    }
  });
  const onPhoto = async (e) => { const file = e.target.files[0]; if (!file) return; photo = await compressPhoto(file); const im = $('#pPhotoPrev'); im.src = photo; im.classList.remove('hidden'); };
  $('#pPhotoCam').onchange = onPhoto; $('#pPhotoFile').onchange = onPhoto;
}

/* ---------------- respaldo ---------------- */
async function exportBackup(tag = '') {
  const orders = await DB.all('orders');
  const data = { app: 'wescan-night-shift', version: 2, exportedAt: nowIso(), products, orders };
  const d = new Date(), pad = (n) => String(n).padStart(2, '0');
  const stamp = `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}-${pad(d.getHours())}${pad(d.getMinutes())}`;
  download(`wescan-respaldo-${stamp}${tag ? '-' + tag : ''}.json`, JSON.stringify(data), 'application/json');
  await DB.meta('lastBackup', nowIso()); await DB.meta('changes', 0); renderBackupWarn();
}

function normalizeProduct(o) {
  if (!o || typeof o !== 'object') return null;
  const code = String(o.code ?? o.sku ?? o.partNumber ?? o.barcode ?? '').trim();
  if (!code) return null;
  const images = Array.isArray(o.images) ? o.images.filter((x) => typeof x === 'string') : [];
  return {
    id: String(o.id || 'p-' + uid()), code,
    name: String(o.name ?? o.title ?? ''), description: String(o.description ?? o.desc ?? ''),
    aliases: splitList(o.aliases ?? []), possibleAliases: splitList(o.possibleAliases ?? []),
    photo: typeof o.photo === 'string' ? o.photo : (images[0] || ''), images,
    referenceDocument: String(o.referenceDocument ?? ''), referencePage: String(o.referencePage ?? ''), origin: String(o.origin ?? ''),
    updatedAt: String(o.updatedAt || nowIso())
  };
}

async function importBackup(file) {
  try {
    const data = JSON.parse(await file.text());
    const rawProducts = Array.isArray(data) ? data : (data.products || data.library || data.items || data.catalog || []);
    const list = rawProducts.map(normalizeProduct).filter(Boolean);
    const byId = new Map(products.map((p) => [p.id, p]));
    const byCode = new Map(products.map((p) => [norm(p.code), p]));
    for (const p of list) {
      const prev = byId.get(p.id) || byCode.get(norm(p.code));
      if (prev) p.id = prev.id;
      byId.set(p.id, p); byCode.set(norm(p.code), p);
    }
    products = [...byId.values()];
    await DB.putMany('products', list);
    const orders = Array.isArray(data.orders) ? data.orders.filter((o) => o && o.id && Array.isArray(o.lines)) : [];
    if (orders.length) await DB.putMany('orders', orders);
    await bumpChanges(list.length);
    renderLib(); renderAll(); toast(t('imported', list.length, orders.length), 'ok');
  } catch (e) { toast(t('importFail', e.message), 'bad'); }
}

function exportCsv() {
  const q = (v) => `"${String(v ?? '').replace(/"/g, '""')}"`;
  const rows = [['order', 'page', 'code', 'description', 'expected', 'counted', 'status', 'note'].join(',')];
  [...order.lines].sort((a, b) => a.page - b.page).forEach((l) => rows.push([order.orderNo, l.page, l.code, l.desc, l.qty, l.counted, lineStatus(l), l.resolution?.note || ''].map(q).join(',')));
  order.extras.forEach((e) => rows.push([order.orderNo, '', e.raw || e.code, 'NOT ON INVOICE', 0, e.count, 'extra', e.reviewed ? 'reviewed' : ''].map(q).join(',')));
  download(`wescan-${(order.orderNo || 'orden').replace(/[^\w-]/g, '_')}.csv`, '﻿' + rows.join('\r\n'), 'text/csv');
}

async function finalize() {
  const open = order.lines.filter((l) => !resolved(l)).length;
  const extras = order.extras.filter((e) => !e.reviewed).length;
  if (open || extras) { $('#finalizeMsg').textContent = t('cannotFinalize', open, extras); feedback('bad'); $('#reviewFilter').value = 'open'; renderReview(); return; }
  order.status = 'final'; order.finalizedAt = nowIso(); saveOrder();
  exportCsv(); await bumpChanges(); await exportBackup((order.orderNo || '').replace(/[^\w-]/g, '_'));
  $('#finalizeMsg').textContent = t('finalized'); renderAll();
}

async function showOrders() {
  const box = $('#ordersList');
  if (!box.classList.contains('hidden')) { box.classList.add('hidden'); return; }
  const all = (await DB.all('orders')).sort((a, b) => (b.updatedAt || '').localeCompare(a.updatedAt || ''));
  box.innerHTML = all.map((o) => `<div class="item ${o.status === 'final' ? 'ok' : 'pending'}"><div class="t">#${esc(o.orderNo || '—')} ${o.status === 'final' ? `<span class="tag ok">${t('finalizedBadge')}</span>` : ''}</div>
    <div class="s">${fmtDate(o.updatedAt)} · ${o.lines.length} ${t('lines')}</div><div class="r"><button class="btn small" data-oid="${esc(o.id)}">${t('orderSwitch')}</button></div></div>`).join('');
  box.classList.remove('hidden');
}
async function loadOrder(o) {
  order = o; await DB.meta('currentOrder', o.id);
  $('#orderNo').value = o.orderNo || ''; $('#totalPages').value = o.totalPages || '';
  $('#matchCard').classList.add('hidden'); $('#finalizeMsg').textContent = '';
  renderAll();
}

/* ---------------- eventos ---------------- */
function bind() {
  document.querySelectorAll('.tabs button').forEach((b) => b.addEventListener('click', () => {
    document.querySelectorAll('.tabs button').forEach((x) => x.classList.toggle('active', x === b));
    document.querySelectorAll('.tab').forEach((s) => s.classList.toggle('hidden', s.id !== 'tab-' + b.dataset.tab));
    if (b.dataset.tab !== 'scan') stopCamera();
    if (b.dataset.tab === 'lib') renderLib();
    if (b.dataset.tab === 'settings') { renderOffline(); renderBackupWarn(); }
    if (b.dataset.tab === 'review') renderReview();
    window.scrollTo(0, 0);
  }));
  $('#langSel').onchange = async (e) => { lang = e.target.value; await DB.meta('lang', lang); applyI18n(); renderAll(); renderLib(); renderStorePill(); renderBackupWarn(); };
  $('#orderNo').oninput = (e) => { order.orderNo = e.target.value.trim(); saveOrder(); renderHeader(); };
  $('#totalPages').oninput = (e) => { order.totalPages = parseInt(e.target.value, 10) || null; saveOrder(); renderReview(); };
  $('#newOrderBtn').onclick = async () => { if (order.lines.length && !confirm(t('confirmNewOrder'))) return; const o = newOrder(); await DB.put('orders', o); loadOrder(o); };
  $('#ordersBtn').onclick = showOrders;
  $('#ordersList').onclick = async (e) => { const id = e.target.dataset.oid; if (!id) return; await DB.put('orders', order); loadOrder(await DB.get('orders', id)); $('#ordersList').classList.add('hidden'); };

  $('#ocrCam').onchange = (e) => { runOcr(e.target.files[0]); e.target.value = ''; };
  $('#ocrFile').onchange = (e) => { runOcr(e.target.files[0]); e.target.value = ''; };
  $('#draftImg').onclick = (e) => e.target.classList.toggle('zoom');
  $('#reparseBtn').onclick = () => setDraft(parseAny($('#ocrRaw').value, null, parseInt($('#ocrPage').value, 10) || 1));
  $('#draftRows').oninput = (e) => {
    const row = e.target.closest('.draft'); if (!row || !e.target.dataset.f) return; const r = draft[+row.dataset.i]; const f = e.target.dataset.f;
    r[f] = f === 'page' || f === 'qty' ? parseInt(e.target.value, 10) || 0 : e.target.value;
    if (f === 'qty') r.guessQty = false; if (f === 'code') r.flag = false;
    e.target.classList.remove('warnf'); if (!r.flag && !r.guessQty) row.classList.remove('flag');
  };
  $('#draftRows').onclick = async (e) => {
    const b = e.target.closest('button'); if (!b) return;
    if (b.dataset.del !== undefined) { draft.splice(+b.dataset.del, 1); renderDraft(); }
    if (b.dataset.scanrow !== undefined) {
      const r = draft[+b.dataset.scanrow]; const code = await scanOnce();
      if (code) { r.code = code; r.flag = false; renderDraft(); toast(code, 'ok'); }
    }
  };
  $('#draftAddBtn').onclick = () => { draft.push({ page: parseInt($('#ocrPage').value, 10) || 1, code: '', qty: 1, desc: '' }); renderDraft(); };
  $('#draftClearBtn').onclick = () => { setDraft([]); $('#ocrRawBox').classList.add('hidden'); };
  $('#draftSaveBtn').onclick = () => {
    const rows = draft.filter((r) => String(r.code).trim());
    const pending = rows.filter((r) => r.flag || r.guessQty).length;
    if (pending && !confirm(t('flaggedConfirm', pending))) return;
    let skipped = 0;
    for (const r of rows) {
      // Misma línea Oracle (Pick ID) ya guardada: foto repetida de la página → no duplicar
      if (r.pickId && order.lines.some((l) => l.pickId === r.pickId)) { skipped++; continue; }
      if (!r.pickId) {
        const dup = order.lines.find((l) => norm(l.code) === norm(r.code) && +l.page === +r.page && l.qty === r.qty && !l.pickId);
        if (dup && !confirm(t('dupLine', dup.page))) continue;
      }
      order.lines.push({ id: 'l-' + uid(), page: r.page || 1, code: String(r.code).trim(), desc: String(r.desc || '').trim(), qty: Math.max(0, r.qty || 0), counted: 0, resolution: null, pickId: r.pickId || '', locator: r.locator || '' });
    }
    if (skipped) toast(t('skippedDup', skipped), 'warn');
    setDraft([]); $('#ocrRawBox').classList.add('hidden'); saveOrder(); renderAll(); toast(t('saved'), 'ok');
  };
  $('#manualLineBtn').onclick = () => editLine(null);
  $('#linesList').onclick = (e) => { const b = e.target.closest('[data-act="edit"]'); if (b) editLine(order.lines.find((l) => l.id === b.dataset.id)); };

  $('#camBtn').onclick = () => (stream ? stopCamera() : startCamera());
  $('#torchBtn').onclick = toggleTorch;
  $('#codeGo').onclick = () => { handleCode($('#codeInput').value, 'manual'); $('#codeInput').value = ''; $('#codeInput').focus(); };
  $('#codeInput').onkeydown = (e) => { if (e.key === 'Enter') { e.preventDefault(); $('#codeGo').click(); } };
  $('#undoBtn').onclick = undoLast;

  $('#reviewFilter').onchange = renderReview;
  $('#reviewList').onclick = (e) => {
    const b = e.target.closest('button'); if (!b) return;
    if (b.dataset.act === 'exrev') { const ex = order.extras.find((x) => x.code === b.dataset.code); if (ex) ex.reviewed = true; saveOrder(); renderAll(); return; }
    const l = order.lines.find((x) => x.id === b.dataset.id); if (!l) return;
    if (b.dataset.act === 'plus') l.counted++;
    if (b.dataset.act === 'minus') l.counted = Math.max(0, l.counted - 1);
    if (b.dataset.act === 'set') { const v = prompt(t('setQtyPrompt'), l.counted); if (v === null) return; l.counted = Math.max(0, parseInt(v, 10) || 0); }
    if (b.dataset.act === 'exc') { const n = prompt(t('exceptionPrompt'), ''); if (!n || !n.trim()) return; l.resolution = { type: 'exception', note: n.trim(), at: nowIso() }; }
    if (b.dataset.act === 'unexc') l.resolution = null;
    saveOrder(); renderAll();
  };
  $('#pagesBox').onclick = (e) => {
    const p = +e.target.closest('[data-page]')?.dataset.page; if (!p) return;
    if (order.pagesConfirmed.includes(p)) { order.pagesConfirmed = order.pagesConfirmed.filter((x) => x !== p); }
    else {
      const open = order.lines.filter((l) => +l.page === p && !resolved(l)).length;
      if (open) { toast(t('pageNotReady', p, open), 'warn'); return; }
      order.pagesConfirmed.push(p); toast(t('pageConfirmed', p), 'ok');
    }
    saveOrder(); renderReview();
  };
  $('#finalizeBtn').onclick = finalize;
  $('#csvBtn').onclick = exportCsv;

  $('#libSearch').oninput = renderLib;
  $('#libNewBtn').onclick = () => editProduct(null);
  $('#libList').onclick = (e) => { const id = e.target.dataset.pid; if (id) editProduct(products.find((p) => p.id === id)); };

  $('#backupBtn').onclick = () => exportBackup();
  $('#importFile').onchange = (e) => { if (e.target.files[0]) importBackup(e.target.files[0]); e.target.value = ''; };
  $('#persistBtn').onclick = async () => { if (navigator.storage?.persist) await navigator.storage.persist(); renderStorePill(); renderOffline(); };

  addEventListener('online', renderHeader); addEventListener('offline', renderHeader);
  document.addEventListener('visibilitychange', () => { if (document.hidden) stopCamera(); });
}

/* ---------------- arranque ---------------- */
async function init() {
  BarcodeDetectionAPI.setZXingModuleOverrides({
    locateFile: (path, prefix) => (path.endsWith('.wasm') ? abs('vendor/barcode/' + path) : prefix + path)
  });
  await DB.open();
  lang = (await DB.meta('lang')) || ((navigator.language || 'es').slice(0, 2) === 'en' ? 'en' : 'es');
  $('#langSel').value = lang;
  products = (await DB.all('products')).sort((a, b) => (b.updatedAt || '').localeCompare(a.updatedAt || ''));
  const cur = await DB.meta('currentOrder');
  order = (cur && (await DB.get('orders', cur))) || newOrder();
  if (!cur) { await DB.put('orders', order); await DB.meta('currentOrder', order.id); }
  applyI18n(); bind();
  $('#orderNo').value = order.orderNo || ''; $('#totalPages').value = order.totalPages || '';
  renderAll(); renderLib();
  if (navigator.storage?.persist) { await navigator.storage.persist().catch(() => {}); }
  renderStorePill(); renderBackupWarn();
  if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(() => {});
}
document.addEventListener('DOMContentLoaded', init);
