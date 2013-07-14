// ### View 이해 
// [현재 실행](../2.html), [다음 예제 보기](3.html)


(function($){

	// [1.js](../1.html) 참고
	var Comments = Backbone.Collection.extend();
	var comments = new Comments();
	comments.url = './api/comments.js'; 

	

	// `Backbone.view` 상속한 `ListView`
	var ListView = Backbone.View.extend({
		
		// 생성자
		initialize : function(){

			// `sync` 핸들러 등록
			this.listenTo(this.collection, "sync", this.render);
		},

		// `render()`에서 현재 view의 마크업을 만듦  
		render : function(){

			// 현재 view `$el`  (template string + json data)
			this.$el.html( this.template( this.collection.toJSON() ) );

			// 보통 this를 return 한다 
			return this;
		}

	});

	// `ListView` 인스턴스 생성, commnets 컬렉션을 할당 
	var commentListView = new ListView({
		// Backbone.View 클래스에서 정의
		collection : comments  
	});

	// [2.html](../2.html) 에 정의된 template string
	commentListView.template = _.template( $('#CommentListTemplate').html() );


	// `collection.fetch()`
	comments.fetch();


	// view 넣어주기 
	$('#CommentListView').html( commentListView.$el );


})(jQuery);