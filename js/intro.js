// 
// ## model? 
 

// 자주 쓰이는 패턴, 변수가 오염되지 않게 한다
(function($){

	// `Backbone.model` class를 상속 `extend` 받는 Comment class를 정의 
	var Comment = Backbone.model.extend();

	// comment 모델 인스턴스 생성
	var comment = new Comment();

	// `url:` 모델 [url 설정](http://backbonejs.org/#Model-url)
	comment.url = '/api/comments/182305396.js';

	// `fetch():` [데이터 불러오기](http://backbonejs.org/#Model-fetch)
	comment.fetch();



})(jQuery);