chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if(request.message === "clicked_browser_action") {
			var badElements = [];
			for (element of document.body.getElementsByTagName("*")) {
					if (window.getComputedStyle(element).getPropertyValue('position') === 'fixed' && element.remove) {
							badElements.push(element)
					}
			}
			badElements.forEach((e) => {
					e.remove();
			});
    }
  }
);
