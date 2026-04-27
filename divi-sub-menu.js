/* =========================
Mobile Menu Toggle Script
========================= */

jQuery(function ($) {
    $(document).ready(function () {
        $("body ul.et_mobile_menu li.menu-item-has-children, body ul.et_mobile_menu li.page_item_has_children")
            .append('<a href="#" class="mobile-toggle"></a>');

        $('ul.et_mobile_menu li.menu-item-has-children .mobile-toggle, ul.et_mobile_menu li.page_item_has_children .mobile-toggle')
            .click(function (event) {
                event.preventDefault();
                $(this).parent('li').toggleClass('dt-open');
                $(this).parent('li').find('ul.children').first().toggleClass('visible');
                $(this).parent('li').find('ul.sub-menu').first().toggleClass('visible');
            });

        iconFINAL = 'P';
        $('body ul.et_mobile_menu li.menu-item-has-children, body ul.et_mobile_menu li.page_item_has_children')
            .attr('data-icon', iconFINAL);

        $('.mobile-toggle')
            .on('mouseover', function () { $(this).parent().addClass('is-hover'); })
            .on('mouseout', function () { $(this).parent().removeClass('is-hover'); });
    });
});


/* =========================
   MOBILE MENU
========================= */
/* change hamburger icon to X when open */
#et_mobile_nav_menu .mobile_nav.opened .mobile_menu_bar::before,
.et_pb_[module.et](http://module.et)_pb_menu .et_mobile_nav_menu .mobile_nav.opened .mobile_menu_bar::before{
	content: '\4d';
}
/* mobile toggle button */
[ul.et](http://ul.et)_mobile_menu [li.menu](http://li.menu)-item-has-children .mobile-toggle,
[ul.et](http://ul.et)_mobile_menu [li.page](http://li.page)_item_has_children .mobile-toggle,
.et-db #et-boc .et-l [ul.et](http://ul.et)_mobile_menu [li.menu](http://li.menu)-item-has-children .mobile-toggle,
.et-db #et-boc .et-l [ul.et](http://ul.et)_mobile_menu [li.page](http://li.page)_item_has_children .mobile-toggle{
	width: 44px;
	height: 100%;
	padding: 0px !important;
	max-height: 44px;
	border: none;
	position: absolute;
	right: 0;
	top: 0;
	z-index: 999;
	background-color: transparent;
	text-align: center;
	opacity: 1;
}
/* keep positioning correct */
[ul.et](http://ul.et)_mobile_menu>[li.menu](http://li.menu)-item-has-children,
[ul.et](http://ul.et)_mobile_menu>[li.page](http://li.page)_item_has_children,
[ul.et](http://ul.et)_mobile_menu>[li.menu](http://li.menu)-item-has-children .sub-menu [li.menu](http://li.menu)-item-has-children,
.et-db #et-boc .et-l [ul.et](http://ul.et)_mobile_menu>[li.menu](http://li.menu)-item-has-children,
.et-db #et-boc .et-l [ul.et](http://ul.et)_mobile_menu>[li.page](http://li.page)_item_has_children,
.et-db #et-boc .et-l [ul.et](http://ul.et)_mobile_menu>[li.menu](http://li.menu)-item-has-children .sub-menu [li.menu](http://li.menu)-item-has-children{
	position: relative;
}
/* remove default background */
.et_mobile_menu .menu-item-has-children>a,
.et-db #et-boc .et-l .et_mobile_menu .menu-item-has-children>a{
	background-color: transparent;
}
/* hide submenu by default */
[ul.et](http://ul.et)_mobile_menu .menu-item-has-children .sub-menu,
#main-header [ul.et](http://ul.et)_mobile_menu .menu-item-has-children .sub-menu,
.et-db #et-boc .et-l [ul.et](http://ul.et)_mobile_menu .menu-item-has-children .sub-menu,
.et-db #main-header [ul.et](http://ul.et)_mobile_menu .menu-item-has-children .sub-menu{
	display: none !important;
	visibility: hidden !important;
}
/* show submenu */
[ul.et](http://ul.et)_mobile_menu .menu-item-has-children .sub-menu.visible,
#main-header [ul.et](http://ul.et)_mobile_menu .menu-item-has-children .sub-menu.visible,
.et-db #et-boc .et-l [ul.et](http://ul.et)_mobile_menu .menu-item-has-children .sub-menu.visible,
.et-db #main-header [ul.et](http://ul.et)_mobile_menu .menu-item-has-children .sub-menu.visible{
	display: block !important;
	visibility: visible !important;
}
/* toggle icons */
[ul.et](http://ul.et)_mobile_menu [li.menu](http://li.menu)-item-has-children .mobile-toggle::after,
.et-db #et-boc .et-l [ul.et](http://ul.et)_mobile_menu [li.menu](http://li.menu)-item-has-children .mobile-toggle::after{
	position: relative;
	top: 10px;
	font-family: "ETModules";
	content: '\33';
	color: #fff;
	padding: 3px;
	font-size: 25px;
}
[ul.et](http://ul.et)_mobile_menu [li.menu](http://li.menu)-item-has-children.dt-open>.mobile-toggle::after,
.et-db #et-boc .et-l [ul.et](http://ul.et)_mobile_menu [li.menu](http://li.menu)-item-has-children.dt-open>.mobile-toggle::after{
	content: '\32';
}
/* dropdown pointer */
.et_pb_menu_[0.et](http://0.et)_pb_menu .et_mobile_menu:after{
	position: absolute;
	right: 5%;
	margin-left: -20px;
	top: -14px;
	width: 0;
	height: 0;
	content: '';
	border-left: 20px solid transparent;
	border-right: 20px solid transparent;
	border-bottom: 20px solid #ffffff;
}
/* hamburger positioning */
.mobile_menu_bar{
	position: relative;
	display: block;
	line-height: 0;
}
/* menu background */
.et_pb_menu_[0.et](http://0.et)_pb_menu .et_mobile_menu,
.et_pb_menu_[0.et](http://0.et)_pb_menu .et_mobile_menu ul{
	background-color: #ffffff !important;
	border-radius: 10px;
}
