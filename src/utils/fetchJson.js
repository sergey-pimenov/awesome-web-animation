import queuedJson from './requestQueue';

export default function fetchJson(url) {
  return queuedJson(url);
}
