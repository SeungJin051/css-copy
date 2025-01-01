document.getElementById('startButton').addEventListener('click', () => {
  chrome.runtime.sendMessage({ action: 'SHOW_UI' }, response => {
    if (response.success) {
      console.log('UI successfully shown');
    } else {
      console.error('Failed to show UI');
    }
  });
});
