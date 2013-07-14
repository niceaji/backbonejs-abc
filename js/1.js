// ### Collection 이해 
// [현재 실행](../1.html), [다음 예제 보기](2.html)



//  
(function($){

	// `Backbone.Collection` class 를 상속`extend` 하는 Comments
	var Comments = Backbone.Collection.extend();

	// `Comments` Collection의 인스턴스 생성   
	// Collection은 배열과 비슷, 모델이 여러개가 모인 리스트
	var comments = new Comments();

	// `url` 설정, 베스트 댓글 정보 리스트  
	// http://niceaji.github.io/backbonejs-abc/api/comments.js     
	comments.url = './api/comments.js'; 

	// `fetch()` 불러오기, `GET api/comments.js` 호출 
	comments.fetch();


	// `fetch()` 완료, `sync` 이벤트 핸들러 등록 
	comments.on("sync", function(){

		// 가져온 collection 정보 확인 
		console.log( comments.toJSON() ); //[Object,Object..]
		console.log( comments.models ); // 자동으로 개별 모델 등록 
		console.log( comments.length ); //19

	});



})(jQuery);