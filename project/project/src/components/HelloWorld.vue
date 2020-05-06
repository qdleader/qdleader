/* eslint-disable */
<template>
	<div>
		<!-- 代码部分begin -->
		<!-- 书的主体 -->
		<div class="book preserve-3d">
			<!-- 书的最后一页 -->
			<div class="book-page-box book-page-4 preserve-3d">
				<div class="book-page page-front">
					<p>第三页</p>
				</div>
			</div>
			<!-- 书的第三页 -->
			<div class="book-page-box book-page-3 preserve-3d flip-animation-3">
				<div class="book-page page-front">
					<p>第二页</p>
				</div>
			</div>
			<!-- 书的第二页 -->
			<div class="book-page-box book-page-2 preserve-3d flip-animation-2">
				<div class="book-page page-front">
					<p>第一页</p>
				</div>
			</div>
			<!-- 书的封面 -->
			<div class="book-page-box book-page-1 preserve-3d flip-animation-1">
				<div class="book-page page-front">
					<p>
						翻页特效
						<br>
						flip-book
					</p>
				</div>
			</div>
		</div>
		<!-- 代码部分end -->

	</div>
</template>

<script>
	export default {
		name: 'HelloWorld',
		data() {
			return {

			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
	/*
	flip-book样式
 */
	* {
		padding: 0;
		margin: 0;
	}

	body,
	html {
		height: 100%;
	}

	body {

		/*perspective 属性指定了观察者与z=0平面的距离，使具有三维位置变换的元素产生透视效果。z>0的三维元素比正常大，而z<0时则比正常小，大小程度由该属性的值决定。默认情况下，消失点位于元素的中心，但是可以通过设置perspective-origin属性来改变其位置。*/
		-webkit-perspective: 1000px;
		-moz-perspective: 1000px;
		-ms-perspective: 1000px;
		perspective: 1000px;
		background-color: #212121;
		font-family: '微软雅黑';
	}

	.book {
		position: absolute;
		top: 50%;
		left: 50%;
		margin-top: -150px;
		width: 300px;
		height: 300px;
		background-color: #fff;
		-webkit-transform: rotateX(30deg);
		-ms-transform: rotateX(30deg);
		-o-transform: rotateX(30deg);
		transform: rotateX(30deg);
	}

	.preserve-3d {

		/*transform-style属性指定了，该元素的子元素是（看起来）位于三维空间内，还是在该元素所在的平面内被扁平化。*/
		-webkit-transform-style: preserve-3d;
		-moz-transform-style: preserve-3d;
		-ms-transform-style: preserve-3d;
		transform-style: preserve-3d;
	}

	.book-page {
		position: absolute;
		top: 0;
		left: 0;
		width: 300px;
		height: 300px;
		border: 1px solid #1976D2;
		text-align: center;
	}

	.book-page-box {
		-webkit-transform-origin: 0 50%;
		-moz-transform-origin: 0 50%;
		-ms-transform-origin: 0 50%;
		-o-transform-origin: 0 50%;
		transform-origin: 0 50%;
		-webkit-transform: rotateY(0deg);
		-ms-transform: rotateY(0deg);
		-o-transform: rotateY(0deg);
		transform: rotateY(0deg);
	}

	@keyframes flipBook1 {
		0% {
			-webkit-transform: rotateY(0deg);
			-ms-transform: rotateY(0deg);
			-o-transform: rotateY(0deg);
			transform: rotateY(0deg);
		}

		50% {
			-webkit-transform: rotateY(-160deg);
			-ms-transform: rotateY(-160deg);
			-o-transform: rotateY(-160deg);
			transform: rotateY(-160deg);
		}

		100% {
			-webkit-transform: rotateY(0deg);
			-ms-transform: rotateY(0deg);
			-o-transform: rotateY(0deg);
			transform: rotateY(0deg);
		}
	}

	/* Firefox */
	@-moz-keyframes flipBook1 {
		0% {
			-webkit-transform: rotateY(0deg);
			-ms-transform: rotateY(0deg);
			-o-transform: rotateY(0deg);
			transform: rotateY(0deg);
		}

		50% {
			-webkit-transform: rotateY(-160deg);
			-ms-transform: rotateY(-160deg);
			-o-transform: rotateY(-160deg);
			transform: rotateY(-160deg);
		}

		100% {
			-webkit-transform: rotateY(0deg);
			-ms-transform: rotateY(0deg);
			-o-transform: rotateY(0deg);
			transform: rotateY(0deg);
		}
	}

	/* Safari and Chrome */
	@-webkit-keyframes flipBook1 {
		0% {
			-webkit-transform: rotateY(0deg);
			-ms-transform: rotateY(0deg);
			-o-transform: rotateY(0deg);
			transform: rotateY(0deg);
		}

		50% {
			-webkit-transform: rotateY(-160deg);
			-ms-transform: rotateY(-160deg);
			-o-transform: rotateY(-160deg);
			transform: rotateY(-160deg);
		}

		100% {
			-webkit-transform: rotateY(0deg);
			-ms-transform: rotateY(0deg);
			-o-transform: rotateY(0deg);
			transform: rotateY(0deg);
		}
	}

	/* Opera */
	@-o-keyframes flipBook1 {
		0% {
			-webkit-transform: rotateY(0deg);
			-ms-transform: rotateY(0deg);
			-o-transform: rotateY(0deg);
			transform: rotateY(0deg);
		}

		50% {
			-webkit-transform: rotateY(-160deg);
			-ms-transform: rotateY(-160deg);
			-o-transform: rotateY(-160deg);
			transform: rotateY(-160deg);
		}

		100% {
			-webkit-transform: rotateY(0deg);
			-ms-transform: rotateY(0deg);
			-o-transform: rotateY(0deg);
			transform: rotateY(0deg);
		}
	}

	@keyframes flipBook2 {
		0% {
			-webkit-transform: rotateY(0deg);
			-ms-transform: rotateY(0deg);
			-o-transform: rotateY(0deg);
			transform: rotateY(0deg);
		}

		50% {
			-webkit-transform: rotateY(-150deg);
			-ms-transform: rotateY(-150deg);
			-o-transform: rotateY(-150deg);
			transform: rotateY(-150deg);
		}

		100% {
			-webkit-transform: rotateY(0deg);
			-ms-transform: rotateY(0deg);
			-o-transform: rotateY(0deg);
			transform: rotateY(0deg);
		}
	}

	/* Firefox */
	@-moz-keyframes flipBook2 {
		0% {
			-webkit-transform: rotateY(0deg);
			-ms-transform: rotateY(0deg);
			-o-transform: rotateY(0deg);
			transform: rotateY(0deg);
		}

		50% {
			-webkit-transform: rotateY(-150deg);
			-ms-transform: rotateY(-150deg);
			-o-transform: rotateY(-150deg);
			transform: rotateY(-150deg);
		}

		100% {
			-webkit-transform: rotateY(0deg);
			-ms-transform: rotateY(0deg);
			-o-transform: rotateY(0deg);
			transform: rotateY(0deg);
		}
	}

	/* Safari and Chrome */
	@-webkit-keyframes flipBook2 {
		0% {
			-webkit-transform: rotateY(0deg);
			-ms-transform: rotateY(0deg);
			-o-transform: rotateY(0deg);
			transform: rotateY(0deg);
		}

		50% {
			-webkit-transform: rotateY(-150deg);
			-ms-transform: rotateY(-150deg);
			-o-transform: rotateY(-150deg);
			transform: rotateY(-150deg);
		}

		100% {
			-webkit-transform: rotateY(0deg);
			-ms-transform: rotateY(0deg);
			-o-transform: rotateY(0deg);
			transform: rotateY(0deg);
		}
	}

	/* Opera */
	@-o-keyframes flipBook2 {
		0% {
			-webkit-transform: rotateY(0deg);
			-ms-transform: rotateY(0deg);
			-o-transform: rotateY(0deg);
			transform: rotateY(0deg);
		}

		50% {
			-webkit-transform: rotateY(-150deg);
			-ms-transform: rotateY(-150deg);
			-o-transform: rotateY(-150deg);
			transform: rotateY(-150deg);
		}

		100% {
			-webkit-transform: rotateY(0deg);
			-ms-transform: rotateY(0deg);
			-o-transform: rotateY(0deg);
			transform: rotateY(0deg);
		}
	}

	@keyframes flipBook3 {
		0% {
			-webkit-transform: rotateY(0deg);
			-ms-transform: rotateY(0deg);
			-o-transform: rotateY(0deg);
			transform: rotateY(0deg);
		}

		50% {
			-webkit-transform: rotateY(-140deg);
			-ms-transform: rotateY(-140deg);
			-o-transform: rotateY(-140deg);
			transform: rotateY(-140deg);
		}

		100% {
			-webkit-transform: rotateY(0deg);
			-ms-transform: rotateY(0deg);
			-o-transform: rotateY(0deg);
			transform: rotateY(0deg);
		}
	}

	/* Firefox */
	@-moz-keyframes flipBook3 {
		0% {
			-webkit-transform: rotateY(0deg);
			-ms-transform: rotateY(0deg);
			-o-transform: rotateY(0deg);
			transform: rotateY(0deg);
		}

		50% {
			-webkit-transform: rotateY(-140deg);
			-ms-transform: rotateY(-140deg);
			-o-transform: rotateY(-140deg);
			transform: rotateY(-140deg);
		}

		100% {
			-webkit-transform: rotateY(0deg);
			-ms-transform: rotateY(0deg);
			-o-transform: rotateY(0deg);
			transform: rotateY(0deg);
		}
	}

	/* Safari and Chrome */
	@-webkit-keyframes flipBook3 {
		0% {
			-webkit-transform: rotateY(0deg);
			-ms-transform: rotateY(0deg);
			-o-transform: rotateY(0deg);
			transform: rotateY(0deg);
		}

		50% {
			-webkit-transform: rotateY(-140deg);
			-ms-transform: rotateY(-140deg);
			-o-transform: rotateY(-140deg);
			transform: rotateY(-140deg);
		}

		100% {
			-webkit-transform: rotateY(0deg);
			-ms-transform: rotateY(0deg);
			-o-transform: rotateY(0deg);
			transform: rotateY(0deg);
		}
	}

	/* Opera */
	@-o-keyframes flipBook3 {
		0% {
			-webkit-transform: rotateY(0deg);
			-ms-transform: rotateY(0deg);
			-o-transform: rotateY(0deg);
			transform: rotateY(0deg);
		}

		50% {
			-webkit-transform: rotateY(-140deg);
			-ms-transform: rotateY(-140deg);
			-o-transform: rotateY(-140deg);
			transform: rotateY(-140deg);
		}

		100% {
			-webkit-transform: rotateY(0deg);
			-ms-transform: rotateY(0deg);
			-o-transform: rotateY(0deg);
			transform: rotateY(0deg);
		}
	}

	/*书的封面*/
	.book-page-1 .page-front {
		background-color: #1976D2;
	}

	.book-page-1 .page-back {
		background-color: #fff;
	}

	.book-page-1 .page-front p {
		font-size: 30px;
		color: #fff;
		margin-top: 100px;
	}

	.flip-animation-1 {
		animation: flipBook1 17s;
		-moz-animation: flipBook1 17s;
		/* Firefox */
		-webkit-animation: flipBook1 17s;
		/* Safari and Chrome */
		-o-animation: flipBook1 17s;
		/* Opera */
	}

	/*书的第二页*/
	.book-page-2 .page-back,
	.book-page-2 .page-front {
		background-color: #fff;
	}

	.book-page-2 .page-front p {
		font-size: 30px;
		color: #1976D2;
		margin-top: 100px;
	}

	.flip-animation-2 {
		animation: flipBook2 13s 2s;
		-moz-animation: flipBook2 13s 2s;
		/* Firefox */
		-webkit-animation: flipBook2 13s 2s;
		/* Safari and Chrome */
		-o-animation: flipBook2 13s 2s;
		/* Opera */
	}

	/*书的第三页*/
	.book-page-3 .page-back,
	.book-page-3 .page-front {
		background-color: #fff;
	}

	.book-page-3 .page-front p {
		font-size: 30px;
		color: #1976D2;
		margin-top: 100px;
	}

	.flip-animation-3 {
		animation: flipBook3 10s 3s;
		-moz-animation: flipBook3 10s 3s;
		/* Firefox */
		-webkit-animation: flipBook3 10s 3s;
		/* Safari and Chrome */
		-o-animation: flipBook3 10s 3s;
		/* Opera */
	}

	/*书的第四页*/
	.book-page-4 .page-front p {
		font-size: 30px;
		color: #1976D2;
		margin-top: 100px;
	}
</style>
