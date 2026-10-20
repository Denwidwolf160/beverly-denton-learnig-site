const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-nav');

if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
    navigation.classList.toggle('is-open', !isOpen);
  });
}

document.querySelectorAll('[data-year]').forEach((element) => {
  element.textContent = new Date().getFullYear();
});

const shareButton = document.querySelector('[data-share-site]');
const shareStatus = document.querySelector('[data-share-status]');

if (shareButton && shareStatus) {
  shareButton.addEventListener('click', async () => {
    if (window.location.protocol === 'file:') {
      shareStatus.textContent = 'Publish the site online first to get a link others can open.';
      return;
    }

    const shareUrl = new URL('.', window.location.href).href;
    if (navigator.share) {
      try {
        await navigator.share({ title: 'Beverly Denton | Learn, build, grow', url: shareUrl });
        shareStatus.textContent = 'Share link ready.';
        return;
      } catch (error) {
        if (error.name === 'AbortError') return;
      }
    }

    try {
      await navigator.clipboard.writeText(shareUrl);
      shareStatus.textContent = 'Website link copied. Share it with anyone.';
    } catch {
      shareStatus.textContent = `Copy this link from your address bar: ${shareUrl}`;
    }
  });
}