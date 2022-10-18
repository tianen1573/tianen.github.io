var audioStatus = "paused";
var audio;
$(function(){
	var swiperV = new Swiper('.swiper-container-v', {
		pagination: '.swiper-pagination-v',
		paginationClickable: true,
		paginationBulletRender: function (index, className) {
		    return '<span class="' + className + '">' + getNavName(index) + '</span>';
		},
		direction: 'vertical',
		spaceBetween: 50,
		mousewheelControl : false,
		onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
			swiperAnimateCache(swiper); //隐藏动画元素 
			swiperAnimate(swiper); //初始化完成开始动画
		}, 
		onSlideChangeEnd: function(swiper){ 
			swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
		}
	});
	var swiperH = new Swiper('.swiper-container-h', {
		pagination: '.swiper-pagination-h',
		paginationClickable: true,
		effect: 'coverflow',
		grabCursor: true,
        centeredSlides: true,
        loop : true,
		slidesPerView : 'auto',
		speed:1000,
		loopedSlides :3,
		autoplay : 3000,
		autoplayDisableOnInteraction : false,
        coverflow: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : true
        }
	});
	
	
	audio = document.getElementById("bgmusic");
	audio.addEventListener("playing", function(){
	    audioStatus = "playing";
	});
	audio.addEventListener("pause", function(){
	    audioStatus = "paused";
	});
	$("#music_btn").click(function(){
		controlmusic();
	});
});
function getNavName(index){
	switch(index){
		case 0:
			return "Welcome";
		case 1:
			return "About Me";
		case 2:
			return "My Experience";
		case 3:
			return "My College";
		case 4:
			return "My Contact";
		
	}
}
function controlmusic(){
	if(audioStatus == "playing"){
		audio.pause();
		$("#music_btn").removeClass("music_running").addClass("music_paused");
	}else{
		audio.play();
		$("#music_btn").removeClass("music_paused").addClass("music_running");
	}
}
function zpImg(index){
	window.open("zp.html?zpImgIndex="+index);
}
