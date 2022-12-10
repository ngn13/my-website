<script>
	export let content
</script>

<main>
	<div>
		<h1><slot></slot></h1>
		<h2>{content}</h2>	
	</div>
</main>

<style type="text/scss">
	@import '../styles/vars.scss';

	div{
		cursor: pointer;
		display: flex;
		flex-direction: column;
		gap: 20px;

		background-color: $dark-two;
		color: white;
		text-align: center;
		width: 80%;
		box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
		border-radius: $border-rad;
		margin: 0;
		width: 100%;
		padding: 50px;

		h1{
			font-size: 50px;
			margin: 0;
		}

		h2{
			margin: 0;
		}
	}

	div:hover{
		animation-name: colorAnimation;
		animation-iteration-count: infinite;
		animation-duration: 10s;
	}
</style>