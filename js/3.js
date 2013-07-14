// ### Model 이해 
// [현재 실행](../3.html), [다음 예제 보기](4.html)


//
(function($){

	// `Backbone.Model` 상속 
	var Comment = Backbone.Model.extend();
	//	`Comment` 모델 인스턴스 생성 
	var comment = new Comment();

	// [1.js](../1.html) 에서 만든 collection  
	var Comments = Backbone.Collection.extend();

	// 컬렉션에 모델 넣기 
	var comments = new Comments({model : Comment});

	comments.url = './api/comments.js'; 











})(jQuery);