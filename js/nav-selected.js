function dynamicMenuSelectPersist(url,navID){
     if(window.location.href.indexOf(url) != -1){
          jQuery("#"+navID).addClass("selected");
     }
}

// Put Plugins here


jQuery(function($) {
 "use strict";

	var Engine = {
		
		tweaks : {
			
			navSelectedState : function(div){ // adds selected state to dynamic menus
				 // pass in the container tag eg 'nav'
				 jQuery(div + " ul li").each(function(){
					   if (jQuery(this).find("a").attr('href') === window.location.pathname)
					   {
							 jQuery(this).addClass('selected');
							 jQuery(this).parents("li").addClass('selected');
					   }   
				 });
			},// navSelectedState
			
			webAppNavPersist : function(){ // pass url and ID of li
				 dynamicMenuSelectPersist("/our-web-design-works","nav-our-work");
				 dynamicMenuSelectPersist("/Default.aspx?PageID=1705608","nav-our-work");
				 dynamicMenuSelectPersist("/filter-result","nav-our-work");
				 dynamicMenuSelectPersist("/_blog","nav-blog");
				 dynamicMenuSelectPersist("/web-design-success-stories","nav-about-us");
				 dynamicMenuSelectPersist("/web-design-success-stories","side-success");
				 
			} // webAppNavPersist
			
		} // tweaks 
	};
	
	Engine.tweaks.navSelectedState('div');
	Engine.tweaks.webAppNavPersist();
	
	
});