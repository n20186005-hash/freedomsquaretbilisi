// Repair the existing two-choice control; runtime refusal precedes storage writes.
(() => {
  const key = 'freedomsquaretbilisi-consent';
  const vetoKey = key + '-session-denied';
  const id = 'G-HXM22WWPKP';
  const panel = document.getElementById('cookie-settings');
  const status = document.getElementById('consent-status');
  let messages = {};
  try { messages = JSON.parse(panel?.getAttribute('data-consent-messages') || '{}'); } catch {}
  let loaded = window.__gaLoaded === true && typeof window.gtag === 'function';
  let deniedHere = false;
  const read = (store, name) => { try { return window[store].getItem(name); } catch { return undefined; } };
  const say = (name, effective, saved) => {
    if (status) status.textContent = messages[name] || messages.off || '';
    panel?.setAttribute('data-state', effective ? 'granted' : 'denied');
    panel?.setAttribute('data-saved', saved ? 'true' : 'false');
    panel?.querySelectorAll('[data-consent]').forEach(button => button.setAttribute('aria-pressed', String(button.getAttribute('data-consent') === (effective ? 'granted' : 'denied'))));
  };
  const stop = () => {
    window['ga-disable-' + id] = true;
    if (loaded && typeof window.gtag === 'function') window.gtag('consent', 'update', {analytics_storage:'denied'});
  };
  const start = () => {
    window['ga-disable-' + id] = false;
    if (loaded) { window.gtag('consent','update',{analytics_storage:'granted'}); return; }
    loaded = true;
    window.__gaLoaded = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('consent','default',{analytics_storage:'granted'});
    window.gtag('js',new Date());
    window.gtag('config',id,{anonymize_ip:true});
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + id;
    document.head.appendChild(script);
  };
  const write = value => { try { window.localStorage.setItem(key,value); return window.localStorage.getItem(key) === value; } catch { return false; } };
  const revoke = () => {
    if (write('denied')) return 'denied';
    try { window.localStorage.removeItem(key); return window.localStorage.getItem(key) === null ? 'removed' : false; } catch { return false; }
  };
  const veto = () => { try { window.sessionStorage.setItem(vetoKey,'yes'); return window.sessionStorage.getItem(vetoKey) === 'yes'; } catch { return false; } };
  const clearVeto = () => { try { window.sessionStorage.removeItem(vetoKey); return window.sessionStorage.getItem(vetoKey) === null; } catch { return false; } };
  const refuse = () => {
    deniedHere = true;
    stop();
    const sessionOff = veto();
    const sharedOff = revoke();
    say(sharedOff === 'denied' ? 'denied' : sharedOff === 'removed' ? 'removed' : sessionOff ? 'session' : 'failed',false,!!sharedOff);
  };
  const allow = () => {
    stop();
    if (!clearVeto() || !write('granted')) {
      deniedHere = true;
      const sessionOff = veto();
      const sharedOff = revoke();
      say(sharedOff ? 'grantFailedCleared' : sessionOff ? 'grantFailedSession' : 'grantFailed',false,false);
      return;
    }
    deniedHere = false;
    start();
    say('granted',true,true);
  };
  stop();
  const stored = read('localStorage',key);
  const blocked = read('sessionStorage',vetoKey);
  if (stored === 'granted' && blocked === null) { start(); say('granted',true,true); }
  else say(stored === 'denied' ? 'denied' : blocked === 'yes' ? 'session' : 'off',false,stored === 'denied');
  panel?.querySelectorAll('[data-consent]').forEach(button => button.addEventListener('click',() => button.getAttribute('data-consent') === 'granted' ? allow() : refuse()));
  window.addEventListener('storage',event => {
    if (event.key !== key && event.key !== null) return;
    if (read('localStorage',key) !== 'granted') { deniedHere = true; stop(); veto(); say('remote',false,false); }
    else if (deniedHere) stop();
  });
  if ('serviceWorker' in navigator && location.protocol === 'https:' && [ 'freedomsquaretbilisi.com','www.freedomsquaretbilisi.com' ].includes(location.hostname)) {
    window.addEventListener('load',() => navigator.serviceWorker.register('/sw.js').catch(() => {}));
  }
})();
