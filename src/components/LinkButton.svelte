<script>
	export let link

	function redirectToLink(){
		window.open(link)
	}
</script>

<main>
	<p on:click={redirectToLink}><slot></slot></p>
</main>

<style type="text/scss">
	@import '../styles/vars.scss';

	p{
		margin: 0;
		text-decoration: none;
		font-size: 30px;
		color: $dark-two;
		background: white;
		padding: 10px 17px 5px 17px;
		border-radius: 10px;
		cursor: pointer;
		transition: .4s;
	}

	p:hover{
		background: none;
		color: white;
		text-shadow: 3px 4px 7px rgba(81,67,21,0.8);
	}
</style>