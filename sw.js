// Service worker بسيط - يخلي التطبيق قابل للتثبيت (PWA)
// لا يقوم بأي تخزين مؤقت للبيانات، فقط يسجل نفسه.
self.addEventListener('install', (e) => { self.skipWaiting(); });
self.addEventListener('activate', (e) => { self.clients.claim(); });
self.addEventListener('fetch', (e) => {
  // مرّر كل الطلبات عادي من غير أي كاش، عشان البلاغات تفضل دايمًا محدّثة
  e.respondWith(fetch(e.request));
});
