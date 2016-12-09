import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";
import $ from "jquery";
import StickyHeader from "./modules/StickyHeader";

var mobileMenu = new MobileMenu();
var stickyHeader = new StickyHeader();
new RevealOnScroll($(".skill-item-1"), "91%");
new RevealOnScroll($(".skill-item-2"), "69%");
new RevealOnScroll($(".skill-item-3"), "81%");
new RevealOnScroll($(".skill-item-4"), "59%");
new RevealOnScroll($(".team"), "65%");
