<script>
	import NavbarLink from "./NavbarLink.svelte"
</script>

<main>
	<nav>
		<h3>[ngn]</h3>
		<div>
			<NavbarLink link="/">Home</NavbarLink>
			<NavbarLink link="/#/projects">Projects</NavbarLink>
			<NavbarLink link="/#/donate">Donate</NavbarLink>
		</div>
	</nav>
</main>

<style type="text/scss">
	@import '../styles/vars.scss';

	nav{
		border-radius: $border-rad;
		background: $dark-two;
		padding: 3px 40px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		animation-name: gayShadowAnimation;
		animation-iteration-count: infinite;
		animation-duration: 10s;

		div{
			display: flex;
			overflow: hidden;
		}

		h3{
			font-weight: 900;
			font-size: 30px;
			color: red;
			animation-name: colorAnimation;
			animation-iteration-count: infinite;
			animation-duration: 10s;
		}
	}
</style>