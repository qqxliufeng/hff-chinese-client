export function bindWXReadyListener(callback) {
  document.addEventListener('WeixinJSBridgeReady', callback)
}