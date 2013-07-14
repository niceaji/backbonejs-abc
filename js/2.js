// ### View 이해 
// [현재 실행](../2.html), [다음 예제 보기](3.html)


(function($){

	// [1.js](../1.html) 에서 만든 collection  
	var Comments = Backbone.Collection.extend();
	var comments = new Comments();
	comments.url = './api/comments.js'; 
	

	// `Backbone.view` 상속한 `ListView`
	var ListView = Backbone.View.extend({
		
		// 생성자, this.collection `sync` 핸들러 등록
		initialize : function(){
			this.listenTo(this.collection, "sync", this.render);
		},

		// `render()`에서 현재 view의 마크업을 만듦  
		// 현재 view `$el`  (template + toJSON) 
		// 보통 this를 return 한다 
		render : function(){

			this.$el.html( this.template( this.collection.toJSON() ) );
			return this;
		}

	});

	// `ListView` 인스턴스 생성  
	// commnets 컬렉션을 할당, Backbone.View에서 정의
	var commentListView = new ListView({
		collection : comments 
	});

	// [2.html](../2.html) 에 정의된 template 문자열 
	commentListView.template = _.template( $('#CommentListTemplate').html() );

	// `collection.fetch()` 댓글 데이터 불러오기 
	comments.fetch();

	// view 넣어주기 
	$('#CommentListView').append( commentListView.$el );


})(jQuery);