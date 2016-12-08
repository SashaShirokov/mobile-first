import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";
import $ from "jquery";

var mobileMenu = new MobileMenu();
new RevealOnScroll($(".skill-item"), "83%");
new RevealOnScroll($(".team"), "65%");
