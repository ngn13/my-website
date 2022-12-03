<script>
	export let link
</script>

<main>
	<a href={link}><slot></slot></a>
</main>

<style type="text/scss">
	@import '../styles/vars';

	a{
		margin-left: 20px;
		font-weight: 700;
		font-size: 25px;
		text-decoration: none;
		color: white;
		transition: .4s;
	}

	a:hover{
		text-decoration: underline;
		animation-name: underlineAnimation;
		animation-duration: 5s;
		animation-iteration-count: infinite;
	}
</style>