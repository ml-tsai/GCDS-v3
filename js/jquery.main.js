// init page
jQuery(function() {
	clearFormFields({
		clearInputs: true,
		clearTextareas: true,
		passwordFieldText: false,
		addClassFocus: "focus",
		filterClass: "default"
	});
	initGallery();
});

// clearFormFields
function clearFormFields(o) {
	if (o.clearInputs == null) o.clearInputs = true;
	if (o.clearTextareas == null) o.clearTextareas = true;
	if (o.passwordFieldText == null) o.passwordFieldText = false;
	if (o.addClassFocus == null) o.addClassFocus = false;
	if (!o.filterClass) o.filterClass = "default";
	if(o.clearInputs) {
		var inputs = document.getElementsByTagName("input");
		for (var i = 0; i < inputs.length; i++ ) {
			if((inputs[i].type == "text" || inputs[i].type == "password") && inputs[i].className.indexOf(o.filterClass) == -1) {
				inputs[i].valueHtml = inputs[i].value;
				inputs[i].onfocus = function ()	{
					if(this.valueHtml == this.value) this.value = "";
					if(this.fake) {
						inputsSwap(this, this.previousSibling);
						this.previousSibling.focus();
					}
					if(o.addClassFocus && !this.fake) {
						this.className += " " + o.addClassFocus;
						this.parentNode.className += " parent-" + o.addClassFocus;
					}
				}
				inputs[i].onblur = function () {
					if(this.value == "") {
						this.value = this.valueHtml;
						if(o.passwordFieldText && this.type == "password") inputsSwap(this, this.nextSibling);
					}
					if(o.addClassFocus) {
						this.className = this.className.replace(o.addClassFocus, "");
						this.parentNode.className = this.parentNode.className.replace("parent-"+o.addClassFocus, "");
					}
				}
				if(o.passwordFieldText && inputs[i].type == "password") {
					var fakeInput = document.createElement("input");
					fakeInput.type = "text";
					fakeInput.value = inputs[i].value;
					fakeInput.className = inputs[i].className;
					fakeInput.fake = true;
					inputs[i].parentNode.insertBefore(fakeInput, inputs[i].nextSibling);
					inputsSwap(inputs[i], null);
				}
			}
		}
	}
	if(o.clearTextareas) {
		var textareas = document.getElementsByTagName("textarea");
		for(var i=0; i<textareas.length; i++) {
			if(textareas[i].className.indexOf(o.filterClass) == -1) {
				textareas[i].valueHtml = textareas[i].value;
				textareas[i].onfocus = function() {
					if(this.value == this.valueHtml) this.value = "";
					if(o.addClassFocus) {
						this.className += " " + o.addClassFocus;
						this.parentNode.className += " parent-" + o.addClassFocus;
					}
				}
				textareas[i].onblur = function() {
					if(this.value == "") this.value = this.valueHtml;
					if(o.addClassFocus) {
						this.className = this.className.replace(o.addClassFocus, "");
						this.parentNode.className = this.parentNode.className.replace("parent-"+o.addClassFocus, "");
					}
				}
			}
		}
	}
	function inputsSwap(el, el2) {
		if(el) el.style.display = "none";
		if(el2) el2.style.display = "inline";
	}
}

// initGallery
function initGallery() {
	jQuery('.banner-gallery').each(function() {
		var holder = jQuery(this),
			images = jQuery('.list-gallery img', this);
		
		images.each(function() {
			this.alt = this.src;
			this.src = '';
		});
		
		holder.fadeGallery({
			slideElements: '.list-gallery > li',
			pagerLinks: '.switcher > li',
			dynamicImageLoad: 'img',
			dynamicImageLoadAttr: 'alt',
			noCircle: false,
			pauseOnHover: true,
			autoRotation: true,
			switchTime: 5000,
			duration: 1000
		});
	});
}

// slideshow plugin
jQuery.fn.fadeGallery = function(_options){
	var _options = jQuery.extend({
		slideElements:'div.slideset > div',
		pagerLinks:'div.pager a',
		generatePagination:null,
		btnNext:'a.next',
		btnPrev:'a.prev',
		btnPlayPause:'a.play-pause',
		btnPlay:'a.play',
		btnPause:'a.pause',
		pausedClass:'paused',
		disabledPrevClass: 'prev-disabled',
		disabledNextClass: 'next-disabled',
		playClass:'playing',
		activeClass:'active',
		loadingClass:'ajax-loading',
		loadedClass:'slide-loaded',
		dynamicImageLoad:false,
		dynamicImageLoadAttr:'alt',
		currentNum:false,
		allNum:false,
		startSlide:null,
		noCircle:false,
		pauseOnHover:true,
		autoRotation:false,
		autoHeight:false,
		onBeforeFade:false,
		onAfterFade:false,
		onChange:false,
		disableWhileAnimating:false,
		stopAfterClick:false,
		switchTime:5000,
		duration:650,
		event:'click'
	},_options);

	return this.each(function(){
		// gallery options
		if(this.slideshowInit) return; else this.slideshowInit;
		var _this = jQuery(this);
		var _slides = jQuery(_options.slideElements, _this);
		var _pagerLinks = jQuery(_options.pagerLinks, _this);
		var _generatePagination = jQuery(_options.generatePagination, _this);
		var _btnPrev = jQuery(_options.btnPrev, _this);
		var _btnNext = jQuery(_options.btnNext, _this);
		var _btnPlayPause = jQuery(_options.btnPlayPause, _this);
		var _btnPause = jQuery(_options.btnPause, _this);
		var _btnPlay = jQuery(_options.btnPlay, _this);
		var _pauseOnHover = _options.pauseOnHover;
		var _dynamicImageLoad = _options.dynamicImageLoad;
		var _dynamicImageLoadAttr = _options.dynamicImageLoadAttr;
		var _autoRotation = _options.autoRotation;
		var _activeClass = _options.activeClass;
		var _loadingClass = _options.loadingClass;
		var _loadedClass = _options.loadedClass;
		var _disabledNextClass = _options.disabledNextClass;
		var _disabledPrevClass = _options.disabledPrevClass;
		var _pausedClass = _options.pausedClass;
		var _playClass = _options.playClass;
		var _autoHeight = _options.autoHeight;
		var _stopAfterClick = _options.stopAfterClick;
		var _duration = _options.duration;
		var _switchTime = _options.switchTime;
		var _controlEvent = _options.event;
		var _currentNum = (_options.currentNum ? jQuery(_options.currentNum, _this) : false);
		var _allNum = (_options.allNum ? jQuery(_options.allNum, _this) : false);
		var _startSlide = _options.startSlide;
		var _noCycle = _options.noCircle;
		var _onChange = _options.onChange;
		var _onBeforeFade = _options.onBeforeFade;
		var _onAfterFade = _options.onAfterFade;
		var _disableWhileAnimating = _options.disableWhileAnimating;

		// gallery init
		var _anim = false;
		var _hover = false;
		var _pause = false;
		var _prevIndex = 0;
		var _currentIndex = 0;
		var _slideCount = _slides.length;
		var _timer;
		if(_slideCount < 2) return;

		_prevIndex = _slides.index(_slides.filter('.'+_activeClass));
		if(_prevIndex < 0) _prevIndex = _currentIndex = 0;
		else _currentIndex = _prevIndex;
		if(_startSlide != null) {
			if(_startSlide == 'random') _prevIndex = _currentIndex = Math.floor(Math.random()*_slideCount);
			else _prevIndex = _currentIndex = parseInt(_startSlide);
		}
		_slides.hide().eq(_currentIndex).show();
		if(_autoRotation) _this.removeClass(_pausedClass).addClass(_playClass);
		else _this.removeClass(_playClass).addClass(_pausedClass);
		if(_autoHeight) _slides.eq(_currentIndex).parent().css({height:_slides.eq(_currentIndex).outerHeight(true)});
		
		// gallery control
		if(_btnPrev.length) {
			_btnPrev.bind(_controlEvent,function(){
				if ( _stopAfterClick ) {
					_autoRotation = false;
					if(_timer) clearTimeout(_timer);
					_this.removeClass(_playClass).addClass(_pausedClass);
				}
				prevSlide();
				return false;
			});
		}
		if(_btnNext.length) {
			_btnNext.bind(_controlEvent,function(){
				if ( _stopAfterClick ) {
					_autoRotation = false;
					if(_timer) clearTimeout(_timer);
					_this.removeClass(_playClass).addClass(_pausedClass);
				}
				nextSlide();
				return false;
			});
		}
		if(_generatePagination.length){
			_generatePagination.empty();
			var _list = jQuery('<ul class="switcher" />').appendTo(_generatePagination);
			for(var i=0; i<_slideCount; i++) jQuery('<li><a href="#">'+(i+1)+'</a></li>').appendTo(_list);
			_pagerLinks = _list.children();
		}
		if(_pagerLinks.length) {
			_pagerLinks.each(function(_ind){
				jQuery(this).bind(_controlEvent,function(){
					if(_currentIndex != _ind) {
						if(_disableWhileAnimating && _anim) return;
						_prevIndex = _currentIndex;
						_currentIndex = _ind;
						if ( _stopAfterClick ) {
							_autoRotation = false;
							if(_timer) clearTimeout(_timer);
							_this.removeClass(_playClass).addClass(_pausedClass);
						}
						switchSlide();
					}
					return false;
				});
			});
		}

		// play pause section
		if(_btnPlayPause.length) {
			_btnPlayPause.bind(_controlEvent,function(){
				if(_this.hasClass(_pausedClass)) {
					_this.removeClass(_pausedClass).addClass(_playClass);
					_autoRotation = true;
					autoSlide();
				} else {
					_autoRotation = false;
					if(_timer) clearTimeout(_timer);
					_this.removeClass(_playClass).addClass(_pausedClass);
				}
				return false;
			});
		}
		if(_btnPlay.length) {
			_btnPlay.bind(_controlEvent,function(){
				_this.removeClass(_pausedClass).addClass(_playClass);
				_autoRotation = true;
				autoSlide();
				return false;
			});
		}
		if(_btnPause.length) {
			_btnPause.bind(_controlEvent,function(){
				_autoRotation = false;
				if(_timer) clearTimeout(_timer);
				_this.removeClass(_playClass).addClass(_pausedClass);
				return false;
			});
		}

		// dynamic image loading (swap from ATTRIBUTE)
		function loadSlide(slide) {
			if(!slide.hasClass(_loadingClass) && !slide.hasClass(_loadedClass)) {
				var images = slide.find(_dynamicImageLoad) // pass selector here
				var imagesCount = images.length;
				if(imagesCount) {
					slide.addClass(_loadingClass);
					images.each(function(){
						var img = this;
						img.onload = function(){
							img.loaded = true;
							img.onload = null;
							setTimeout(reCalc,_duration);
						}
						img.setAttribute('src', img.getAttribute(_dynamicImageLoadAttr));
						img.setAttribute(_dynamicImageLoadAttr,'');
					}).css({opacity:0});

					function reCalc() {
						var cnt = 0;
						images.each(function(){
							if(this.loaded) cnt++;
						});
						if(cnt == imagesCount) {
							slide.removeClass(_loadingClass);
							images.animate({opacity:1},{duration:_duration,complete:function(){
								if(jQuery.browser.msie && jQuery.browser.version < 9) jQuery(this).css({opacity:'auto'})
							}});
							slide.addClass(_loadedClass)
						}
					}
				}
			}
		}

		// gallery animation
		function prevSlide() {
			if(_disableWhileAnimating && _anim) return;
			_prevIndex = _currentIndex;
			if(_currentIndex > 0) _currentIndex--;
			else {
				if(_noCycle) return;
				else _currentIndex = _slideCount-1;
			}
			switchSlide();
		}
		function nextSlide() {
			if(_disableWhileAnimating && _anim) return;
			_prevIndex = _currentIndex;
			if(_currentIndex < _slideCount-1) _currentIndex++;
			else {
				if(_noCycle) return;
				else _currentIndex = 0;
			}
			switchSlide();
		}
		function refreshStatus() {
			if(_dynamicImageLoad) loadSlide(_slides.eq(_currentIndex));
			if(_pagerLinks.length) _pagerLinks.removeClass(_activeClass).eq(_currentIndex).addClass(_activeClass);
			if(_currentNum) _currentNum.text(_currentIndex+1);
			if(_allNum) _allNum.text(_slideCount);
			_slides.eq(_prevIndex).removeClass(_activeClass);
			_slides.eq(_currentIndex).addClass(_activeClass);
			if(_noCycle) {
				if(_btnPrev.length) {
					if(_currentIndex == 0) _btnPrev.addClass(_disabledPrevClass);
					else _btnPrev.removeClass(_disabledPrevClass);
				}
				if(_btnNext.length) {
					if(_currentIndex == _slideCount-1) _btnNext.addClass(_disabledNextClass);
					else _btnNext.removeClass(_disabledNextClass);
				}
			}
			if(typeof _onChange === 'function') {
				_onChange(_this, _slides, _prevIndex, _currentIndex);
			}
		}
		function switchSlide() {
			_anim = true;
			if(typeof _onBeforeFade === 'function') _onBeforeFade(_this, _slides, _prevIndex, _currentIndex);
			_slides.eq(_prevIndex).fadeOut(_duration,function(){
				_anim = false;
			});
			_slides.eq(_currentIndex).fadeIn(_duration,function(){
				if(typeof _onAfterFade === 'function') _onAfterFade(_this, _slides, _prevIndex, _currentIndex);
			});
			if(_autoHeight) _slides.eq(_currentIndex).parent().animate({height:_slides.eq(_currentIndex).outerHeight(true)},{duration:_duration,queue:false});
			refreshStatus();
			autoSlide();
		}

		// autoslide function
		function autoSlide() {
			if(!_autoRotation || _hover || _pause) return;
			if(_timer) clearTimeout(_timer);
			_timer = setTimeout(nextSlide,_switchTime+_duration);
		}
		if(_pauseOnHover) {
			_this.hover(function(){
				_hover = true;
				if(_timer) clearTimeout(_timer);
			},function(){
				_hover = false;
				autoSlide();
			});
		}
		
		_this.bind('pause', function() {
			_pause = true;
			if(_timer) clearTimeout(_timer);
		}).bind('play', function() {
			_pause = false;
			autoSlide();
		})
		
		refreshStatus();
		autoSlide();
	});
}