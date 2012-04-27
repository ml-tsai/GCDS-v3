/**
 * Twit
 *  jQuery Plugin to Display Twitter Tweets on a Blog.
 *  http://code.google.com/p/jquery-twit/
 *
 * Copyright (c) 2009 Yusuke Horie
 *
 * Released under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Since  : 0.1.0 - 08/26/2009
 * Version: 0.1.0 - 08/26/2009
 */
(function(jQuery){var _i=0;jQuery.fn.twit=function(user,options){if(typeof user!='string')return this;var opts=jQuery.extend({},jQuery.fn.twit.defaults,options),c=jQuery.isFunction(opts.callback)?opts.callback:_callback,url='',params={};opts.user=user;url='http://twitter.com/statuses/user_timeline/'+opts.user+'.json';params.count=opts.count;return this.each(function(i,e){var $e=$(e);if(!$e.hasClass('twit'))$e.addClass('twit');jQuery.ajax({url:url,data:params,dataType:'jsonp',success:function(o){c.apply(this,[(o.results)?o.results:o,e,opts])}})})};jQuery.fn.twit.defaults={user:null,callback:null,icon:true,username:true,text:true,count:200,limit:7,label:'Twitter',title:''};var _callback=function(o,e,opts){var $this=$(e);if(!o||o.length==0||$this.length==0)return false;$this.data('_inc',1);_i++;var username=o[0].user.screen_name,icon=o[0].user.profile_image_url;var h='<div class="twitHeader">'+' <span class="twitLabel">'+opts.label+'</span>&nbsp;&nbsp;'+' <span class="twitTitle">'+opts.title+'</span>'+'</div>';if(opts.icon||opts.username){h+='<div class="twitUser">';if(opts.icon)h+=' <a href="http://twitter.com/'+username+'/">'+'  <img src="'+icon+'" alt="'+username+'" title="'+username+'" style="vertical-align:middle;" />'+' </a>&nbsp;&nbsp;';if(opts.username)h+='<a href="http://twitter.com/'+username+'/">'+username+'</a>';h+='</div>'}h+='<ul class="twitBody" id="twitList'+_i+'">'+_build(o,$this,opts)+'</ul>';$this.html(h);$('#twitList'+_i+' a.twitEntryShow').live('click.twitEntryShow'+_i,function(event){event.preventDefault();var $t=$(this);$t.parent().fadeOut(400,function(){var i=$this.data('_inc');i++;$this.data('_inc',i);if($t.hasClass('twitEntryAll')){$t.die('click.twitEntryShow'+_i);var start=(i*opts.limit)-opts.limit;$(this).after(_build(o,$this,opts,start,o.length)).remove()}else{$(this).after(_build(o,$this,opts)).remove()}})})};var _build=function(o,$t,opts,s,e){var h='',inc=$t.data('_inc'),start=s||(inc*opts.limit)-opts.limit,end=e||((o.length>start+opts.limit)?start+opts.limit:o.length);for(var i=start;i<end;i++){var t=o[i],username=t.user.screen_name,icon=t.user.profile_image_url;h+='<li class="twitEntry">';if(opts.text){var text=t.text.replace(/(https?:\/\/[-_.!~*\'()a-zA-Z0-9;\/?:\@&=+\$,%#]+)/,function(u){var shortUrl=(u.length>30)?u.substr(0,30)+'...':u;return'<a href="'+u+'">'+shortUrl+'</a>'}).replace(/@([a-zA-Z_]+)/g,'@<a href="http://twitter.com/$1">$1</a>').replace(/(?:^|\s)#([^\s\.\+:!]+)/g,function(a,u){return' <a href="http://twitter.com/search?q='+encodeURIComponent(u)+'">#'+u+'</a>'});h+=' <span>'+text+'</span>'}h+='</li>'}if(o.length>end){h+='<li class="twitNavi">'+'<a href="#" class="twitEntryShow">more</a> &nbsp;/&nbsp;';if(o.length>opts.limit)h+='<a href="#" class="twitEntryShow twitEntryAll">all</a>';h+='</li>'}return h}})(jQuery);



/*!
 * CSS Browser Selector v0.4.0 (Nov 02, 2010)
 * http://rafael.adm.br/css_browser_selector
 */
function css_browser_selector(u){var ua=u.toLowerCase(),is=function(t){return ua.indexOf(t)>-1},g='gecko',w='webkit',s='safari',o='opera',m='mobile',h=document.documentElement,b=[(!(/opera|webtv/i.test(ua))&&/msie\s(\d)/.test(ua))?('ie ie'+RegExp.$1):is('firefox/2')?g+' ff2':is('firefox/3.5')?g+' ff3 ff3_5':is('firefox/3.6')?g+' ff3 ff3_6':is('firefox/3')?g+' ff3':is('gecko/')?g:is('opera')?o+(/version\/(\d+)/.test(ua)?' '+o+RegExp.$1:(/opera(\s|\/)(\d+)/.test(ua)?' '+o+RegExp.$2:'')):is('konqueror')?'konqueror':is('blackberry')?m+' blackberry':is('android')?m+' android':is('chrome')?w+' chrome':is('iron')?w+' iron':is('applewebkit/')?w+' '+s+(/version\/(\d+)/.test(ua)?' '+s+RegExp.$1:''):is('mozilla/')?g:'',is('j2me')?m+' j2me':is('iphone')?m+' iphone':is('ipod')?m+' ipod':is('ipad')?m+' ipad':is('mac')?'mac':is('darwin')?'mac':is('webtv')?'webtv':is('win')?'win'+(is('windows nt 6.0')?' vista':''):is('freebsd')?'freebsd':(is('x11')||is('linux'))?'linux':'','js']; c = b.join(' '); h.className += ' '+c; return c;}; css_browser_selector(navigator.userAgent);

/*!
 * (v) Compact labels plugin (v20110124)
 * takes one option: labelOpacity [default: true] set to false to disable label opacity change on empty input focus
 */
(function($){$.fn.compactize=function(options){var defaults={labelOpacity:true};options=$.extend(defaults,options);return this.each(function(){var label=$(this),input=$('#'+label.attr('for'));input.focus(function(){if(options.labelOpacity){if(input.val()===''){label.css('opacity','0.5');}}else{label.hide();}});input.keydown(function(){label.hide();});input.blur(function(){if(input.val()===''){label.show();if(options.labelOpacity){label.css('opacity',1);}}});window.setTimeout(function(){if(input.val()!==''){label.hide();}},50);});};})(jQuery);

/*!
 * (v) hrefID jQuery extention
 * returns a valid #hash string from link href attribute in Internet Explorer
 */
(function($){$.fn.extend({hrefId:function(){return $(this).attr('href').substr($(this).attr('href').indexOf('#'));}});})(jQuery);

/*!
 * (v) BC Date Format (v20110323)
 * quick date formatter for Business Catalyst, usage: dateformat(date,format) eg. dateformat('08-Mar-2011','%F %j, %Y')
 */
(function(){dateformat=function(from,to){var months={abbr: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],full:['January','February','March','April','May','June','July','August','September','October','November','December']};var date=from.split('-');for(var i=0;i<12;i++)if(months.abbr[i]===date[1])date[1]=i;var d=new Date(date[2],date[1],date[0],0,0,0);var date={j:d.getDate(),d:d.getDate()<10?'0'+d.getDate():d.getDate(),n:d.getMonth(),m:d.getMonth()<10?'0'+d.getMonth():d.getMonth(),M:months.abbr[d.getMonth()],F:months.full[d.getMonth()],y:d.getFullYear().toString().substr(2,2),Y:d.getFullYear()};for(var name in date){to=to.replace('%'+name.toString(),date[name]);}return to;};})();

/*!
 * SimpleFlame Content rotator
 * Version 1.0
 */
(function($){function fisherYates(myArray){var i=myArray.length;if(i===0){return false;}while(--i){var j=Math.floor(Math.random()*(i+1));var tempi=myArray[i];var tempj=myArray[j];myArray[i]=tempj;myArray[j]=tempi;}}var sfRotator=function(el,options){this.settings={'item':'li','activeClass':'active','duration':5000,'autorotate':true,'effectIn':'fadeIn','optionsIn':{},'speedIn':'normal','effectOut':'fadeOut','optionsOut':{},'speedOut':'normal','random':false};$.extend(this.settings,options);this.$container=$(el);this.build();};sfRotator.prototype.build=function(){this.$container.addClass('sf-items');this.$wrapper=$('<div class="sf-rotator" />');this.$container.before(this.$wrapper);this.$wrapper.append(this.$container);this.$controls=$('<ul class="sf-controls" />');this.$wrapper.append(this.$controls);this.$items=this.$container.children(this.settings.item);if(this.settings.random===true){this.$items=this.$items.detach();fisherYates(this.$items);this.$container.append(this.$items);}this.$current=this.$items.index(this.$items.filter('.'+this.settings.activeClass));if(this.$current<0){this.$current=0;}var self=this;this.$items.addClass('sf-item').each(function(index,item){var trigger=$('<li><a href="#">'+parseInt(index+1,10)+'</a></li>');self.$controls.append(trigger);trigger.find('a').data('item',item).bind('click',{self:self},self.trigger);});this.activate(this.$current,true);if(this.settings.autorotate){this.autorotate();}};sfRotator.prototype.trigger=function(event){event.preventDefault();var self=event.data.self;self.stopAutorotate();self.$rotationTerminated=true;var position=self.$items.index($(this).data('item'));self.activate(position);};sfRotator.prototype.activate=function(position){var instant=arguments[1]||false;var activeClass=this.settings.activeClass;var oldItem=this.$items.eq(this.$current);var newItem=this.$items.eq(position);var onHide=function(){oldItem.removeClass(activeClass);};var onShow=function(){newItem.addClass(activeClass).css('zIndex',10);};var effects=['blind','bounce','clip','drop','explode','fold','highlight','puff','pulsate','scale','shake','size','slide','transfer'];if(instant===true){oldItem.removeClass(activeClass).hide();newItem.addClass(activeClass).show();}else{if($.inArray(this.settings.effectOut,effects)>-1){oldItem.hide(this.settings.effectOut,this.settings.optionsOut,this.settings.speedOut,onHide);}else if($.isFunction(oldItem[this.settings.effectOut])){oldItem[this.settings.effectOut](this.settings.speedOut,onHide);}else{throw"Unsupported hide transition";}newItem.css('zIndex',100);if($.inArray(this.settings.effectIn,effects)>-1){newItem.show(this.settings.effectIn,this.settings.optionsIn,this.settings.speedIn,onShow);}else if($.isFunction(newItem[this.settings.effectIn])){newItem[this.settings.effectIn](this.settings.speedIn,onShow);}else{throw"Unsupported show transition";}}this.$controls.find('a').removeClass('active').eq(position).addClass('active');this.$current=position;};sfRotator.prototype.autorotate=function(){this.$rotationTerminated=false;var self=this;this.$container.mouseenter(function(){self.stopAutorotate();});this.$container.mouseleave(function(){self.startAutorotate();});this.startAutorotate();};sfRotator.prototype.startAutorotate=function(){if(this.$rotationTerminated===true){return;}var self=this;this.$rotationInterval=window.setInterval(function(){var next=self.$current+1;if(next===self.$items.length){next=0;}self.activate(next);},this.settings.duration);};sfRotator.prototype.stopAutorotate=function(){if(this.settings.autorotate){window.clearInterval(this.$rotationInterval);}};$.fn.sfRotator=function(options){options=options||{};return this.each(function(){var r=new sfRotator(this,options);});};})(jQuery);

/*!
 * Scripts
 *
 */
jQuery(function($) {
 
	var Engine = {
		utils : {
			links : function(){
				$('a[rel*="external"]').click(function(e){
					e.preventDefault();
					window.open($(this).attr('href'));
				});
			},
			mails : function(){
				$('a[href^="mailto:"]').each(function(){
					var mail = $(this).attr('href').replace('mailto:','');
					var replaced = mail.replace('/at/','@');
					$(this).attr('href','mailto:'+replaced);
					if($(this).text() === mail) {
						$(this).text(replaced);
					}
				});
			}
		},
		ui : {
			showcase : function() {
				$('.intro-a').each(function() {
					$root = $(this);
					$root.find('ul.items').sfRotator();
				});
			},
			testimonials : function() {
				$('.testimonials-a').each(function() {
					var time 	= 600;				// time of the fading transition
					var cycle	= 5000;				// break between auto cycle, set to 0 to turn off
					
					var $root 	= $(this);
					var count	= $root.find('div.testimonial-a').size();
					$root.find('div.testimonial-a:first').show();
					
					if(count > 1){
						$root.append('<p class="next"><a href="#next">Next</a></p>');
						$root.find('p.next a').click(function(){
					        if($root.find('div.testimonial-a:animated').size() > 0) return false;
					        var $visible 	= $root.find('div.testimonial-a:visible');
				        	var $next = $visible.next('div.testimonial-a');
					        if($next.size() == 0) $next = $root.find('div.testimonial-a:first');

					        $visible.fadeOut(time, function(){
					        	$next.fadeIn(time);
					        });

					        return false;
						});

						if(cycle != 0){
					        testimonialRotate = setInterval(function() {
					        	$('.testimonials-a p.next a').trigger('click');
					        }, cycle+time);
						}
					}
				});

			}
		},
		forms : {
			labels : function() {
				$('#search label, .fields-a label').compactize();
			}
		},
		fixes : {
			dates : function() {
				$('.news-a time').each(function() {
					$(this).text(dateformat($(this).text(),'%F %j, %Y')).css('visibility','visible');
				});
				
				$('.entry-a header p.date time').each(function() {
					$(this).html(dateformat($(this).text(),'<span>%M</span> %j <span>%Y</span>')).css('visibility','visible');					
				});
			},
			enhancements : function() {
				if($.browser.msie && parseInt($.browser.version,10) < 9){
					$(':last-child:not(cufon)').addClass('last-child');
					$('hr').wrap('<div class="hr"></div>');
				}
				
				$('#nav ul li:has(ul)').addClass('parent');
				
				$('#nav li').each(function() {
					$(this).get(0).onmouseout = function() {};
					$(this).get(0).onmouseover = function() {};
				});
								
				
			}
		},
		
		tweaks : {
			
			tweetShareFix : function(){
				// hide tweets if behind secure connection
				// this is because Twitter not allowing secure connection creating
				// security issue
                         if(location.href.indexOf("worldsecuresystems") != -1){
                              jQuery("div.tweetsContainer, a.addthis_button_tweet").remove();
                         }else{
                              // if we are not secure then run tweets
                              if ($('#tweets').size() === 0) { return;}
                   
                                   $('#tweets').twit('gcdesignstudio', {
                                     limit: 5,
                                     icon: false
                                   });    
                         }
                    },// tweetShareFix
					
					faqSlide : function(){
						// controls FAQ items
						if(jQuery("ul.questions").length > 0){
						   jQuery("ul.questions li a").each(function(){
								 jQuery(this).click(function(){
								 
									 jQuery(this).parent().find("div.faqAnswer").slideToggle();
									 jQuery(this).toggleClass("faqBold");
										 return false;
						 
								 });
						   });   
						}
                    }, // faqSlide
					
					orderedLists : function(){
						jQuery("div.styles-a ol li").each(function(){
  							jQuery(this).html("<span>"+jQuery(this).html()+"</span>");
						});	
					},
					
					fancyGallery : function(){
                        
                        
                         if(jQuery("td.photogalleryItem").length > 0){
                   
                              jQuery("td.photogalleryItem").each(function(){
                                   if(jQuery(this).find("a").length > 0 )     {                                        var link = jQuery(this).find("a").attr("href");
                                        var img = jQuery(this).find("img").attr("src");
                                        jQuery(this).html("<a href='"+link+"' class='fancybox' rel='Gallery'><img src='"+img+"'></a>");
                                   }
                                  
                              });
                          }
                        
						if(jQuery("a.fancybox").length > 0){
						
                         jQuery("a.fancybox").fancybox({
								'transitionIn'	: 'elastic',
								'transitionOut'	: 'elastic'
							});
						}
                        
                    } // fancyGallery

					
					
					
	
		} // tweaks
		
	};

	Engine.utils.links();
	Engine.utils.mails();
	Engine.ui.showcase();
	Engine.ui.testimonials();
	Engine.forms.labels();
	Engine.fixes.dates();
	Engine.fixes.enhancements();
	
	Engine.tweaks.tweetShareFix();
	Engine.tweaks.faqSlide();
	Engine.tweaks.orderedLists();
	Engine.tweaks.fancyGallery();
	
});