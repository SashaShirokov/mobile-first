import $ from "jquery";
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints";
import smoothScroll from "jquery-smooth-scroll";

class StickyHeader {
	constructor() {
		this.siteHeader = $(".site-header");
		this.triggerPoint = $(".banner__title");
		this.createHeaderWaypoint();
		this.pageSections = $(".page-section");
		this.createPageSectionWaypoints();
		this.headerLinks = $(".primary-nav a");
		this.addSmoothScrolling();
	}

	addSmoothScrolling() {
		this.headerLinks.smoothScroll();
	}

	createHeaderWaypoint() {
		var that = this;
		new Waypoint({
			element: this.triggerPoint[0],
			handler: function(direction) {
				if (direction == "down") {
					that.siteHeader.addClass("site-header--dark");
				} else {
					that.siteHeader.removeClass("site-header--dark");
				}
			}
		});
	}

	createPageSectionWaypoints() {
		var that = this;
		this.pageSections.each(function() {
			var currentPageSection = this;
			new Waypoint({
				element: currentPageSection,
				handler: function(direction) {
					if (direction == "down") {
						var matchLink = currentPageSection.getAttribute("data-link");
						that.headerLinks.removeClass("is-current-link");
						$(matchLink).addClass("is-current-link");
					}
				},
				offset: "18%"
			});

			new Waypoint({
				element: currentPageSection,
				handler: function(direction) {
					if (direction == "up") {
						var matchLink = currentPageSection.getAttribute("data-link");
						that.headerLinks.removeClass("is-current-link");
						$(matchLink).addClass("is-current-link");
					}
				},
				offset: "-40%"
			});
		});
	}
}

export default StickyHeader;
