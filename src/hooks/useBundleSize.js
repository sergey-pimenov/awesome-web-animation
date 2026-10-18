import { useEffect, useState } from 'react';
import fetchJson from '../utils/fetchJson';
import { findBundleFile } from '../utils/findFile';
import { jsdelivrPackageUrl } from '../config/api';

function useBundleSize(bundleData) {
  const [bundleFileSize, setBundleFileSize] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function loadBundleSize() {
      if (!bundleData || !bundleData.jsdelivr) {
        return;
      }

      const apiURL = jsdelivrPackageUrl(bundleData.jsdelivr.libName);
      const versions = await fetchJson(apiURL);
      if (cancelled || !versions || !versions.tags) {
        return;
      }

      const files = await fetchJson(jsdelivrPackageUrl(bundleData.jsdelivr.libName, versions.tags.latest));
      if (cancelled || !files) {
        return;
      }

      const bundle = findBundleFile(files.files, bundleData.jsdelivr.fileName);
      if (bundle && bundle.size != null) {
        setBundleFileSize(bundle.size);
      }
    }

    loadBundleSize();

    return () => {
      cancelled = true;
    };
  }, [bundleData]);

  return bundleFileSize;
}

export default useBundleSize;
