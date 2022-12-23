<script>
	export let name
	export let desc
	export let github
	export let web
	export let background
</script>

<main>
	<div class="maindiv" style="background: linear-gradient(rgba(3, 3, 3, 0.705), rgba(22, 22, 22, 0.808)), url('{background}');">

		<h2>{name}</h2>
		<p>{desc}</p>

		<div>
			{#if github != null}
			<a href={github}><i class='bx bxl-github'></i></a>
			{/if}

			{#if web != null}
			<a href={web}><i class='bx bx-link'></i></a>
			{/if}
		</div>
	</div>
</main>

<style type="text/scss">
	@import '../styles/vars.scss';

	.maindiv{
		width: 500px;
		height: 30px;
		padding: 100px;		
		text-align: center;
		border-radius: $border-rad;
		color: white;
		box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		h2{
			font-size: 40px;
			font-weight: 900;
			margin: 0;
			padding: 0;
		}

		p{
			font-size: 20px;
			font-weight: 900;
			margin-left: 0;
			margin-right: 0;
			margin-top: 7px;
			margin-bottom: 17px;
		}

		div{
			margin: 0;
			padding: 0;
		}

		a{
			margin: 0;
			padding: 0;
			font-size: 30px;
			color: white;
		}

		a:hover{
			animation-name: colorAnimation;
			animation-iteration-count: infinite;
			animation-duration: 10s;
		}

	}
</style>